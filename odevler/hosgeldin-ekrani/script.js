"use strict";

let myNameDom = document.querySelector("#myName");
let myClockDom = document.querySelector("#myClock");

let myNameInput = prompt("Isminizi Giriniz:");
myNameDom.innerHTML = myNameInput;

const language = "tr";
const options = { weekday: "long" };
const dayData = new Date().toLocaleString(language, options);

function showTime() {
  const today = new Date();

  //   saat, dakika, ve saniyeyi ayrı ayrı al
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  //   if sayi < 10 basina 0 ekle
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  //dom da degisiklik yap
  myClockDom.innerHTML = `${h}:${m}:${s}`;

  //gunu de doma ekler
  myClockDom.innerHTML += ` ${dayData}`;
  //surekli güncelle

  setTimeout(showTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
