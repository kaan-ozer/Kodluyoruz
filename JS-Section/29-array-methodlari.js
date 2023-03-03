"use strict";

let items = [10, 20, 30, 40];
console.log("items - ilk hali:", items);

items.push(50);
console.log("50:", items);

items.unshift(5);
console.log("5:", items);

let lastItem = items.pop(); // son elemanı cikartir ve return eder
console.log("lastItem", lastItem, "items:", items);

let firstItem = items.shift(); // son elemanı cikartir ve return eder
console.log("firstItem", firstItem, "items:", items);

items[0] = 5;
console.log("5:", items);

items[items.length - 1] = 1000;
console.log("1000:", items);

//olmayan bir indexi olustur ve deger ata
items[100] = 1000;
console.log("100:", items);

var sports = ["basketball", "football", "tennis"];
console.log(sports); // basketball, football, tennis
//hem ekleme hem cikarma icin ilki index ikincisi silinecek sayisi
//silinecek saisini sıfır verip yanina istedigimiz kadar eklenecek verip o araya eleman ekleyebiliriz
sports.splice(1, 0, "baseball");
sports.splice(1, 0, "baseball", "test");
console.log(sports); // basketball, baseball, football, tennis
