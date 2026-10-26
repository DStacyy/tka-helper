/* ==========================================================
   SPLASH TKA HELPER
   Muncul sekali per sesi, hanya di halaman menu.
   Kalimat muncul dengan efek huruf acak yang lalu menetap.
   ========================================================== */
(function () {
  const KUNCI_SESI = "tka-helper-splash-selesai";
  const KALIMAT = [
    "BATTLEFIELD READY.",
    "STAND BY FOR TRAINING.",
    "EVERY ROUND COUNTS.",
    "READ. ANSWER. REVIEW."
  ];
  const KARAKTER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*/+<>?";
  const DURASI_ACAK = 1700;   // total lama efek acak dalam milidetik
  const JEDA_ACAK = 45;       // seberapa sering huruf acak berganti
  const kurangiGerak = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let sedangTampil = false;

  function sudahSelesai(){
    try { return sessionStorage.getItem(KUNCI_SESI) === "1"; } catch (e) { return false; }
  }
  function tandaiSelesai(){
    try { sessionStorage.setItem(KUNCI_SESI, "1"); } catch (e) {}
  }

  function cek(){
    const adalahMenu = location.hash.slice(1) === "";
    if (adalahMenu && !sudahSelesai() && !sedangTampil) tampilkan();
  }

  function tampilkan(){
    sedangTampil = true;
    document.body.classList.add("splash-aktif");
    const kalimat = KALIMAT[Math.floor(Math.random() * KALIMAT.length)];

    const el = document.createElement("div");
    el.id = "splash";
    el.innerHTML = `
      <div class="splash-scan"></div>
      <div class="splash-isi">
        <p class="splash-kecil">Tactical training · TKA 2026</p>
        <h1 class="splash-judul" data-text="TKA HELPER">TKA HELPER</h1>
        <p class="splash-kalimat" id="splashKalimat"></p>
        <div class="splash-aksi" id="splashAksi">
          <button type="button" class="splash-start" id="splashMulai">START</button>
          <button type="button" class="splash-lewati" id="splashLewati">Lewati</button>
        </div>
      </div>`;
    document.body.appendChild(el);

    el.querySelector("#splashMulai").addEventListener("click", () => selesai(true));
    el.querySelector("#splashLewati").addEventListener("click", () => selesai(false));
    acak(kalimat);
  }

  /* huruf acak yang berganti cepat, lalu menetap satu per satu dari kiri ke kanan */
  function acak(teks){
    const out = document.getElementById("splashKalimat");
    const aksi = document.getElementById("splashAksi");
    if (!out || !aksi) return;

    if (kurangiGerak){
      finish(out, aksi, teks);
      return;
    }

    const mulai = performance.now();
    let terakhirGanti = 0;

    function frame(now){
      if (!document.getElementById("splash")) return;   // splash sudah ditutup

      const t = Math.min(1, (now - mulai) / DURASI_ACAK);

      if (now - terakhirGanti > JEDA_ACAK || t === 1){
        terakhirGanti = now;
        let tampilan = "";
        for (let i = 0; i < teks.length; i++){
          const c = teks[i];
          if (c === " "){ tampilan += " "; continue; }
          // setiap huruf menetap pada waktu yang sedikit berbeda, dari kiri ke kanan
          const waktuMenetap = 0.15 + (i / teks.length) * 0.75;
          tampilan += t >= waktuMenetap
            ? c
            : KARAKTER[Math.floor(Math.random() * KARAKTER.length)];
        }
        out.textContent = tampilan;
      }

      if (t < 1) requestAnimationFrame(frame);
      else finish(out, aksi, teks);
    }

    requestAnimationFrame(frame);
  }

  function finish(out, aksi, teks){
    out.textContent = teks;
    out.classList.add("selesai");
    setTimeout(() => aksi.classList.add("tampil"), 200);
  }

  function selesai(denganMusik){
    tandaiSelesai();
    const el = document.getElementById("splash");
    if (!el) return;

    if (denganMusik){
      if (window.TKA_AUDIO) TKA_AUDIO.aktifkan();
      el.classList.add("splash-kilat");
      setTimeout(() => el.classList.add("splash-keluar"), kurangiGerak ? 0 : 260);
    } else {
      el.classList.add("splash-keluar");
    }

    setTimeout(() => {
      el.remove();
      document.body.classList.remove("splash-aktif");
      sedangTampil = false;
    }, kurangiGerak ? 50 : 950);
  }

  window.addEventListener("hashchange", cek);
  cek();
})();