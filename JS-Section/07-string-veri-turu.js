"use strict";

let email = "hakanyalcinkaya@gmail.com";
let firstName = "hakan";
let lastName = "YALCINKAYA";

// string karakter sayisi -> length
console.log(email.length);

// Ilk karakteri bulmak -> [0]:
console.log(firstName[0]);
console.log(firstName.charAt(0));

// buyuk harf / kucuk harf

firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);

// string icerisinde istedigimiz bilgiyi aramak ve yerini bulmak -> search:

console.log(email.search("@")); // 15
console.log(email[15]); // 15
console.log(email.search("olmayandeger")); // -1

// string icerisinde belli bir kismi alma
console.log("email uzantınız:", email.slice(16, email.length - 4));
console.log("email uzantınız:", email.slice(15)); // 15 ve sonrasını full alır
console.log("email uzantınız:", email.slice(0, email.length));
// sağdaki indexe kadar sol dahil sağ değil

let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

console.log(DOMAIN.indexOf(".")); // 5
console.log(DOMAIN.search(".")); // 0

DOMAIN = DOMAIN.slice(0, DOMAIN.indexOf(".")); // sadece gmail'i alma

//bilgiyi degistir -> replace

let kodluyoruzEmail = email.replace("gmail.com", "kodluyoruz.org");
console.log(kodluyoruzEmail);

//istediğim bilgi var mı ? -> includes

console.log(email.includes("@")); // true
console.log(email.includes("sdşngşsd")); // false

//istedigim bilgi ile basladi mi ? bitti mi ? startsWith endsWith

email.endsWith("@"); // false
email.endsWith("com"); // true

//ilk harflerini büyük yapmak

let fullName = `${firstName[0].toUpperCase()}${firstName
  .slice(1)
  .toLowerCase()} ${lastName[0].toUpperCase()}${lastName
  .slice(1)
  .toLowerCase()}`; // slice(1) 1 den itibaren al

console.log(fullName);

let url = "www.kodluyoruz.org";
let language = "Java";

language = language.replace("Java", "JavaScript");

console.log(language);

url = url.slice(url.indexOf(".") + 1);
console.log(url);
