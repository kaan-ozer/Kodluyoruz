"use strict";

// let h2 = document.getElementsByTagName("h2");

// console.log(h2.title.innerHTML);

let h2 = document.getElementById("title");
h2.innerHTML = "degisen bilgi";
console.log(h2.innerHTML);

let link = document.querySelector("ul#list>li>a");

console.log(link);
console.log(link.innerHTML);

link.innerHTML += " degisti.";
link.style.color = "red";
link.classList.add("fs-1", "text-muted", "bg-info", "d-block", "mt-5");

let testParagraph = document.querySelector(".test");

console.log(testParagraph);
