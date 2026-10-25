/* ==========================================================
   MESIN TKA HELPER
   Tidak perlu diubah saat menambah mapel. Cukup tambahkan file
   di folder data/ lalu daftarkan di index.html.
   ========================================================== */
const L = "ABCDEFGHIJ";
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const MAPEL = window.MAPEL || [];

let M = null, soal = [], state = [], cur = 0;

/* ---------- normalisasi: semua tipe diubah ke bentuk seragam ---------- */
function normalisasi(m){
  m.soal.forEach(s => {
    if (s.bs){                       // format lama: benar/salah per baris (boolean)
      s.tipe = "kat";
      s.labelKat = ["Benar", "Salah"];
      s.baris = s.bs.map(b => ({ t: b.t, k: b.k ? 0 : 1 }));
    } else if (s.baris) s.tipe = "kat";
    else if (Array.isArray(s.kunci)) s.tipe = "multi";
    else s.tipe = "single";
  });
}

function initState(){
  state = soal.map(s => resetState(s));
}
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

/* ---------- menu mapel ---------- */
function renderMenu(){
  $("app").classList.add("menu-mode");
  document.title = "TKA Helper";
  $("app").innerHTML = `
    <main class="menu">
      <h1>TKA Helper</h1>
      <p class="sub">Pilih mata pelajaran untuk mulai latihan.</p>
      <div class="cards">
        ${MAPEL.map(m => `
          <a class="card" href="#${esc(m.id)}">
            <h2>${esc(m.nama)}</h2>
            <p>${esc(m.deskripsi || "")}</p>
            <span>${m.soal.length} soal · TKA ${m.tahun}</span>
          </a>`).join("")}
      </div>
      ${MAPEL.length === 0 ? "<p>Belum ada mata pelajaran.</p>" : ""}
    </main>`;
}

/* ---------- kerangka halaman latihan ---------- */
function renderShell(){
  $("app").classList.remove("menu-mode");
  document.title = `${M.nama} · TKA Helper`;
  $("app").innerHTML = `
    <aside>
      <a class="back" href="#">← Semua mapel</a>
      <h1>${esc(M.nama)}</h1>
      <p class="sub">TKA ${M.tahun} (Wajib)</p>
      <div class="absen">
        <label for="absen">Nomor absen murid</label>
        <div><input id="absen" type="number" min="1" placeholder="1"><button id="goAbsen">Buka soal</button></div>
      </div>
      <div id="grid"></div>
      <div class="score" id="score"></div>
      <p style="margin:12px 0 0"><button id="resetAll">Ulangi semua</button></p>
      <p class="note">Kunci dan pembahasan disusun dari analisis, bukan dari dokumen resmi. Mohon dicek ulang sebelum dibagikan.</p>
    </aside>
    <main id="main"></main>`;
}

/* ---------- daftar soal di sidebar, dikelompokkan per teks ---------- */
function renderGrid(){
  let html = "", lastP = undefined, open = false;
  soal.forEach((s, i) => {
    const p = s.p ?? -1;
    if (p !== lastP){
      if (open) html += `</div>`;
      const judul = p >= 0 ? M.teks[p].judul : "Lainnya";
      html += `<div class="grp">${esc(judul)}</div><div class="grid">`;
      open = true; lastP = p;
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
}

/* ---------- teks bacaan ---------- */
function renderPasase(s, i){
  if (s.p == null) return "";
  const pertama = i === 0 || soal[i-1].p !== s.p;
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
  // teks pertama dalam satu kelompok terbuka; sisanya bisa dibuka bila perlu
  return pertama
    ? `<div class="pas">${isi}</div>`
    : `<details class="pas-lipat" style="margin-bottom:20px"><summary>Tampilkan teks bacaan: ${esc(t.judul)}</summary><div class="pas">${isi}</div></details>`;
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
    <div class="meta">Soal ${esc(s.no)} dari ${soal.length} · ${esc(M.nama)} TKA ${M.tahun}</div>
    ${renderPasase(s, cur)}
    <p class="q">${s.q}</p>
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

function route(){
  const id = decodeURIComponent(location.hash.slice(1));
  M = MAPEL.find(m => m.id === id) || null;
  if (!M){ renderMenu(); return; }
  normalisasi(M);
  soal = M.soal;
  initState();
  cur = 0;
  renderShell();
  renderQ();
}

/* ---------- event ---------- */
document.addEventListener("click", e => {
  const t = e.target.closest("button"); if (!t || !M) return;
  if (t.dataset.o !== undefined) pilihOpsi(+t.dataset.o);
  else if (t.dataset.i !== undefined) go(+t.dataset.i);
  else if (t.id === "submit") periksa();
  else if (t.id === "prev") go(cur - 1);
  else if (t.id === "next") go(cur + 1);
  else if (t.id === "retry"){ state[cur] = resetState(soal[cur]); renderQ(); }
  else if (t.id === "resetAll" && confirm("Ulangi semua soal dari awal?")){
    soal.forEach((s, i) => state[i] = resetState(s)); go(0);
  }
  else if (t.id === "goAbsen"){
    const n = parseInt($("absen").value, 10);
    if (n > 0) go((n - 1) % soal.length);
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
  if (!M) return;
  if (e.target.id === "absen" && e.key === "Enter"){ $("goAbsen").click(); return; }
  if (e.target.tagName === "INPUT") return;
  const k = e.key.toUpperCase(), idx = L.indexOf(k);
  if (k.length === 1 && idx > -1 && soal[cur].tipe !== "kat") pilihOpsi(idx);
  else if (e.key === "Enter" && e.target.tagName !== "BUTTON") periksa();
  else if (e.key === "ArrowRight") go(cur + 1);
  else if (e.key === "ArrowLeft") go(cur - 1);
});

window.addEventListener("hashchange", route);
route();
