/* ==========================================================
   AUDIO TKA HELPER
   Musik latar dibangkitkan dengan Web Audio API, tanpa file audio.
   Hanya berbunyi di halaman menu. Halaman latihan selalu senyap.
   ========================================================== */
(function () {
  const KUNCI_MATI = "tka-helper-suara-mati";
  const TEMPO = 84;
  const BEAT = 60 / TEMPO;
  const NADA = [110, 98, 87.31, 82.41, 73.42];   // skala minor turun, nada gelap
  const VOLUME_BGM = 0.22;                          // ubah angka ini untuk mengatur volume musik

  const IKON_ON  = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7"/><path d="M18.5 6a8.5 8.5 0 0 1 0 12"/></svg>';
  const IKON_OFF = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 9l5 6"/><path d="M22 9l-5 6"/></svg>';

  let ctx = null, master = null, noiseBuf = null;
  let timer = null, nextBeat = 0, beatKe = 0;
  let mode = "menu";          // "menu" atau "latihan"
  let aktif = false;          // true setelah pengguna menekan START atau tombol suara
  let bunyi = false;
  let mati = localStorage.getItem(KUNCI_MATI) === "1";
  let tombol = null;

  /* ---------- konteks audio ---------- */
  function pastikanCtx(){
    if (!ctx){
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0;
      master.connect(ctx.destination);
      bangunDrone();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  /* drone rendah: dua sawtooth yang sedikit berbeda frekuensi, difilter, dan bergeser pelan */
  function bangunDrone(){
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 240;
    filter.Q.value = 3;

    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoAmp = ctx.createGain();
    lfoAmp.gain.value = 90;
    lfo.connect(lfoAmp);
    lfoAmp.connect(filter.frequency);
    lfo.start();

    [55, 55.7, 82.4].forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = i === 2 ? "triangle" : "sawtooth";
      o.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = i === 2 ? 0.035 : 0.05;
      o.connect(g);
      g.connect(filter);
      o.start();
    });
    filter.connect(master);
  }

  /* ---------- elemen ketukan ---------- */
  function kick(t, vol){
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(120, t);
    o.frequency.exponentialRampToValueAtTime(40, t + 0.25);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    o.connect(g);
    g.connect(master);
    o.start(t);
    o.stop(t + 0.32);
  }

  function hat(t, vol){
    if (!noiseBuf){
      noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    const s = ctx.createBufferSource();
    s.buffer = noiseBuf;
    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 6000;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
    s.connect(hp);
    hp.connect(g);
    g.connect(master);
    s.start(t);
    s.stop(t + 0.05);
  }

  function nada(t, freq){
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = "triangle";
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.06, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0005, t + 0.9);
    o.connect(g);
    g.connect(master);
    o.start(t);
    o.stop(t + 0.95);
  }

  /* ---------- penjadwalan pola ketukan (8 beat per putaran) ---------- */
  function jadwal(){
    if (!ctx) return;
    while (nextBeat < ctx.currentTime + 0.15){
      const pos = beatKe % 8;
      if (pos === 0) kick(nextBeat, 0.32);
      if (pos === 4) kick(nextBeat, 0.24);
      if (pos === 6) kick(nextBeat, 0.16);
      if (pos % 2 === 1) hat(nextBeat, 0.03);
      if (pos === 0 || pos === 4){
        nada(nextBeat, NADA[Math.floor(beatKe / 8) % NADA.length] * 2);
      }
      beatKe++;
      nextBeat += BEAT;
    }
  }

  /* ---------- fade dan kontrol putar ---------- */
  function fadeKe(nilai, detik){
    if (!ctx) return;
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value, now);
    master.gain.linearRampToValueAtTime(nilai, now + detik);
  }

  function nyalakan(){
    if (!ctx) return;
    bunyi = true;
    if (!timer){
      nextBeat = ctx.currentTime + 0.1;
      beatKe = 0;
      timer = setInterval(jadwal, 60);
    }
    fadeKe(VOLUME_BGM, 1.6);
  }

  function senyapkan(detik){
    if (!ctx) return;
    bunyi = false;
    fadeKe(0, detik);
    setTimeout(() => {
      if (!bunyi && timer){
        clearInterval(timer);
        timer = null;
      }
    }, detik * 1000 + 150);
  }

  function perbarui(){
    if (!aktif){ ikonkan(); return; }
    if (mode === "menu" && !mati) nyalakan();
    else senyapkan(mode === "menu" ? 1.2 : 1.0);
    ikonkan();
  }

  /* ---------- tombol suara (pojok kanan atas) ---------- */
  function ikonkan(){
    if (!tombol) return;
    tombol.innerHTML = mati ? IKON_OFF : IKON_ON;
    tombol.classList.toggle("mati", mati);
    tombol.setAttribute("aria-pressed", String(!mati));
  }

  function pasangTombol(){
    tombol = document.createElement("button");
    tombol.id = "tombolSuara";
    tombol.type = "button";
    tombol.setAttribute("aria-label", "Nyalakan atau matikan musik");
    tombol.addEventListener("click", () => TKA_AUDIO.toggle());
    document.body.appendChild(tombol);
    ikonkan();
  }

  /* ---------- API publik ---------- */
  window.TKA_AUDIO = {
    // dipanggil saat START ditekan di splash (memberi izin audio ke browser)
    aktifkan(){
      aktif = true;
      pastikanCtx();
      perbarui();
    },
    // dipanggil dari app.js setiap berpindah halaman: "menu" atau "latihan"
    suasana(m){
      mode = m;
      perbarui();
    },
    // dipanggil dari tombol suara
    toggle(){
      aktif = true;
      pastikanCtx();
      mati = !mati;
      localStorage.setItem(KUNCI_MATI, mati ? "1" : "0");
      perbarui();
    }
  };

  pasangTombol();
})();