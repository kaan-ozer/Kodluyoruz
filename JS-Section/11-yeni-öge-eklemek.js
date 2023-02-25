"use strict";

let lastItem = document.querySelector("ul#list>li:last-child");

console.log(lastItem);

let firstItem = document.querySelector("ul#list>li:first-child");

console.log(firstItem);

firstItem.innerHTML = "first child degisti.";
lastItem.innerHTML = "last child degisti.";

let ulDOM = document.querySelector("#list");
let liDOM = document.createElement("li");

liDOM.innerHTML = "olusturdugumuz li";

ulDOM.append(liDOM); // en sona ekliyor
ulDOM.prepend(liDOM); // basa ekler
