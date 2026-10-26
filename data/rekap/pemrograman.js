/* Rekap materi: Pemrograman (Terstruktur & PBO)
   Latihan memakai soal dari data pemrograman-2025.js (indeks 0-based)
   dan satu soal baru dengan blok kode. */
(window.REKAP = window.REKAP || []).push({
  mapel: "pemrograman-terstruktur-pbo",
  nama: "Pemrograman (Terstruktur & PBO)",
  tahun: 2025,
  deskripsi: "Perulangan, perulangan bersarang, penelusuran algoritma, dan konsep OOP.",

  topik: [
    {
      id: "perulangan",
      judul: "Perulangan dan Perulangan Bersarang",
      ringkasSingkat: "For, while, perulangan bersarang, dan cara menelusuri hasil cetak.",

      ringkasan: [
        { h: "Apa itu perulangan?" },
        "Perulangan (loop) menjalankan blok instruksi berulang kali selama kondisi terpenuhi. Dalam pseudocode umumnya ada dua bentuk: for, yang jumlah putarannya sudah jelas dari batas awal dan akhir, dan while, yang berputar selama kondisi bernilai benar.",

        { h: "Perulangan bersarang" },
        "Perulangan bersarang berarti ada loop di dalam loop. Setiap kali loop luar berputar satu kali, loop dalam berputar penuh dari awal. Jika loop luar berputar n kali dan loop dalam berputar m kali, maka isi loop dalam dijalankan n × m kali.",
        "Jika batas loop dalam bergantung pada variabel loop luar (misalnya j := i to 4), total putarannya tidak lagi sekadar perkalian. Hitung setiap putaran luar satu per satu, lalu jumlahkan.",

        { h: "Cara menelusuri hasil" },
        "Buat tabel kecil: kolom untuk variabel loop, nilai yang berubah, dan hasil cetak. Telusuri satu putaran dalam sekali jalan, lalu catat hasilnya. Cara ini jauh lebih aman daripada menebak jawabannya.",

        { h: "Loop while" },
        "Pada while, cek kondisi sebelum setiap putaran. Hitung juga berapa kali kondisi bernilai benar, karena itu sama dengan jumlah langkah. Pastikan variabel yang dipakai di kondisi memang berubah di dalam loop, supaya tidak berputar selamanya."
      ],

      refleksi: "Perulangan bersarang memang terlihat rumit di awal, tetapi polanya selalu sama: loop luar memutar, dan loop dalam ikut berputar penuh setiap kali. Kalau kamu sudah menulis tabel penelusurannya, kamu tidak sedang menebak. Kamu sedang membuktikan jawabanmu sendiri, dan itu kemampuan yang sangat berharga.",

      contoh: [
        {
          soal:
`count := 0
for i := 1 to 3 do
  for j := 1 to 2 do
    count := count + 1
  endfor
endfor`,
          penyelesaian:
`Loop luar berputar 3 kali (i = 1, 2, 3).
Setiap putaran luar, loop dalam berputar 2 kali (j = 1, 2).

Total: 3 × 2 = 6.
Nilai count = 6.`
        },
        {
          soal:
`x := 8
langkah := 0
while x > 1 do
  x := x div 2
  langkah := langkah + 1
endwhile`,
          penyelesaian:
`Telusuri nilai x:
8 → 4 (langkah 1)
4 → 2 (langkah 2)
2 → 1 (langkah 3)

x sudah 1, jadi loop berhenti.
Nilai langkah = 3.`
        }
      ],

      latihan: [
        { ref: "pemrograman-terstruktur-pbo", i: 1 },
        { ref: "pemrograman-terstruktur-pbo", i: 2 },
        { ref: "pemrograman-terstruktur-pbo", i: 3 },
        { ref: "pemrograman-terstruktur-pbo", i: 15 },
        {
          q: "Berapa nilai count setelah seluruh eksekusi?",
          kode:
`count := 0
for i := 1 to 4 do
  for j := 1 to 2 do
    count := count + 1
  endfor
endfor`,
          opsi: ["6", "8", "4", "10", "12"],
          kunci: 1,
          bahas: "Loop luar berputar 4 kali. Setiap putaran, loop dalam berputar 2 kali.\nTotal: 4 × 2 = 8."
        }
      ]
    }
  ]
});