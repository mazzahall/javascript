// saoal 1
let penduduk = {
    namaDepan : "slamet",
    namaBelakang : "santoso",
    umur : 45,
    pekerjaan : "petani",
}
penduduk.kota = "Yogyakarta"
let { namaBelakang,namaDepan } = penduduk;
console.log("Nama Depan,Nama Belakang):", namaDepan,namaBelakang);
console.log("Pekerjaan :", penduduk.pekerjaan);
console.log("Data lengkap penduduk:", penduduk);

// soal 2
let buahkesukaan = ["mangga","jeruk","apel"]
buahkesukaan.push("Pisang");
const indexJeruk = buahkesukaan.indexOf("Jeruk");
if (indexJeruk !== -1) {
  buahfavorit[indexJeruk] = "Anggur";
}
buahkesukaan.pop();
console.log("Daftar Buah Favorit Terbaru:", buahkesukaan);

// soal 3
let menuRestoran = new Map([
    ["Nasi Goreng", 15000],
    ["Mie Ayam", 13000],
    ["Es Teh Manis", 5000]
  ]);
  menuRestoran.set("Ayam Bakar", 20000);
  console.log("Harga Mie Ayam:", menuRestoran.get("Mie Ayam"));
  menuRestoran.delete("Es Teh Manis");
  console.log("Menu Tersisa:");
menuRestoran.forEach((harga, menu) => {
  console.log(`${menu}: Rp${harga}`);
});

// soal 4
let koleksiBuku = new Set(['Laskar Pelangi', 'Bumi', 'Hujan']);
koleksiBuku.add('Filosofi Teras');
koleksiBuku.add('Bumi'); 
console.log('Apakah "Bumi" berhasil ditambahkan lagi?', koleksiBuku.has('Bumi'));
koleksiBuku.delete('Hujan');
console.log('Koleksi Buku Terkini:',koleksiBuku);
koleksiBuku.forEach(buku => console.log(`- ${buku}`));

// soal 5
let pakaianPria = ["Kemeja", "Celana Jeans", "Jaket"];
let pakaianWanita = ["Blouse", "Rok", "Cardigan"];
let pakaianToko = [...pakaianPria, ...pakaianWanita];
pakaianToko.push("Kaos");
console.log("Daftar Pakaian di Toko:,",pakaianToko);
pakaianToko.forEach((pakaian, index) => {
  console.log(`${index + 1}. ${pakaian}`);
});

// soal 6
function pesanMakanan(...makanan) {
    return makanan;
  }
  const pesanan = pesanMakanan("Nasi Goreng", "Sate Ayam", "Es Teh Manis");
console.log(pesanan); 
