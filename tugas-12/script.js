// soal 1
function greet() {
    console.log("Hello,world!");
    
}
greet()

//soal 2
function showMessage() {   
    let Message = "ini pesan lokal"
    console.log(Message);
    
}
showMessage()

// soal 3
let username = "guest";

function updateUsername() {
  console.log(username);

  username = "Admin";
  console.log(username);
}

updateUsername();

// soal 4

// soal 5
function greet(name = "User")   
{ console.log(`Hello, ${name}!`); }  

greet();
greet("Alya")

// soal 6

function setUser(userName = "Guest") {
    console.log(`Welcome, ${userName}!`);
    
}

setUser();
setUser("Rafi");

// soal 7
function add(paramOne, paramTwo) {
    return paramOne + paramTwo;
}

console.log(add(10, 7));