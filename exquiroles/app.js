let msg = document.getElementById("msg");

let arr1 = ["El checo", "Macias", "Nauzet", "Alberto"]
let arr2 = ["se traga", "se convierte en", "golpea", "mira"]
let arr3 = ["la leche","sus huevos","su culo", "un elefante"];

let msg1 = "";
let msg2 = "";
let msg3 = "";

const random = () => {

  if (msg.innerHTML === "") {
    msg1 = arr1[Math.floor(Math.random() * arr1.length)];
    msg.innerHTML = msg1;
  }
  else if (msg.innerHTML === msg1) {
    msg2 = arr2[Math.floor(Math.random() * arr1.length)];
    msg.innerHTML = msg1 + " " + msg2;
  }
  else if (msg.innerHTML == msg1 + " " + msg2) {
    msg3 = arr3[Math.floor(Math.random() * arr1.length)];
    msg.innerHTML = msg1 + " " + msg2 + " " + msg3;
  }
  else msg.innerHTML = "";
}

const genMsg2 = (msg1) => {
  msg2 = arr2[Math.floor(Math.random() * arr1.length)];
  msg.innerHTML = msg1 + " " + msg2;
  }