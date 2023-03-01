"use strict";

const greeting = document.querySelector(`#greeting`);

greeting.addEventListener("mouseover", domClick);

function domClick() {
  console.log("Tiklandi");
  console.log(this);
  console.log(this.innerHTML);
  this.classList.toggle("bg-info");
  this.style.color == "red"
    ? (this.style.color = "blue")
    : (this.style.color = "red");
  this.innerHTML = "tiklandigi icin bilgi degisti...";
}

const input = document.querySelector("#fname");
//keyboard isimli değişkene "cut" etkinliği atandı ve fonksiyon ismi parametre olarak atandı
input.addEventListener("copy", cuttingFunction);
//cuttingFunction isimli fonksiyon ile form inputuna yazılan girdileri klavye ctrl+c ile kesildiğinde etkinlik çalışmaktadır
function cuttingFunction(event) {
  console.log(event);
  console.log(event.type);
  console.log("etkinlik tipi: ", event.type);
}

//console ekranı : etkinlik tipi: cut

//id=select olan nesne çağrılarak color değişkenine atandı
const color = document.querySelector("#select");
//color değişkenine change etkinliği etkinliği atandı ve fonksiyon ismi parametre olarak atandı
color.addEventListener("change", selectBoxx);

//selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır
function selectBoxx(event) {
  console.log(event);
  console.log("Etkinlik tipi : " + event.type);
  console.log("deger : " + event.target.value);
}

// Selectbox içinde "blue" değerini seçtiğimiz takdirde;
// ekran çıktısı: Etkinlik tipi : change, deger : blue

// iç içe elementler çağrıldı
const select = document.querySelector("#selectForm");
const button = document.querySelector("#button");
const form = document.querySelector(".inputText");
const cerceve = document.querySelector(".container");
select.addEventListener("click", function () {
  console.log("SELECTTT");
});
form.addEventListener("click", function () {
  console.log("form");
});
cerceve.addEventListener("click", function () {
  console.log("cerceve");
});

let inputt = document.getElementById("input");
let output = document.getElementById("output");

inputt.addEventListener("input", function (event) {
  output.innerText = event.target.value.split("").join("");
});
