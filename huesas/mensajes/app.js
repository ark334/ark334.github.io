let msg = document.getElementById("msg");

let arr1 = ["Sergio", "Juanpa", "Jose", "Juanjo", "Alexis"]
let arr2 = ["se traga", "chupa", "mira desconsolado", "destroza","se folla"]
let arr3 = ["el rojo corporativo","sus huevos","a Guanche", "la leche", "el trilobite"];

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