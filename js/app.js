// Boolean1
// A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat".

// let a = +prompt(`Sonni kiriting`);
// if (a > 0) {
//   console.log(`${a} soni musbat son`);
// } else {
//   console.log(`${a} soni manfiy son`);
// }

// Boolean2
// A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni toq son"
// let a = +prompt(`Son kiriting`);
// if (a % 2 != 0) {
//   console.log(`${a} soni toq son`);
// } else {
//   console.log(`${a} soni just son`);
// }

// Boolean3
// Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A>2 va B <=3".
// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`ikkinchi sonni kiriting`);
// if (a > 2 && b <= 3) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean4
//  Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A <= B <= C"
// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);
// let c = +prompt(`/uchinchi soni kiriting`);
// if (a <= b && b <= c) {
//   console.log(`To'gri`);
// } else {
//   console.log(`Noto'g'ri`);
// }

// Boolean5
// Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarining har ikkalasi ham yoki toq son yoki juft son".
//  let a = +prompt('Birinchi sonni kiritibg');
// let b = +prompt('Ikkinchi sonni kiritibg');
// if ((a % 2 == 0 && b % 2 == 0) || (a % 2 != 0 && b % 2 != 0)) {
//   console.log(`Berilgan sonlar har ikkisi ham juft yoki to'q`);
// } else {
//   console.log(`Kiritigan sonlar has ikkisi ham juft yoki toq emas.`);
// }

// Boolean6.
// Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning hech bo'lmaganda bittasi musbat".
// let a = +prompt(`Birinchi sonni kiriting);
// let b = +prompt(`Ikkinchi sonni kiriting);
// let c = +prompt(`Uchinchi sonni kiriting);
// if (
//   (a > 0 && b < 0 && c < 0) ||
//   (b > 0 && a < 0 && c < 0) ||
//   (c > 0 && b < 0 && a < 0)
// ) {
//   console.log(`To'g'ri`);
// } else {
//   console.log(`noto'g'ri`);
// }

// Boolean7.
// Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning barcha raqamlari har xil".
// let son = +prompt(`3 xonali son kiriting`);
// let birinchiSon = (son - (son % 100)) / 100;
// let ikkinchiSon = ((son % 100) - (son % 10)) / 10;
// let uchinchiSon = son % 10;
// if ((birinchiSon == ikkinchiSon) == uchinchiSon) {
//   console.log(`Kiritilgan sonning barcha raqamlari bir xil`);
// } else {
//   console.log(`Kiritilgan son raqamlari bir xil emas`);
// }

// Boolean8.
// Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng".
// let a = 1;
// let b = 1;
// let c = 8;
// if (a == b || b == c || a == c) {
//   console.log(`To'g'ri`);
// } else {
//   console.log(`Noto'g'ri`);
// }

// Boolean 2-qismi
// Boolean1.
// A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son”.
// let a = +prompt('Son kiriting');
// if (a % 2 == 0) {
//   console.log(`Berilgan son juft son`);
// } else {
//   console.log(`Berilgan son toq son`);
// }

// Boolean2.
// Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring:"A >= 0 yoki B <-2"
// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);
// if (a >= 0 || b < -2) {
//   console.log(`To'g'ri`);
// } else {
//   console.log(`Noto'g'ri`);
// }
// Boolean3.
// Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".
// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchsi sonni kiriting`);
// let c = +prompt(`Uchinchi sonni kiriting`);
// if (a < b && b < c) {
//   console.log(`Siz to'g'ri yo'dasiz`);
// } else {
//   console.log(`Siz noto'g'ri yo'dasiz`);
// }

// Boolean4.
// Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".
// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);
// if (a % 2 != 0 && b % 2 != 0) {
//   console.log(`Kiritilgan ikkala son ham toq son`);
// } else {
//   console.log(`Kiritilgan sonlar toq sonlar emas`);
// }

// Boolean5.
// Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son".
// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);
// if (a % 2 != 0 || b % 2 != 0) {
//   console.log(`To'g'ri`);
// } else {
//   console.log(`Noto'g'ri`);
// }

// Boolean6.
// Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".
// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);
// if ((a % 2 != 0 && b % 2 == 0) || (b % 2 != 0 && a % 2 == 0)) {
//   console.log(`To'g'ri`);
// } else {
//   console.log(`Noto'g'ri`);
// }

// Boolean7.
// Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".
// let a = 1;
// let b = 2;
// let c = 9;
// if (a > 0 && b > 0 && c > 0) {
//   console.log(`Har biri musbat son`);
// } else {
//   console.log(`Har biri musbat son emas`);
// }

// Boolean8.
// Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son".
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let c = +prompt("Uchinchi sonni kiriting");
// if (
//   (a > 0 && b < 0 && c < 0) ||
//   (a < 0 && b > 0 && c < 0) ||
//   (a < 0 && b < 0 && c > 0)
// ) {
//   console.log(`Kiritlgan sonlarning 1 tasi musbat`);
// } else {
//   console.log(`Xatolik yuz berdi`);
// }

// Boolean9
// Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let c = +prompt("Uchinchi sonni kiriting");
// if (
//   (a >= 0 && b >= 0 && c < 0) ||
//   (a >= 0 && b <= 0 && c >= 0) ||
//   (a <= 0 && b >= 0 && c >= 0)
// ) {
//   console.log(`Kiritlgan sonlarning 2 tasi musbat`);
// } else {
//   console.log(`Xatolik yuz berdi`);
// }

// Boolean10
//  Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".
// let son = +prompt("Ikki honali son kiritng");
// if (10 < firstNumber < 100 && firstNumber % 2 == 0) {
//   console.log("Togri");
// } else {
//   console.log("Juf ikki honali son kiriting");
// }

// Boolean11
// Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq".
// let ikkinchiSon = +prompt("Uch xonali toq son kiriting");
// if (100 < secondNumber < 1000 && secondNumber % 2 != 0) {
//   console.log("Siz togri yuldasiz");
// } else {
//   console.log("Siz notugri yuldasiz");
// }

// Boolean 12
// Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi".
// let birinchiSon = 1;
// let ikkinchiSon = 3;
// let uchinchiSon = 3;
// if (
//   birinchiSon + ikkinchiSon == 0 ||
//   ikkinchiSon + uchinchiSon == 0 ||
//   birinchiSon + uchinchiSon == 0
// ) {
//   console.log("Ozaro qarama qarshi");
// } else {
//   console.log("Qarama qarshi emas");
// }

// Boolean13.
// Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan".
// let son = +prompt("Uch xonali ketma-ket osuvchi  son kiriting");
// let firstNumber = (son - (son % 100)) / 100;
// let secondNumber = ((son % 100) - (son % 10)) / 10;
// let thirdNumber = son % 10;
// if (firstNumber == secondNumber - 1 && secondNumber == thirdNumber - 1) {
//   console.log("Bu osuvchi ketma ket uch xonali son");
// } else {
//   console.log(son);
// }

// Boolean 14
//  Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".
// let son = +prompt("Uch xonali ketma-ket osuvchi yoki kamapyuvchi son kiriting");
// let firstNumber = (son - (son % 100)) / 100;
// let secondNumber = ((son % 100) - (son % 10)) / 10;
// let thirdNumber = son % 10;

// if (firstNumber == secondNumber - 1 && secondNumber == thirdNumber - 1) {
//   console.log("Bu osuvchi ketma ket uch xonali son");
// } else if (firstNumber - 1 == secondNumber && secondNumber - 1 == thirdNumber) {
//   console.log("Bu kamayuvchi uch xonali ketma ket son");
// } else {
//   console.log(son);
// }

// Boolean15.
// Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil".
// let son = +prompt(`3xonali son kiriting`);
// let firstNumber = (son - (son % 100)) / 100;
// let secondNumber = ((son % 100) - (son % 10)) / 10;
// let thirdNumber = son % 10;
// if (firstNumber == thirdNumber) {
//   console.log(`To'g'ri`);
// } else {
//   console.log(`Noto'g'ri`);
// }
// console.log();
