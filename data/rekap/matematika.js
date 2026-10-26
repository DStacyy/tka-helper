/* Rekap materi: Matematika (Wajib)
   "i" mengacu pada posisi soal di data/matematika-2025.js (0-based). */
(window.REKAP = window.REKAP || []).push({
  mapel: "matematika-2025",
  nama: "Matematika (Wajib)",
  tahun: 2025,
  deskripsi: "Bilangan, fungsi, barisan, geometri, trigonometri, dan data.",

  topik: [
    {
      id: "bilangan-himpunan",
      judul: "Bilangan, Himpunan, dan Pangkat",
      ringkasSingkat: "Himpunan bilangan, operasi irisan dan gabungan, dan sifat pangkat pecahan.",
      ringkasan: [
        { h: "Himpunan dan operasinya" },
        "Irisan (∩) mengambil anggota yang ada di kedua himpunan. Gabungan (∪) mengambil semua anggota dari kedua himpunan tanpa mengulang. Sebelum menghitung, pastikan dulu isi tiap himpunan sesuai syaratnya, misalnya bilangan asli dimulai dari 1, sedangkan bilangan cacah dimulai dari 0.",
        { h: "Sifat pangkat" },
        "Untuk basis yang sama: a^m × a^n = a^(m+n), a^m ÷ a^n = a^(m−n), dan (a^m)^n = a^(m×n). Pangkat negatif berarti kebalikan: a^(−n) = 1 / a^n. Pangkat pecahan bisa diubah ke bilangan prima terlebih dahulu sebelum dihitung.",
        { h: "Cara mengerjakan soal" },
        "Ubah semua bilangan ke bentuk prima, kumpulkan pangkat yang berbasis sama, lalu jumlahkan atau kurangkan pangkatnya. Cara ini lebih aman daripada menghitung nilai desimal."
      ],
      refleksi: "Pangkat dan himpunan terlihat seperti aturan yang banyak sekali, tetapi sebenarnya hanya beberapa pola yang diulang. Kalau kamu sudah terbiasa mengubah bilangan ke bentuk prima, soal yang tampak rumit biasanya menjadi sederhana.",
      contoh: [
        {
          soal: "Diberikan A = {x | x < 5, x bilangan asli} dan B = {2, 4, 6}. Tentukan A ∩ B.",
          penyelesaian: "A = {1, 2, 3, 4}.\nA ∩ B hanya mengambil anggota yang ada di kedua himpunan: {2, 4}."
        },
        {
          soal: "Sederhanakan 2⁴ × 2⁻² .",
          penyelesaian: "2⁴ × 2⁻² = 2^(4 + (−2)) = 2² = 4."
        }
      ],
      latihan: [
        { i: 0 },
        { i: 1 },
        { i: 2 },
        {
          q: "Bentuk sederhana dari 2⁴ × 2⁻² adalah ....",
          opsi: ["1", "2", "4", "8", "16"],
          kunci: 2,
          bahas: "2⁴ × 2⁻² = 2^(4 − 2) = 2² = 4."
        }
      ]
    },

    {
      id: "fungsi-barisan",
      judul: "Fungsi, Barisan, dan Pertidaksamaan",
      ringkasSingkat: "Invers fungsi linear, barisan aritmetika dan geometri, dan daerah penyelesaian.",
      ringkasan: [
        { h: "Invers fungsi" },
        "Jika y = f(x), maka invers f⁻¹(y) mengembalikan x dari nilai y. Untuk fungsi linear y = ax + b, maka x = (y − b) / a. Cara ini sering dipakai untuk mencari kapan suatu nilai tercapai.",
        { h: "Barisan aritmetika dan geometri" },
        "Barisan aritmetika memiliki beda tetap b, dengan rumus Uₙ = a + (n − 1)b. Barisan geometri memiliki rasio tetap r, dengan rumus Uₙ = a × r^(n−1). Pada soal kehidupan sehari-hari, perhatikan dulu apakah perubahannya berupa penambahan tetap atau persentase tetap.",
        { h: "Daerah penyelesaian" },
        "Untuk setiap garis, tentukan dulu sisi mana yang dimaksud dengan mengambil titik uji, biasanya titik (0, 0). Jika titik uji memenuhi pertidaksamaan, daerah itu termasuk. Tanda ≤ atau ≥ menunjukkan bahwa garis batasnya ikut termasuk."
      ],
      refleksi: "Barisan dan fungsi itu seperti mengikuti pola langkah demi langkah. Kalau kamu bisa menebak apa yang berubah dari satu langkah ke langkah berikutnya, kamu sudah separuh jalan menuju jawabannya. Jangan terburu-buru, cek dulu jenis perubahannya.",
      contoh: [
        {
          soal: "Sebuah barisan dimulai dari 10, lalu bertambah 4 setiap langkah. Berapa suku ke-5?",
          penyelesaian: "a = 10, b = 4, n = 5.\nU₅ = 10 + (5 − 1) × 4 = 10 + 16 = 26."
        },
        {
          soal: "Jika y = 2x + 6, tentukan x untuk y = 20.",
          penyelesaian: "x = (y − 6) / 2 = (20 − 6) / 2 = 7."
        }
      ],
      latihan: [
        { i: 3 },
        { i: 4 },
        { i: 5 },
        { i: 6 },
        { i: 7 }
      ]
    },

    {
      id: "geometri-trigonometri",
      judul: "Geometri, Pengukuran, dan Trigonometri",
      ringkasSingkat: "Kesebangunan, transformasi, keliling dan luas gabungan, dan perbandingan trigonometri.",
      ringkasan: [
        { h: "Kesebangunan" },
        "Dua bangun sebangun memiliki sisi-sisi bersesuaian yang perbandingannya sama. Gunakan perbandingan ini untuk mencari sisi yang belum diketahui, dan ingat bahwa sudut yang bersesuaian sama besar.",
        { h: "Transformasi" },
        "Refleksi terhadap garis y = k memetakan (x, y) ke (x, 2k − y). Rotasi 180° di pusat O memetakan (x, y) ke (−x, −y). Untuk komposisi, kerjakan transformasi dari urutan pertama, lalu gunakan hasilnya untuk transformasi kedua. Untuk mencari titik asal, balik urutannya.",
        { h: "Keliling gabungan" },
        "Untuk bangun gabungan, jangan hitung bagian dalam yang tertutup. Hanya sisi luar yang ikut dihitung. Sisi yang menempel atau tersembunyi tidak ikut dijumlahkan.",
        { h: "Perbandingan trigonometri" },
        "Pada segitiga siku-siku, sin = depan / miring, cos = samping / miring, dan tan = depan / samping. Jika satu nilai diketahui, cari sisi yang belum diketahui dengan teorema Pythagoras, lalu hitung nilai lainnya."
      ],
      refleksi: "Geometri penuh bentuk yang mungkin terlihat rumit, tetapi setiap bentuk selalu bisa dipecah menjadi bagian-bagian kecil. Kalau kamu menggambar ulang bentuknya dan menandai sisi yang diketahui, jawaban biasanya akan terlihat dengan sendirinya.",
      contoh: [
        {
          soal: "Titik P(3, 2) direfleksikan terhadap garis y = 1, lalu hasilnya dirotasi 180° terhadap O. Tentukan bayangan akhirnya.",
          penyelesaian: "Refleksi terhadap y = 1: (3, 2) menjadi (3, 2 × 1 − 2) = (3, 0).\nRotasi 180°: (3, 0) menjadi (−3, 0)."
        },
        {
          soal: "Pada segitiga siku-siku, sisi miring 5 dan sisi samping 3. Berapa nilai sin sudut di hadapan sisi 4?",
          penyelesaian: "Sisi depan = √(5² − 3²) = 4.\nsin = depan / miring = 4 / 5."
        }
      ],
      latihan: [
        { i: 8 },
        { i: 9 },
        { i: 10 },
        { i: 11 },
        { i: 12 },
        { i: 14 }
      ]
    },

    {
      id: "data-peluang",
      judul: "Data dan Peluang",
      ringkasSingkat: "Membaca grafik dan tabel, median dan rata-rata, serta peluang kejadian sederhana.",
      ringkasan: [
        { h: "Membaca grafik dan tabel" },
        "Saat membaca grafik garis, ikuti setiap titik dengan teliti dan catat nilainya per tahun. Pertanyaan tentang naik atau turun dijawab dengan membandingkan dua titik berurutan, bukan melihat kesan umum.",
        { h: "Rata-rata dan median" },
        "Rata-rata = jumlah seluruh data / banyak data. Jika rata-rata diketahui, jumlah total langsung bisa dihitung. Median adalah nilai tengah setelah data diurutkan. Untuk lima data, median adalah data ketiga.",
        { h: "Peluang" },
        "Peluang = banyak kejadian yang diharapkan / banyak seluruh kemungkinan. Jika benda diambil lalu tidak dikembalikan, jumlah total berkurang setiap kali. Jika dikembalikan, jumlah totalnya tetap."
      ],
      refleksi: "Data dan peluang sering terasa seperti hitung-hitungan yang membingungkan. Padahal semuanya bermula dari satu pertanyaan sederhana: berapa banyak yang kamu punya, dan berapa banyak yang kamu harapkan. Jawab pertanyaan itu pelan-pelan, dan langkah lainnya akan mengikuti.",
      contoh: [
        {
          soal: "Lima siswa memiliki nilai 6, 4, 8, 7, dan 5. Berapa median dan rata-rata nilainya?",
          penyelesaian: "Diurutkan: 4, 5, 6, 7, 8. Median = 6.\nRata-rata = (4 + 5 + 6 + 7 + 8) / 5 = 30 / 5 = 6."
        },
        {
          soal: "Dalam kotak ada 3 bola merah dan 2 bola biru. Berapa peluang terambil bola merah?",
          penyelesaian: "Peluang = 3 / (3 + 2) = 3/5."
        }
      ],
      latihan: [
        { i: 15 },
        { i: 16 },
        { i: 17 },
        { i: 18 },
        { i: 19 }
      ]
    }
  ]
});