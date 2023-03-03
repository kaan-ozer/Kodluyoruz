"use strict";
let items = [1, 2, 3, 4, 5];

// Array icinde array:

let femaleUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers);
console.log(items);

items.push(maleUsers);
console.log(items);

console.log(items.length);

console.log(items[0][0]);
console.log(items[0].length);

//bir daha items'a atamaz isem sonucu siler.
// items.splice(1, 5);
console.log(items);

//atama yaptıgım icin 2.indexten baslayip 4 tane alır
let newItems = items.splice(1, 5);
console.log("newItems:", newItems);
//kesilen kisim harici kaldi
console.log("items:", items);

items.unshift("lorem");
items.push("ipsum");

console.log(items.indexOf("ipsum"));
console.log(items[items.indexOf("ipsum")]);

//bu kopyalamak olmuyor
let copyItems = items;
console.log(copyItems);

//son ogeyi cikardik
copyItems.pop();
//ama ikisindende cikti
console.log("Copy Items:", copyItems);
console.log("Items:", items);

//bu kez kopyaladik
copyItems = items.slice();

//son ogeyi cikardik
copyItems.pop();

console.log("Copy Items:", copyItems);
console.log("Items:", items);

let es6Items = [...items];

console.log("es6Items :", es6Items);
console.log("Items:", items);

es6Items.pop();

console.log("es6Items :", es6Items); //es6 ve sonrasinda gelen kopyalama islemi
console.log("Items:", items);

let allUsers = [...femaleUsers, ...maleUsers]; //es6 birden fazla array yapisini birlestirmek
console.log(allUsers);

//array icerisindeki bilgiyi stringe cevirir
console.log(allUsers.toString());
console.log(allUsers.join(" --- "));

allUsers.splice(allUsers.length - 1, 0, "sondan ikinciye ekler");
allUsers.splice(Math.floor(allUsers.length / 2), 0, "ortaya ekler");
console.log(allUsers);

//include
const alisverisListem = ["elma", "ekmek", "süt"];

const elmaVar = alisverisListem.includes("elma");
console.log(elmaVar);
// Dizi içerisinde elma olduğu için true yazdırmasını bekleriz.

const armutVar = alisverisListem.includes("armut");
console.log(armutVar);
// Dizi içerisinde armut olmadığı için ekrana false yazdırmasını bekleriz.

const yiyecekler = ["pasta", "baklava", "puding"];
const icecekler = ["su", "kahve"];

const menu = yiyecekler.concat(icecekler);
console.log(menu);
// Çıktıda ["pasta", "baklava", "puding", "su", "kahve"] bekleriz.

menu.shift();

console.log("menu", menu);
console.log("yiyecekler", yiyecekler);

const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach((itemValue, index) => {
  malzemeler[index] = itemValue + " index";
  console.log(itemValue);
});
console.log("malzemeler", malzemeler);

// const sayilar = [1, 2, 3];

// let sayilarin5kati = sayilar.map(function (sayi) {
//   return sayi * 5;
// });

// console.log(sayilarin5kati);
// // Çıktı olarak [5,10,15] görmeyi bekleriz.

// console.log(sayilar);
// Çıktı olarak [1,2,3] görmeyi bekleriz. Orijinal dizimiz aynı kalır.

// const sayilar = [4, 5, 6];

// // sonucu görebilmek çıktıyı sonuc adlı değişkende tutalım:
// const sonuc1 = sayilar.some(function (sayi) {
//   return sayi > 5;
// });

// console.log(sonuc1);
// // Dizi içerisinde 5'ten büyük bir eleman bulunduğu için çıktıda "true" görmeyi bekleriz.

// const sonuc2 = sayilar.some(function (sayi) {
//   return sayi < 3;
// });

// console.log(sonuc2);
// Dizi içerisinde 3'ten küçük herhangi bir sayı olmadığı için çıktıda "false" görmeyi bekleriz.

// const sayilar = [4, 5, 6];

// //tüm elemanlar sartı saglarsa ancak true doner
// const sonuc1 = sayilar.every(function (sayi) {
//   return sayi > 3;
// });

// console.log(sonuc1);
// // Dizideki tüm sayılar 3'ten büyük olduğu için bu sonucun true dönmesini bekleriz.

// const sonuc2 = sayilar.every(function (sayi) {
//   return sayi > 5;
// });

// console.log(sonuc2);
// // Dizideki tüm sayılar 5'ten büyük olmadığı için sonucun false dönmesini bekleriz.

// const sonuc3 = sayilar.every(function (sayi) {
//   return sayi > 7;
// });

// console.log(sonuc3);
// // // Dizideki hiçbir sayı 7'den büyük olmadığı için sonucun false dömmesini bekleriz.

// const sayilar = [1, 2, 3, 4, 5];

// //belli bir kosula uygun olarak arrayimizden aldıgı elemanlar ile yeni array olusturur
// const filtrelenmisSayilar = sayilar.filter(function (sayi) {
//   return sayi > 3;
// });

// console.log(filtrelenmisSayilar);
// // Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.

// console.log(sayilar);
// // Orijinal dizi bozulmayacağından çıktıda [1,2,3,4,5] olarak görürüz.

// const sayilar = [4, 5, 6, 7];

// const bulunacakEleman1 = sayilar.find(function (sayi) {
//   return sayi === 5;
// });
// console.log(bulunacakEleman1);
// // Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.

// const bulunacakEleman2 = sayilar.find(function (sayi) {
//   return sayi > 5;
// });
// console.log(bulunacakEleman2);
// // Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.

// const bulunacakEleman3 = sayilar.find(function (sayi) {
//   return sayi < 3;
// });
// console.log(bulunacakEleman3);
// // Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.

const sayilar = [10, 20, 30];

// Dizi içindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
function indirgeyici(akumulator, sayi) {
  return akumulator + sayi;
}

// Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
const sonuc1 = sayilar.reduce(indirgeyici, 0);

console.log(sonuc1);
//0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 bekleriz.

// Eğer akümülatorümüzü 0 yerine 5'den başlatsaydık çıkabilecek sonucu görelim:

// const sonuc2 = sayilar.reduce(indirgeyici, 5);

// console.log(sonuc2);
// // 5 + 10 + 20 + 30 = 65 olacağından çıktı olarak 65 bekleriz.

// let dizi = [2, 5, 8, 11, 15, 17];

// // Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)

// const arrangedArray1 = dizi.filter(function (value) {
//   return value > 10;
// });

// const arrangedArray2 = arrangedArray1.map((item, index) => {
//   return item * 5;
// });

// console.log(arrangedArray2);

// let dizi = [3, 6, 9, 14, 16];

// // Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// // Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

// function myFunction(dizi) {
//   const result = dizi.some(function (value) {
//     return value > 5;
//   });

//   console.log(
//     result
//       ? "Beşten büyük bir eleman mevcut."
//       : "5'ten büyük eleman mevcut değil."
//   );
// }

// myFunction(dizi);

let dizi = [2, 3, 4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.
let nums = [2, 3, 6, 6, 5];
let largest = nums[0];

nums.filter((value) => {
  largest = value > largest ? value : largest;
});
console.log(largest);

nums.splice(nums.indexOf(largest), 1);

let secondLargest = 0;

nums.filter((value) => {
  secondLargest =
    value > secondLargest && value != largest ? value : secondLargest;
});
console.log(secondLargest);

function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
    let vowels = ["a", "e", "i", "o", "u"];
    console.log(i, vowels.includes(s[i]));
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    } else {
      console.log(s[i]);
    }
  }
}
