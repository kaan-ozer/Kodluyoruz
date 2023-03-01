"use strict";

let user = {
  userName: "kaanozer",
  isActive: true,
};

localStorage.setItem("userInfo", JSON.stringify(user));

//bilgiyi al
let userInfo = localStorage.getItem("userInfo");

userInfo = JSON.parse(userInfo);

let items = [1, 2, 3, user];

localStorage.setItem("items", JSON.stringify(items));

console.log(localStorage.getItem("items"));
