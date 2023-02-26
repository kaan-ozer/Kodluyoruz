"use strict";

let greeting = document.querySelector("#greeting");

greeting.classList.add("text-primary");
greeting.classList.add("title");
greeting.classList.add("new-info", "second-class", "third-class");

greeting.classList.remove("text-primary", "title");

console.log(greeting.classList);

let list = greeting.classList;

console.log(list.item(1)); // arrayin belirli bir elemanını return eder
console.log(list.contains("text-primary")); // içeriyorsa true döndürür

let myBtn = document.querySelector(".myBtn");

myBtn.addEventListener("click", function () {
  myBtn.classList.toggle("text-secondary");
  myBtn.classList.toggle("p-5");
  myBtn.classList.replace("btn-info", "btn-primary");
});
