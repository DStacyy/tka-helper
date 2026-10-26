/* ==========================================================
   MESIN TKA HELPER
   Menu: Latihan Soal dan Rekap Materi.
   Riwayat latihan dan skor rekap disimpan di localStorage, terpisah.
   ========================================================== */
const L = "ABCDEFGHIJ";
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const MAPEL = window.MAPEL || [];
const REKAP = window.REKAP || [];

const KUNCI_RIWAYAT = "tka-helper-riwayat";
const KUNCI_REKAP = "tka-helper-rekap";
const MAKS_RIWAYAT = 30;

let M = null;       // data yang sedang tampil: mapel, atau sesi rekap
let SESI = null;    // null untuk latihan biasa; { rekap:true, ... } untuk latihan rekap
let soal = [], state = [], cur = 0;

function audio(mode){ if (window.TKA_AUDIO) TKA_AUDIO.suasana(mode); }

/* ---------- normalisasi: semua tipe diubah ke bentuk seragam ---------- */
function normalisasi(m){
  m.soal.forEach(s => {
    if (s.bs){
      s.tipe = "kat";
      s.labelKat = ["Benar", "Salah"];
      s.baris = s.bs.map(b => ({ t: b.t, k: b.k ? 0 : 1 }));
    } else if (s.baris) s.tipe = "kat";
    else if (Array.isArray(s.kunci)) s.tipe = "multi";
    else s.tipe = "single";
  });
}

function initState(){ state = soal.map(s => resetState(s)); }

function resetState(s){
  if (s.tipe === "kat")   return { jawab: s.baris.map(() => null), dicek: false };
  if (s.tipe === "multi") return { pilih: [], dicek: false };
  return { pilih: null, dicek: false };
}

function sudahJawab(i){
  const s = soal[i], st = state[i];
  if (s.tipe === "kat")   return st.jawab.every(j => j !== null);
  if (s.tipe === "multi") return st.pilih.length > 0;
  return st.pilih !== null;
}

function benar(i){
  const s = soal[i], st = state[i];
  if (s.tipe === "kat")   return st.jawab.every((j, r) => j === s.baris[r].k);
  if (s.tipe === "multi") return [...st.pilih].sort().join() === [...s.kunci].sort().join();
  return st.pilih === s.kunci;
}

function resetSemua(){
  soal.forEach((s, i) => state[i] = resetState(s));
  cur = 0;
  renderQ();
}

/* ---------- penyimpanan: riwayat latihan ---------- */
function bacaRiwayat(){
  try{
    const d = JSON.parse(localStorage.getItem(KUNCI_RIWAYAT));
    return Array.isArray(d) ? d : [];
  } catch (e){ return []; }
}

function tulisRiwayat(list){
  try{
    localStorage.setItem(KUNCI_RIWAYAT, JSON.stringify(list.slice(0, MAKS_RIWAYAT)));
    return true;
  } catch (e){
    alert("Riwayat tidak dapat disimpan di browser ini.");
    return false;
  }
}

function hapusRiwayat(){
  if (confirm("Hapus semua riwayat latihan di browser ini?")){
    localStorage.removeItem(KUNCI_RIWAYAT);
    segarkanRiwayat();
  }
}

function htmlRiwayat(filterId, batas = 5){
  const semua = bacaRiwayat().filter(r => !filterId || r.mapel === filterId);
  if (!semua.length) return "";   // kosong: tidak menampilkan apa-apa

  const items = semua.slice(0, batas).map(r => {
    const tgl = new Date(r.waktu).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" });
    const pola = r.detail.map(d => `<span class="${d.benar ? "ok" : "bad"}">${esc(d.no)}</span>`).join(" ");
    return `
      <li class="rw-item">
        <div class="rw-head"><b>${esc(r.nama)}</b> <span>${esc(tgl)}</span></div>
        <div class="rw-skor">${r.benar} benar dari ${r.dijawab} dijawab (total ${r.total} soal)</div>
        <div class="rw-pola">${pola}</div>
      </li>`;
  }).join("");

  return `
    <h3 class="rw-judul">Riwayat terakhir</h3>
    <ul class="rw-list">${items}</ul>
    <button id="hapusRiwayat" class="ghost">Hapus riwayat</button>`;
}

function segarkanRiwayat(){
  const el = $("riwayat");
  if (!el) return;
  const html = htmlRiwayat(M && !SESI ? M.id : null);
  el.innerHTML = html;
  el.style.display = html ? "" : "none";   // sembunyikan seluruh kotak bila kosong
}

/* ---------- penyimpanan: skor rekap (terpisah dari riwayat) ---------- */
function bacaRekap(){
  try{
    const d = JSON.parse(localStorage.getItem(KUNCI_REKAP));
    return d && typeof d === "object" ? d : {};
  } catch (e){ return {}; }
}

function tulisRekap(obj){
  try{
    localStorage.setItem(KUNCI_REKAP, JSON.stringify(obj));
    return true;
  } catch (e){
    alert("Skor tidak dapat disimpan di browser ini.");
    return false;
  }
}

const rekapKey = (r, t) => `${r.mapel}/${t.id}`;

function skorLabel(r, t){
  const d = bacaRekap()[rekapKey(r, t)];
  return d ? `Skor terakhir: ${d.benar}/${d.total} benar` : "Belum dikerjakan";
}

/* ---------- simpan hasil (latihan biasa atau rekap) ---------- */
function simpanSesi(){
  const dicek = soal
    .map((s, i) => state[i].dicek ? { no: s.no, benar: benar(i) } : null)
    .filter(Boolean);
  if (!dicek.length) return;
  const jmlBenar = dicek.filter(x => x.benar).length;

  if (SESI && SESI.rekap){
    const data = bacaRekap();
    data[SESI.key] = {
      waktu: new Date().toISOString(),
      benar: jmlBenar,
      dijawab: dicek.length,
      total: soal.length
    };
    if (tulisRekap(data)){
      resetSemua();
      alert(`Skor disimpan: ${jmlBenar} benar dari ${dicek.length} dijawab.`);
    }
    return;
  }

  const entri = {
    waktu: new Date().toISOString(),
    mapel: M.id,
    nama: M.nama,
    total: soal.length,
    dijawab: dicek.length,
    benar: jmlBenar,
    detail: dicek
  };
  if (tulisRiwayat([entri, ...bacaRiwayat()])){
    resetSemua();
    segarkanRiwayat();
  }
}

/* ---------- halaman menu utama: Latihan Soal dan Rekap Materi ---------- */
function renderMenu(){
  M = null; SESI = null;
  $("app").classList.add("menu-mode");
  document.title = "TKA Helper";
  $("app").innerHTML = `
    <main class="menu">
      
      <section class="panel-menu">
        <h1>Latihan Soal</h1>
        <p class="sub">Pilih mata pelajaran untuk mulai latihan.</p>
        <div class="cards">
          ${MAPEL.map(m => `
            <a class="card" href="#${esc(m.id)}">
              <h2>${esc(m.nama)}</h2>
              <p>${esc(m.deskripsi || "")}</p>
              <span>${m.soal.length} soal · TKA ${m.tahun}</span>
            </a>`).join("")}
        </div>
      </section>

      <section class="panel-menu">
        <h1>Rekap Materi</h1>
        <p class="sub">Ringkasan materi, contoh soal, dan latihan untuk memperdalam pemahaman.</p>
        <div class="cards">
          ${MAPEL.map(m => {
            const r = REKAP.find(x => x.mapel === m.id);
            return r
              ? `<a class="card" href="#rekap/${esc(m.id)}">
                   <h2>${esc(m.nama)}</h2>
                   <p>${r.topik.length} topik · ${esc(r.deskripsi || "")}</p>
                   <span>Buka rekap →</span>
                 </a>`
              : `<div class="card card-soon">
                   <h2>${esc(m.nama)}</h2>
                   <p>Rekap sedang disiapkan.</p>
                   <span>Segera hadir</span>
                 </div>`;
          }).join("")}
        </div>
      </section>

      
    </main>`;
  segarkanRiwayat();
}

/* ---------- halaman rekap: daftar topik per mapel ---------- */
function renderRekapMapel(mapelId){
  M = null; SESI = null;
  $("app").classList.add("menu-mode");
  const r = REKAP.find(x => x.mapel === mapelId);
  if (!r){
    document.title = "Rekap Materi · TKA Helper";
    $("app").innerHTML = `<main class="menu"><a class="back" href="#">← Semua mapel</a><p>Rekap untuk mapel ini belum tersedia.</p></main>`;
    return;
  }
  audio("menu");
  document.title = `Rekap ${r.nama} · TKA Helper`;
  $("app").innerHTML = `
    <main class="menu">
      <a class="back" href="#">← Semua mapel</a>
      <h1>Rekap ${esc(r.nama)}</h1>
      <p class="sub">${esc(r.deskripsi || "")}</p>
      <div class="cards">
        ${r.topik.map(t => `
          <a class="card" href="#rekap/${esc(r.mapel)}/${esc(t.id)}">
            <h2>${esc(t.judul)}</h2>
            <p>${esc(t.ringkasSingkat || "")}</p>
            <span>${esc(skorLabel(r, t))}</span>
          </a>`).join("")}
      </div>
    </main>`;
}

/* ---------- halaman rekap: ringkasan satu topik ---------- */
function renderRekapTopik(mapelId, topikId){
  const r = REKAP.find(x => x.mapel === mapelId);
  const t = r && r.topik.find(x => x.id === topikId);
  if (!t) return renderRekapMapel(mapelId);

  M = null; SESI = null;
  audio("menu");
  $("app").classList.add("menu-mode");
  document.title = `${t.judul} · Rekap Materi`;
  $("app").innerHTML = `
    <main class="menu rekap-page">
      <a class="back" href="#rekap/${esc(r.mapel)}">← Rekap ${esc(r.nama)}</a>
      <h1>${esc(t.judul)}</h1>
      <p class="sub">${esc(r.nama)} · Ringkasan, contoh, dan latihan</p>

      <section class="blok">
        <h2 class="sub-judul">Ringkasan materi</h2>
        ${t.ringkasan.map(x => typeof x === "string"
            ? `<p>${esc(x)}</p>`
            : `<h3 class="sub-judul-kecil">${esc(x.h)}</h3>`).join("")}
      </section>

      <aside class="refleksi"><b>INGAT:</b> ${esc(t.refleksi)}</aside>

      <section class="blok">
        <h2 class="sub-judul">Contoh soal</h2>
        ${t.contoh.map((c, i) => `
          <div class="contoh">
            <p class="contoh-no">Contoh ${i + 1}</p>
            <pre class="kode"><code>${esc(c.soal)}</code></pre>
            <details>
              <summary>Lihat penyelesaian</summary>
              <div class="expl">${esc(c.penyelesaian)}</div>
            </details>
          </div>`).join("")}
      </section>

      <div class="aksi-rekap">
        <a class="btn-link" href="#rekap/${esc(r.mapel)}/${esc(t.id)}/latihan">Mulai latihan (${t.latihan.length} soal)</a>
        <span class="skor-terakhir">${esc(skorLabel(r, t))}</span>
      </div>
    </main>`;
}

/* ---------- sesi rekap: menggabungkan soal lama dan baru jadi satu sesi ---------- */
function buildSesi(r, t){
  const teks = [], peta = {};
  const ambilTeks = (kunci, isi) => {
    if (peta[kunci] === undefined){ peta[kunci] = teks.length; teks.push(isi); }
    return peta[kunci];
  };

  const soalSesi = t.latihan.map((it, n) => {
    let s;
    if (it.ref){
      const src = MAPEL.find(m => m.id === it.ref);
      normalisasi(src);
      const asli = src.soal[it.i];
      s = { ...asli, no: String(n + 1), grup: asli.grup ?? (asli.p == null ? "Latihan" : undefined) };
      if (asli.p != null) s.p = ambilTeks(`${src.id}:${asli.p}`, src.teks[asli.p]);
    } else {
      s = { ...it, no: String(n + 1), grup: it.grup ?? "Latihan" };
      if (it.p != null) s.p = ambilTeks(`topik:${it.p}`, t.teks[it.p]);
    }
    return s;
  });

  return { id: `rekap:${rekapKey(r, t)}`, nama: t.judul, tahun: r.tahun ?? 2025, teks, soal: soalSesi };
}

function mulaiRekap(mapelId, topikId){
  const r = REKAP.find(x => x.mapel === mapelId);
  const t = r && r.topik.find(x => x.id === topikId);
  if (!t) return renderMenu();

  audio("latihan");     // latihan rekap senyap, seperti latihan biasa
  SESI = { rekap: true, mapel: r.mapel, topik: t, key: rekapKey(r, t) };
  M = buildSesi(r, t);
  normalisasi(M);
  soal = M.soal;
  initState();
  cur = 0;
  renderShell();
  renderQ();
}

/* ---------- kerangka halaman latihan ---------- */
function renderShell(){
  $("app").classList.remove("menu-mode");
  document.title = `${M.nama} · TKA Helper`;
  const rekap = !!(SESI && SESI.rekap);
  $("app").innerHTML = `
    <aside>
      <a class="back" href="${rekap ? `#rekap/${esc(SESI.mapel)}/${esc(SESI.topik.id)}` : "#"}">
        ${rekap ? "← Ringkasan" : "← Semua mapel"}
      </a>
      <h1>${esc(M.nama)}</h1>
      <p class="sub">${rekap ? "Latihan rekap materi" : `TKA ${M.tahun} (Wajib)`}</p>
      <div id="grid"></div>
      <div class="score" id="score"></div>
      <div class="aksi-sidebar">
        <button id="simpan" class="primary">${rekap ? "Simpan skor" : "Simpan hasil"}</button>
        <button id="resetAll">Ulangi semua</button>
      </div>
      ${rekap ? "" : `<div id="riwayat"></div>`}
      <p class="note">Kunci dan pembahasan disusun dari analisis, bukan dari dokumen resmi. Mohon dicek ulang sebelum dibagikan.</p>
    </aside>
    <main id="main"></main>`;
  if (!rekap) segarkanRiwayat();
}

/* ---------- daftar soal di sidebar ---------- */
function renderGrid(){
  let html = "", lastKey = undefined, open = false;
  soal.forEach((s, i) => {
    const key = s.grup ?? (s.p ?? -1);
    if (key !== lastKey){
      if (open) html += `</div>`;
      const judul = s.grup ?? (s.p >= 0 ? M.teks[s.p].judul : "Lainnya");
      html += `<div class="grp">${esc(judul)}</div><div class="grid">`;
      open = true; lastKey = key;
    }
    const st = state[i];
    let cls = (i === cur ? "cur " : "");
    if (st.dicek) cls += benar(i) ? "ok" : "bad";
    html += `<button class="${cls}" data-i="${i}" aria-label="Soal ${esc(s.no)}">${esc(s.no)}</button>`;
  });
  if (open) html += `</div>`;
  $("grid").innerHTML = html;

  const dicek = state.filter(s => s.dicek).length;
  const bn = soal.filter((_, i) => state[i].dicek && benar(i)).length;
  $("score").textContent = `Dijawab ${dicek}/${soal.length} · Benar ${bn}`;
  $("simpan").disabled = dicek === 0;
}

/* ---------- teks bacaan ---------- */
function renderPasase(s, i){
  if (s.p == null) return "";
  const pertama = i === 0 || soal[i - 1].p !== s.p;
  const t = M.teks[s.p];
  const tabel = t.tabel ? `
    <p><b>${esc(t.tabel.judul)}</b></p>
    <table>
      <thead><tr>${t.tabel.kepala.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
      <tbody>${t.tabel.baris.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>` : "";
  const isi = `
    <h2>${esc(t.judul)}</h2>
    ${t.paras.map(x => `<p>${esc(x)}</p>`).join("")}
    ${tabel}
    ${t.src ? `<p class="src">Sumber: ${esc(t.src)}</p>` : ""}
    ${t.catatan ? `<details class="catatan"><summary>Kosakata &amp; struktur (penjelasan Indonesia)</summary>${t.catatan.map(x => `<p>${esc(x)}</p>`).join("")}</details>` : ""}`;
  return pertama
    ? `<div class="pas">${isi}</div>`
    : `<details class="pas-lipat"><summary>Tampilkan teks bacaan: ${esc(t.judul)}</summary><div class="pas">${isi}</div></details>`;
}

/* ---------- soal ---------- */
function renderQ(){
  const s = soal[cur], st = state[cur];
  let body = "";
  if (s.tipe === "kat"){
    const hdr = s.labelKat.map(l => `<th class="c">${esc(l)}</th>`).join("");
    const rows = s.baris.map((r, k) => {
      const rc = st.dicek ? (st.jawab[k] === r.k ? "right" : "wrong") : "";
      const cells = s.labelKat.map((l, j) => `
        <td class="c"><input type="radio" name="r${cur}_${k}" data-r="${k}" data-j="${j}"
          ${st.jawab[k] === j ? "checked" : ""} ${st.dicek ? "disabled" : ""} aria-label="${esc(l)}"></td>`).join("");
      return `<tr class="${rc}"><td>${esc(r.t)}</td>${cells}</tr>`;
    }).join("");
    body = `<table class="bs"><thead><tr><th>Pernyataan</th>${hdr}</tr></thead><tbody>${rows}</tbody></table>`;
  } else {
    const opts = s.opsi.map((o, i) => {
      let c = "opt";
      if (s.tipe === "multi"){
        const dipilih = st.pilih.includes(i), kunci = s.kunci.includes(i);
        if (st.dicek){
          if (kunci && dipilih) c += " right";
          else if (!kunci && dipilih) c += " wrong";
          else if (kunci) c += " missed";
        } else if (dipilih) c += " sel";
      } else {
        if (st.dicek){
          if (i === s.kunci) c += " right";
          else if (i === st.pilih) c += " wrong";
        } else if (i === st.pilih) c += " sel";
      }
      return `<button class="${c}" data-o="${i}" ${st.dicek ? "disabled" : ""}><b>${L[i]}.</b><span>${esc(o)}</span></button>`;
    }).join("");
    body = `<div class="opts">${opts}</div>`;
  }

  let hasil = "";
  if (st.dicek){
    const ok = benar(cur);
    let kunciTxt = "";
    if (s.tipe === "single") kunciTxt = ` Jawaban yang tepat: ${L[s.kunci]}.`;
    if (s.tipe === "multi")  kunciTxt = ` Jawaban yang tepat: ${s.kunci.map(k => L[k]).join(", ")}.`;
    hasil = `<p class="verdict ${ok ? "ok" : "bad"}">${ok ? "Benar." : "Belum tepat."}${kunciTxt}</p>` +
            (s.bahas ? `<div class="expl">${esc(s.bahas)}</div>` : "");
  }

  const petunjuk = s.tipe === "multi" ? "Klik semua jawaban yang benar, lalu tekan Periksa." : "";

  $("main").innerHTML = `
    <div class="meta">Soal ${esc(s.no)} dari ${soal.length} · ${esc(M.nama)}${SESI?.rekap ? "" : ` TKA ${M.tahun}`}</div>
    ${renderPasase(s, cur)}
    <p class="q">${s.q}</p>
    ${s.kode ? `<pre class="kode"><code>${esc(s.kode)}</code></pre>` : ""}
    ${petunjuk ? `<p class="hint-soal">${petunjuk}</p>` : ""}
    ${body}
    ${hasil}
    <div class="actions">
      <button id="prev" ${cur === 0 ? "disabled" : ""}>Sebelumnya</button>
      <button id="submit" class="primary" ${st.dicek || !sudahJawab(cur) ? "disabled" : ""}>Periksa jawaban</button>
      <button id="retry" ${st.dicek ? "" : "hidden"}>Coba lagi soal ini</button>
      <button id="next" ${cur === soal.length - 1 ? "disabled" : ""}>Berikutnya</button>
    </div>
    <p class="hint">Pintasan: huruf A–E memilih jawaban, Enter memeriksa, panah kiri/kanan pindah soal.</p>`;
  renderGrid();
}

/* ---------- aksi ---------- */
function go(i){ cur = Math.max(0, Math.min(soal.length - 1, i)); renderQ(); }

function pilihOpsi(i){
  const s = soal[cur], st = state[cur];
  if (st.dicek || s.tipe === "kat" || i >= s.opsi.length) return;
  if (s.tipe === "multi"){
    const idx = st.pilih.indexOf(i);
    if (idx >= 0) st.pilih.splice(idx, 1); else st.pilih.push(i);
  } else st.pilih = i;
  renderQ();
}

function periksa(){
  if (!state[cur].dicek && sudahJawab(cur)){ state[cur].dicek = true; renderQ(); }
}

/* ---------- routing ---------- */
function route(){
  document.body.classList.add("is-menu");
  const bagian = decodeURIComponent(location.hash.slice(1)).split("/").filter(Boolean);

  if (bagian[0] === "rekap"){
    const p = bagian.slice(1);
    if (p.length === 0) return renderMenu();
    if (p.length === 1) return renderRekapMapel(p[0]);
    if (p.length === 2) return renderRekapTopik(p[0], p[1]);
    if (p[2] === "latihan") return mulaiRekap(p[0], p[1]);
    return renderMenu();
  }

  const mp = MAPEL.find(m => m.id === bagian[0]);
  if (!mp) return renderMenu();
  document.body.classList.remove("is-menu");
  audio("latihan");
  SESI = null;
  M = mp;
  normalisasi(mp);
  soal = mp.soal;
  initState();
  cur = 0;
  renderShell();
  renderQ();
}

/* ---------- event ---------- */
document.addEventListener("click", e => {
  const t = e.target.closest("button"); if (!t) return;
  if (t.id === "hapusRiwayat"){ hapusRiwayat(); return; }
  if (!M) return;
  if (t.dataset.o !== undefined) pilihOpsi(+t.dataset.o);
  else if (t.dataset.i !== undefined) go(+t.dataset.i);
  else if (t.id === "submit") periksa();
  else if (t.id === "prev") go(cur - 1);
  else if (t.id === "next") go(cur + 1);
  else if (t.id === "retry"){ state[cur] = resetState(soal[cur]); renderQ(); }
  else if (t.id === "simpan") simpanSesi();
  else if (t.id === "resetAll" && confirm("Ulangi semua soal dari awal? Jawaban yang belum disimpan akan hilang.")){
    resetSemua();
  }
});

document.addEventListener("change", e => {
  const t = e.target;
  if (t.type === "radio" && t.dataset.r !== undefined && M){
    state[cur].jawab[+t.dataset.r] = +t.dataset.j;
    renderQ();
  }
});

document.addEventListener("keydown", e => {
  if (!M || e.target.tagName === "INPUT") return;
  const k = e.key.toUpperCase(), idx = L.indexOf(k);
  if (k.length === 1 && idx > -1 && soal[cur].tipe !== "kat") pilihOpsi(idx);
  else if (e.key === "Enter" && e.target.tagName !== "BUTTON") periksa();
  else if (e.key === "ArrowRight") go(cur + 1);
  else if (e.key === "ArrowLeft") go(cur - 1);
});

window.addEventListener("hashchange", route);
route();