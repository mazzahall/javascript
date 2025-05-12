document.addEventListener("DOMContentLoaded", () => {
  let currentInput = "0";
  let previousInput = "";
  let operation = null;
  let resetInput = false;

  const display = document.getElementById("display");

  // Update tampilan kalkulator
  function updateDisplay() {
    display.textContent = currentInput;
  }

  // Menambahkan angka ke input
  function appendNumber(number) {
    if (currentInput === "0" || resetInput) {
      currentInput = number;
      resetInput = false;
    } else {
      currentInput += number;
    }
    updateDisplay();
  }

  // Memilih operator
  function setOperation(op) {
    if (operation !== null) calculate();
    previousInput = currentInput;
    operation = op;
    resetInput = true;
  }
  // Membersihkan tampilan
  function clearDisplay() {
    currentInput = "0";
    previousInput = "";
    operation = null;
    updateDisplay();
  }

  // Mengubah tanda bilangan
  function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
  }

  // Menghitung persentase
  function percentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
  }

  // Menghitung hasil
  function calculate() {
    if (operation === null || resetInput) return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }

    currentInput = result.toString();
    operation = null;
    resetInput = true;
    updateDisplay();
  }

  // Menambahkan event listeners untuk tombol angka
  document
    .getElementById("zero")
    .addEventListener("click", () => appendNumber("0"));
  document
    .getElementById("one")
    .addEventListener("click", () => appendNumber("1"));
  document
    .getElementById("two")
    .addEventListener("click", () => appendNumber("2"));
  document
    .getElementById("three")
    .addEventListener("click", () => appendNumber("3"));
  document
    .getElementById("four")
    .addEventListener("click", () => appendNumber("4"));
  document
    .getElementById("five")
    .addEventListener("click", () => appendNumber("5"));
  document
    .getElementById("six")
    .addEventListener("click", () => appendNumber("6"));
  document
    .getElementById("seven")
    .addEventListener("click", () => appendNumber("7"));
  document
    .getElementById("eight")
    .addEventListener("click", () => appendNumber("8"));
  document
    .getElementById("nine")
    .addEventListener("click", () => appendNumber("9"));
  document.getElementById("decimal").addEventListener("click", () => {
    if (resetInput) {
      currentInput = "0.";
      resetInput = false;
    } else if (!currentInput.includes(".")) {
      currentInput += ".";
    }
    updateDisplay();
  });

  // Menambahkan event listeners untuk tombol operator
  document
    .getElementById("add")
    .addEventListener("click", () => setOperation("+"));
  document
    .getElementById("subtract")
    .addEventListener("click", () => setOperation("-"));
  document
    .getElementById("multiply")
    .addEventListener("click", () => setOperation("*"));
  document
    .getElementById("divide")
    .addEventListener("click", () => setOperation("/"));

  // Menambahkan event listeners untuk tombol fungsi khusus
  document.getElementById("clear").addEventListener("click", clearDisplay);
  document.getElementById("toggleSign").addEventListener("click", toggleSign);
  document.getElementById("percentage").addEventListener("click", percentage);
  document.getElementById("equals").addEventListener("click", calculate);

  // Inisialisasi tampilan
  updateDisplay();
});
