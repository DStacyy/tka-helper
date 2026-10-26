/* Mapel: Prakarya dan Kewirausahaan (PKWU) TKA 2025
   Sumber: Soal_TKA_PKWU_2025.pdf
   Tipe soal:
   - kunci: number      → pilihan ganda tunggal
   - kunci: [..]        → pilihan ganda kompleks (pilih semua yang benar)
   - baris + labelKat   → soal Benar/Salah per pernyataan (tabel)
   Kunci dan pembahasan disusun dari analisis, bukan dari dokumen resmi.
   Item yang perlu dicek guru ditandai "Perlu dicek" di pembahasan. */
(window.MAPEL = window.MAPEL || []).push({
  id: "pkwu-2025",
  nama: "Prakarya dan Kewirausahaan (PKWU)",
  tahun: 2025,
  deskripsi: "Proses produksi, pengemasan, pemasaran, distribusi, peluang usaha, HaKI, dan laporan keuangan sederhana.",
  teks: [],

  soal: [
    // ---------- Proses Produksi ----------
    { no: "1", grup: "Proses Produksi",
      q: "Berdasarkan deskripsi, manakah alat yang digunakan dalam proses produksi gantungan kunci akrilik tersebut?",
      q: "UMKM Arya sedang memproduksi gantungan kunci akrilik dengan desain custom. Dalam proses produksinya, mereka melalui beberapa tahapan: pembuatan desain digital, pemotongan bahan, pencetakan, dan perakitan. Untuk mendukung produksi tersebut, mereka menggunakan laptop, perangkat lunak desain grafis, mesin laser cutting, akrilik lembaran, cincin logam kecil, lem akrilik khusus.\n\nBerdasarkan deskripsi, manakah alat yang digunakan dalam proses produksi gantungan kunci akrilik tersebut?",
      opsi: [
        "Akrilik lembaran, cincin logam kecil, lem akrilik khusus",
        "Laptop, perangkat lunak desain grafis, mesin laser cutting",
        "Gantungan kunci jadi, akrilik lembaran, lem akrilik",
        "Desain digital, cincin logam kecil, mesin laser cutting",
        "Laptop, cincin logam kecil, desain digital"
      ],
      kunci: 1,
      bahas: "Alat adalah benda yang dipakai untuk bekerja: laptop dan perangkat lunak desain grafis untuk membuat desain, serta mesin laser cutting untuk memotong akrilik.\nAkrilik, cincin logam, dan lem adalah bahan baku, bukan alat. Desain digital adalah hasil proses, bukan alat." },

    { no: "2", grup: "Pengemasan & Pelabelan", tipe: "multi",
      q: "Perhatikan informasi yang tertera pada kemasan produk cairan pembersih piring dan gelas “Bersih”. Berdasarkan informasi pada kemasan tersebut, manakah informasi yang sesuai dengan kemasan produk tersebut? Tentukan jawaban yang benar. Jawaban benar lebih dari satu.",
      kode:
"Diproduksi: PT CAHAYA INDONESIA\nBerat bersih: 1500 ml\nTanggal kadaluwarsa: 10 Agustus 2026\nManfaat: menghilangkan bau amis dan lemak hilang, serta lembut di tangan\nCara penggunaan:\n- Tuang ½ sendok cairan ke dalam mangkok berisi 1 gelas air bersih\n- Masukkan spons ke dalam larutan, kemudian diperas sampai berbusa\n- Cuci piring dan gelas, lalu bilas sampai bersih\nPerhatian dan peringatan:\n- Jauhkan dari jangkauan anak-anak\n- Bila terkena mata, bilas dengan air bersih",
      opsi: [
        "Perbandingan campuran adalah setengah sendok cairan dicampur dengan satu mangkok air",
        "Cairan pembersih ini tidak boleh digunakan langsung tanpa dicampur air",
        "Jika cairan terkena mata, bilaslah dengan air bersih",
        "Produk ini hanya boleh digunakan sebelum 10 Agustus 2027",
        "Saat menggunakan produk, penting untuk menjauhkan dari jangkauan anak-anak"
      ],
      kunci: [1, 2, 4],
      bahas: "A salah: kemasan menyebut 1 gelas air, bukan satu mangkok.\nB benar: aturan penggunaan mewajibkan pencampuran dengan air.\nC benar: peringatan untuk terkena mata.\nD salah: tanggal kadaluwarsa 10 Agustus 2026, jadi produk tidak boleh dipakai setelah tanggal itu, bukan 2027.\nE benar: peringatan jauhkan dari anak-anak." },

    { no: "3", grup: "Proses Produksi", tipe: "multi",
      q: "Pada proses pengecekan kualitas produk lemari besi, ditemukan adanya pengelupasan cat pada bagian dinding lemari. Akibatnya, produk tersebut dinyatakan tidak lolos quality control dan tidak dapat dikirim ke pelanggan. Setelah dilakukan investigasi lebih lanjut, diketahui bahwa pengelupasan cat tersebut disebabkan oleh benturan atau gesekan yang terjadi saat proses pemindahan lemari dari area produksi ke gudang penyimpanan.\n\nTindakan yang paling tepat untuk mengatasi dan mencegah masalah tersebut adalah.... Tentukan jawaban yang benar. Jawaban benar lebih dari satu.",
      opsi: [
        "Melatih ulang petugas pemindahan barang agar lebih berhati-hati dan menggunakan teknik angkat yang tepat",
        "Menerapkan pelindung tambahan pada bagian yang rawan benturan selama proses pemindahan",
        "Mengurangi frekuensi pemindahan lemari agar mengurangi risiko kerusakan selama proses tersebut",
        "Meninjau dan memperbaiki prosedur pemindahan produk agar lebih aman dan efisien",
        "Memperketat inspeksi visual pada setiap produk sebelum dikirimkan agar pengelupasan dapat dideteksi lebih awal"
      ],
      kunci: [0, 1, 3],
      bahas: "Penyebab masalah ada pada proses pemindahan. Tindakan yang mengatasi sekaligus mencegah sumbernya: pelatihan petugas (A), pelindung di bagian rawan (B), dan perbaikan prosedur (D).\nC dan E kurang tepat: mengurangi frekuensi hanya mengurangi sebagian risiko, dan inspeksi hanya mendeteksi cacat, tidak mencegah benturan terjadi.\nPerlu dicek guru: opsi C masih bisa diperdebatkan." },

    { no: "4", grup: "Proses Produksi",
      q: "Sebuah unit usaha sekolah memproduksi totebag berbahan kanvas. Proses produksi dilakukan oleh murid yang mengikuti ekstrakurikuler menjahit di sekolah. Namun saat mengerjakan pesanan totebag, kelompok produksi mengalami kendala saat tahap menjahit. Benang sering putus dan jahitan menjadi tidak rapi, padahal mesin jahit sudah digunakan sesuai petunjuk. Setelah ditelusuri, diketahui bahwa benang yang digunakan terlalu tipis untuk bahan kanvas yang tebal.\n\nSolusi terbaik yang dapat dilakukan untuk mengatasi masalah tersebut adalah...",
      opsi: [
        "Mengganti bahan totebag dengan bahan kanvas yang lebih tipis",
        "Mengganti mesin jahit yang lebih berkualitas agar benang tidak cepat putus",
        "Menambahkan lem kain pada totebag agar sambungan tetap kuat dan tahan lama",
        "Melatih ulang murid dalam teknik menjahit yang lebih terampil dan teliti dalam menjahit",
        "Mengganti benang dengan jenis yang lebih tebal dan kuat sesuai karakter kanvas"
      ],
      kunci: 4,
      bahas: "Akar masalahnya ada pada benang yang terlalu tipis untuk bahan tebal. Solusi terbaik langsung mengganti benang dengan yang sesuai karakter kanvas (E).\nA mengubah bahan, bukan memperbaiki penyebab. B dan C mengubah alat atau menambah bahan tanpa menyentuh penyebab. D bisa membantu, tetapi tidak menyelesaikan benang yang memang tidak cocok." },

    { no: "5", grup: "Proses Produksi",
      q: "Sekelompok murid farmasi merancang produk aromatherapy candle (lilin aroma terapi) dari bahan alami untuk keperluan relaksasi. Produk ini akan dikemas dalam toples kecil kaca. Target pasarnya adalah konsumen rumah tangga dan spa lokal.\n\nDalam proses perancangan, murid menemukan beberapa bahan utama yang dapat digunakan:\n- Parafin (turunan minyak bumi)\n- Beeswax (lilin lebah)\n- Minyak esensial (lavender, kayu putih, melati)\n- Pewarna lilin sintetis\n- Bubuk kayu manis\n\nMereka ingin memastikan produk tetap alami, aman, dan ramah lingkungan.\n\nBerdasarkan situasi tersebut, kombinasi bahan baku mana untuk mendukung proses produksi lilin aroma terapi yang alami dan ramah lingkungan adalah ....",
      opsi: [
        "Menggunakan parafin, pewarna sintetis, dan minyak esensial",
        "Menggunakan beeswax, bubuk kayu manis, dan minyak esensia",
        "Menggabungkan parafin, beeswax, dan pewarna sintetis",
        "Memadukan bubuk kayu manis, pewarna sintetis, dan parafin",
        "Memilih beeswax, parafin, dan pengharum ruangan kimiawi"
      ],
      kunci: 1,
      bahas: "Beeswax berasal dari lebah, bubuk kayu manis dan minyak esensial berasal dari tumbuhan. Ketiganya alami.\nParafin adalah turunan minyak bumi, dan pewarna sintetis serta pengharum kimiawi tidak alami. Jadi A, C, D, dan E tidak sesuai dengan tujuan produk." },

    // ---------- Pengemasan & Pelabelan ----------
    { no: "6", grup: "Pengemasan & Pelabelan",
      q: "Kelompok murid SMK jurusan Tata Boga memproduksi kue kering (cookies) dalam skala rumahan untuk dipasarkan secara daring. Selama proses distribusi ke luar kota, mereka menerima keluhan dari pelanggan bahwa cookies banyak yang remuk dan melempem saat diterima. Setelah dievaluasi, diketahui bahwa kemasan hanya menggunakan plastik tipis biasa dan tanpa lapisan kedap udara.\n\nBerdasarkan kasus tersebut, teknik pengemasan yang paling tepat untuk menjaga kualitas dan bentuk produk cookies adalah...",
      opsi: [
        "Menggunakan kantong plastik tebal ziplock dan menambahkan bubble wrap untuk daya tahan",
        "Mengemas cookies dalam plastik tipis bening agar isi mudah terlihat oleh pelanggan",
        "Mengemas cookies dalam kotak karton bergelombang tanpa pelapis plastik, tapi menggunakan kertas tisu",
        "Menggunakan plastik OPP dan menyisipkan silica gel untuk mengurangi kelembapan dalam kemasan",
        "Menambahkan label “Fragile” dan “Keep Dry” di luar kemasan serta menggunakan kertas tisu sebagai pelapis"
      ],
      kunci: 0,
      bahas: "Masalah utamanya dua: cookies remuk akibat benturan, dan melempem karena udara lembap masuk. Kemasan yang kedap udara (ziplock) dan pelindung dari benturan (bubble wrap) menjawab keduanya, dan teks sendiri menyebut kemasan tidak memiliki lapisan kedap udara.\nD juga membahas kelembapan, tetapi tidak mengatasi remuk." },

    { no: "7", grup: "Pengemasan & Pelabelan",
      q: "Seorang murid jurusan Agribisnis SMK Tunas Mandiri memproduksi keripik bayam sebagai produk unggulan dalam program kewirausahaan sekolah. Produk ini dikemas dalam plastik bening dengan stiker nama produk pada bagian depan. Sasaran utama pasar mereka adalah remaja dan anak-anak sekolah. Namun, saat dipamerkan di bazar kuliner, banyak pengunjung menyampaikan bahwa kemasannya tidak kekinian dan tidak menampilkan identitas merek dengan jelas. Selain itu, beberapa pelanggan mengalami kesulitan membaca tanggal kadaluwarsa karena ukuran huruf yang terlalu kecil.\n\nBerdasarkan deskripsi tersebut, langkah analisis kemasan yang paling tepat untuk meningkatkan daya tarik produk bagi target pasar adalah ....",
      opsi: [
        "mendesain ulang kemasan dengan warna dan ilustrasi yang menarik serta memperbesar ukuran informasi",
        "mengganti kemasan plastik bening dengan toples kaca agar lebih eksklusif dan terlihat jelas tulisannya",
        "menambahkan brosur informasi gizi dan manfaat bayam dalam setiap kemasan sebagai nilai edukasi",
        "menyederhanakan desain kemasan dan merek produk agar biaya produksi dan harga jual lebih murah",
        "menggunakan bahan kemasan kertas cokelat alami untuk menonjolkan kesan yang ramah lingkungan"
      ],
      kunci: 0,
      bahas: "Masalahnya tiga: kemasan tidak kekinian, identitas merek kurang jelas, dan tulisan terlalu kecil. Opsi A menjawab ketiganya sekaligus.\nB, C, D, dan E mengubah hal yang tidak diminta, seperti biaya atau bahan, dan tidak menjawab masalah tampilan serta keterbacaan." },

    { no: "8", grup: "Pengemasan & Pelabelan",
      q: "Perhatikan gambar label produk minuman herbal “Jamoe Si Mbok” untuk kemasan botol berikut ini.\n\n[Teks dari label] Jamoe Si Mbok — Varian BERAS KENCUR — Komposisi: Beras, Kencur, Gula Jawa — 300 ml — Baik dikonsumsi sebelum: 15 Mei 2026\n\nDari gambar label tersebut, penerapan yang paling tepat pada kemasan produk minuman herbal “Jamoe Si Mbok” adalah...",
      opsi: [
        "Menempelkan label di bagian tengah botol agar mudah dilihat oleh konsumen",
        "Menempatkan label di bagian bawah botol agar tidak mengganggu tampilan warna minuman",
        "Menempelkan label dengan posisi miring di depan dan samping botol agar lebih dikenal",
        "Menempelkan label di dalam botol untuk menghindari kerusakan saat pengiriman",
        "Label sebaiknya tidak ditempel pada produk namun ditempel di kardus kemasan botol"
      ],
      kunci: 0,
      bahas: "Label diletakkan di bagian tengah botol agar mudah terlihat dan terbaca dari berbagai sudut. Label memuat informasi penting seperti varian, komposisi, volume, dan tanggal, sehingga harus mudah dibaca konsumen.\nD dan E tidak masuk akal untuk label yang harus dibaca konsumen. C bisa menarik perhatian, tetapi posisi miring di dua sisi tidak lazim untuk label utama." },

    { no: "9", grup: "Pengembangan Desain Produk",
      q: "Tim murid SMK jurusan Desain Komunikasi Visual membuat prototipe desain kemasan minuman herbal “Wedang Rempah Saku”. Produk ini ditargetkan untuk kalangan muda dan pekerja kantor. Desain awal mereka menggunakan botol kaca tinggi dengan label berwarna cokelat klasik. Setelah dilakukan uji pasar kecil, banyak responden mengatakan bahwa sebagian bahan baku disimpan di tempat lembap. Hasil penelusuran menunjukkan bahwa sebagian bahan baku disimpan di tempat lembab. Hasil penelusuran menunjukkan bahwa sebagian bahan baku disimpan di tempat lembap dan proses pengemasan dilakukan tanpa tahap penyaringan akhir untuk memisahkan partikel kasar.\n\nLangkah yang dapat diterapkan untuk memperbaiki produk sesuai kebutuhan pasar adalah...",
      opsi: [
        "Mengganti warna label menjadi lebih cerah dan menarik agar menarik pelanggan",
        "Mengganti bahan kemasan ke plastik fleksibel dan desain yang lebih kekinian",
        "Mengubah label produk dengan desain berwarna abu dan gambar yang menarik",
        "Mengganti kemasan dengan botol kaca dengan dua lapis agar lebih estetik",
        "Menambahkan hiasan pada botol kaca guna menambah kesan tradisional"
      ],
      kunci: 1,
      bahas: "Masalah yang muncul adalah botol kaca tinggi yang sulit dibawa bepergian, rawan pecah, dan desainnya terlihat jadul bagi target muda dan pekerja kantor. Opsi B mengganti bahan kemasan ke plastik fleksibel yang lebih ringan dan aman, sekaligus memperbarui desain.\nA, C, D, dan E hanya mengubah tampilan, dan tidak menyelesaikan masalah bahan kemasan serta kepraktisan.\nCatatan: teks soal di PDF memuat kalimat yang berulang, jadi pembacaan ulang oleh guru disarankan." },

    // ---------- Pemasaran Produk ----------
    { no: "10", grup: "Strategi Pemasaran", tipe: "kat",
      q: "Sekelompok murid SMK membuat produk tempat pensil berbahan bambu yang diberi lukisan motif etnik. Produk ini unik, ramah lingkungan, dan ditujukan untuk pelajar dan pecinta kerajinan lokal. Penjualan selama bazar sekolah cukup baik, namun menurun setelah bazar berakhir. Mereka juga berencana meningkatkan penjualan sampai luar sekolah. Berdasarkan hasil evaluasi, perlu dilakukan perbaikan strategi pemasaran.\n\nTentukan Benar/Salah pernyataan berikut ini berdasarkan strategi yang paling tepat dalam memasarkan produk agar penjualan meningkat.",
      labelKat: ["Benar", "Salah"],
      baris: [
        { t: "Menunggu bazar berikutnya untuk fokus menjual produk agar tidak menambah biaya promosi.", k: 1 },
        { t: "Melakukan penjualan melalui grup chat murid agar penjualan meningkat.", k: 0 },
        { t: "Membuat akun media sosial dan mengunggah konten produk secara rutin.", k: 0 }
      ],
      bahas: "Penjualan menurun karena tidak ada kegiatan pemasaran setelah bazar. Menunggu bazar berikutnya membuat penjualan tidak berkelanjutan, jadi pernyataan pertama salah.\nPemasaran lewat grup chat dan media sosial rutin adalah cara yang murah dan menjangkau lebih banyak orang, sehingga keduanya benar.\nPerlu dicek guru: pernyataan kedua bisa diperdebatkan karena jangkauan grup chat terbatas." },

    { no: "11", grup: "Strategi Pemasaran", tipe: "multi",
      q: "Anatama seorang wirausaha muda memproduksi sabun organik alami tanpa bahan kimia. Produk tersebut memiliki target pasar konsumen yang memiliki kesadaran menggunakan produk alami dengan rentang usia antara 20–40 tahun. Ia berencana menyusun strategi pemasaran secara online agar produknya menjangkau pasar yang lebih luas.\n\nManakah strategi pemasaran online berikut yang paling relevan untuk diterapkan dalam memasarkan produk sabun organik tersebut? Tentukan jawaban yang benar. Jawaban benar lebih dari satu!",
      opsi: [
        "Membagikan konten edukatif dan visual di media sosial tentang manfaat sabun organik",
        "Menyusun artikel blog tentang manfaat sabun alami dan mengoptimalkannya agar mudah ditemukan di mesin pencari",
        "Menyusun kampanye online yang mengajak konsumen membagikan pengalaman mereka menggunakan produk",
        "Mengirim broadcast message sebagai bagian promosi ke nomor acak sebanyak mungkin agar menjangkau audiens luas"
      ],
      kunci: [0, 1, 2],
      bahas: "Strategi yang relevan dengan target pasar yang peduli bahan alami dan rentang usia 20–40 tahun: konten edukatif di media sosial (A), artikel yang mudah ditemukan lewat mesin pencari (B), dan kampanye yang melibatkan konsumen (C).\nD tidak relevan dan berisiko dianggap spam, sehingga kurang tepat untuk pemasaran yang dipercaya." },

    { no: "12", grup: "Strategi Pemasaran",
      q: "Kelompok wirausaha siswa jurusan Rekayasa Perangkat Lunak mengembangkan aplikasi berbasis Android bernama “TASK+ EDU”, yaitu aplikasi pencatat tugas dan pengingat belajar. Aplikasi ini memiliki fitur penjadwalan, notifikasi, dan sinkronisasi ke kalender elektronik. Tim mereka sangat fokus pada pengembangan fitur dan desain antarmuka. Namun setelah 2 bulan berjalan, aplikasi hanya diunduh 57 kali dan mendapatkan ulasan minim. Berdasarkan hasil survei kecil yang dilakukan tim usaha, ditemukan bahwa strategi promosi digital yang jarang dilakukan, sehingga aplikasi tidak dikenal secara luas oleh target penggunanya, yakni pelajar yang aktif di media sosial. Selain itu, tidak adanya evaluasi dari pengguna melalui survei, sehingga pengembang tidak mengetahui kebutuhan atau keluhan pengguna setelah aplikasi digunakan.\n\nBerdasarkan analisis terhadap strategi pemasaran pada kasus tersebut, penyebab utama dari tidak berhasilnya pemasaran produk “TASK+EDU” adalah ....",
      opsi: [
        "Aplikasi memiliki banyak fitur yang membingungkan pengguna trutama pelajar",
        "Tim terlalu fokus pada desain antarmuka dan melupakan keamanan data",
        "Tidak ada strategi promosi digital yang relevan dengan kebiasaan target pasar",
        "Aplikasi yang ditawarkan tidak bisa digunakan secara offline sehingga tidak optimal",
        "Desain antar muka yang tidak sesuai dengan minat pelajar sehingga tidak optimal"
      ],
      kunci: 2,
      bahas: "Teks menyebut promosi digital jarang dilakukan dan tidak sesuai dengan kebiasaan pelajar yang aktif di media sosial. Itulah penyebab utama aplikasi tidak dikenal.\nA, B, D, dan E menyebut hal yang tidak dibahas sebagai penyebab utama. Evaluasi pengguna yang kurang memang masalah, tetapi itu bukan penyebab langsung dari pemasaran." },

    { no: "13", grup: "Strategi Pemasaran",
      q: "Intan dan teman-temannya membuat minuman herbal botol berlabel “Segar Rempah” dengan varian jahe, kunyit, dan serai. Produk ini telah uji coba di lingkungan sekolah dan pasar tradisional dekat sekolah, dan mendapat respon positif dari guru, pegawai, dan pembeli umum.\n\nDari uji coba tersebut diperoleh informasi sebagai berikut:\n- Target pasar utama: konsumen usia 30–50 tahun yang peduli kesehatan\n- Lokasi: sekolah, dan lingkungan di sekitar sekolah\n- Kompetitor: produk minuman kemasan pabrikan dengan harga lebih tinggi\n- Keunggulan produk: lebih segar, tanpa pengawet, dan harga lebih terjangkau\n- Kelemahan: belum dikenal luas di luar lingkungan sekolah\n\nBerdasarkan hasil analisis pasar tersebut, strategi pemasaran yang paling tepat untuk meningkatkan penjualan produk “Segar Rempah” adalah ...",
      opsi: [
        "Menjual produk di pasar tradisional dengan sistem paket beli 2 gratis 1",
        "Mencetak brosur yang menarik untuk meningkatkan penjualan ke warga sekolah",
        "Membuat video testimoni manfaat produk dan menjualnya di media sosial",
        "Mengganti nama produk agar terdengar lebih modern dan berbahasa asing",
        "Menurunkan harga hingga 50% tanpa mempertimbangkan biaya produksi"
      ],
      kunci: 2,
      bahas: "Kelemahan produk adalah belum dikenal di luar sekolah, dan target utama adalah orang dewasa yang peduli kesehatan. Video testimoni di media sosial menjangkau wilayah yang lebih luas dan membangun kepercayaan lewat pengalaman pengguna.\nB hanya menjangkau warga sekolah, A dan E tidak menjawab kelemahan itu, dan D tidak menambah nilai bagi target pasar." },

    { no: "14", grup: "Pengembangan Prototipe", tipe: "multi",
      q: "PT Cipta Kreasi Nusantara menciptakan inovasi Meja Lipat 3-in-1, yang dapat diubah menjadi rak, meja kerja, atau meja makan. Setelah rancang gambar selesai, maka dibuatlah protipe pertama untuk menguji konsep ide produk serta masukan dan perbaikan.\nKesimpulan yang di dapat dari uji coba prototipe pertama sebagai berikut:\n- Pada saat difungsikan menjadi meja makan, ukurannya terlalu kecil dan tidak proporsional\n- Meja mudah diubah menjadi rak, tapi kurang stabil saat difungsikan sebagai meja makan\n- Saat berubah fungsi, bagian-bagian tertentu tidak kokoh untuk menopang beban\n- Kesulitan mengubah fungsi meja karena sistem geser yang berat\n\nDari situasi tersebut, langkah manakah yang paling tepat dilakukan dalam tahapan pengembangan prototipe produk? Tentukan jawaban yang benar. Jawaban benar lebih dari satu.",
      opsi: [
        "Melakukan evaluasi pasar secara terbatas untuk mengetahui potensi minat konsumen",
        "Menyesuaikan kembali rancangan ukuran dan proporsi meja agar lebih ergonomis",
        "Meninjau kembali pemilihan bahan dan struktur sambungan untuk meningkatkan stabilitas",
        "Menambahkan fitur estetika agar produk terlihat lebih menarik di pasaran",
        "Menyempurnakan mekanisme perubahan fungsi agar lebih ringan dan mudah digunakan"
      ],
      kunci: [1, 2, 4],
      bahas: "Masalah pada prototipe ada pada ukuran, kestabilan, dan mekanisme perubahan fungsi. Perbaikan yang langsung menjawab masalah itu: rancangan ukuran (B), bahan dan sambungan (C), dan mekanisme perubahan fungsi (E).\nA dan D adalah langkah pemasaran yang sebaiknya dilakukan setelah prototipe stabil, bukan untuk memperbaiki masalah teknis pada tahap prototipe.\nPerlu dicek guru: opsi A bisa dianggap sebagai langkah uji pasar yang wajar." },

    { no: "15", grup: "Pengembangan Desain Produk",
      q: "Perhatikan gambar label produk minuman herbal “Jamoe Si Mbok” untuk kemasan botol berikut ini.\n\n[Teks dari label] Jamoe Si Mbok — Varian BERAS KENCUR — Komposisi: Beras, Kencur, Gula Jawa — 300 ml — Baik dikonsumsi sebelum: 15 Mei 2026\n\nDari gambar label tersebut, penerapan yang paling tepat pada kemasan produk minuman herbal “Jamoe Si Mbok” adalah...",
      opsi: [
        "Menempelkan label di bagian tengah botol agar mudah dilihat oleh konsumen",
        "Menempatkan label di bagian bawah botol agar tidak mengganggu tampilan warna minuman",
        "Menempelkan label dengan posisi miring di depan dan samping botol agar lebih dikenal",
        "Menempelkan label di dalam botol untuk menghindari kerusakan saat pengiriman",
        "Label sebaiknya tidak ditempel pada produk namun ditempel di kardus kemasan botol"
      ],
      kunci: 0,
      bahas: "Catatan: soal ini juga ada di no. 8 dengan pilihan yang sama. Sebaiknya guru memutuskan salah satu saja, supaya tidak membingungkan murid.\nJawaban A: label di bagian tengah mudah terlihat dan terbaca." },

    { no: "16", grup: "Pengembangan Desain Produk",
      q: "Sebuah perusahaan minuman tradisional memasarkan produk barunya dalam kemasan botol. Setelah peluncuran, kemasan dinilai kurang praktis untuk dibawa bepergian, mudah pecah, dan desainnya belum sesuai dengan target pasar muda.\n\nPerbaikan kemasan yang paling tepat berdasarkan kondisi tersebut adalah ...",
      opsi: [
        "Mengganti warna label menjadi cerah dan memperbanyak gambar",
        "Mengganti botol kaca dengan kemasan yang lebih ringan dan tidak mudah pecah, serta desain yang lebih modern",
        "Menambah jumlah botol dalam satu kardus besar",
        "Menaikkan harga jual agar terlihat lebih eksklusif",
        "Mengurangi volume minuman dalam setiap kemasan"
      ],
      kunci: 1,
      bahas: "Masalah kemasan ada pada bahan yang berat dan mudah pecah, serta desain yang tidak sesuai target. Opsi B memperbaiki keduanya.\nA hanya mengubah tampilan. C, D, dan E tidak menyentuh masalah kepraktisan dan keamanan kemasan." },

    // ---------- Pengendalian Mutu & Distribusi ----------
    { no: "17", grup: "Pengendalian Mutu", tipe: "multi",
      q: "Yuli dan Anita memproduksi minuman instan serbuk rasa buah tropis (mango-pineapple) yang terbuat dari sari buah dan gula alami. Produk tersebut dikemas dalam sachet kecil dan dipasarkan secara daring. Pada tiga bulan pertama, produk mendapatkan banyak ulasan positif dari konsumen karena cita rasanya yang segar serta kemasannya yang menarik. Namun, setelah beberapa bulan, muncul sejumlah keluhan seperti bubuk minuman yang menggumpal, aroma yang tidak lagi segar, dan perubahan rasa. Hasil penelusuran menunjukkan bahwa sebagian bahan baku disimpan di tempat lembap dan proses pengemasan dilakukan tanpa tahap penyaringan akhir untuk memisahkan partikel kasar.\n\nBerdasarkan kasus tersebut, manakah tindakan yang tepat untuk perbaikan pengendalian mutu produk minuman serbuk rasa buah tersebut? Tentukan jawaban yang benar. Jawaban benar lebih dari satu.",
      opsi: [
        "Menyimpan bahan baku di tempat yang kering dan bersuhu stabil",
        "Mengurangi penggunaan bahan pengawet agar produk lebih alami",
        "Menghilangkan tahap penyaringan akhir sebelum pengemasan",
        "Melakukan uji kualitas secara berkala terkait aroma, rasa, dan warna",
        "Menambah kemasan yang lebih tebal dan kedap udara untuk melindungi produk"
      ],
      kunci: [0, 3, 4],
      bahas: "Masalah berasal dari kelembapan saat penyimpanan dan tidak adanya penyaringan akhir. Tindakan yang tepat: menyimpan bahan di tempat kering dan stabil (A), uji kualitas berkala (D), dan kemasan kedap udara untuk melindungi produk (E).\nB tidak menjawab masalah kelembapan. C justru memperburuk masalah, karena penyaringan dihapus.\nPerlu dicek guru: opsi B dan C berkaitan dengan mutu, tetapi tidak termasuk tindakan perbaikan yang tepat." },

    { no: "18", grup: "Pengendalian Mutu",
      q: "Kelompok wirausaha Tata Busana memproduksi masker kain tiga lapis untuk kegiatan sosial. Mereka telah menetapkan standar kualitas produk, yaitu jahitan yang rapi dan simetris, ukuran masker sesuai pola (17 × 9 cm), terdiri dari tiga lapis kain dengan saku filter, serta tali elastis yang tidak terlalu longgar. Namun, saat dilakukan pemeriksaan terhadap hasil produksi, dari 100 masker yang dicek, 25 di antaranya ditemukan memiliki ukuran yang tidak konsisten, beberapa hanya terdiri atas dua lapis kain, dan ada yang jahitannya lepas. Tim pengendalian mutu kemudian mencatat dan mengelompokkan jenis cacat pada produk tersebut.\n\nLangkah pengendalian mutu yang paling tepat untuk diterapkan berdasarkan kasus tersebut adalah...",
      opsi: [
        "Mendistribusikan semua produk yang telah dibuat untuk efisiensi waktu",
        "Memperbaiki produk yang rusak setelah dikirim ke konsumen",
        "Mengganti standar kualitas agar lebih fleksibel dan mudah dipenuhi",
        "Menarik seluruh produk yang telah dipasarkan dan menghentikan produksi",
        "Melakukan evaluasi dan perbaikan prosedur produksi sesuai hasil inspeksi"
      ],
      kunci: 4,
      bahas: "Cacat sudah diketahui dan dikelompokkan, jadi langkah berikutnya adalah mengevaluasi proses produksi lalu memperbaikinya sesuai hasil inspeksi (E).\nA dan B membiarkan produk cacat sampai ke konsumen. C menurunkan standar, bukan memperbaiki mutu. D terlalu berlebihan dan tidak perlu untuk cacat sebagian kecil." },

    { no: "19", grup: "Distribusi Produk",
      q: "Weni dan Mira memproduksi dan menjualnya melalui platform marketplace. Produk dikirim langsung ke konsumen melalui jasa ekspedisi. Selain itu, mereka juga menerima pesanan langsung melalui media sosial.\n\nBerdasarkan informasi tersebut, jenis saluran distribusi yang digunakan adalah...",
      opsi: [
        "Distribusi langsung",
        "Distribusi tidak langsung tingkat dua",
        "Distribusi melalui agen tunggal",
        "Distribusi multilevel",
        "Distribusi eksklusif ke toko retail besar"
      ],
      kunci: 0,
      bahas: "Distribusi langsung berarti produk sampai dari produsen ke konsumen tanpa perantara. Marketplace dan media sosial adalah sarana penjualan, sedangkan ekspedisi hanya mengirim barang, bukan perantara penjualan.\nOpsi B, C, D, dan E melibatkan perantara, sehingga tidak sesuai dengan keterangan." },

    // ---------- Peluang Usaha & SWOT ----------
    { no: "20", grup: "Analisis Peluang Usaha",
      q: "Sebuah bengkel otomotif bernama Bengkel Solusi Cepat yang berlokasi di daerah perkotaan mengalami peningkatan permintaan terhadap layanan perbaikan kendaraan. Melihat peluang tersebut, pemilik bengkel, Budi, mulai mempertimbangkan untuk menambah layanan baru berupa perawatan berkala dan modifikasi kendaraan.\n\nBerdasarkan ilustrasi tersebut, hal apa yang sebaiknya menjadi fokus utama Budi dalam menganalisis sumber peluang usaha?",
      opsi: [
        "Membandingkan harga jasa modifikasi dengan bengkel besar di kota lain",
        "Mengandalkan tren modifikasi kendaraan yang viral di media sosial",
        "Menganalisis kebutuhan pelanggan dan tren pasar lokal yang berkembang",
        "Mengurangi jumlah mekanik untuk menekan biaya operasional",
        "Membeli suku cadang dalam jumlah besar untuk mendapatkan diskon"
      ],
      kunci: 2,
      bahas: "Sumber peluang yang paling kuat berasal dari kebutuhan pelanggan dan tren lokal yang sedang berkembang. Itulah dasar keputusan menambah layanan baru.\nA, B, D, dan E tidak menjawab pertanyaan tentang sumber peluang. B juga berisiko karena tren viral bisa cepat hilang." },

    { no: "21", grup: "Analisis SWOT", tipe: "multi",
      q: "Sebuah bisnis lokal bernama “Tirta Botani” memproduksi dan menjual infused water dari buah lokal. Berikut ringkasan dari Business Model Canvas (BMC) mereka:\n\nValue Proposition — Infused water sehat, alami, dan tanpa pengawet\nCustomer Segment — Konsumen gaya hidup sehat di wilayah kota\nChannels — Penjualan online via Instagram & marketplace\nCustomer Relationship — Interaksi langsung dan testimoni\nKey Activities — Produksi, pengemasan, promosi\nKey Resources — Bahan baku buah lokal, botol kaca ramah lingkungan\nKey Partner — Petani buah lokal, kurir lokal\nRevenue Stream — Penjualan produk eceran dan bundling\nCost Structure — Biaya bahan baku, promosi digital, dan logistik\n\nBerdasarkan BMC usaha Tirta Botani, manakah dari pernyataan berikut yang menunjukkan hasil analisis SWOT? Tentukan jawaban yang benar. Jawaban benar lebih dari satu.",
      opsi: [
        "Ketersediaan buah lokal segar merupakan kekuatan dalam produksi",
        "Ketergantungan pada satu jalur distribusi bisa menjadi kelemahan",
        "Distribusi pemasaran melalui media sosial dan marketplace menjadi peluang pasar yang potensial",
        "Biaya kemasan botol kaca yang tinggi merupakan bagian dari strategi pemasaran",
        "Banyaknya pesaing dengan produk sejenis merupakan peluang untuk saling menjaga keunggulan produk"
      ],
      kunci: [0, 1, 2],
      bahas: "Analisis SWOT memetakan kekuatan dan kelemahan dari dalam usaha, serta peluang dan ancaman dari luar.\nA adalah kekuatan internal (buah lokal segar). B adalah kelemahan internal (ketergantungan satu jalur). C adalah peluang eksternal (pasar online).\nD bukan hasil SWOT, melainkan biaya dan strategi. E keliru karena banyak pesaing adalah ancaman, bukan peluang." },

    { no: "22", grup: "Analisis SWOT", tipe: "multi",
      q: "Cahya membuka usaha minuman kekinian berbasis susu dan buah lokal dengan merek “SegarKu”. Usaha ini dijalankan dari rumah dan dipasarkan melalui media sosial. Meskipun belum memiliki izin usaha resmi, produk SegarKu mulai dikenal di lingkungan sekitar karena rasanya yang segar dan unik. Namun, kapasitas produksinya masih terbatas karena alat yang digunakan bersifat manual dan belum modern. Lokasi rumah yang berada di dekat sekolah dan kawasan perumahan padat penduduk menjadi salah satu keunggulan usaha ini. Dalam jangka panjang, pelaku usaha berharap dapat mengembangkan usaha secara lebih profesional dan menjangkau konsumen yang lebih luas.\n\nBerdasarkan informasi tersebut, manakah dari pernyataan berikut ini yang merupakan bagian dari analisis SWOT usaha “SegarKu”? Tentukan jawaban yang benar. Jawaban benar lebih dari satu.",
      opsi: [
        "Promosi melalui media sosial berpotensi menjangkau pelanggan yang lebih luas",
        "Belum memiliki izin usaha resmi merupakan ancaman yang harus segera diatasi",
        "Alat produksi manual membuat proses produksi menjadi kurang efisien",
        "Strategi branding lewat nama unik seperti “SegarKu” dapat menjadi kekuatan",
        "Lokasi yang strategis yang dekat dengan perumahan menjadi ancaman utama"
      ],
      kunci: [0, 1, 2, 3],
      bahas: "A adalah peluang eksternal. B adalah ancaman eksternal. C adalah kelemahan internal. D adalah kekuatan internal.\nE keliru: teks menyebut lokasi dekat sekolah dan perumahan sebagai keunggulan, bukan ancaman." },

    { no: "23", grup: "Proposal Usaha",
      q: "Sekelompok murid SMK jurusan Agribisnis menyusun proposal usaha untuk memproduksi teh herbal daun kelor “Kelora”. Proposal tersebut mencakup:\n- Uraian mengenai kebutuhan masyarakat akan minuman sehat\n- Penjelasan mengenai produk usaha dan keterangan produksi usaha oleh murid SMK berbasis home industri\n- Analisis kekuatan, peluang, dan kelemahan pada bahan lokal dan peluang pasar online\n- Proses produksi yang meliputi pengeringan daun, pengemasan, dan distribusi\n- Pemasaran melalui promosi di media sosial dan bazar sekolah\n\nBerdasarkan data di atas, bagian proposal usaha yang perlu ditambahkan agar menjadi proposal lengkap dan layak dikaji investor adalah...",
      opsi: [
        "Latar belakang dan nama usaha",
        "Strategi distribusi dan bentuk kemasan",
        "Rincian kebutuhan modal dan analisis keuangan",
        "Analisis SWOT dan profil pembimbing usaha",
        "Logo kemasan dan dokumentasi produksi"
      ],
      kunci: 2,
      bahas: "Investor perlu tahu berapa modal yang dibutuhkan dan bagaimana keuangannya. Bagian itu belum ada dalam proposal.\nA sudah tercakup dalam uraian kebutuhan dan penjelasan produk. B dan D sudah disinggung dalam proses produksi, pemasaran, dan analisis." },

    // ---------- HaKI ----------
    { no: "24", grup: "HaKI",
      q: "Pada tahun 2023, Heldy berhasil menciptakan alat penyaring air sederhana yang dapat mengubah air hujan menjadi air layak minum hanya dengan menggunakan bahan-bahan rumah tangga. Alat ini bekerja berdasarkan sistem penyaringan bertingkat dengan tambahan arang aktif dan UV sederhana. Heldy kemudian mengajukan permohonan perlindungan hukum terhadap alat yang ditemukannya agar tidak ditiru oleh pihak lain tanpa izin.\n\nBerdasarkan ilustrasi di atas, bentuk perlindungan HaKI yang sesuai untuk karya Heldy adalah ....",
      opsi: [
        "Hak Cipta",
        "Desain Industri",
        "Merek Dagang",
        "Hak Paten",
        "Rahasia Dagang"
      ],
      kunci: 3,
      bahas: "Alat penyaring dengan sistem kerja teknis yang baru adalah invensi, dan perlindungannya berupa paten.\nHak cipta melindungi karya seni dan tulisan. Desain industri melindungi tampilan luar. Merek melindungi tanda dagang. Rahasia dagang melindungi informasi bisnis yang dirahasiakan, bukan alat yang sudah dipatenkan." },

    { no: "25", grup: "HaKI", tipe: "kat",
      q: "Diah dan Sofyan merintis usaha produk kreatif “Kaligrafika”, yaitu lukisan kaligrafi digital yang bisa dikustom sesuai nama pembeli. Mereka juga membuat desainnya menggunakan aplikasi grafis dan menjualnya melalui platform digital. Dalam sebuah diskusi, mereka menyadari pentingnya melindungi karya dari penjiplakan dengan mendaftarkannya ke sistem Hak Kekayaan Intelektual (HaKI).\n\nTentukan Benar atau Salah pernyataan berikut ini berkaitan dengan jenis dan karakteristik HaKI yang mungkin relevan dengan usaha Kaligrafika.",
      labelKat: ["Benar", "Salah"],
      baris: [
        { t: "Dengan adanya hak cipta, produk Kaligrafika dapat terjamin karyanya", k: 0 },
        { t: "Merek produk dapat digunakan untuk melindungi teknik produksi perusahaan", k: 1 },
        { t: "Desain industri melindungi tampilan luar produk kaligrafika agar tidak ditiru", k: 0 }
      ],
      bahas: "Hak cipta melindungi karya kreatif seperti lukisan dan desain, sehingga pernyataan pertama benar.\nMerek melindungi tanda dagang, bukan teknik produksi. Teknik produksi bisa dilindungi lewat paten atau rahasia dagang, jadi pernyataan kedua salah.\nDesain industri melindungi tampilan produk, sehingga pernyataan ketiga benar.\nPerlu dicek guru: pernyataan ketiga bergantung pada apakah tampilan kaligrafi dianggap desain industri atau karya hak cipta." },

    { no: "26", grup: "HaKI", tipe: "kat",
      q: "Yuli menciptakan sebuah lagu orisinal dan mengunggahnya di platform berbagi video. Beberapa bulan kemudian, temannya, Ikhsan, memakai lagu tersebut sebagai latar musik untuk video promosi produknya tanpa meminta izin. Lagu itu diedit dengan cara dipotong, diberi efek tambahan, dan tidak mencantumkan nama Yuli sebagai penciptanya. Selain itu, Ikhsan juga mengunggah ulang video tersebut ke akun bisnisnya dan mengklaim lagu itu sebagai hasil karya timnya.\n\nBerdasarkan informasi tersebut, tentukan Benar atau Salah pernyataan berikut ini mengenai pelanggaran HaKI.",
      labelKat: ["Benar", "Salah"],
      baris: [
        { t: "Karya yang digunakan Ikhsan tanpa izin dan tanpa mencantumkan nama pencipta merupakan pelanggaran HaKI", k: 0 },
        { t: "Video yang diunggah Ikhsan sudah diedit dan tidak mirip dengan versi asli sehingga tidak termasuk pelanggaran HaKI", k: 1 },
        { t: "Video yang diunggah hanya digunakan oleh teman sendiri sehingga tidak perlu izin dan bukan sebagai pelanggaran", k: 1 }
      ],
      bahas: "Pernyataan pertama benar: lagu dipakai tanpa izin dan nama pencipta tidak dicantumkan, itu termasuk pelanggaran hak cipta.\nPernyataan kedua salah: mengedit dan mengunggah karya orang lain tetap bisa termasuk pelanggaran, karena yang dilindungi adalah hak pencipta, bukan hanya kemiripan.\nPernyataan ketiga salah: video diunggah ke akun bisnis dan dipakai untuk promosi, bukan hanya untuk teman sendiri." },

    // ---------- Keuangan ----------
    { no: "27", grup: "Laporan Keuangan", tipe: "multi",
      q: "Perhatikan laporan biaya produksi usaha minuman dari sebuah UMKM berikut.\n\nBahan baku: Rp4.000.000,00\nBahan kemasan dan label: Rp1.200.000,00\nTenaga kerja langsung: Rp2.000.000,00\nBiaya overhead: Rp800.000,00\nJumlah produksi: 800 botol\n\nApabila UMKM menargetkan laba 30–40% dari total biaya produksi, berapakah harga jual per botol yang sebaiknya ditetapkan? Tentukan jawaban yang benar. Jawaban benar lebih dari satu.",
      opsi: [
        "Rp11.250,00",
        "Rp12.500,00",
        "Rp13.700,00",
        "Rp14.000,00",
        "Rp15.500,00"
      ],
      kunci: [2, 3],
      bahas: "Total biaya produksi: 4.000.000 + 1.200.000 + 2.000.000 + 800.000 = 8.000.000.\nBiaya per botol: 8.000.000 ÷ 800 = 10.000.\nLaba 30%: 3.000 per botol, harga jual 13.000.\nLaba 40%: 4.000 per botol, harga jual 14.000.\nJadi harga yang sesuai berada di antara 13.000 dan 14.000. Opsi C (13.700) dan D (14.000) benar." },

    { no: "28", grup: "Laporan Keuangan",
      q: "Perhatikan transaksi usaha jasa “Servis Elektronik Cahaya” selama bulan Mei 2025:\n\n1 Mei   — Pemilik menyetor modal tunai sebesar Rp15.000.000,00\n3 Mei   — Menyewa tempat usaha dan langsung dibayar tunai Rp1.500.000,00\n7 Mei   — Melayani jasa servis dan menerima pembayaran tunai Rp6.000.000,00\n10 Mei  — Membeli perlengkapan servis tunai Rp1.000.000,00\n15 Mei  — Melayani jasa servis secara kredit Rp4.000.000,00\n20 Mei  — Membayar gaji karyawan Rp2.000.000,00\n25 Mei  — Menerima pelunasan jasa servis dari pelanggan Rp2.000.000,00\n\nBerdasarkan transaksi tersebut, berapa saldo akhir kas untuk bulan Mei 2025?",
      opsi: [
        "Rp14.500.000,00",
        "Rp16.500.000,00",
        "Rp17.000.000,00",
        "Rp18.500.000,00",
        "Rp20.000.000,00"
      ],
      kunci: 3,
      bahas: "Hanya transaksi tunai dan pelunasan yang mengubah kas.\nKas masuk: 15.000.000 + 6.000.000 + 2.000.000 = 23.000.000.\nKas keluar: 1.500.000 + 1.000.000 + 2.000.000 = 4.500.000.\nSaldo akhir: 23.000.000 − 4.500.000 = 18.500.000.\nTransaksi kredit tanggal 15 Mei belum menambah kas sampai pelunasan." },

    { no: "29", grup: "Laporan Keuangan",
      q: "Usaha minuman kopi susu kekinian bernama “Kopi Kita” mencatat laporan keuangan bulan Mei sebagai berikut:\n\nPersediaan awal bahan baku: Rp1.000.000,00\nPembelian bahan baku selama Mei: Rp3.000.000,00\nPersediaan akhir bahan baku: Rp500.000,00\nPendapatan penjualan: Rp7.500.000,00\nBiaya operasional (gaji, listrik, sewa): Rp2.000.000,00\n\nBerdasarkan data tersebut, berapakah laba bersih yang diperoleh usaha Kopi Kita pada bulan Mei?",
      opsi: [
        "Rp1.000.000,00",
        "Rp2.000.000,00",
        "Rp2.500.000,00",
        "Rp3.000.000,00",
        "Rp3.500.000,00"
      ],
      kunci: 1,
      bahas: "Bahan baku yang dipakai: 1.000.000 + 3.000.000 − 500.000 = 3.500.000 (ini adalah harga pokok penjualan).\nLaba kotor: 7.500.000 − 3.500.000 = 4.000.000.\nLaba bersih: 4.000.000 − 2.000.000 = 2.000.000." }
  ]
});