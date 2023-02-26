"use strict";

let price = "100";
let user = "hakan";

// Degeri Esitse
console.log("== 1 :", price == 1); // degerleri esit mi ? diye bakar (false)
console.log("== 100 :", price == 100); //true

// Degeri ve turu esitse
console.log("=== 1 :", price === 1); // hem turunu hem degerini kontrol eder
console.log("=== 100 :", price === 100); // hem turunu hem degerini kontrol eder

//   esit degilse deger cinsinden !=(! =)
console.log(price != 100);
// esit degilse hem tur hem deger cinsinden !==( ! = =)
console.log(price !== 100);

console.log(user != "guest");

console.log("price < 100", price < 100);
console.log("price <= 100", price <= 100);

console.log("price > 200", price > 200);
console.log("price >= 100", price >= 100);

console.log(price && user != "guest");

price = 0;
console.log(price > 0 && user != "guest");

price = 1;
user = "guest";
console.log(price > 0 && user == "guest");
console.log(!(price > 0 && user == "guest"));
