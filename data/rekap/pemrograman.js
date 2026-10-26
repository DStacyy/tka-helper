/* Rekap materi: Pemrograman (Terstruktur & PBO)
   Indeks "i" mengacu pada soal di data/pemrograman-2025.js (0-based).
   Soal yang tidak ada di data bisa ditulis langsung sebagai objek soal. */
(window.REKAP = window.REKAP || []).push({
  mapel: "pemrograman-terstruktur-pbo",
  nama: "Pemrograman (Terstruktur & PBO)",
  tahun: 2025,
  deskripsi: "Perulangan, class dan object, inheritance, polymorphism, serta fungsi dan prosedur.",

  topik: [
    {
      id: "perulangan",
      judul: "Perulangan dan Perulangan Bersarang",
      ringkasSingkat: "For, while, perulangan bersarang, dan cara menelusuri hasil cetak.",
      ringkasan: [
        { h: "Apa itu perulangan?" },
        "Perulangan menjalankan blok instruksi berulang kali selama kondisi terpenuhi. Dalam pseudocode umumnya ada dua bentuk: for, yang jumlah putarannya sudah jelas dari batas awal dan akhir, dan while, yang berputar selama kondisi bernilai benar.",
        { h: "Perulangan bersarang" },
        "Perulangan bersarang berarti ada loop di dalam loop. Setiap kali loop luar berputar satu kali, loop dalam berputar penuh dari awal. Jika loop luar berputar n kali dan loop dalam berputar m kali, isi loop dalam dijalankan n × m kali.",
        "Jika batas loop dalam bergantung pada variabel loop luar, misalnya j := i to 4, total putarannya tidak lagi sekadar perkalian. Hitung setiap putaran luar satu per satu, lalu jumlahkan.",
        { h: "Cara menelusuri hasil" },
        "Buat tabel kecil dengan kolom variabel loop, nilai yang berubah, dan hasil cetak. Telusuri satu putaran dalam sekali jalan, lalu catat hasilnya. Cara ini jauh lebih aman daripada menebak.",
        { h: "Loop while" },
        "Pada while, cek kondisi sebelum setiap putaran. Hitung berapa kali kondisi bernilai benar, karena itu sama dengan jumlah langkah. Pastikan variabel di kondisi memang berubah di dalam loop, supaya tidak berputar selamanya."
      ],
      refleksi: "Perulangan bersarang memang terlihat rumit di awal, tetapi polanya selalu sama: loop luar memutar, dan loop dalam ikut berputar penuh setiap kali. Kalau kamu sudah menulis tabel penelusurannya, kamu tidak sedang menebak. Kamu sedang membuktikan jawabanmu sendiri, dan itu kemampuan yang sangat berharga.",
      contoh: [
        {
          soal:
"count := 0\nfor i := 1 to 3 do\n  for j := 1 to 2 do\n    count := count + 1\n  endfor\nendfor",
          penyelesaian:
"Loop luar berputar 3 kali (i = 1, 2, 3).\nSetiap putaran luar, loop dalam berputar 2 kali (j = 1, 2).\n\nTotal: 3 × 2 = 6.\nNilai count = 6."
        },
        {
          soal:
"x := 8\nlangkah := 0\nwhile x > 1 do\n  x := x div 2\n  langkah := langkah + 1\nendwhile",
          penyelesaian:
"Telusuri nilai x:\n8 → 4 (langkah 1)\n4 → 2 (langkah 2)\n2 → 1 (langkah 3)\n\nx sudah 1, jadi loop berhenti.\nNilai langkah = 3."
        }
      ],
      latihan: [
        { i: 1 },
        { i: 2 },
        { i: 3 },
        { i: 15 },
        {
          q: "Berapa nilai count setelah seluruh eksekusi?",
          kode: "count := 0\nfor i := 1 to 4 do\n  for j := 1 to 2 do\n    count := count + 1\n  endfor\nendfor",
          opsi: ["6", "8", "4", "10", "12"],
          kunci: 1,
          bahas: "Loop luar berputar 4 kali. Setiap putaran, loop dalam berputar 2 kali.\nTotal: 4 × 2 = 8."
        }
      ]
    },

    {
      id: "oop-dasar",
      judul: "Class, Object, dan Enkapsulasi",
      ringkasSingkat: "Class sebagai cetakan, object sebagai wujudnya, dan atribut yang dilindungi.",
      ringkasan: [
        { h: "Class dan object" },
        "Class adalah cetakan atau rancangan. Object adalah wujud nyata yang dibuat dari class dengan kata kunci new. Dari satu class, kita bisa membuat banyak object, dan setiap object memiliki nilai atributnya sendiri.",
        { h: "Atribut, method, dan constructor" },
        "Atribut adalah data yang dimiliki object, sedangkan method adalah perilaku yang bisa dilakukan object. Constructor adalah method khusus yang dijalankan saat object dibuat, biasanya dipakai untuk memberi nilai awal atribut.",
        { h: "Enkapsulasi" },
        "Enkapsulasi berarti menyembunyikan data dengan modifier private, lalu mengaksesnya melalui method seperti getter dan setter. Dengan cara ini, class bisa memastikan nilai atributnya tetap valid. Contohnya, saldo tidak boleh negatif.",
        { h: "Static" },
        "Atribut static dimiliki oleh class, bukan oleh setiap object. Semua object dari class itu berbagi satu nilai yang sama."
      ],
      refleksi: "Class dan object sering terasa abstrak di awal. Anggap class sebagai cetakan kue dan object sebagai kuenya. Cetakannya satu, tetapi kuenya bisa banyak, dan masing-masing bisa punya hiasan berbeda. Dengan cara berpikir ini, kamu sudah selangkah lebih dekat untuk memahami OOP.",
      contoh: [
        {
          soal:
"class Mobil {\n  private int bensin;\n  public Mobil() { bensin = 10; }\n  public int getBensin() { return bensin; }\n}\n\nMobil a = new Mobil();\nSystem.out.println(a.getBensin());",
          penyelesaian:
"Constructor Mobil() dijalankan saat new Mobil() dipanggil, sehingga bensin bernilai 10.\nMethod getBensin() mengembalikan nilai itu.\n\nOutput: 10."
        },
        {
          soal:
"Mengapa atribut saldo sebaiknya dibuat private?",
          penyelesaian:
"Dengan private, bagian program lain tidak bisa mengubah saldo secara langsung. Perubahan harus lewat method yang memeriksa aturan, misalnya saldo tidak boleh negatif. Inilah inti enkapsulasi."
        }
      ],
      latihan: [
        { i: 6 },
        { i: 7 },
        { i: 11 },
        { i: 18 },
        {
          q: "Apa fungsi constructor dalam sebuah class?",
          opsi: [
            "Menghapus object dari memori",
            "Menginisialisasi object saat dibuat",
            "Mengubah class menjadi abstract",
            "Mewarisi atribut dari superclass",
            "Menghitung jumlah object yang sudah dibuat"
          ],
          kunci: 1,
          bahas: "Constructor dijalankan otomatis saat object dibuat dengan new. Fungsinya memberi nilai awal kepada atribut object tersebut."
        }
      ]
    },

    {
      id: "inheritance-polimorfisme",
      judul: "Inheritance dan Polymorphism",
      ringkasSingkat: "Subclass mewarisi superclass, lalu method bisa berperilaku berbeda sesuai objek aktual.",
      ringkasan: [
        { h: "Inheritance" },
        "Inheritance atau pewarisan memungkinkan subclass memperoleh atribut dan method dari superclass dengan kata kunci extends. Subclass juga bisa menambah atau mengubah perilaku yang diwarisi.",
        { h: "Overriding dan super" },
        "Overriding terjadi ketika subclass menulis ulang method yang sama dengan superclass. Kata kunci super dipakai untuk memanggil versi method dari superclass.",
        { h: "Polymorphism dan upcasting" },
        "Upcasting berarti objek subclass disimpan dalam variabel bertipe superclass, misalnya Senjata s = new Pedang();. Ketika method dipanggil, Java menjalankan versi method sesuai objek aktualnya. Inilah dynamic method dispatch.",
        { h: "Overloading" },
        "Overloading terjadi dalam satu class ketika nama method sama tetapi parameternya berbeda. Ini berbeda dari overriding, yang terjadi antara superclass dan subclass dengan signature yang sama."
      ],
      refleksi: "Polymorphism membuat program bisa berkembang tanpa harus mengubah banyak kode. Kalau kamu melihat method yang dipanggil ternyata berbeda-beda, itu bukan kebetulan, melainkan tanda bahwa konsep ini bekerja. Pelan-pelan kamu akan melihatnya sebagai cara berpikir yang rapi.",
      contoh: [
        {
          soal:
"class Hewan { void suara() { print(\"...\"); } }\nclass Anjing extends Hewan { void suara() { print(\"Guk\"); } }\nHewan h = new Anjing();\nh.suara();",
          penyelesaian:
"Variabel h bertipe Hewan, tetapi objeknya adalah Anjing.\nKarena dynamic dispatch, method yang dijalankan adalah versi Anjing.\n\nOutput: Guk."
        },
        {
          soal:
"Apa perbedaan overloading dan overriding?",
          penyelesaian:
"Overloading: dalam satu class, nama sama, parameter berbeda.\nOverriding: antara superclass dan subclass, nama dan parameter sama, isi method ditulis ulang.\n\nKeduanya sering tertukar, jadi cek selalu apakah ada dua class atau hanya satu."
        }
      ],
      latihan: [
        { i: 4 },
        { i: 8 },
        { i: 9 },
        { i: 10 },
        { i: 19 }
      ]
    },

    {
      id: "fungsi-prosedur",
      judul: "Fungsi, Prosedur, dan Penelusuran Algoritma",
      ringkasSingkat: "Parameter by value dan by reference, rekursi, dan cara menelusuri algoritma.",
      ringkasan: [
        { h: "Fungsi dan prosedur" },
        "Fungsi mengembalikan nilai dengan return, sedangkan prosedur tidak mengembalikan nilai. Keduanya bisa menerima parameter untuk bekerja dengan data dari luar.",
        { h: "Pass by value dan pass by reference" },
        "Parameter biasa (by value) menerima salinan nilai. Perubahan di dalam fungsi tidak mengubah variabel asalnya. Parameter var (by reference) mengacu langsung ke variabel asal, sehingga perubahannya ikut terlihat dari luar.",
        { h: "Rekursi" },
        "Rekursi adalah fungsi yang memanggil dirinya sendiri. Setiap rekursi harus memiliki base case, yaitu kondisi berhenti. Tanpa base case, fungsi akan berjalan tanpa henti.",
        { h: "Menelusuri algoritma" },
        "Untuk algoritma seperti bubble sort, catat isi array setelah setiap perbandingan dan setiap pertukaran. Dengan begitu kamu bisa menghitung berapa kali swap terjadi tanpa harus mengira-ngira."
      ],
      refleksi: "Algoritma yang terlihat rumit sebenarnya hanya urutan langkah kecil yang diulang. Kalau kamu menelusurinya satu langkah demi satu langkah, kamu akan menemukan jawabannya sendiri. Kesabaran menelusuri itu sama pentingnya dengan kemampuan menghafal.",
      contoh: [
        {
          soal:
"procedure Tambah(var x: integer; y: integer)\nbegin\n  x := x + y;\n  y := 0;\nend;\n\na := 5; b := 3;\nTambah(a, b);",
          penyelesaian:
"x adalah var, jadi perubahan x mengubah a. a menjadi 5 + 3 = 8.\ny adalah nilai biasa, jadi y := 0 tidak mengubah b. b tetap 3.\n\nHasil: a = 8, b = 3."
        },
        {
          soal:
"function f(n: integer): integer\nbegin\n  if n <= 1 then return 1\n  else return n * f(n - 1)\nend;\n\nprint f(4);",
          penyelesaian:
"f(4) = 4 × f(3) = 4 × 3 × f(2) = 4 × 3 × 2 × f(1) = 4 × 3 × 2 × 1 = 24.\n\nOutput: 24."
        }
      ],
      latihan: [
        { i: 13 },
        { i: 14 },
        { i: 15 },
        { i: 16 },
        { i: 17 }
      ]
    }
  ]
});