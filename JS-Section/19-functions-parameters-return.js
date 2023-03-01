"use strict";

let firstName = "lorem";

function greetings(firstName = "", lastname = "") {
  //default parametre alıyor

  //   console.log(`Merhaba ${firstName ? firstName : ""}`);
  console.log(`Merhaba ${firstName}`);
  console.log(`Merhaba ${firstName} ${lastname}`);
}

console.log(firstName); //degisken bilgisi
greetings("kaan"); // parametreli
greetings(); // parametresiz

// let info = greetings("Hello");

// console.log(info); undefiend return olur cunku bir deger return etmedik

function greetings2(firstName, lastname) {
  let info = `Merhaba ${firstName} ${lastname}`;
  return info;
}

console.log(info);

let greetingsInfo = greetings2("Ad", "Soyad");

function domIdWriteInfo(id, info) {
  let domObject = document.querySelector(`#${id}`);
  domObject.innerHTML = info;
}
let htmlInfo = `<span style="color:red;">color RED</span>`;

domIdWriteInfo("greeting", htmlInfo);
domIdWriteInfo("info", greetingsInfo);

function factorial(n) {
  let result;
  if (n == 1) {
    return 1;
  } else {
    return (result = n * factorial(n - 1));
  }
}

console.log(factorial(4));
