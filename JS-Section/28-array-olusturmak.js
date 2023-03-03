"use strict";

let domain = "kodluyoruz";
let isActive = false;
let items = [25, 15, 3, isActive, domain];
console.log(items);

// items += [1, 2, 3];
// console.log(items);

let emptyArray = [];

console.log(items.length);

document.querySelector(`#info`).innerHTML = items.length;

console.log(items[0]);
console.log(items[items.length - 1]);

console.log(typeof items);

console.log("[]:", Array.isArray(items));
console.log("1:", Array.isArray(1));
console.log("true:", Array.isArray(true));

console.log(
  items[
    Math.floor(
      items.length % 2 == 0 ? items.length / 2 : Math.floor(items.length / 2)
    )
  ]
);
