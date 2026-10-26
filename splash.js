/* ==========================================================
   SPLASH TKA HELPER
   Muncul sekali per sesi, hanya di halaman menu.
   Tidak pernah muncul di halaman latihan.
   ========================================================== */
(function () {
  const KUNCI_SESI = "tka-helper-splash-selesai";
  const KALIMAT = [
    "BATTLEFIELD READY.",
    "STAND BY FOR TRAINING.",
    "EVERY ROUND COUNTS.",
    "READ. ANSWER. REVIEW."
  ];
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
        <p class="splash-kecil">Tactical training · TKA 2025</p>
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
    ketik(kalimat);
  }

  function ketik(teks){
    const out = document.getElementById("splashKalimat");
    const aksi = document.getElementById("splashAksi");
    if (!out || !aksi) return;

    if (kurangiGerak){
      out.textContent = teks;
      out.classList.add("selesai");
      aksi.classList.add("tampil");
      return;
    }

    let i = 0;
    const timer = setInterval(() => {
      if (!document.getElementById("splash")){ clearInterval(timer); return; }
      i++;
      out.textContent = teks.slice(0, i);
      if (i >= teks.length){
        clearInterval(timer);
        out.classList.add("selesai");
        setTimeout(() => aksi.classList.add("tampil"), 200);
      }
    }, 48);
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