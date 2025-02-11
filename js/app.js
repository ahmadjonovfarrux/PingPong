// 4.
// Objectda turli xil kalitlar bir xil qiymatlarga ega, kalitlari o'sha qiymatlardan iborat shunday object tuzingki, bu objectning qiymatlari massiv ko'rinishidagi eski objectning kalitlarlaridan iborat bo'lsin
// const obj = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };
// const obj2 = {};

// for (let key in obj) {
//   if (obj2[obj[key]]) {
//     obj2[obj[key]].push(key);
//   } else {
//     obj2[obj[key]] = [key];
//   }
// }
// console.log(obj2);

// 5.
// Ikkita object berilgan ularning ba'zi kalitlari bir xil. Bir xil kalitlaridan iborat bo'lmagan yangi object hosil qiling.
// const obj = { a: 3, b: 10, c: 5, d: 7 };
// const obj2 = { a: 10, d: 4, e: 6, f: 15 };
// let objKeys = Object.keys(obj);
// let obj2Keys = Object.keys(obj2);
// const result = {};

// for (let i = 0; i < objKeys.length; i++) {
//   if (!obj2Keys.includes(objKeys[i])) {
//     result[objKeys[i]] = obj[objKeys[i]];
//   }
//   if (!objKeys.includes(obj2Keys[i])) {
//     result[obj2Keys[i]] = obj2[obj2Keys[i]];
//   }
// }
// console.log(result);

// 6.
// Object kalitlarining barchasi string toifasidagi ma’lumotlardan tuzilgan bo’lsa true, aks holda false qiymat qaytaruvchi defineObject nomli funksiya hosil qiling. (Object.keys())
// const obj = { abc: 1, 123: 2, d: 5 };
// function defineObject(arr) {
//   const result = Object.keys(arr).every((key) => {
//     return !Number(key);
//   });
//   return result;
// }

// const result = defineObject(obj);
// console.log(result);

// 7.
// Agar object qiymatlari ichida falsy qiymatlar bo’lsa, ularni o’chirib yangi object hosil qiling. (Object.keys())
// const obj = { a: false, b: 12, c: true, d: 0 };
// const newObj = {};
// const result = Object.keys(obj).map((item) => {
//   if (Boolean(obj[item])) {
//     return (newObj[item] = obj[item]);
//   }
// });
// console.log(newObj);

// 8.
// Bir necha takrorlanuvchi sonlar ishtirok etgan massivdan shunday obyekt hosil qilingki, bu object kalitlari massivning takrorlanmas sonlaridan, qiymatlari esa o’sha sonlarning massivda necha marta ishtirok etganidan tuzilgan bo’lsin. (for)
// const numbersArray = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
// const obj = {};
// for (let number of numbersArray) {
//   if (obj[number]) {
//     obj[number] += 1;
//   } else {
//     obj[number] = 1;
//   }
// }
// console.log(obj);

// 9.
// Uzun sondan shunday obyekt hosil qilingki, bunda object kalitlari sinflardan, qiymatlari esa o’sha sonning mos ravishdagi o’sha sinfdagi qiymatlaridan tuzilgan bo’lsin. (for, slice)
// const number = 8945472985629;
// const formatted = new Intl.NumberFormat("en-US")
//   .format(number)
//   .split(",")
//   .reverse();
// const numberNames = [
//   "birlar",
//   "minglar",
//   "millionlar",
//   "milliardlar",
//   "trillionlar",
// ];
// const obj = {};
// for (let i = 0; i < numberNames.length; i++) {
//   obj[numberNames[i]] = formatted[i];
// }
// console.log(obj);
//
//

// 10.
//  Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];
// const result = books.map((book) => {
//   const { alreadyRead, title, author } = book;
//   if (Boolean(alreadyRead)) {
//     return `${author}ning ${title} kitobi o'qilgan`;
//   } else if (!Boolean(alreadyRead)) {
//     return `${author}ning ${title} kitobi o'qilmagan`;
//   }
// });
// console.log(result);

// 11.
// Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.
// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ]
//   .map((product) => {
//     const { discount, price, quantity } = product;
//     return {
//       ...product,
//       discountPrice: (price - (price / 100) * discount) * quantity,
//     };
//   })
//   .reduce((acc, curVal) => {
//     acc += curVal.discountPrice;
//     return acc;
//   }, 0);
// console.log(products);

// 12.
// Objectning kalitlaridan va qiymatlaridan iborat bo'lgan massiv tuzing.
// const obj = {
//   it: 20,
//   mushuk: 10,
//   sigir: 200,
//   tovuq: 2,
// };
// const newArr = [];
// const objKeys = Object.keys(obj).map((key) => {
//   if (newArr[key] && newArr[obj[key]]) {
//     return newArr;
//   } else {
//     newArr.push(key, obj[key]);
//   }
// });

// console.log(newArr);

// 14.
// Abdulaziz Programmer nechta to'g'ri va noto'g'ri javob topganligini toping.
// const rightAnswers = {
//   1: "B",
//   2: "A",
//   3: "C",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "A",
//   8: "D",
//   9: "A",
//   10: "B",
// };
// const myAnswers = {
//   1: "C",
//   2: "A",
//   3: "D",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "B",
//   8: "C",
//   9: "A",
//   10: "C",
// };
// const rightKeys = Object.keys(rightAnswers);
// const myKeys = Object.keys(myAnswers);
// let rightOnes = 0;
// let wrongOnes = 0;

// for (let i = 1; i <= rightKeys.length; i++) {
//   if (rightAnswers[i] == myAnswers[i]) {
//     rightOnes += 1;
//   } else {
//     wrongOnes += 1;
//   }
// }
// console.log(`To'g'ri javoblar:${rightOnes}`);
// console.log(`Noto'g'ri javoblar:${wrongOnes}`);

// 15.
//  Qiymatlari sonlardan iborat obj nomli object berilgan. Qiymatlarini n martaga oshiruvchi getMultipleValues(n) nomli funksiya yozing.
// const obj = { a: 2, b: 3, c: 4, d: 6 };
// const obj2 = {};
// function getMultipleValues(obj, n) {
//   return Object.keys(obj).map((key) => {
//     obj2[key] = obj[key] * n;
//   });
// }
// const result = getMultipleValues(obj, 3);
// console.log(obj2);

// 16.
// Quyidagi obyektdan destructing orqali barcha qiymatlarini oling.

// const {
//   name,
//   company: {
//     companyName,
//     price,
//     founder: { firstName, lastName, birthDate },
//   },
// } = {
//   name: "Iphone 14",
//   company: {
//     companyName: "Apple",
//     price: "200 mlrd",
//     founder: {
//       firstName: "Steve",
//       lastName: "Jobs",
//       birthDate: 1950,
//     },
//   },
// };
// console.log(name, companyName, price, firstName, lastName, birthDate);

// 17.
// Quyidagi massivdagi barcha o'quvchilarni protcentlarining o'rtacha qiymatini toping, shuningdek, objectlarga quyidagi propertylarni qo'shib yangi massiv qaytaring.

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];
// let ortachaQiymat = 0;
// pupils.map((pupil) => {
//   const { protcent } = pupil;
//   result = ortachaQiymat += protcent;
//   return {
//     ...pupil,
//   };
// });
// console.log(pupils, `O'rtacha foiz:${result / pupils.length}`);

// 18.
// grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90 o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan holatlarda 2 bahoni o'zlashtiring.
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ].map((pupil) => {
//   const { protcent } = pupil;
//   if (protcent >= 90 && protcent <= 100) {
//     pupil.gradeProperty = 5;
//   } else if (protcent >= 80 && protcent <= 90) {
//     pupil.gradeProperty = 4;
//   } else if (protcent >= 70 && protcent <= 80) {
//     pupil.gradeProperty = 3;
//   } else {
//     pupil.gradeProperty = 2;
//   }
//   return {
//     ...pupil,
//   };
// });
// console.log(pupils);

// 19.
// isPassed propertyga protcent 70 dan o'tsa va teng bo’lsa true, aks holda false qiymat o'zlashtirilsin.
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 25,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ].map((pupil) => {
//   const { protcent } = pupil;
//   if (protcent >= 70) {
//     pupil.isPassed = true;
//   } else {
//     pupil.isPassed = false;
//   }
//   return {
//     ...pupil,
//   };
// });
// console.log(pupils);

// 20.
// Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham hisoblang.
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 25,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];
// let PassedStudents = 0;
// pupils.map((pupil) => {
//   const { protcent } = pupil;
//   if (protcent >= 70) {
//     PassedStudents += 1;
//   }
//   return {
//     ...pupil,
//   };
// });
// console.log(pupils, PassedStudents);
