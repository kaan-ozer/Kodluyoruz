// veri turunu ogrenmek typeof:

let price = 111;
let stringPrice = "111";
let hasPassword = true;

console.log("price:", typeof price);
console.log("String Price:", typeof stringPrice);
console.log("Password", typeof hasPassword);

// String (metinsel) bilgileri int ve float'a donusturmek.
let number1 = "11";
console.log("Number1:", parseInt(number1), typeof parseInt(number1));

let number2 = "11px";
number2 = parseInt(number2);
console.log("Number2:", number2, typeof number2);

let number3 = "11px";
number3 = Number(number3);
console.log("Number3:", number3, typeof number3);

let number4 = "11.9px";
number4 = parseFloat(number4);
console.log("Number4:", number4, typeof number4);

let number5 = "11.9px";
number5 = parseInt(number4);
console.log("Number5:", number5, typeof number5);

// parseint içinde sayı varsa çeviriyor
// number içinde sadece sayı varsa başka karakter yoksa çeviriyor

// Number veri tipinden Stringe dönüştürmek
let number6 = 55;
number6 = number6.toString();
console.log(number6, typeof number6);
