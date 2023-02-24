"use strict";

let username = prompt("lütfen adınızı giriniz:");
// console.log(username);

let greeting = document.querySelector("#greeting");
console.log(greeting);

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red;"> ${username}</small>`;
