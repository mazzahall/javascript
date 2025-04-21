let nilaisusulanit = 81;
if (nilaisusulanit >= 91) {
  console.log("grade A");
} else if (nilaisusulanit >= 81) {
  console.log("grade B");
} else if (nilaisusulanit >= 71) {
  console.log("grade C");
} else {
  console.log("grade D");
}

let nilai = 81;
let grade = nilai > 90 ? "A" : nilai > 80 ? "B" : nilai > 70 ? "C" : "D";
console.log(grade);

//soal 2
let buah = "nangka";
switch (buah) {
  case "chery":
    console.log("ini adalah chery");
    break;
  case "nangka":
    console.log("ini adalah nangka");
    break;
  case "salak":
    console.log("ini adalah salak");
    break;
  case "salak dan nangka":
    console.log("ini adalah salak dan nangka");
    break;

  default:
    console.log("nurudin tidak membeli buah apapun");
    break;
}

// soal 3
let saklar = undefined;

if (saklar) {
  console.log("saklar hidup");
} else {
  console.log("saklar mati");
}
