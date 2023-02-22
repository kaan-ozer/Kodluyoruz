// 0 alıyor gibi dusunebiliriz
let isActive = false;

// 1 alıyor gibi dusunebiliriz
isActive = true;
console.log(isActive);

let username;
let isUsername = Boolean(username);
console.log(username);
console.log(isUsername);

Boolean("1"); //true
Boolean("0"); //true
Boolean(""); //false

username = "user";
console.log("Username var mi ?", Boolean(username));

// 0, -0, null, false, NaN, undefined ,("")

Boolean(-0); //false
Boolean(0); //false
Boolean(-0.1); //true
Boolean(0 === 0); //true
Boolean(userName.length > 0); //true

console.log(Boolean("0" === 0));
