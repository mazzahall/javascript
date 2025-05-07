function numberone(param) {
  console.log(param);
  var elem = document.getElementById("display").innerText;
  if (elem == "0") {
    elem = "";
  }

  let total = elem + param;
  document.getElementById("display").innerText = total;
}

function numbertwo(param) {
  console.log(param);
  var elem = document.getElementById("display").innerText;
  if (elem == "0") {
    elem = "";
  }

  let total = elem + param;
  document.getElementById("display").innerText = total;
}

function numberthree(param) {
  console.log(param);
  var elem = document.getElementById("display").innerText;
  if (elem == "0") {
    elem = "";
  }

  let total = elem + param;
  document.getElementById("display").innerText = total;
}

function numberfour(param) {
  console.log(param);
  var elem = document.getElementById("display").innerText;
  if (elem == "0") {
    elem = "";
  }

  let total = elem + param;
  document.getElementById("display").innerText = total;
}

function numberfive(param) {
  console.log(param);
  var elem = document.getElementById("display").innerText;
  if (elem == "0") {
    elem = "";
  }

  let total = elem + param;
  document.getElementById("display").innerText = total;
}

function numbersix(param) {
  console.log(param);
  var elem = document.getElementById("display").innerText;
  if (elem == "0") {
    elem = "";
  }

  let total = elem + param;
  document.getElementById("display").innerText = total;
}

function numberseven(param) {
  console.log(param);
  var elem = document.getElementById("display").innerText;
  if (elem == "0") {
    elem = "";
  }

  let total = elem + param;
  document.getElementById("display").innerText = total;
}

function numbereight(param) {
  console.log(param);
  var elem = document.getElementById("display").innerText;
  if (elem == "0") {
    elem = "";
  }

  let total = elem + param;
  document.getElementById("display").innerText = total;
}

function numbernine(param) {
  console.log(param);
  var elem = document.getElementById("display").innerText;
  if (elem == "0") {
    elem = "";
  }

  let total = elem + param;
  document.getElementById("display").innerText = total;
}
function numberzero(param) {
  console.log(param);
  var elem = document.getElementById("display").innerText;
  if (elem == "0") {
    elem = "";
  }

  let total = elem + param;
  document.getElementById("display").innerText = total;
}
function tambah(param) {
  let getElement = document.getElementById("display").innerText;

  let total = getElement + param;
  console.log(total);
  document.getElementById("display").innerText = total;
}
function kali(param) {
  let getElement = document.getElementById("display").innerText;

  let total = getElement + param;
  console.log(total);
  document.getElementById("display").innerText = total;
}
function kurang(param) {
  let getElement = document.getElementById("display").innerText;

  let total = getElement + param;
  console.log(total);
  document.getElementById("display").innerText = total;
}
function bagi(param) {
  let getElement = document.getElementById("display").innerText;

  let total = getElement + param;
  console.log(total);
  document.getElementById("display").innerText = total;
}
function total() {
  let getElement = document.getElementById("display").innerText;
  console.log(getElement);

  if (getElement.includes("+")) {
    let parts = getElement.trim().split("+");
    console.log(parts);
    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);

    let total = operand1 + operand2;
    console.log(total);
    document.getElementById("display").innerText = total;
  } else if (getElement.includes("x")) {
    let parts = getElement.trim().split("x");
    console.log(parts);
    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);

    let total = operand1 * operand2;
    console.log(total);
    document.getElementById("display").innerText = total;
  } else if (getElement.includes("-")) {
    let parts = getElement.trim().split("-");
    console.log(parts);
    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);

    let total = operand1 - operand2;
    console.log(total);
    document.getElementById("display").innerText = total;
  } else if (getElement.includes("÷")) {
    let parts = getElement.trim().split("÷");
    console.log(parts);
    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);

    let total = operand1 / operand2;
    console.log(total);
    document.getElementById("display").innerText = total;
  }
}
function ClearDisplay(param) {
  document.getElementById("display").innerText = 0;
}
