/* Mapel: Matematika (Wajib) TKA 2025
   Sumber: SOAL_TKA_Matematika_SMA_2025_Umum.pdf
   Berisi 20 soal. Belum masuk: no. 9, 10, 11, 13, 15 (menunggu verifikasi gambar).
   Field "img" mengacu ke data/img/. Kunci dan pembahasan disusun dari analisis,
   bukan dari dokumen resmi. Soal yang perlu dicek guru ditandai di pembahasan. */
(window.MAPEL = window.MAPEL || []).push({
  id: "matematika-2025",
  nama: "Matematika (Wajib)",
  tahun: 2025,
  deskripsi: "Bilangan, fungsi, barisan, pertidaksamaan, transformasi, bangun ruang, trigonometri, dan data.",
  teks: [],

  soal: [
    // ---------- Bilangan dan himpunan (no. 1–3) ----------
    { no: "1", grup: "Bilangan dan Himpunan",
      q: "Diberikan tiga himpunan bilangan sebagai berikut:<br>A = {x | x &lt; 6, x ∈ Bilangan Asli}<br>B = {x | x bilangan genap, x ∈ Bilangan Cacah}<br>C = {x | x ≤ 10, x ∈ Bilangan Prima}<br><br>Berdasarkan himpunan-himpunan tersebut, hasil dari (A ∩ B) ∪ C adalah ....",
      opsi: ["{2, 3, 5, 7}", "{0, 2, 3, 5, 7}", "{2, 3, 4, 5, 7}", "{0, 2, 3, 4, 5, 7}", "{2, 3, 4, 5, 7, 10}"],
      kunci: 2,
      bahas: "A = {1, 2, 3, 4, 5} karena bilangan asli dimulai dari 1.\nA ∩ B = {2, 4}, yaitu bilangan genap di A.\nC = {2, 3, 5, 7}.\n(A ∩ B) ∪ C = {2, 3, 4, 5, 7}." },

    { no: "2", grup: "Bilangan dan Himpunan",
      q: "Bentuk sederhana dari (3<sup>2/3</sup> × 8<sup>3/2</sup>) ÷ (2<sup>5/2</sup> × 9<sup>5/6</sup>) adalah ....",
      opsi: ["1/42", "2/3", "4/3", "6", "12"],
      kunci: 2,
      bahas: "Ubah ke bilangan prima:\n8<sup>3/2</sup> = 2<sup>9/2</sup> dan 9<sup>5/6</sup> = 3<sup>5/3</sup>.\nPembilang: 3<sup>2/3</sup> × 2<sup>9/2</sup>. Penyebut: 2<sup>5/2</sup> × 3<sup>5/3</sup>.\nHasil: 2<sup>9/2 − 5/2</sup> × 3<sup>2/3 − 5/3</sup> = 2² × 3<sup>−1</sup> = 4/3." },

    { no: "3", grup: "Bilangan dan Himpunan", tipe: "kat",
      q: "Operasi biner ⊙ didefinisikan sebagai a ⊙ b = ((a − b)² + 2ab) / (a + b) untuk setiap bilangan real tidak negatif a dan b. Jika a ⊙ 2 = 5, tentukan Benar atau Salah pada setiap pernyataan berikut!",
      labelKat: ["Benar", "Salah"],
      baris: [
        { t: "a merupakan kelipatan dari 3.", k: 0 },
        { t: "a merupakan bilangan prima.", k: 1 },
        { t: "a ⊙ 0 = 6.", k: 0 }
      ],
      bahas: "a ⊙ 2 = (a² + 4) / (a + 2) = 5, sehingga a² − 5a − 6 = 0, yaitu (a − 6)(a + 1) = 0.\nKarena a tidak negatif, a = 6.\nPernyataan 1 benar (6 kelipatan 3). Pernyataan 2 salah (6 bukan prima). Pernyataan 3 benar: a ⊙ 0 = a²/a = a = 6." },

    // ---------- Fungsi, barisan, dan pertidaksamaan (no. 4–8) ----------
    { no: "4", grup: "Fungsi dan Invers",
      q: "Seorang peneliti memodelkan peningkatan suhu akibat pemanasan global dengan fungsi linear y = 0,02x − 39,9, dengan x mewakili tahun dan y mewakili peningkatan suhu dalam derajat Celsius. Pada tahun berapakah peningkatan suhu diperkirakan mencapai 0,7°C?",
      opsi: ["Tahun 2000", "Tahun 2003", "Tahun 2025", "Tahun 2030", "Tahun 2345"],
      kunci: 3,
      bahas: "Gunakan invers: x = (y + 39,9) / 0,02. Untuk y = 0,7: x = 40,6 / 0,02 = 2030.\nCek: 0,02 × 2030 − 39,9 = 0,7." },

    { no: "5", grup: "Fungsi dan Invers",
      q: "Tempat Les Pintarku memberikan potongan biaya kursus kepada 50 pendaftar pertama. Biaya setelah potongan dihitung dengan y = 0,9x, dengan x adalah biaya mula-mula dan y adalah biaya setelah potongan.<br><br>Bagi siswa berprestasi, tambahan potongan g(y) berlaku: g(y) = 0,7y jika nilai rapor di atas 90, dan g(y) = 0,8y jika nilai rapor 85–90.<br><br>Fira merupakan pendaftar ke-50 dan membayar Rp180.000,00. Setelah itu, datang empat siswa lain (pendaftar ke-51 sampai 54):<br>• Andi: nilai rapor 90, uang Rp285.000<br>• Budi: nilai rapor 92, uang Rp286.000<br>• Cici: nilai rapor 89, uang Rp280.000<br>• Dini: nilai rapor 95, uang Rp287.000<br><br>Dengan uang yang dimiliki, siapakah siswa yang pasti dapat mengikuti kursus?",
      opsi: ["Dini", "Dini dan Budi", "Dini, Budi dan Andi", "Dini, Cici, Budi dan Andi", "Cici dan Andi"],
      kunci: 3,
      bahas: "Fira mendapat potongan 10% sebagai pendaftar ke-50: 0,9x = 180.000, sehingga x = 200.000. Pendaftar setelahnya tidak mendapat potongan 10%, jadi biaya mula-mula tetap 200.000.\nAndi (rapor 90, 85–90): 0,8 × 200.000 = 160.000, uang cukup.\nBudi (rapor 92): 0,7 × 200.000 = 140.000, uang cukup.\nCici (rapor 89): 0,8 × 200.000 = 160.000, uang cukup.\nDini (rapor 95): 0,7 × 200.000 = 140.000, uang cukup.\nKeempatnya pasti dapat mengikuti kursus." },

    { no: "6", grup: "Barisan dan Deret",
      q: "Pada pertandingan sepak bola Indonesia melawan Jepang, kelompok pendukung membentuk koreo dengan kertas berwarna. Jumlah kertas di barisan kursi paling bawah adalah 400 lembar, barisan kedua 550 lembar, dan seterusnya bertambah dengan pola penambahan yang sama.<br><br>Jika pola tersebut berlaku sampai baris kursi ketujuh, berapa banyak penonton yang memegang kertas koreo di baris ke-5?",
      opsi: ["700 orang", "850 orang", "1.000 orang", "1.150 orang", "1.300 orang"],
      kunci: 2,
      bahas: "Barisan aritmetika dengan a = 400 dan beda b = 550 − 400 = 150.\nU₅ = a + 4b = 400 + 600 = 1.000." },

    { no: "7", grup: "Barisan dan Deret", tipe: "multi",
      q: "Kadar asam urat seorang pasien tercatat 13 mg/dL pada hari pertama. Obat menurunkan kadar asam urat sebesar 20% setiap hari secara konsisten. Pasien merasa lebih nyaman saat kadar di bawah 7 mg/dL, dan dianggap sembuh secara klinis jika kadar kurang dari 5 mg/dL.<br><br>Pada hari keberapa pasien merasa nyaman namun belum dianggap sembuh secara klinis? Klik pada setiap jawaban benar! Jawaban benar lebih dari satu.",
      opsi: ["Hari ke-2", "Hari ke-3", "Hari ke-4", "Hari ke-5", "Hari ke-6"],
      kunci: [2, 3],
      bahas: "Kadar hari ke-n = 13 × 0,8^(n−1).\nHari 1: 13. Hari 2: 10,4. Hari 3: 8,32 (belum di bawah 7).\nHari 4: 6,656 (nyaman, belum di bawah 5). Hari 5: 5,3248 (nyaman, belum di bawah 5).\nHari 6: 4,26 (sudah sembuh). Jadi hari ke-4 dan ke-5." },

    { no: "8", grup: "Sistem Pertidaksamaan",
      q: "Daerah yang diarsir pada gambar dibatasi garis yang melalui A(−4, 0), B(0, 2), dan C(2, 0). Daerah diarsir merupakan himpunan penyelesaian dari sistem pertidaksamaan ....",
      opsi: [
        "x − 2y ≥ −4; x + y ≤ 2; x ≥ 0; y ≥ 0",
        "x − 2y ≥ −4; x + y ≥ 2; y ≥ 0",
        "x − 2y ≥ −4; x + y ≤ 2; y ≥ 0",
        "2x − y ≤ 4; x + y ≤ 2; y ≥ 0",
        "2x − y ≥ 4; x + y ≤ 2; x ≥ 0; y ≥ 0"
      ],
      kunci: 2,
      bahas: "Garis AB: x − 2y = −4. Daerah berada di sisi titik asal, sehingga x − 2y ≥ −4.\nGaris BC: x + y = 2. Daerah di sisi titik asal, sehingga x + y ≤ 2.\nDaerah di atas sumbu x, sehingga y ≥ 0. Batas x ≥ 0 tidak diperlukan." },

    // ---------- Geometri dan trigonometri (no. 12, 14, 16–20) ----------
    { no: "12", grup: "Kesebangunan",
      q: "Diketahui trapesium KLMN dan NMPO sebangun, dengan KL = 32 cm, KN = 16 cm, dan OP = 18 cm. Sisi KL, NM, dan OP sejajar. Panjang sisi LM adalah ....",
      opsi: ["6√5 cm", "8√5 cm", "9√5 cm", "10√5 cm", "14√5 cm"],
      kunci: 1,
      bahas: "Karena sebangun, NM² = KL × OP = 32 × 18 = 576, sehingga NM = 24 cm.\nSelisih alas KL − NM = 8 cm. Tinggi KN = 16 cm.\nLM = √(8² + 16²) = √320 = 8√5 cm." },

    { no: "14", grup: "Transformasi Geometri",
      q: "Titik B direfleksikan oleh garis y = 1, kemudian dirotasi dengan pusat O(0, 0) sebesar 180° searah jarum jam. Bayangan akhirnya adalah B′(−4, 1). Gambar titik B yang sesuai adalah ....",
      opsi: ["B(4, −1)", "B(4, 3)", "B(−6, −1)", "B(−2, −1)", "B(2, 4)"],
      kunci: 1,
      bahas: "Refleksi terhadap y = 1 memetakan (x, y) ke (x, 2 − y). Rotasi 180° memetakan (x, y) ke (−x, −y).\nJadi B′ = (−x, −(2 − y)) = (−x, y − 2) = (−4, 1), sehingga x = 4 dan y = 3.\nB(4, 3). Cek: refleksi menjadi (4, −1), rotasi menjadi (−4, 1)." },

    { no: "16", grup: "Bangun Datar dan Keliling",
      q: "Arif, seorang desainer interior, akan membuat desain ornamen jam dinding berbentuk gabungan segitiga dan lingkaran, dengan ukuran seperti pada gambar.<br>Di sekeliling ornamen jam tersebut akan ditempel kayu tipis untuk menambah efek tiga dimensi. Jika Arif membuat dua buah ornamen jam dinding untuk dijadikan model contoh, berapa panjang kayu tipis yang ia perlukan?",
      img: "ornamen-jam.webp",
      opsi: ["322,8 cm", "352,8 cm", "362,8 cm", "382,8 cm", "445,6 cm"],
      kunci: 3,
      bahas: "Keliling satu ornamen: dua sisi miring segitiga (masing-masing 65 cm, dari alas 50 dan tinggi 60), ditambah bagian alas di luar setengah lingkaran (2 × 15 = 30 cm), ditambah busur setengah lingkaran berdiameter 20 cm (π × 10 ≈ 31,4 cm).\nKeliling satu = 130 + 30 + 31,4 = 191,4 cm.\nDua ornamen: 2 × 191,4 = 382,8 cm.\nCatatan: tinggi segitiga 60 cm diperoleh dari tinggi total 70 cm dikurangi kedalaman setengah lingkaran 10 cm." },

    { no: "17", grup: "Bangun Datar dan Keliling",
      q: "Panjang salah satu diagonal suatu layang-layang adalah 20 cm. Berapakah keliling layang-layang tersebut?<br><br>Putuskan apakah pernyataan (1) dan pernyataan (2) berikut cukup untuk menjawab permasalahan dalam kotak tersebut:<br>(1) Luas layang-layang adalah 160 cm².<br>(2) Panjang salah satu sisi layang-layang adalah 10 cm.",
      img: "layang-layang.webp",
      opsi: [
        "Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.",
        "Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.",
        "DUA pernyataan BERSAMA-SAMA cukup, tetapi SATU pernyataan SAJA tidak cukup.",
        "Pernyataan (1) SAJA cukup, dan pernyataan (2) SAJA cukup.",
        "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      ],
      kunci: 1,
      bahas: "Pernyataan (1): luas = (d₁ × d₂) / 2 = 160, sehingga d₂ = 16 cm. Namun letak perpotongan diagonal belum diketahui, sehingga sisi-sisinya tidak bisa dihitung. Tidak cukup.\nPernyataan (2): satu sisi 10 cm. Diagonal horizontal 16 cm terbagi dua sama oleh diagonal 20 cm, sehingga sisi 10 cm membagi diagonal 20 cm menjadi 6 dan 14. Keliling = 2(10 + √260) ≈ 52,2 cm. Cukup.\nJawabannya: pernyataan (2) saja cukup." },

    { no: "18", grup: "Bangun Ruang",
      q: "Pak Omar adalah distributor helm. Ia akan mengirim helm menggunakan bak truk yang berukuran 240 cm × 150 cm × 120 cm. Setiap kardus helm berukuran 20 cm × 20 cm × 30 cm. Posisi atas kardus tidak boleh dibalik. Semua kardus disusun menghadap depan atau menghadap samping. Jika masih ada ruang kosong, penyusunan dengan posisi berbeda untuk mengisi ruang tersebut boleh dilakukan.<br><br>Berdasarkan posisi susunan tersebut, berapa paling banyak kardus helm yang dapat dimuat di truk tersebut?",
      img: "kardus-helm.webp",
      opsi: ["336 kardus", "360 kardus", "384 kardus", "432 kardus", "504 kardus"],
      kunci: 1,
      bahas: "Volume bak = 240 × 150 × 120 = 4.320.000 cm³. Volume satu kardus = 20 × 20 × 30 = 12.000 cm³. Batas maksimal = 4.320.000 / 12.000 = 360 kardus. Jadi 384, 432, dan 504 mustahil.\nSusunan awal dengan alas 20 × 20 dan tinggi 30 menghasilkan 12 × 7 = 84 kardus per lapisan, dan 4 lapisan = 336 kardus. Sisa ruang diisi dengan posisi berbeda (alas 20 × 30, tinggi 20): 12 × 5 = 60 kardus per lapisan, 6 lapisan. Total maksimal 360 kardus." },

    { no: "19", grup: "Bangun Ruang",
      q: "Bu Sita membuat hiasan lampu tidur berbentuk tabung berongga (tanpa alas dan tutup) dengan diameter 14 cm dan tinggi 25 cm. Bagian luar hiasan dilapisi stiker vinil motif bunga. Stiker vinil dijual dalam lembaran seharga Rp9.000,00 per lembar, dan satu lembar menutupi area 300 cm². Jika Bu Sita membuat 8 hiasan lampu tidur, berapa biaya minimal untuk membeli stiker vinil?",
      opsi: ["Rp72.000,00", "Rp108.000,00", "Rp252.000,00", "Rp270.000,00", "Rp288.000,00"],
      kunci: 3,
      bahas: "Tabung tanpa alas dan tutup hanya memiliki selimut: L = π × d × t = (22/7) × 14 × 25 = 1.100 cm².\nUntuk 8 hiasan: 8 × 1.100 = 8.800 cm².\n8.800 / 300 = 29,3, dibulatkan ke atas menjadi 30 lembar.\nBiaya: 30 × Rp9.000 = Rp270.000,00." },

    { no: "20", grup: "Trigonometri", tipe: "kat",
      q: "Perhatikan segitiga ABC dengan titik D pada sisi BC sehingga AD tegak lurus BC. Diketahui AB = 4 cm, DC = AB, dan cos α = 3/5, dengan α adalah sudut di A antara AD dan AC. Tentukan Benar atau Salah untuk setiap pernyataan berikut!",
      labelKat: ["Benar", "Salah"],
      baris: [
        { t: "sin β = √7 / 4, dengan β adalah sudut di B", k: 1 },
        { t: "cos β = √7 / 5, dengan β adalah sudut di B", k: 1 },
        { t: "tan β = 3√7 / 7, dengan β adalah sudut di B", k: 0 }
      ],
      bahas: "Pada segitiga ADC siku-siku di D: sin α = DC / AC = 4/5, sehingga AC = 5, dan AD = 3.\nPada segitiga ABD siku-siku di D: BD = √(16 − 9) = √7.\nsin β = AD / AB = 3/4, jadi pernyataan 1 salah.\ncos β = BD / AB = √7 / 4, jadi pernyataan 2 salah.\ntan β = AD / BD = 3/√7 = 3√7 / 7, jadi pernyataan 3 benar." },

    // ---------- Data dan peluang (no. 21–25) ----------
    { no: "21", grup: "Data dan Diagram", tipe: "multi",
      q: "Berikut data banyak lulusan tiga sekolah swasta milik Yayasan Cahaya tahun 2017–2025, dibaca dari grafik garis:<br><br><table style='border-collapse:collapse;font-size:14px'><tr><th style='border:1px solid #888;padding:4px 8px'>Tahun</th><th style='border:1px solid #888;padding:4px 8px'>SMA 1 Bintang</th><th style='border:1px solid #888;padding:4px 8px'>SMA 2 Bintang</th><th style='border:1px solid #888;padding:4px 8px'>SMK Kejora</th></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2017</td><td style='border:1px solid #888;padding:4px 8px'>300</td><td style='border:1px solid #888;padding:4px 8px'>255</td><td style='border:1px solid #888;padding:4px 8px'>250</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2018</td><td style='border:1px solid #888;padding:4px 8px'>310</td><td style='border:1px solid #888;padding:4px 8px'>260</td><td style='border:1px solid #888;padding:4px 8px'>285</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2019</td><td style='border:1px solid #888;padding:4px 8px'>310</td><td style='border:1px solid #888;padding:4px 8px'>290</td><td style='border:1px solid #888;padding:4px 8px'>300</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2020</td><td style='border:1px solid #888;padding:4px 8px'>300</td><td style='border:1px solid #888;padding:4px 8px'>310</td><td style='border:1px solid #888;padding:4px 8px'>320</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2021</td><td style='border:1px solid #888;padding:4px 8px'>308</td><td style='border:1px solid #888;padding:4px 8px'>315</td><td style='border:1px solid #888;padding:4px 8px'>320</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2022</td><td style='border:1px solid #888;padding:4px 8px'>310</td><td style='border:1px solid #888;padding:4px 8px'>320</td><td style='border:1px solid #888;padding:4px 8px'>325</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2023</td><td style='border:1px solid #888;padding:4px 8px'>315</td><td style='border:1px solid #888;padding:4px 8px'>300</td><td style='border:1px solid #888;padding:4px 8px'>320</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2024</td><td style='border:1px solid #888;padding:4px 8px'>350</td><td style='border:1px solid #888;padding:4px 8px'>300</td><td style='border:1px solid #888;padding:4px 8px'>350</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2025</td><td style='border:1px solid #888;padding:4px 8px'>360</td><td style='border:1px solid #888;padding:4px 8px'>300</td><td style='border:1px solid #888;padding:4px 8px'>400</td></tr></table><br>Pernyataan mana saja yang tepat mendeskripsikan banyak lulusan di ketiga sekolah tersebut? Pilih setiap jawaban benar! Jawaban benar lebih dari satu.",
      opsi: [
        "Banyak lulusan SMA 1 Bintang selalu bertambah mulai tahun 2020.",
        "Pada tahun 2017–2020, banyak lulusan dari ketiga sekolah selalu bertambah.",
        "Banyak lulusan SMK Kejora konsisten naik selama lima tahun terakhir.",
        "Banyak lulusan SMA 2 Bintang tetap sama selama tiga tahun terakhir.",
        "Banyak lulusan ketiga sekolah di tahun 2023 menurun dibanding tahun sebelumnya."
      ],
      kunci: [0, 1, 3, 4],
      bahas: "Total per tahun: 2017 = 805, 2018 = 855, 2019 = 900, 2020 = 930, 2022 = 955, 2023 = 935.\nA benar: SMA 1 Bintang naik sejak 2020 (300, 308, 310, 315, 350, 360) ... perhatikan 2020 ke 2021 naik, dan seterusnya naik.\nB benar: total terus bertambah dari 2017 sampai 2020.\nC salah: SMK Kejora turun dari 325 (2022) ke 320 (2023).\nD benar: SMA 2 Bintang bernilai 300 pada 2023, 2024, dan 2025.\nE benar: total turun dari 955 (2022) ke 935 (2023).\nPerlu dicek guru: nilai dibaca dari grafik, jadi sebaiknya dicocokkan dengan gambar asli." },

    { no: "22", grup: "Data dan Peluang", tipe: "single",
      q: "Di sebuah bazar sekolah terdapat 5 stan yang masing-masing dikelola pedagang berbeda (A, B, C, D, dan E). Stan pedagang C ingin berada tepat di antara pedagang A dan D. Banyak susunan stan yang sesuai keinginan pedagang C adalah ....",
      opsi: ["6 susunan", "12 susunan", "120 susunan", "240 susunan", "720 susunan"],
      kunci: 1,
      bahas: "Tafsir yang digunakan: A, C, dan D berurutan dengan C di tengah (ACD atau DCA), sehingga ada 2 cara menyusun blok tersebut.\nBlok ACD (atau DCA) dan dua stan lain (B dan E) membentuk 3 unit, yang bisa disusun dalam 3! = 6 cara.\nTotal: 2 × 6 = 12 susunan.\nPerlu dicek guru: soal ini bisa ditafsirkan berbeda, jadi sebaiknya guru memastikan maksud soal." },

    { no: "23", grup: "Data dan Peluang", tipe: "kat",
      q: "Perhatikan tabel distribusi jumlah pengunjung perpustakaan Desa Sukamaju pada minggu ke-1 Januari. Diketahui: (1) rata-rata pengunjung setiap hari adalah 6 orang, (2) setiap hari buka (Senin–Jumat) ada minimal dua pengunjung dan tidak pernah lebih dari 10, dan (3) median data adalah 6.<br><br>Senin = 4, Selasa = p, Rabu = 5, Kamis = r, Jumat = 6.<br><br>Tentukan Benar atau Salah pada setiap pernyataan berikut!",
      labelKat: ["Benar", "Salah"],
      baris: [
        { t: "Banyak pengunjung pada hari Selasa pasti selalu lebih banyak dibandingkan hari lain.", k: 1 },
        { t: "Banyak pengunjung pada hari Kamis pasti lebih dari 5 orang.", k: 0 },
        { t: "Banyak pengunjung pada hari Jumat dan Kamis mungkin saja sama.", k: 0 }
      ],
      bahas: "Rata-rata 6 berarti total 30, sehingga p + r = 15.\nMedian 6 dengan lima data menuntut data urut ketiga bernilai 6. Pasangan (p, r) yang memenuhi: (6, 9), (7, 8), (8, 7), (9, 6). Pasangan (5, 10) dan (10, 5) gagal karena median menjadi 5.\nPernyataan 1 salah: pada (6, 9) atau (7, 8), Selasa tidak selalu terbanyak.\nPernyataan 2 benar: r selalu 6 sampai 9, sehingga lebih dari 5.\nPernyataan 3 benar: pada (9, 6), Kamis = Jumat = 6." },

    { no: "24", grup: "Data dan Peluang", tipe: "single",
      q: "Dalam rangka memperingati Tahun Baru Imlek, sebuah supermarket membuat kotak undian berisi 60 angpao. Kupon belanja: 15 angpao berisi kupon Rp25.000,00 dan 12 angpao berisi kupon Rp50.000,00. Peralatan rumah tangga: 10 angpao set sendok-garpu, 8 angpao pemanas air, dan sisanya angpao kosong.<br><br>Rini adalah orang pertama yang mengambil satu angpao secara acak. Berapakah peluang Rini mengambil angpao yang kosong?",
      opsi: ["1/15", "1/5", "1/4", "1/3", "5/11"],
      kunci: 2,
      bahas: "Angpao kosong = 60 − (15 + 12 + 10 + 8) = 15.\nPeluang = 15 / 60 = 1/4." },

    { no: "25", grup: "Data dan Peluang", tipe: "single",
      q: "Sebuah kantin sekolah mengadakan undian. Kertas di dalam kotak: 6 kertas minuman gratis, 4 kertas makanan gratis, dan 5 kertas kosong. Hanya kertas kosong yang selalu dikembalikan ke dalam kotak. Ani adalah orang kelima yang mengambil kertas.<br><br>Kertas apa sajakah yang mungkin sudah terambil oleh orang-orang sebelumnya sehingga peluang Ani memperoleh minuman atau makanan adalah 2/3?",
      opsi: [
        "1 minuman gratis, 1 makanan gratis, dan 2 kertas kosong.",
        "2 makanan gratis dan 2 minuman gratis.",
        "2 minuman gratis dan 2 kertas kosong.",
        "4 kertas kosong.",
        "4 minuman gratis."
      ],
      kunci: 3,
      bahas: "Kertas kosong selalu dikembalikan, jadi tetap ada 5 kertas kosong. Peluang Ani = G / (G + 5), dengan G jumlah kertas gratis yang tersisa.\nAgar 2/3, G = 10, yaitu tidak ada kertas gratis yang terambil.\nHanya opsi D yang tidak mengambil kertas gratis: 4 kertas kosong, yang dikembalikan." }
  ]
});