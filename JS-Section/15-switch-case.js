// function getLetter(s) {
//   let letter;
//   console.log(true);
//   // Write your code here
//   switch (true) {
//     case "aeiou".includes(s[0]):
//       letter = "A";
//       break;
//     case "bcdfg".includes(s[0]):
//       letter = "B";
//       break;
//     case "hjklm".includes(s[0]):
//       letter = "C";
//       break;
//     default:
//       letter = "D";
//   }
//   return letter;
// }

let username = prompt("Kullanici Adiniz:");
let age = prompt("Yasiniz:");
let info = document.querySelector("#info");

if (username && age >= 18) {
  info.innerHTML = "Ehliyet Alabilirsiniz";
} else if (!username) {
  info.innerHTML = "Kullanici Adiniz Yok";
} else if (!(age >= 18)) {
  info.innerHTML = "Yasiniz Yok veya 18 Yasindan Kücüksünüz";
}
