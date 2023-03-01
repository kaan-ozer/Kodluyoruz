"use strict";
"use strict";

let counter = localStorage.getItem("counter")
  ? Number(localStorage.getItem("counter"))
  : 0;
let counterDom = document.querySelector(`#counter`);
let increaseDom = document.querySelector(`#increase`);
let decreaseDom = document.querySelector(`#decrease`);

counterDom.innerHTML = counter;

increaseDom.addEventListener("click", clickEvent);
decreaseDom.addEventListener("click", clickEvent);

function clickEvent() {
  console.log(typeof counter);
  console.log(this.id);
  this.id == "increase" ? (counter += 1) : (counter -= 1);
  localStorage.setItem("counter", counter);
  counterDom.innerHTML = counter;
}
