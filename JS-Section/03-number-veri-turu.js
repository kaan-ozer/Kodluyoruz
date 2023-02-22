"use strict";

// number veri turu tanimlamak
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let totalPrice = price + priceTax;
console.log(
  "Price:",
  price,
  "Tax:",
  tax,
  "Price Tax:",
  priceTax,
  "Total Price:",
  totalPrice
);

// arttirma ve azaltma islemleri.
let counter = 320;

counter = counter + 1;
console.log(counter);

counter += 1;
console.log(counter);

counter++;
console.log(counter);

counter -= 1;
console.log(counter);

counter--;
console.log(counter);

counter *= 10;
console.log(counter);

counter /= 2;
console.log(counter);

// işlem önceliği
console.log((2 + 3) * 5);

// mod(kalan) alma

console.log(15 % 2);

// us alma
console.log(2 * 2 * 2 * 2);
console.log(2 ** 4);

// asagi yuvarlama
console.log("asagi yuvarlama:", Math.floor(1.9));

// yukari yuvarlama
console.log("yukari yuvarlama:", Math.ceil(1.3));

// yakina yuvarlama
console.log("yakina yuvarlama:", Math.round(1.3));
console.log("yakina yuvarlama:", Math.round(1.8));

let stringNumber = "11";
console.log(stringNumber);
let newNumber = Number(stringNumber);
console.log(newNumber);
