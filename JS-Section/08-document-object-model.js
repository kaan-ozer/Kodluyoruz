"use strict";

console.log(document.location.pathname);
console.log(document.head);
console.log(document.body);

document.body.style.backgroundColor = "grey";

document.getElementById("btnClick").addEventListener("click", clicked);

document.getElementById("helloWorldBtn").addEventListener("click", myFunction);

document.getElementById("writeTextBtn").addEventListener("click", writeText);

function clicked() {
  alert("Butona Tıklandı !");
}

function writeText() {
  document.getElementById("domain").innerHTML = "Dom Manipulation !";
}

function myFunction() {
  var w = window.open();
  w.document.open();
  w.document.write("<h1>Hello World!</h1>");
  w.document.close();
}
