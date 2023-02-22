// var ile degisken tanimlamak
// var serverName = "api.kodluyoruz.org";

//let ile degiskeni bos tanimlamak;
let serverName;
console.log(serverName);

// let ile degiskene bilgi atamak
serverName = "api.kodluyoruz.org";
console.log(serverName);

// let ile degiskene bilgi atayarak tanimlamak

let password = "1234";
console.log(password);

// degisken atamasi yapmadan once tanimlamaya calismak

/*
HATALI KULLANIM
console.log(fullName);
let fullName = "kaan ozer";
*/

let fullName = "kaan ozer";

// let ile tanimlamlanan degisken icerisindeki bilgiyi degistirmek
fullName = "cagan ozer";
console.log(fullName);

// birlestirme veya ekleme islemi

fullName = fullName + " eklenen bilgi";
fullName = "2.eklenen bilgi: " + fullName;

fullName = "sifirlandi";
fullName += " ve yeni bilgi eklendi";
console.log(fullName);

// const ile degiskeni bos tanimlamaya calismak
/* Hatalı
const serverPassword;
serverPassword = 1;
*/

// const ile degiskeni tanimlamak
const SERVER_PASSWORD = 1;
console.log(SERVER_PASSWORD);

/* const a sadece bir sefer atama yapabilirsin
SERVER_PASSWORD = 123;
console.log(SERVER_PASSWORD);
*/
