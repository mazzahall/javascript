// soal 1
let umur = 25;
console.log(umur);

// soal 2
"use strict";

x = 10;
console.log(x); //akan terjadi eror di dalam browser

// soal 3
let data = "Halo";
console.log(typeof data); // Apa outputnya dia akan jadi string

data = 42;
console.log(typeof data); // Apa outputnya dia akan jadi number

data = true;
console.log(typeof data); // Apa outputnya dia akan jadi boolean

// soal 4
let name = prompt("silahkan masuk kan nama anda");
alert(`Hello ${name},Selamat datang di pondok`)

// soal 5
let isBoss = confirm("apakah pengguna ingin melanjutkan ke halaman lain?")
if (isBoss == true ) {
    alert("Anda memilih untuk melanjutkan")
} else {
    alert("Anda membatalkan tindakan")
}