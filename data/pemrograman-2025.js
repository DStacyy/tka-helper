/* Mapel: Pemrograman (Terstruktur & PBO)
   Soal disusun dengan format dan topik yang sama dengan latihan_soal_pemrograman_terstruktur_dan_PBO.docx:
   pseudocode (perulangan, perulangan bersarang, parameter, fungsi), dan kode Java (class, object,
   enkapsulasi, inheritance, polymorphism, overloading, static, abstract).
   Tipe soal:
   - kunci: number  → pilihan ganda tunggal
   - kunci: [..]    → pilihan ganda kompleks (pilih semua yang benar)
   - baris + labelKat → soal kategori (tabel)
   Field "kode" menampilkan blok kode dengan format monospace. Field "grup" mengelompokkan soal di daftar. */
(window.MAPEL = window.MAPEL || []).push({
  id: "pemrograman-terstruktur-pbo",
  nama: "Pemrograman (Terstruktur & PBO)",
  tahun: 2025,
  deskripsi: "20 soal: pseudocode, perulangan bersarang, fungsi dan prosedur, serta class, object, dan sifat-sifat OOP.",

  soal: [
    // ---------- Perulangan & pseudocode (1–4)
    { no: "1", grup: "Perulangan & pseudocode",
      q: "Perhatikan pseudocode berikut. Berapa nilai s setelah seluruh eksekusi?",
      kode:
`s := 0
for i := 2 to 10 do
  if i mod 3 = 0 then
    s := s + i
  endif
endfor`,
      opsi: ["18", "19", "27", "30", "45"],
      kunci: 0,
      bahas: "Nilai i yang habis dibagi 3 dalam rentang 2 sampai 10 adalah 3, 6, dan 9.\nJumlahnya: 3 + 6 + 9 = 18.\nJadi s = 18." },

    { no: "2", grup: "Perulangan & pseudocode",
      q: "Perhatikan pseudocode berikut. Berapa nilai count setelah seluruh eksekusi?",
      kode:
`count := 0
for i := 1 to 4 do
  for j := i to 4 do
    count := count + 1
  endfor
endfor`,
      opsi: ["4", "10", "8", "12", "16"],
      kunci: 1,
      bahas: "Penelusuran perulangan bersarang:\ni = 1 → j = 1..4 → 4 kali\ni = 2 → j = 2..4 → 3 kali\ni = 3 → j = 3..4 → 2 kali\ni = 4 → j = 4 → 1 kali\nTotal: 4 + 3 + 2 + 1 = 10.\nPola ini juga menunjukkan bahwa perulangan bersarang dengan batas segitiga menghasilkan n(n+1)/2 pengulangan." },

    { no: "3", grup: "Perulangan & pseudocode", tipe: "multi",
      q: "Perhatikan pseudocode berikut.\n\nPilihlah semua pernyataan yang benar.",
      kode:
`for i := 1 to 3 do
  for j := 1 to 3 do
    if i = j then
      print '*'
    else
      print '-'
    endif
  endfor
  print newline
endfor`,
      opsi: [
        "Baris ke-2 yang dicetak adalah -*-",
        "Jumlah karakter '*' yang dicetak adalah 3",
        "Total karakter (tidak termasuk newline) yang dicetak adalah 9",
        "Kompleksitas waktu algoritma tersebut adalah O(n²)",
        "Jumlah karakter '-' yang dicetak adalah 4"
      ],
      kunci: [0, 1, 2, 3],
      bahas: "Hasil cetak:\n*--\n-*-\n--*\nA benar: baris kedua -*-.\nB benar: ada tiga '*' (diagonal).\nC benar: 3 baris × 3 karakter = 9.\nD benar: dua loop bersarang dari 1 sampai n menghasilkan O(n²).\nE salah: karakter '-' berjumlah 6, bukan 4." },

    { no: "4", grup: "Perulangan & pseudocode",
      q: "Perhatikan pseudocode berikut. Berapa banyak langkah (iterasi) yang dibutuhkan hingga x menjadi 1?",
      kode:
`x := 6
langkah := 0
while x > 1 do
  if x mod 2 = 0 then
    x := x div 2
  else
    x := 3 * x + 1
  endif
  langkah := langkah + 1
endwhile`,
      opsi: ["5", "6", "7", "8", "9"],
      kunci: 3,
      bahas: "Penelusuran x:\n6 → 3 (langkah 1)\n3 → 10 (2)\n10 → 5 (3)\n5 → 16 (4)\n16 → 8 (5)\n8 → 4 (6)\n4 → 2 (7)\n2 → 1 (8)\nLoop berhenti saat x = 1, jadi langkah = 8." },

    // ---------- Konsep OOP (5–6)
    { no: "5", grup: "Konsep OOP",
      q: "Konsep ketika objek subclass diperlakukan sebagai tipe superclass-nya (misalnya Senjata s = new Pedang();) disebut ....",
      opsi: ["Overloading", "Overriding", "Upcasting", "Enkapsulasi", "Abstraksi"],
      kunci: 2,
      bahas: "Upcasting adalah mengacu objek subclass melalui tipe superclass. Ini dimungkinkan karena subclass adalah bagian dari superclass-nya. Overloading dan overriding adalah konsep yang berbeda, dan enkapsulasi serta abstraksi adalah prinsip OOP lain." },

    { no: "6", grup: "Konsep OOP",
      q: "Dua method dalam satu class memiliki nama yang sama tetapi jumlah atau tipe parameternya berbeda. Konsep ini disebut ....",
      opsi: ["Overriding", "Overloading", "Enkapsulasi", "Pewarisan", "Abstraksi"],
      kunci: 1,
      bahas: "Overloading terjadi dalam satu class ketika nama method sama tetapi parameter berbeda. Overriding berbeda karena terjadi antara superclass dan subclass dengan signature yang sama." },

    // ---------- Class, object, enkapsulasi (7–8)
    { no: "7", grup: "Class, object & enkapsulasi",
      q: "Perhatikan kode Java berikut. Apa output yang dicetak?",
      kode:
`class Akun {
    private int saldo = 0;
    public void setor(int x) {
        if (x > 0) saldo += x;
    }
    public int getSaldo() {
        return saldo;
    }
}
public class Main {
    public static void main(String[] args) {
        Akun a = new Akun();
        a.setor(50);
        a.setor(-20);
        a.setor(30);
        System.out.println(a.getSaldo());
    }
}`,
      opsi: ["0", "50", "80", "60", "100"],
      kunci: 2,
      bahas: "setor(50): 50 > 0, saldo menjadi 50.\nsetor(-20): -20 tidak lebih dari 0, diabaikan.\nsetor(30): saldo menjadi 80.\nOutput: 80." },

    { no: "8", grup: "Class, object & enkapsulasi", tipe: "multi",
      q: "Berdasarkan kode pada soal nomor 7, pilihlah semua pernyataan yang benar.",
      opsi: [
        "Kelas Main tidak dapat mengakses saldo secara langsung",
        "Pemanggilan setor(-20) tidak mengubah saldo",
        "getSaldo() adalah contoh getter",
        "Kelas Main dapat menulis a.saldo = 999 untuk mengubah saldo",
        "Atribut saldo bersifat protected sehingga bisa diakses dari Main"
      ],
      kunci: [0, 1, 2],
      bahas: "A benar: saldo bersifat private, hanya bisa diakses di dalam Akun.\nB benar: nilai negatif ditolak oleh validasi if (x > 0).\nC benar: getSaldo() membaca nilai atribut dan mengembalikannya.\nD salah: karena private, akses langsung dari Main menyebabkan compile error.\nE salah: atribut bersifat private, bukan protected. Main juga bukan subclass dari Akun." },

    // ---------- Inheritance & polymorphism (9–11)
    { no: "9", grup: "Inheritance & polymorphism",
      q: "Perhatikan kode Java berikut. Apa output dari new Kucing().info();?",
      kode:
`class Hewan {
    void suara() { System.out.print("..."); }
    void info() {
        suara();
        System.out.print("!");
    }
}
class Kucing extends Hewan {
    @Override
    void suara() { System.out.print("Meong"); }
}`,
      opsi: ["...!", "Meong", "Meong!", "...Meong!", "Compile error"],
      kunci: 2,
      bahas: "Hewan.info() memanggil suara(). Karena objeknya adalah Kucing, method suara() yang dijalankan adalah versi Kucing (dynamic dispatch), yaitu Meong. Setelah itu dicetak '!'.\nOutput: Meong!" },

    { no: "10", grup: "Inheritance & polymorphism", tipe: "kat",
      q: "Tentukan konsep OOP yang paling tepat untuk setiap pernyataan berikut.",
      labelKat: ["Inheritance", "Encapsulation", "Polymorphism"],
      baris: [
        { t: "Subclass memperoleh atribut dan method dari superclass", k: 0 },
        { t: "Atribut dibuat private dan diakses melalui getter atau setter", k: 1 },
        { t: "Method yang sama memberi perilaku berbeda tergantung objek aktualnya", k: 2 }
      ],
      bahas: "Pewarisan (inheritance): subclass mewarisi anggota superclass.\nEnkapsulasi: data disembunyikan dan diakses lewat method.\nPolimorfisme: satu nama method dengan perilaku berbeda sesuai objek aktual." },

    { no: "11", grup: "Inheritance & polymorphism",
      q: "Prinsip OOP yang menyatakan bahwa method yang dijalankan ditentukan oleh tipe objek aktual saat runtime disebut ....",
      opsi: ["Dynamic method dispatch", "Static binding", "Overloading", "Compile-time casting", "Encapsulation"],
      kunci: 0,
      bahas: "Dynamic method dispatch (dynamic binding) adalah mekanisme yang menentukan method mana yang dijalankan saat runtime berdasarkan objek aktual. Static binding terjadi saat compile-time." },

    // ---------- Static & abstract (12–13)
    { no: "12", grup: "Static & abstract",
      q: "Atribut yang dideklarasikan dengan kata kunci static memiliki sifat ....",
      opsi: [
        "Setiap objek memiliki salinan sendiri",
        "Dimiliki bersama oleh kelas, bukan oleh objek",
        "Hanya bisa diakses dari luar kelas",
        "Selalu bernilai konstan",
        "Tidak dapat diakses oleh method"
      ],
      kunci: 1,
      bahas: "Atribut static merupakan milik kelas. Semua objek dari kelas tersebut berbagi satu nilai yang sama. Ini berbeda dengan atribut instance yang punya salinan untuk tiap objek." },

    { no: "13", grup: "Static & abstract",
      q: "Perhatikan kode Java berikut. Apa yang terjadi?",
      kode:
`abstract class Bentuk {
    abstract double luas();
}
public class Main {
    public static void main(String[] args) {
        Bentuk b = new Bentuk();
    }
}`,
      opsi: [
        "Objek dibuat, tetapi method abstrak otomatis dihapus",
        "Terjadi compile error karena kelas abstrak tidak dapat diinstansiasi",
        "Program berjalan normal tanpa output",
        "Terjadi runtime error saat main dijalankan",
        "Kelas abstrak otomatis diubah menjadi interface"
      ],
      kunci: 1,
      bahas: "Kelas abstrak tidak boleh diinstansiasi dengan new. Kompilator akan menolak kode ini dengan error. Kelas abstrak tetap boleh dipakai sebagai tipe referensi, misalnya Bentuk[] atau Bentuk b = new Persegi();." },

    // ---------- Fungsi, prosedur, dan parameter (14–15)
    { no: "14", grup: "Fungsi, prosedur & parameter",
      q: "Perhatikan kode pseudocode berikut. Berapa nilai a dan b setelah pemanggilan Tambah(a, b)?",
      kode:
`procedure Tambah(var x: integer; y: integer)
begin
  x := x + y;
  y := 0;
end;

a := 5;
b := 3;
Tambah(a, b);`,
      opsi: ["a = 5 dan b = 0", "a = 8 dan b = 0", "a = 8 dan b = 3", "a = 3 dan b = 8", "a = 5 dan b = 3"],
      kunci: 2,
      bahas: "x bersifat var (pass by reference), sehingga x := x + y mengubah a menjadi 5 + 3 = 8.\ny bersifat nilai (pass by value), sehingga y := 0 hanya mengubah salinan di dalam prosedur. b tetap 3." },

    { no: "15", grup: "Fungsi, prosedur & parameter", tipe: "multi",
      q: "Berdasarkan kode pada soal nomor 14, pilihlah semua pernyataan yang benar.",
      opsi: [
        "Setelah pemanggilan, nilai a adalah 8",
        "Setelah pemanggilan, nilai b menjadi 0",
        "Parameter var dapat mengubah nilai variabel asal",
        "Perubahan y menjadi 0 hanya berlaku di dalam prosedur",
        "Parameter x merupakan pass by value"
      ],
      kunci: [0, 2, 3],
      bahas: "A benar: a menjadi 8.\nB salah: b tetap 3 karena y dilewatkan sebagai nilai.\nC benar: parameter var mengacu ke variabel asal.\nD benar: y hanya salinan lokal.\nE salah: x adalah var, yaitu pass by reference." },

    // ---------- Penelusuran algoritma & rekursi (16–17)
    { no: "16", grup: "Penelusuran algoritma",
      q: "Perhatikan pseudocode bubble sort berikut. Berapa kali swap terjadi selama eksekusi?",
      kode:
`arr := [4, 1, 3, 2]
for i := 1 to 3 do
  for j := 1 to 4 - i do
    if arr[j] > arr[j+1] then
      tukar arr[j] dan arr[j+1]
    endif
  endfor
endfor`,
      opsi: ["3", "4", "5", "6", "2"],
      kunci: 1,
      bahas: "Penelusuran:\ni=1: [4,1,3,2] → swap (4,1) → [1,4,3,2] → swap (4,3) → [1,3,4,2] → swap (4,2) → [1,3,2,4]. Tiga swap.\ni=2: j=1 (1,3) tidak swap; j=2 (3,2) swap → [1,2,3,4]. Satu swap.\ni=3: j=1 (1,2) tidak swap.\nTotal swap: 4." },

    { no: "17", grup: "Penelusuran algoritma",
      q: "Perhatikan fungsi rekursif berikut. Berapa nilai yang dicetak untuk print f(5)?",
      kode:
`function f(n: integer): integer
begin
  if n <= 1 then
    return 1
  else
    return n * f(n - 1)
  endif
end`,
      opsi: ["24", "60", "120", "15", "5"],
      kunci: 2,
      bahas: "f(5) = 5 × f(4) = 5 × 4 × f(3) = 5 × 4 × 3 × f(2) = 5 × 4 × 3 × 2 × f(1) = 5 × 4 × 3 × 2 × 1 = 120." },

    // ---------- Kompleksitas & konsep lanjutan (18–20)
    { no: "18", grup: "Kompleksitas & konsep lanjutan",
      q: "Dua loop bersarang yang masing-masing berjalan dari 1 sampai n memiliki kompleksitas waktu ....",
      opsi: ["O(n)", "O(log n)", "O(n²)", "O(2ⁿ)", "O(n log n)"],
      kunci: 2,
      bahas: "Loop luar berjalan n kali. Untuk setiap iterasinya, loop dalam berjalan n kali, sehingga total n × n = n²." },

    { no: "19", grup: "Kompleksitas & konsep lanjutan", tipe: "multi",
      q: "Pernyataan manakah yang benar tentang class dan object?",
      opsi: [
        "Object adalah instance dari sebuah class",
        "Class menyimpan nilai atribut setiap object secara terpisah tanpa perlu object",
        "Satu class dapat menghasilkan banyak object",
        "Constructor dipanggil saat object dibuat",
        "Method tidak boleh mengakses atribut milik object"
      ],
      kunci: [0, 2, 3],
      bahas: "A benar: object adalah instance (wujud) dari class.\nB salah: atribut instance dimiliki masing-masing object. Atribut static dimiliki class.\nC benar: class adalah cetakan yang bisa menghasilkan banyak object.\nD benar: constructor dijalankan saat new dipanggil.\nE salah: method instance justru bertugas mengakses dan mengubah atribut object." },

    { no: "20", grup: "Kompleksitas & konsep lanjutan",
      q: "Perhatikan kode Java berikut. Apa output yang dicetak?",
      kode:
`class Cetak {
    void tampil(int a)    { System.out.print("int "); }
    void tampil(double a) { System.out.print("double "); }
    void tampil(String s) { System.out.print("String "); }
}
public class Main {
    public static void main(String[] args) {
        Cetak c = new Cetak();
        c.tampil(5);
        c.tampil(2.5);
        c.tampil("hi");
    }
}`,
      opsi: ["int int String", "int double String", "double double String", "String String String", "Compile error"],
      kunci: 1,
      bahas: "Ketiga method adalah overloading karena namanya sama tetapi tipe parameter berbeda.\ntampil(5) → int, tampil(2.5) → double, tampil(\"hi\") → String.\nOutput: int double String." }
  ]
});
