"use strict";

let formDom = document.querySelector(`#userForm`);

formDom.addEventListener("submit", formSubmit);

function formSubmit(event) {
  //var olan html ozelligi olan submiti unactive yaptik
  event.preventDefault();
  console.log("islem gerceklesti");
}

var password;
function handleSubmit(e) {
  e.preventDefault();
  console.log("username:" + username + "-" + "password:" + password);
}
function handleChange(e) {
  console.log(e);
  console.log(e.target);
  console.log(e.target.name);
  console.log(e.target.value);
  if (e.target.name === "username") {
    username = e.target.value;
  }
  if (e.target.name === "password") {
    password = e.target.value;
  }
}
