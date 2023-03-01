"use strict";

let counter = 0;
const counterDom = document.querySelector(`#counter`);
const btnIncreaseDom = document.querySelector(`#increase`);
const btnDecreaseDom = document.querySelector(`#decrease`);

counterDom.innerHTML = counter;

btnIncreaseDom.addEventListener("click", clickEvent);

btnDecreaseDom.addEventListener("click", clickEvent);

function clickEvent() {
  console.log(this.id);
  //   if (this.id == "increase") {
  //     ++counter;
  //   } else if (this.id == "decrease") {
  //     --counter;
  //   }
  this.id == "increase" ? ++counter : --counter;
  counterDom.innerHTML = counter;
}
