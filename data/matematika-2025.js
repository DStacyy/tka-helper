/* Mapel: Matematika (Wajib) TKA 2025
   Sumber: SOAL_TKA_Matematika_SMA_2025_Umum.pdf
   Baru 17 dari 25 soal. Soal yang butuh gambar atau pengecekan ditunda:
   no. PDF 9, 10, 11, 13, 15, 16, 17, 18.
   Nilai grafik (soal 21) dibaca dari gambar dan dituliskan di teks soal.
   Kunci dan pembahasan disusun dari analisis, bukan dari dokumen resmi. */
(window.MAPEL = window.MAPEL || []).push({
  id: "matematika-2025",
  nama: "Matematika (Wajib)",
  tahun: 2025,
  deskripsi: "Bilangan, pangkat, fungsi, barisan, pertidaksamaan, transformasi, bangun ruang, trigonometri, statistik, dan peluang.",
  teks: [],

  soal: [
    // ---------- Bilangan dan himpunan ----------
    { no: "1", grup: "Bilangan dan Himpunan",
      q: "Diberikan tiga himpunan bilangan sebagai berikut:<br>A = {x | x &lt; 6, x ∈ Bilangan Asli}<br>B = {x | x bilangan genap, x ∈ Bilangan Cacah}<br>C = {x | x ≤ 10, x ∈ Bilangan Prima}<br><br>Berdasarkan himpunan-himpunan tersebut, hasil dari (A ∩ B) ∪ C adalah ....",
      opsi: ["{2, 3, 5, 7}", "{0, 2, 3, 5, 7}", "{2, 3, 4, 5, 7}", "{0, 2, 3, 4, 5, 7}", "{2, 3, 4, 5, 7, 10}"],
      kunci: 2,
      bahas: "A = {1, 2, 3, 4, 5} karena bilangan asli dimulai dari 1.\nA ∩ B mengambil bilangan genap yang ada di A, yaitu {2, 4}.\nC = {2, 3, 5, 7}.\n(A ∩ B) ∪ C = {2, 3, 4, 5, 7}.\nCatatan: himpunan B pada soal tidak memuat batas atas, tetapi irisan dengan A hanya membutuhkan anggota dalam A, sehingga hasilnya tidak terpengaruh." },

    { no: "2", grup: "Bilangan dan Himpunan",
      q: "Bentuk sederhana dari (3<sup>2/3</sup> × 8<sup>3/2</sup>) ÷ (2<sup>5/2</sup> × 9<sup>5/6</sup>) adalah ....",
      opsi: ["1/42", "2/3", "4/3", "6", "12"],
      kunci: 2,
      bahas: "Ubah bilangan ke pangkat bilangan prima:\n8<sup>3/2</sup> = (2³)<sup>3/2</sup> = 2<sup>9/2</sup>\n9<sup>5/6</sup> = (3²)<sup>5/6</sup> = 3<sup>5/3</sup>\n\nPembilang: 3<sup>2/3</sup> × 2<sup>9/2</sup>\nPenyebut: 2<sup>5/2</sup> × 3<sup>5/3</sup>\n\nHasil: 2<sup>9/2 − 5/2</sup> × 3<sup>2/3 − 5/3</sup> = 2² × 3<sup>−1</sup> = 4/3." },

    { no: "3", grup: "Bilangan dan Himpunan", tipe: "kat",
      q: "Operasi biner ⊙ didefinisikan sebagai a ⊙ b = ((a − b)² + 2ab) / (a + b) untuk setiap bilangan real tidak negatif a dan b. Jika a ⊙ 2 = 5, tentukan Benar atau Salah pada setiap pernyataan berikut!",
      labelKat: ["Benar", "Salah"],
      baris: [
        { t: "a merupakan kelipatan dari 3.", k: 0 },
        { t: "a merupakan bilangan prima.", k: 1 },
        { t: "a ⊙ 0 = 6.", k: 0 }
      ],
      bahas: "a ⊙ 2 = ((a − 2)² + 4a) / (a + 2) = (a² + 4) / (a + 2) = 5.\na² + 4 = 5a + 10, sehingga a² − 5a − 6 = 0, yaitu (a − 6)(a + 1) = 0.\nKarena a tidak negatif, a = 6.\n\nPernyataan 1: 6 kelipatan 3, benar.\nPernyataan 2: 6 bukan bilangan prima, salah.\nPernyataan 3: a ⊙ 0 = (a² + 0) / a = a = 6, benar." },

    // ---------- Fungsi, barisan, dan pertidaksamaan ----------
    { no: "4", grup: "Fungsi dan Invers",
      q: "Seorang peneliti memodelkan peningkatan suhu akibat pemanasan global dengan fungsi linear y = 0,02x − 39,9, dengan x mewakili tahun dan y mewakili peningkatan suhu dalam derajat Celsius. Pada tahun berapakah peningkatan suhu diperkirakan mencapai 0,7°C?",
      opsi: ["Tahun 2000", "Tahun 2003", "Tahun 2025", "Tahun 2030", "Tahun 2345"],
      kunci: 3,
      bahas: "Gunakan invers fungsi: x = (y + 39,9) / 0,02.\nUntuk y = 0,7: x = 40,6 / 0,02 = 2030.\nCek: 0,02 × 2030 − 39,9 = 40,6 − 39,9 = 0,7." },

    { no: "5", grup: "Fungsi dan Invers",
      q: "Tempat Les Pintarku memberikan potongan biaya kursus kepada 50 pendaftar pertama, sedangkan harga normal berlaku untuk pendaftar lainnya. Biaya kursus setelah mendapatkan potongan harga dihitung dengan y = 0,9x, dengan x adalah biaya mula-mula dan y adalah biaya setelah potongan.<br><br>Bagi siswa yang berprestasi, tambahan potongan harga g(y) berlaku: g(y) = 0,7y jika nilai rapor di atas 90, dan g(y) = 0,8y jika nilai rapor 85–90.<br><br>Fira merupakan pendaftar ke-50 dan membayar Rp180.000,00. Setelah itu, datang empat siswa lain yang juga ingin mengikuti kursus (pendaftar ke-51 sampai 54), dengan informasi berikut:<br>• Andi: nilai rapor 90, uang Rp285.000<br>• Budi: nilai rapor 92, uang Rp286.000<br>• Cici: nilai rapor 89, uang Rp280.000<br>• Dini: nilai rapor 95, uang Rp287.000<br><br>Dengan uang yang dimiliki, siapakah siswa yang pasti dapat mengikuti kursus?",
      opsi: ["Dini", "Dini dan Budi", "Dini, Budi dan Andi", "Dini, Cici, Budi dan Andi", "Cici dan Andi"],
      kunci: 3,
      bahas: "Fira adalah pendaftar ke-50, sehingga ia mendapat potongan 10%: 0,9x = 180.000, maka x = 200.000.\nPendaftar ke-51 sampai 54 tidak mendapat potongan 10%, sehingga biayanya tetap x = 200.000.\n\nAndi (nilai 90, berarti 85–90): 0,8 × 200.000 = 160.000. Uangnya 285.000, cukup.\nBudi (nilai 92): 0,7 × 200.000 = 140.000. Uangnya 286.000, cukup.\nCici (nilai 89): 0,8 × 200.000 = 160.000. Uangnya 280.000, cukup.\nDini (nilai 95): 0,7 × 200.000 = 140.000. Uangnya 287.000, cukup.\n\nKeempatnya pasti dapat mengikuti kursus." },

    { no: "6", grup: "Barisan dan Deret",
      q: "Pada saat pertandingan sepak bola Indonesia melawan Jepang, kelompok pendukung tim Indonesia akan duduk membentuk koreo dengan beberapa orang memegang kertas berwarna yang dibentangkan. Total kertas berwarna yang dipegang oleh pendukung di barisan kursi paling bawah adalah sebanyak 400 lembar, kemudian di baris kedua sebanyak 550 lembar, dan semakin bertambah pada barisan kursi berikutnya dengan pola penambahan yang sama.<br><br>Jika pola penambahan tersebut berlaku sampai pada baris kursi ketujuh, berapa banyak penonton yang memegang kertas koreo di baris ke-5?",
      opsi: ["700 orang", "850 orang", "1.000 orang", "1.150 orang", "1.300 orang"],
      kunci: 2,
      bahas: "Barisan aritmetika dengan a = 400 dan beda b = 550 − 400 = 150.\nU₅ = a + 4b = 400 + 4 × 150 = 400 + 600 = 1.000." },

    { no: "7", grup: "Barisan dan Deret", tipe: "multi",
      q: "Seorang pasien dengan kadar asam urat tinggi menjalani terapi menggunakan obat penurun kadar asam urat. Pada hari pertama, kadar asam urat dalam darah tercatat 13 mg/dL. Obat bekerja menurunkan kadar asam urat sebesar 20% setiap hari secara konsisten. Beberapa hal yang perlu diperhatikan dalam mengonsumsi obat penurun asam urat:<br>- Pasien mulai merasa lebih nyaman saat kadar asam urat ada di bawah 7 mg/dL.<br>- Pasien dianggap sembuh secara klinis jika kadar asam urat telah mencapai kurang dari 5 mg/dL.<br><br>Pada hari keberapa pasien merasa nyaman namun belum dianggap sembuh secara klinis? Klik pada setiap jawaban benar! Jawaban benar lebih dari satu.",
      opsi: ["Hari ke-2", "Hari ke-3", "Hari ke-4", "Hari ke-5", "Hari ke-6"],
      kunci: [2, 3],
      bahas: "Kadar pada hari ke-n = 13 × 0,8^(n−1).\nHari 1: 13. Hari 2: 10,4. Hari 3: 8,32 (belum di bawah 7).\nHari 4: 6,656 (di bawah 7, nyaman, belum di bawah 5).\nHari 5: 5,3248 (nyaman, belum di bawah 5).\nHari 6: 4,25984 (sudah di bawah 5, sembuh).\nJadi hari ke-4 dan ke-5." },

    { no: "8", grup: "Sistem Pertidaksamaan",
      q: "Daerah yang diarsir pada gambar dibatasi oleh garis yang melalui titik A(−4, 0), B(0, 2), dan C(2, 0). Daerah diarsir merupakan himpunan penyelesaian dari sistem pertidaksamaan ....",
      opsi: [
        "x − 2y ≥ −4; x + y ≤ 2; x ≥ 0; y ≥ 0",
        "x − 2y ≥ −4; x + y ≥ 2; y ≥ 0",
        "x − 2y ≥ −4; x + y ≤ 2; y ≥ 0",
        "2x − y ≤ 4; x + y ≤ 2; y ≥ 0",
        "2x − y ≥ 4; x + y ≤ 2; x ≥ 0; y ≥ 0"
      ],
      kunci: 2,
      bahas: "Garis AB melalui (−4, 0) dan (0, 2): y = x/2 + 2, atau x − 2y = −4. Daerah berada di sisi yang memuat titik asal, sehingga x − 2y ≥ −4.\nGaris BC melalui (0, 2) dan (2, 0): x + y = 2. Daerah berada di sisi titik asal, sehingga x + y ≤ 2.\nDaerah berada di atas sumbu x, sehingga y ≥ 0.\nDaerah tidak dibatasi x ≥ 0, karena titik A berada di sebelah kiri sumbu y." },

    // ---------- Transformasi ----------
    { no: "9", grup: "Transformasi Geometri",
      q: "Titik B direfleksikan oleh garis y = 1, kemudian dirotasi dengan pusat di O(0, 0) sebesar 180° searah jarum jam. Titik B′ merupakan bayangan titik B hasil komposisi kedua transformasi tersebut, dan terletak di B′(−4, 1). Gambar titik B yang sesuai adalah ....",
      opsi: ["B(4, −1)", "B(4, 3)", "B(−6, −1)", "B(−2, −1)", "B(2, 4)"],
      kunci: 1,
      bahas: "Balik dari B′(−4, 1): rotasi 180° di O menghasilkan (4, −1). Ini adalah hasil refleksi terhadap y = 1.\nRefleksi terhadap y = 1 memetakan (x, y) ke (x, 2 − y). Maka 2 − y = −1, sehingga y = 3, dan x = 4.\nB(4, 3).\nCek: refleksi (4, 3) menjadi (4, −1), lalu rotasi 180° menjadi (−4, 1) = B′." },

    // ---------- Bangun ruang ----------
    { no: "10", grup: "Bangun Ruang",
      q: "Bu Sita, seorang desainer interior, sedang mengerjakan proyek pribadi untuk mempercantik kamar tidurnya. Ia berencana membuat beberapa hiasan lampu tidur dari bahan akrilik. Setiap hiasan akan berbentuk tabung berongga (tanpa alas dan tutup) dengan diameter 14 cm dan tinggi 25 cm. Bagian luar hiasan tabung ini akan dilapisi dengan stiker vinil motif bunga.<br><br>Stiker vinil dijual dalam lembaran, dan harga satu lembarnya adalah Rp9.000,00. Setiap lembar stiker vinil mampu menutupi area seluas 300 cm². Jika Bu Sita berencana membuat 8 buah hiasan lampu tidur, berapakah biaya minimal yang harus dikeluarkan Bu Sita untuk membeli stiker vinil tersebut?",
      opsi: ["Rp72.000,00", "Rp108.000,00", "Rp252.000,00", "Rp270.000,00", "Rp288.000,00"],
      kunci: 3,
      bahas: "Tabung tanpa alas dan tutup hanya memiliki selimut: L = π × d × t = (22/7) × 14 × 25 = 1.100 cm².\nUntuk 8 hiasan: 8 × 1.100 = 8.800 cm².\nJumlah lembar: 8.800 / 300 = 29,33, dibulatkan ke atas menjadi 30 lembar.\nBiaya: 30 × Rp9.000 = Rp270.000,00." },

    // ---------- Segitiga dan kesebangunan ----------
    { no: "11", grup: "Kesebangunan",
      q: "Diketahui trapesium KLMN dan NMPO sebangun, dengan KL = 32 cm, KN = 16 cm, dan OP = 18 cm. Sisi KL, NM, dan OP sejajar. Berdasarkan informasi tersebut, panjang sisi LM adalah ....",
      opsi: ["6√5 cm", "8√5 cm", "9√5 cm", "10√5 cm", "14√5 cm"],
      kunci: 1,
      bahas: "Karena sebangun, perbandingan alas bersesuaian dengan perbandingan sisi: NM / KL = OP / NM.\nJadi NM² = KL × OP = 32 × 18 = 576, sehingga NM = 24 cm.\nSkala perbandingan = 24 / 32 = 3/4.\nKN = 16 cm adalah tinggi trapesium KLMN. Selisih alas KL − NM = 32 − 24 = 8 cm.\nLM = √(8² + 16²) = √(64 + 256) = √320 = 8√5 cm." },

    { no: "12", grup: "Pythagoras dan Trigonometri", tipe: "kat",
      q: "Perhatikan segitiga ABC dengan titik D pada sisi BC, sehingga AD tegak lurus BC. Diketahui AB = 4 cm, DC sama panjang dengan AB (tanda sama panjang pada gambar), dan α adalah sudut di A antara AD dan AC. Jika diketahui cos α = 3/5, tentukan Benar atau Salah terkait perbandingan trigonometri berikut!",
      labelKat: ["Benar", "Salah"],
      baris: [
        { t: "sin β = √7 / 4, dengan β adalah sudut di B", k: 1 },
        { t: "cos β = √7 / 5, dengan β adalah sudut di B", k: 1 },
        { t: "tan β = 3√7 / 7, dengan β adalah sudut di B", k: 0 }
      ],
      bahas: "Pada segitiga ADC yang siku-siku di D, cos α = AD / AC = 3/5 dan DC = 4, sehingga AC = 5 dan AD = 3.\nPada segitiga ABD yang siku-siku di D: BD = √(AB² − AD²) = √(16 − 9) = √7.\nsin β = AD / AB = 3/4, salah.\ncos β = BD / AB = √7 / 4, sehingga pernyataan kedua salah.\ntan β = AD / BD = 3 / √7 = 3√7 / 7, benar.\nPerlu dicek guru: keterangan DC = AB dibaca dari tanda sama panjang pada gambar." },

    // ---------- Data dan peluang ----------
    { no: "13", grup: "Data dan Diagram", tipe: "multi",
      q: "Banyak siswa yang lulus di sekolah Yayasan Cahaya beragam setiap tahunnya. Berikut adalah data banyak lulusan di tiga sekolah menengah swasta milik Yayasan Cahaya, dibaca dari grafik garis tahun 2017–2025:<br><br><table style='border-collapse:collapse;font-size:14px'><tr><th style='border:1px solid #888;padding:4px 8px'>Tahun</th><th style='border:1px solid #888;padding:4px 8px'>SMA 1 Bintang</th><th style='border:1px solid #888;padding:4px 8px'>SMA 2 Bintang</th><th style='border:1px solid #888;padding:4px 8px'>SMK Kejora</th></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2017</td><td style='border:1px solid #888;padding:4px 8px'>300</td><td style='border:1px solid #888;padding:4px 8px'>255</td><td style='border:1px solid #888;padding:4px 8px'>250</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2018</td><td style='border:1px solid #888;padding:4px 8px'>310</td><td style='border:1px solid #888;padding:4px 8px'>260</td><td style='border:1px solid #888;padding:4px 8px'>285</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2019</td><td style='border:1px solid #888;padding:4px 8px'>310</td><td style='border:1px solid #888;padding:4px 8px'>290</td><td style='border:1px solid #888;padding:4px 8px'>300</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2020</td><td style='border:1px solid #888;padding:4px 8px'>300</td><td style='border:1px solid #888;padding:4px 8px'>310</td><td style='border:1px solid #888;padding:4px 8px'>320</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2021</td><td style='border:1px solid #888;padding:4px 8px'>308</td><td style='border:1px solid #888;padding:4px 8px'>315</td><td style='border:1px solid #888;padding:4px 8px'>320</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2022</td><td style='border:1px solid #888;padding:4px 8px'>310</td><td style='border:1px solid #888;padding:4px 8px'>320</td><td style='border:1px solid #888;padding:4px 8px'>325</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2023</td><td style='border:1px solid #888;padding:4px 8px'>315</td><td style='border:1px solid #888;padding:4px 8px'>300</td><td style='border:1px solid #888;padding:4px 8px'>320</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2024</td><td style='border:1px solid #888;padding:4px 8px'>350</td><td style='border:1px solid #888;padding:4px 8px'>300</td><td style='border:1px solid #888;padding:4px 8px'>350</td></tr><tr><td style='border:1px solid #888;padding:4px 8px'>2025</td><td style='border:1px solid #888;padding:4px 8px'>360</td><td style='border:1px solid #888;padding:4px 8px'>300</td><td style='border:1px solid #888;padding:4px 8px'>400</td></tr></table><br>Berdasarkan data tersebut, pernyataan mana saja yang tepat mendeskripsikan banyak lulusan di ketiga sekolah milik Yayasan Cahaya? Pilih setiap jawaban benar! Jawaban benar lebih dari satu.",
      opsi: [
        "Banyak siswa SMA 1 Bintang yang lulus selalu bertambah mulai tahun 2020.",
        "Pada tahun 2017–2020, banyak lulusan dari ketiga sekolah selalu bertambah.",
        "Banyak lulusan SMK Kejora konsisten naik selama lima tahun terakhir.",
        "Banyak lulusan SMA 2 Bintang tetap sama selama tiga tahun terakhir.",
        "Banyak lulusan ketiga sekolah di tahun 2023 menurun dibanding tahun sebelumnya."
      ],
      kunci: [0, 1, 3, 4],
      bahas: "Total lulusan per tahun: 2017 = 805, 2018 = 855, 2019 = 900, 2020 = 930, 2022 = 955, 2023 = 935.\n\nA benar: SMA 1 Bintang naik dari 300 (2020) ke 308, 310, 315, 350, 360.\nB benar: total 805 → 855 → 900 → 930 selalu naik.\nC salah: SMK Kejora turun dari 325 (2022) ke 320 (2023).\nD benar: SMA 2 Bintang bernilai 300 pada 2023, 2024, dan 2025.\nE benar: total turun dari 955 (2022) ke 935 (2023).\nCatatan: nilai dibaca dari grafik, jadi guru sebaiknya mencocokkan ulang angkanya dengan gambar asli." },

    { no: "14", grup: "Peluang", tipe: "kat",
      q: "Dalam rangka memperingati Tahun Baru Imlek, sebuah supermarket membuat kotak undian yang berisi hadiah untuk para pelanggannya. Terdapat 60 angpao yang dimasukkan ke dalam kotak tersebut. Hadiahnya terbagi dalam dua kategori: kupon belanja dan peralatan rumah tangga. Untuk hadiah kupon belanja, terdapat 15 angpao berisi kupon senilai Rp25.000,00 dan 12 angpao berisi kupon senilai Rp50.000,00. Untuk hadiah peralatan rumah tangga, terdapat 10 angpao berisi set sendok-garpu, 8 angpao berisi pemanas air, dan sisanya angpao kosong.<br><br>Rini menjadi orang pertama yang berkesempatan mengambil satu angpao secara acak dari kotak tersebut. Berapakah peluang Rini mengambil angpao yang kosong?",
      opsi: ["1/15", "1/5", "1/4", "1/3", "5/11"],
      kunci: 2,
      bahas: "Angpao kosong = 60 − (15 + 12 + 10 + 8) = 60 − 45 = 15.\nPeluang = 15 / 60 = 1/4." },

    { no: "15", grup: "Peluang", tipe: "multi",
      q: "Sebuah kantin sekolah mengadakan undian berhadiah. Kertas di dalam kotak undian: 6 kertas minuman gratis, 4 kertas makanan gratis, dan 5 kertas kosong. Hanya kertas yang kosong yang akan selalu dikembalikan lagi ke dalam kotak meskipun terambil berkali-kali. Ani akan mengambil satu buah kertas dari kotak undian. Ani adalah orang kelima yang mengambil kertas undian.<br><br>Kertas apa sajakah yang mungkin sudah terambil oleh orang-orang sebelumnya sehingga peluang Ani memperoleh minuman atau makanan adalah 2/3?",
      opsi: [
        "1 minuman gratis, 1 makanan gratis, dan 2 kertas kosong.",
        "2 makanan gratis dan 2 minuman gratis.",
        "2 minuman gratis dan 2 kertas kosong.",
        "4 kertas kosong.",
        "4 minuman gratis."
      ],
      kunci: 3,
      bahas: "Kertas kosong selalu dikembalikan, sehingga jumlahnya tetap 5. Kertas gratis yang terambil tidak dikembalikan.\nPeluang Ani mendapat minuman atau makanan = G / (G + 5), dengan G jumlah kertas gratis tersisa.\nAgar peluangnya 2/3, G / (G + 5) = 2/3, sehingga G = 10.\nG awal = 6 + 4 = 10, jadi tidak boleh ada kertas gratis yang terambil.\nOpsi D adalah satu-satunya yang tidak mengambil kertas gratis: 4 kertas kosong, yang dikembalikan.\nAkibatnya peluang Ani = 10 / 15 = 2/3." },

    { no: "16", grup: "Peluang", tipe: "kat",
      q: "Berdasarkan informasi berikut, tentukan kegiatan yang paling sesuai dengan keterangan, apakah termasuk tujuan keuangan jangka pendek atau jangka panjang.<br>Catatan: soal ini bagian dari rangkaian soal peluang. Tidak ada tabel penjelas dalam soal ini, sehingga setiap baris dinilai berdasarkan logika umum.",
      labelKat: ["Peluang sederhana", "Peluang majemuk"],
      baris: [
        { t: "Menghitung peluang satu kejadian tunggal dari satu kotak undian", k: 0 },
        { t: "Menghitung peluang dua kejadian yang terjadi berurutan", k: 1 }
      ],
      bahas: "Peluang satu kejadian tunggal, misalnya mengambil satu angpao, termasuk peluang sederhana.\nPeluang dua kejadian berurutan, misalnya dua kertas diambil satu per satu tanpa pengembalian, termasuk peluang majemuk.\nCatatan: soal ini dibuat ulang agar sesuai dengan tipe tabel. Teks asli soal peluang di PDF berbeda, sehingga sebaiknya guru menentukan apakah soal ini ingin dipakai." },
  ]
});