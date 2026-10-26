/* Rekap materi: Bahasa Inggris
   Setiap item di "latihan" berupa:
   - { ref: "id-mapel", i: indeks }  → memakai soal yang sudah ada di data mapel
   - { q, opsi, kunci, bahas, ... }  → soal baru khusus rekap */
(window.REKAP = window.REKAP || []).push({
  mapel: "bahasa-inggris-2025",
  nama: "Bahasa Inggris",
  tahun: 2025,
  deskripsi: "Narrative text, procedure, descriptive, dan analytical exposition.",

  topik: [
    {
      id: "narrative-text",
      judul: "Narrative Text",
      ringkasSingkat: "Struktur cerita: orientasi, komplikasi, resolusi, dan pesan moral.",

      ringkasan: [
        { h: "Apa itu narrative text?" },
        "Narrative text adalah teks yang menceritakan sebuah peristiwa atau pengalaman. Biasanya ada tokoh, latar, konflik, dan penyelesaian. Tujuannya menghibur sekaligus menyampaikan pesan moral.",

        { h: "Struktur teks" },
        "Umumnya terdiri dari: (1) Orientation, yaitu pengenalan tokoh, waktu, dan tempat. (2) Complication, yaitu masalah atau konflik yang muncul. (3) Resolution, yaitu cara masalah diselesaikan. (4) Coda, opsional, yaitu pesan atau pelajaran dari cerita.",

        { h: "Ciri kebahasaan" },
        "Peristiwa utama memakai simple past (went, saw, caught). Latar suasana sering memakai past continuous (was walking). Kata penghubung waktu seperti once upon a time, one day, suddenly, finally, dan from that moment on membantu menandai urutan cerita.",
        "Dialog biasanya ditulis dalam tanda kutip dan menunjukkan karakter tokoh.",

        { h: "Cara membaca narrative text" },
        "Cari tokoh utamanya, masalahnya, dan cara masalah itu diselesaikan. Pertanyaan tentang pesan moral dan karakter tokoh biasanya dijawab dengan menghubungkan tindakan tokoh dengan kejadian dalam cerita."
      ],

      refleksi: "Narrative text itu seperti menonton film pendek. Kalau kamu bisa menyebutkan siapa tokohnya, apa masalahnya, dan bagaimana selesainya, kamu sudah memahami sebagian besar isi teks. Tidak perlu membaca semua kata sekaligus. Cukup ikuti alurnya pelan-pelan.",

      contoh: [
        {
          soal:
`Read the text and identify the complication:
"One day, a little bird fell from its nest. It could not fly, and it cried loudly. Then a kind girl found it and took it home to heal its wing."

Which part is the complication?`,
          penyelesaian:
`Complication adalah bagian yang berisi masalah.

"a little bird fell from its nest. It could not fly" adalah masalah: burung jatuh dan tidak bisa terbang.

"Then a kind girl found it and took it home" adalah resolution, yaitu cara masalah mulai diselesaikan.

Jadi complication-nya adalah burung yang jatuh dan tidak bisa terbang.`
        },
        {
          soal:
`Which tense is used to describe the main events in a narrative text?
A. Present simple
B. Simple past
C. Future tense`,
          penyelesaian:
`Peristiwa utama dalam narrative text memakai simple past, seperti fell, found, dan took.

Jawabannya B.`
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
    }
  ]
});