/* Rekap materi: Bahasa Inggris
   "latihan" berisi:
   - { ref: "id-mapel", i: indeks }  → memakai soal yang sudah ada di data mapel
   - { q, opsi, kunci, bahas, ... }  → soal baru khusus rekap */
(window.REKAP = window.REKAP || []).push({
  mapel: "bahasa-inggris-2025",
  nama: "Bahasa Inggris",
  tahun: 2025,
  deskripsi: "Narrative, procedure, descriptive, dan analytical exposition.",

  topik: [
    {
      id: "narrative-text",
      judul: "Narrative Text",
      ringkasSingkat: "Struktur cerita: orientasi, komplikasi, resolusi, dan pesan moral.",
      ringkasan: [
        { h: "Apa itu narrative text?" },
        "Narrative text menceritakan sebuah peristiwa atau pengalaman. Biasanya ada tokoh, latar, konflik, dan penyelesaian. Tujuannya menghibur sekaligus menyampaikan pesan moral.",
        { h: "Struktur teks" },
        "Umumnya terdiri dari: (1) Orientation, yaitu pengenalan tokoh, waktu, dan tempat. (2) Complication, yaitu masalah yang muncul. (3) Resolution, yaitu cara masalah diselesaikan. (4) Coda, opsional, yaitu pesan atau pelajaran dari cerita.",
        { h: "Ciri kebahasaan" },
        "Peristiwa utama memakai simple past (went, saw, caught). Latar suasana sering memakai past continuous (was walking). Kata penanda waktu seperti once upon a time, one day, suddenly, finally, dan from that moment on membantu menandai urutan cerita.",
        "Dialog biasanya ditulis dalam tanda kutip dan menunjukkan karakter tokoh.",
        { h: "Cara membaca" },
        "Cari tokoh utamanya, masalahnya, dan cara masalah itu diselesaikan. Pertanyaan tentang karakter tokoh biasanya dijawab dengan menghubungkan tindakan tokoh dengan kejadian dalam cerita."
      ],
      refleksi: "Narrative text itu seperti menonton film pendek. Kalau kamu bisa menyebutkan siapa tokohnya, apa masalahnya, dan bagaimana selesainya, kamu sudah memahami sebagian besar isi teks. Tidak perlu membaca semua kata sekaligus. Cukup ikuti alurnya pelan-pelan.",
      contoh: [
        {
          soal:
"Read the text and identify the complication:\n\"One day, a little bird fell from its nest. It could not fly, and it cried loudly. Then a kind girl found it and took it home to heal its wing.\"\n\nWhich part is the complication?",
          penyelesaian:
"Complication adalah bagian yang berisi masalah.\n\n\"a little bird fell from its nest. It could not fly\" adalah masalahnya: burung jatuh dan tidak bisa terbang.\n\n\"Then a kind girl found it and took it home\" adalah resolution, yaitu cara masalah mulai diselesaikan.\n\nJadi complication-nya adalah burung yang jatuh dan tidak bisa terbang."
        },
        {
          soal:
"Which tense is used to describe the main events in a narrative text?\nA. Present simple\nB. Simple past\nC. Future tense",
          penyelesaian:
"Peristiwa utama dalam narrative text memakai simple past, seperti fell, found, dan took.\n\nJawabannya B."
        }
      ],
      latihan: [
        { ref: "bahasa-inggris-2025", i: 0 },
        { ref: "bahasa-inggris-2025", i: 1 },
        { ref: "bahasa-inggris-2025", i: 2 },
        { ref: "bahasa-inggris-2025", i: 4 },
        {
          q: "In a narrative text, the part that introduces the characters, the setting, and the time is called ....",
          opsi: ["Orientation", "Complication", "Resolution", "Coda", "Reorientation"],
          kunci: 0,
          bahas: "Orientation adalah bagian awal cerita yang memperkenalkan tokoh, tempat, dan waktu. Complication adalah masalahnya, Resolution adalah penyelesaiannya, dan Coda adalah pesan atau pelajaran di akhir cerita."
        }
      ]
    },

    {
      id: "procedure-text",
      judul: "Procedure Text",
      ringkasSingkat: "Langkah-langkah cara melakukan sesuatu, dengan kalimat perintah dan urutan yang jelas.",
      ringkasan: [
        { h: "Apa itu procedure text?" },
        "Procedure text menjelaskan cara melakukan sesuatu langkah demi langkah. Contohnya resep masakan, petunjuk menggunakan alat, atau cara belajar yang efektif.",
        { h: "Struktur teks" },
        "Umumnya terdiri dari: (1) Goal, yaitu tujuan atau hal yang ingin dicapai. (2) Materials, yaitu bahan atau alat yang dibutuhkan, opsional. (3) Steps, yaitu langkah-langkahnya secara berurutan.",
        { h: "Ciri kebahasaan" },
        "Langkah-langkah ditulis dengan kalimat perintah (imperative), misalnya Know, Set, Create, Use, atau Take. Kata penanda urutan seperti first, then, next, after that, dan finally membantu pembaca mengikuti urutannya. Biasanya memakai simple present.",
        { h: "Cara membaca" },
        "Cari tujuan teksnya dulu, lalu tandai setiap langkah. Pertanyaan tentang urutan atau kategori biasanya dijawab dengan mencocokkan setiap langkah dengan informasi di teks."
      ],
      refleksi: "Procedure text itu seperti resep yang sudah ditulis rapi. Kalau kamu bisa mengikuti langkahnya dari awal sampai akhir, kamu sudah memahami isinya. Jangan takut bertanya pada diri sendiri, mengapa langkah ini dilakukan dulu? Pertanyaan seperti itu justru membuat jawabanmu lebih tepat.",
      contoh: [
        {
          soal:
"How to make instant noodles:\n1. Boil some water.\n2. Put the noodles into the pot.\n3. Cook for three minutes.\n4. Serve in a bowl.\n\nWhat should you do after boiling the water?",
          penyelesaian:
"Teks menunjukkan urutan langkah dengan angka. Langkah pertama adalah boil some water, lalu langkah kedua adalah put the noodles into the pot.\n\nJadi setelah merebus air, kamu memasukkan mi ke dalam panci."
        },
        {
          soal:
"Which sentence is the goal of the procedure?\nA. Boil some water.\nB. How to make instant noodles.\nC. Serve in a bowl.",
          penyelesaian:
"Goal adalah tujuan utama teks, yaitu cara membuat mi instan. Kalimat A dan C adalah langkah-langkahnya, bukan tujuan.\n\nJawabannya B."
        }
      ],
      latihan: [
        { ref: "bahasa-inggris-2025", i: 5 },
        { ref: "bahasa-inggris-2025", i: 6 },
        { ref: "bahasa-inggris-2025", i: 7 },
        { ref: "bahasa-inggris-2025", i: 8 },
        { ref: "bahasa-inggris-2025", i: 9 }
      ]
    },

    {
      id: "descriptive-text",
      judul: "Descriptive Text",
      ringkasSingkat: "Menggambarkan tempat, benda, atau makhluk secara rinci dengan bahasa yang hidup.",
      ringkasan: [
        { h: "Apa itu descriptive text?" },
        "Descriptive text menggambarkan sesuatu, misalnya tempat, benda, binatang, atau orang, secara rinci. Tujuannya agar pembaca dapat membayangkan objek tersebut.",
        { h: "Struktur teks" },
        "Umumnya terdiri dari: (1) General statement, yaitu pengenalan umum tentang objek. (2) Description, yaitu rincian tentang bentuk, warna, ukuran, lokasi, atau kegunaan.",
        { h: "Ciri kebahasaan" },
        "Memakai simple present. Banyak menggunakan kata sifat (colorful, huge, bright) dan kata kerja penghubung seperti is, looks, atau feels. Perbandingan seperti like a game atau like grass dipakai untuk membantu pembaca membayangkan objek.",
        { h: "Cara membaca" },
        "Cari bagian yang menyebut nama objek, lalu kumpulkan semua detail yang menggambarkannya. Pertanyaan tentang makna frasa biasanya dijawab dengan melihat kalimat di sekitarnya, karena frasa kiasan seperti a different world sering dijelaskan oleh kalimat sebelum atau sesudahnya."
      ],
      refleksi: "Descriptive text melatih kamu melihat detail. Kalau kamu bisa membayangkan objeknya seperti sedang berada di sana, kamu sudah menangkap isi teks dengan baik. Banyak detail yang tidak perlu dihafal. Cukup tahu di mana detail itu berada dalam teks.",
      contoh: [
        {
          soal:
"The lake is located in the mountains. It is very clear and cold. Its water looks blue in the morning.\n\nWhat is the function of the second sentence in the text?",
          penyelesaian:
"Kalimat kedua menjelaskan sifat danau, yaitu jernih dan dingin. Itu termasuk bagian description, bukan general statement.\n\nJawabannya: memberikan rincian tentang danau."
        },
        {
          soal:
"\"It feels like a different world under the sea.\"\n\nWhat does the sentence most likely mean?",
          penyelesaian:
"Kalimat ini menggunakan ungkapan kiasan. Penulis bukan benar-benar menyebut dunia lain, tetapi ingin menunjukkan bahwa bawah laut terasa indah, tenang, dan sangat berbeda dari daratan.\n\nJadi maknanya: bawah laut terasa seperti dunia yang indah dan unik."
        }
      ],
      latihan: [
        { ref: "bahasa-inggris-2025", i: 15 },
        { ref: "bahasa-inggris-2025", i: 16 },
        { ref: "bahasa-inggris-2025", i: 17 },
        { ref: "bahasa-inggris-2025", i: 18 },
        { ref: "bahasa-inggris-2025", i: 19 }
      ]
    },

    {
      id: "analytical-exposition",
      judul: "Analytical Exposition",
      ringkasSingkat: "Teks opini yang menyampaikan pendapat dengan alasan dan data pendukung.",
      ringkasan: [
        { h: "Apa itu analytical exposition?" },
        "Analytical exposition adalah teks argumentatif yang bertujuan meyakinkan pembaca bahwa sebuah isu penting. Penulis menyampaikan pendapat, lalu mendukungnya dengan alasan dan fakta.",
        { h: "Struktur teks" },
        "Umumnya terdiri dari: (1) Thesis, yaitu pernyataan pendapat utama. (2) Arguments, yaitu alasan-alasan pendukung, biasanya dengan data atau contoh. (3) Reiteration, yaitu penegasan kembali pendapat di akhir teks.",
        { h: "Ciri kebahasaan" },
        "Memakai simple present dan kata penghubung seperti firstly, moreover, therefore, dan to sum up. Kalimat seperti it is important that atau we should juga sering muncul karena teks ini mengajak pembaca bertindak.",
        { h: "Cara membaca" },
        "Pisahkan pendapat penulis dari fakta. Fakta bisa dicek dari tabel atau data, sedangkan pendapat biasanya ditandai dengan kata seperti should, important, atau believe."
      ],
      refleksi: "Analytical exposition adalah latihan berpikir kritis. Kamu tidak perlu setuju dengan penulisnya. Yang penting kamu bisa menunjukkan mana pendapat, mana alasan, dan mana data. Kemampuan memilah seperti ini sangat berguna, bukan hanya untuk ujian.",
      contoh: [
        {
          soal:
"Many students spend too much money on snacks. Therefore, they should learn to make a budget.\n\nWhich part of the text is the thesis?",
          penyelesaian:
"Thesis adalah pendapat utama penulis. Kalimat \"Many students spend too much money on snacks\" menyatakan masalah, sedangkan \"they should learn to make a budget\" adalah pendapat atau saran penulis.\n\nJadi thesis-nya adalah kalimat kedua, yaitu anjuran untuk membuat anggaran."
        },
        {
          soal:
"Which phrase is used to show a conclusion?\nA. Firstly\nB. Moreover\nC. To sum up",
          penyelesaian:
"To sum up adalah penanda kesimpulan. Firstly dan moreover digunakan untuk menambah argumen.\n\nJawabannya C."
        }
      ],
      latihan: [
        { ref: "bahasa-inggris-2025", i: 20 },
        { ref: "bahasa-inggris-2025", i: 21 },
        { ref: "bahasa-inggris-2025", i: 22 },
        { ref: "bahasa-inggris-2025", i: 23 },
        { ref: "bahasa-inggris-2025", i: 24 }
      ]
    }
  ]
});