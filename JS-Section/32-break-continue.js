"use strict";

const LOREM_LIST = [
  "lorem",
  "ipsum",
  "dolor",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
];

let counter = 0;

// for (; counter < 10; counter++) {
//   if (counter === 5) {
//     break;
//   }
//   console.log(counter);
// }
for (; counter < 10; counter++) {
  if (counter === 5) {
    continue;
  }
  console.log(counter);
}

const UL_DOM = document.querySelector(`#userList`);

let index = 0;

// for (; index < LOREM_LIST.length; index++) {
//   if (LOREM_LIST[index] === "dolor") {
//     break;
//   }
//   const liDOM = document.createElement("li");
//   liDOM.innerHTML = LOREM_LIST[index];
//   UL_DOM.appendChild(liDOM);
// }
// for (; index < LOREM_LIST.length; index++) {
//   if (LOREM_LIST[index] === "dolor") {
//     continue;
//   }
//   const liDOM = document.createElement("li");
//   liDOM.innerHTML = LOREM_LIST[index];
//   UL_DOM.appendChild(liDOM);
// }

ticket: for (; index < LOREM_LIST.length; index++) {
  for (; index < LOREM_LIST.length; index++) {
    if (LOREM_LIST[index] === "dolor") {
      break ticket;
    }
    const liDOM = document.createElement("li");
    liDOM.innerHTML = LOREM_LIST[index];
    UL_DOM.appendChild(liDOM);
  }
}

gec_etiketi: for (var i = 0; i <= 5; i++) {
  for (var j = 0; j <= 4; j++) {
    if (j == 2) {
      continue gec_etiketi;
    }
    console.log("iç döngüden j :" + j);
  }
}
