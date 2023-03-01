"use strict";

function helloWorld() {
  console.log("Hello World");
}

function hello() {
  console.log("Merhaba");
  helloWorld();
}

const add = function (num1, num2) {
  const total = num1 + num2;
  return total;
};

hello();

console.log(add(1, 2));
