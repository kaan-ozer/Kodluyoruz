"use strict";

let username = "Kaan";
const DOMAIN = "kodluyoruz.org";

let email = username + "@" + DOMAIN;

console.log("Merhaba", username, "Sitemize Hosgeldin", "mail adresin:", email);

let info = `
Merhaba ${username}
sitemize hosgeldin,
isminizin bas harfi: ${username[0]}
mail adresin: ${email}
mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2 + 4) * 5} TL
tarih: ${new Date().getHours()}
`;
// hem ara vermeden birleştirmemize yarar hemde birden fazla satırda yazma imkanı sunar.

console.log(info);

const kisi = `
<p>${username}</>
<p>${username}</>
<p>${username}</>
<p>${username}</>
`;

document.body.innerHTML = kisi;
