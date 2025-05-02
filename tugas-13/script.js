// Fungsi penjumlahan
function penambahan(a, b) {
    return a + b;
  }
  
  // Fungsi perkalian
  function perkalian(a, b) {
    return a * b;
  }
  
  // Fungsi utama yang menerima callback
  function calculate(num1, num2, operation) {
    let result = operation(num1, num2);
    console.log("Hasil:", result);
  }
  
  // Pemanggilan fungsi
  calculate(5, 3, penambahan); // Output: Hasil: 8
  calculate(4, 2, perkalian);  // Output: Hasil: 8