// soal 1
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// soal 2
let j = 10;
do {
  console.log(j);
  j--;
} while (j >= 1);

// soal 3
for (let k = 2; k <= 20; k++) {
  if (k % 2 == 0) {
    console.log(k);
  }
}

// soal 4
for (let l = 1; l <= 10; l++) {
  if (l === 5) continue;

  console.log(l);
}

// soal 5
for (let m = 1; m <= 10; m++) {
  if (m === 6) break;

  console.log(m);
}