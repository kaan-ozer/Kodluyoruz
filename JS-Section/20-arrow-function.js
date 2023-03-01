"use strict";

function hello(firstName) {
  console.log(`${firstName}`);
}

hello("JavaScript");

const helloFuncV1 = (firstName) => {
  console.log(`${firstName}`);
};

helloFuncV1("V1");

const helloFuncV2 = (firstName) => console.log(firstName);
//1 paremetre gelicekse parametreye parantez koymaya gerek yok
//1 islem olacak ise süslü parantez koymaya gerek yok

helloFuncV2("V2");

const helloFuncV3 = (firstName, lastName) =>
  console.log(`Merhaba ${firstName} ${lastName}`);
//bir den fazla parametre kullanacak isem parantez içine almam lazım

helloFuncV3("Kaan", "Ozer");

const helloFuncV4 = (firstName, lastName) => {
  let info = `Merhaba ${firstName} ${lastName}`;
  console.log(info);
  return info;
  //birden fazla islem oldugunda suslu parantez kullanmaliyiz
};

const greet = (who) => `Hello, ${who}!`;

console.log(greet("me"));

// function declaration

function helloWorld() {
  return "hello world";
}

let helloWorldArrow = () => "hello world";
// {} olsaydı return yazmak gerekirdi

let helloWorldAnon = function () {
  return "hello world";
};

const myFunctionVariable = (list) => {
  list.forEach((series, index) => {
    console.log(`${index + 1}. ${series}`);
  });
};

myFunctionVariable(["Firefly", "The Mandalorian", "Breaking Bad"]);
