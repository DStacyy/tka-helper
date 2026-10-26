/* Rekap materi: Prakarya dan Kewirausahaan (PKWU)
   Indeks "i" di "latihan" mengacu pada soal di data/pkwu-2025.js (0-based).
   Soal "i" dipakai ulang lewat referensi, jadi perubahan di bank ikut terbawa. */
(window.REKAP = window.REKAP || []).push({
  mapel: "pkwu-2025",
  nama: "Prakarya dan Kewirausahaan (PKWU)",
  tahun: 2025,
  deskripsi: "Produksi, pemasaran, peluang usaha, HaKI, dan laporan keuangan sederhana.",

  topik: [
    {
      id: "produksi-kemasan",
      judul: "Produksi dan Pengemasan",
      ringkasSingkat: "Alat dan bahan produksi, kemasan yang melindungi produk, dan label yang informatif.",
      ringkasan: [
        { h: "Proses produksi" },
        "Produksi adalah rangkaian kegiatan mengubah bahan baku menjadi produk jadi. Dalam soal, kamu sering diminta membedakan alat (benda yang dipakai untuk bekerja, seperti mesin dan laptop) dan bahan baku (yang diolah, seperti akrilik dan benang).",
        { h: "Memilih bahan" },
        "Bahan yang dipilih harus sesuai dengan tujuan produk. Produk alami biasanya memakai bahan dari tumbuhan atau hewan, sedangkan bahan sintetis dan kimiawi tidak cocok untuk produk yang menekankan kealamian.",
        { h: "Fungsi kemasan" },
        "Kemasan memiliki tiga fungsi utama: melindungi produk dari benturan, udara, dan kelembapan; menarik perhatian pembeli; dan memberikan informasi. Kemasan yang kedap udara membantu menjaga kerenyahan dan kualitas makanan.",
        { h: "Label produk" },
        "Label biasanya memuat nama produk, varian, komposisi, volume atau berat bersih, tanggal kadaluwarsa atau baik dikonsumsi sebelum, dan cara penggunaan atau peringatan. Label harus mudah dibaca dan diletakkan di tempat yang terlihat.",
        { h: "Mencari akar masalah" },
        "Ketika ada kerusakan atau keluhan, cari dulu penyebabnya. Tindakan yang paling tepat biasanya memperbaiki penyebab itu, bukan hanya mengurangi gejalanya."
      ],
      refleksi: "Produksi yang baik dimulai dari perhatian kecil: bahan yang tepat, kemasan yang melindungi, dan label yang jelas. Jangan takut ketika produkmu mendapat keluhan. Keluhan adalah petunjuk tentang apa yang perlu diperbaiki, dan orang yang berani memperbaikinya biasanya tumbuh paling cepat.",
      contoh: [
        {
          soal:
"Sebutkan tiga informasi yang umumnya penting untuk dicantumkan pada label produk makanan atau minuman kemasan.",
          penyelesaian:
"Tiga informasi yang umum dan penting adalah nama produk, berat atau volume bersih, dan tanggal kadaluwarsa (atau baik dikonsumsi sebelum). Komposisi dan cara penggunaan juga sering dicantumkan."
        },
        {
          soal:
"Mengapa kemasan kue kering sebaiknya kedap udara?",
          penyelesaian:
"Udara dan kelembapan membuat kue melempem dan cepat berubah rasa. Kemasan kedap udara menjaga kerenyahan dan kualitas kue tetap baik lebih lama."
        }
      ],
      latihan: [
        { i: 0 },
        { i: 1 },
        { i: 5 },
        { i: 14 },
        { i: 4 }
      ]
    },

    {
      id: "pemasaran-produk",
      judul: "Pemasaran dan Pengembangan Produk",
      ringkasSingkat: "Strategi pemasaran sesuai target pasar, harga jual, dan langkah perbaikan prototipe.",
      ringkasan: [
        { h: "Bauran pemasaran (4P)" },
        "Pemasaran yang baik mempertimbangkan empat hal: produk (product), harga (price), tempat atau saluran (place), dan promosi (promotion). Ketika ada masalah penjualan, periksa dulu keempatnya, lalu cari yang paling tidak sesuai dengan target pasar.",
        { h: "Mengenali target pasar" },
        "Strategi yang baik selalu dimulai dari siapa pembelinya. Konsumen remaja lebih mudah dijangkau lewat media sosial, sedangkan konsumen dewasa yang peduli kesehatan lebih percaya pada testimoni dan informasi yang jelas.",
        { h: "Harga jual" },
        "Harga jual dihitung dari biaya produksi per unit ditambah laba yang diinginkan. Jika laba dinyatakan dalam persen dari biaya, hitung dulu biaya per unit, lalu ambil persentase laba dari biaya itu.",
        { h: "Pengembangan prototipe" },
        "Prototipe pertama adalah versi awal untuk diuji. Hasil uji dipakai untuk memperbaiki ukuran, bahan, sambungan, dan fungsi. Promosi besar biasanya dilakukan setelah produk teknisnya sudah stabil."
      ],
      refleksi: "Pemasaran bukan soal berteriak paling keras, tetapi soal berbicara kepada orang yang tepat. Kalau produkmu belum laku, itu bukan tanda gagal, melainkan tanda untuk mendengarkan pembeli lebih banyak. Setiap masukan adalah bahan untuk membuat produk yang lebih baik.",
      contoh: [
        {
          soal:
"Total biaya produksi 5.000.000 untuk 500 pcs. Pemilik ingin laba 20% dari biaya. Berapa harga jual per pcs?",
          penyelesaian:
"Biaya per pcs = 5.000.000 ÷ 500 = 10.000.\nLaba 20% = 20% × 10.000 = 2.000.\nHarga jual = 10.000 + 2.000 = 12.000 per pcs."
        },
        {
          soal:
"Sebutkan empat unsur dalam bauran pemasaran (4P).",
          penyelesaian:
"Product (produk), Price (harga), Place (tempat atau saluran distribusi), dan Promotion (promosi)."
        }
      ],
      latihan: [
        { i: 9 },
        { i: 10 },
        { i: 11 },
        { i: 12 },
        { i: 15 }
      ]
    },

    {
      id: "mutu-distribusi",
      judul: "Perencanaan, Mutu, dan Distribusi",
      ringkasSingkat: "Rencana produksi, pengendalian mutu, dan cara produk sampai ke konsumen.",
      ringkasan: [
        { h: "Perencanaan produksi" },
        "Perencanaan produksi menentukan berapa banyak produk harus dibuat, dalam berapa hari, dengan berapa orang, dan dengan alat apa. Jika target tidak tercapai, cek dulu kendala utamanya, misalnya waktu fermentasi atau kapasitas alat, lalu sesuaikan rencana.",
        { h: "Biaya produksi" },
        "Biaya tetap adalah biaya yang sama meskipun jumlah produksi berubah, misalnya sewa gedung dan gaji tetap. Biaya variabel berubah mengikuti jumlah produksi, misalnya bahan dan jahit per pcs. Total biaya = biaya tetap + (biaya variabel per unit × jumlah unit).",
        { h: "Pengendalian mutu" },
        "Pengendalian mutu memastikan produk sesuai standar. Langkahnya: periksa produk, catat dan kelompokkan cacat, lalu evaluasi proses produksi dan perbaiki prosedurnya. Menurunkan standar atau menjual produk cacat bukan bagian dari pengendalian mutu yang baik.",
        { h: "Saluran distribusi" },
        "Distribusi langsung berarti produk sampai ke konsumen tanpa perantara, misalnya lewat penjualan sendiri di media sosial atau marketplace. Distribusi tidak langsung melibatkan perantara seperti agen atau pengecer."
      ],
      refleksi: "Rencana yang baik tidak harus sempurna sejak awal. Yang penting kamu mengenali kendalanya, lalu menyesuaikan langkahmu sedikit demi sedikit. Setiap produk yang cacat adalah pelajaran tentang bagaimana membuat yang lebih baik berikutnya.",
      contoh: [
        {
          soal:
"Biaya tetap 28.000.000 dan biaya variabel 40.000 per pcs. Berapa total biaya untuk 1.000 pcs?",
          penyelesaian:
"Biaya variabel = 40.000 × 1.000 = 40.000.000.\nTotal = 28.000.000 + 40.000.000 = 68.000.000."
        },
        {
          soal:
"Apa perbedaan distribusi langsung dan distribusi tidak langsung?",
          penyelesaian:
"Distribusi langsung: produsen menjual langsung ke konsumen tanpa perantara.\nDistribusi tidak langsung: produk melewati perantara seperti agen atau pengecer sebelum sampai ke konsumen."
        }
      ],
      latihan: [
        { i: 7 },
        { i: 8 },
        { i: 16 },
        { i: 17 },
        { i: 18 }
      ]
    },

    {
      id: "peluang-haki-keuangan",
      judul: "Peluang Usaha, HaKI, dan Keuangan",
      ringkasSingkat: "Analisis SWOT, jenis perlindungan karya, dan laba bersih dari laporan sederhana.",
      ringkasan: [
        { h: "Analisis SWOT" },
        "SWOT memetakan Strengths (kekuatan) dan Weaknesses (kelemahan) dari dalam usaha, serta Opportunities (peluang) dan Threats (ancaman) dari luar. Pertanyaannya selalu sama: apakah ini berasal dari dalam atau luar, dan apakah ini membantu atau menghambat?",
        { h: "Jenis HaKI" },
        "Hak cipta melindungi karya kreatif seperti lagu, lukisan, dan tulisan. Merek melindungi tanda dagang. Paten melindungi invensi teknis. Desain industri melindungi tampilan produk. Rahasia dagang melindungi informasi bisnis yang dijaga kerahasiaannya.",
        { h: "Laba bersih" },
        "Harga pokok penjualan (HPP) untuk bahan baku dihitung dengan: persediaan awal + pembelian − persediaan akhir. Laba kotor = pendapatan − HPP. Laba bersih = laba kotor − biaya operasional.",
        { h: "Saldo kas" },
        "Saldo akhir kas = saldo awal + kas masuk − kas keluar. Transaksi kredit belum mengubah kas sampai pelunasan diterima."
      ],
      refleksi: "Berbisnis itu seperti membaca peta. Peluang dan ancaman selalu ada, dan yang penting adalah kamu tahu di mana posisimu. Karya yang kamu buat juga layak dijaga. Mengenal HaKI sejak awal membuatmu lebih percaya diri ketika karyamu mulai dikenal orang lain.",
      contoh: [
        {
          soal:
"Pendapatan 3.000.000, HPP 1.000.000, dan biaya operasional 500.000. Berapa laba bersih?",
          penyelesaian:
"Laba kotor = 3.000.000 − 1.000.000 = 2.000.000.\nLaba bersih = 2.000.000 − 500.000 = 1.500.000."
        },
        {
          soal:
"Kategorikan dalam SWOT: (a) pesanan dari sekolah meningkat, (b) modal usaha terbatas, (c) muncul pesaing baru.",
          penyelesaian:
"(a) Peluang, karena berasal dari luar dan membantu usaha.\n(b) Kelemahan, karena berasal dari dalam dan menghambat usaha.\n(c) Ancaman, karena berasal dari luar dan merugikan usaha."
        }
      ],
      latihan: [
        { i: 21 },
        { i: 23 },
        { i: 25 },
        { i: 27 },
        { i: 28 }
      ]
    }
  ]
});