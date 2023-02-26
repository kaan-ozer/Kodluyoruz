// let age = prompt("Yasiniz:");

// let result =
//   age < 16
//     ? "Ehliyet Alamazsiniz"
//     : age > 18
//     ? "Ehliyet Alabilirsiniz"
//     : "Motor Ehliyeti Alabilirsiniz";

// console.log(result);

let username = prompt("Kullanici Bilginizi Yaziniz:");

let info = document.querySelector("#info");

info.innerHTML = `${username ? username : "kullanici adi eksik"}`;

// kosul ? dogru ise : yanlıs ise
