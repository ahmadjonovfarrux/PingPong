// let myObject = {
//   name: "Farrux",
//   sureName: "Ahmadjonov",
//   fatherName: "Farhodjon",
//   age: 19,
//   job: false,
//   isMerried: false,
// };
// Object.keys(myObject).forEach((x) => {
//   console.log(`${x}:`, myObject[x]);
// });
// for (let key in myObject) {
//   console.log(myObject[key]);
// }

// 1.
// Quyidagi massivdagi barcha odamlarni yoshlarining o’rtacha qiymatini chiqaruvchi getAverageAge(arr) nomli funksiya yozing.
// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];
// function getAverageAge(arr) {
//   const allAges = arr.reduce((acc, curVal) => {
//     acc += curVal.age;
//     return acc;
//   }, 0);

//   return allAges / arr.length;
// }
// console.log(getAverageAge(people));

// 2.
// Massiv ichidagi har bir objectga isMarried nomli property qo’shilsin. Agar object yoshi 25 dan kichi bo’lsa isMarried ga false, aks holda true qiymat o’zlashtirilsin.
// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];
// let result = people.map((person) => {
//   return { name: person.name, age: person.age, isMarried: person.age > 25 };
// });
// console.log(result);

// 3.
// Quyidagi objectlardan tuzilgan massiv ichidagi yoshi eng katta va yoshi eng kichik bo’lgan insonning ismlarini qaytaruvchi getNameMaxMinAge(arr) nomli funksiya yozing. (for);
// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];
// let names = [];
// function getNameMaxMinAge(arr) {
//   let maxAge = arr[0];
//   let minAge = arr[1];

//   for (let item of arr) {
//     if (item.age > maxAge.age) {
//       maxAge = item;
//     }

//     if (item.age < minAge.age) {
//       minAge = item;
//     }
//   }
//   names.push(maxAge.name);
//   names.push(minAge.name);
//   return names;
// }
// console.log(getNameMaxMinAge(people));
//4.
//  Objectda turli xil kalitlar bir xil qiymatlarga ega, kalitlari o'sha qiymatlardan iborat shunday object tuzingki, bu objectning qiymatlari massiv ko'rinishidagi eski objectning kalitlarlaridan iborat bo'lsin.
// const numbers = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };
// const newNumbers = { 20: [], 30: [], 40: [], 50: [] };
// Object.keys(numbers);
// for (let key in numbers) {
//   if (numbers[key] == 20) {
//     newNumbers[20].push(Number(key));
//   } else if (numbers[key] == 30) {
//     newNumbers[30].push(Number(key));
//   } else if (numbers[key] == 40) {
//     newNumbers[40].push(Number(key));
//   } else if (numbers[key] == 50) {
//     newNumbers[50].push(Number(key));
//   }
// }
// console.log(newNumbers);

// 1.
//  Quyidagi objectni outputdagi ko'rinishda chiqaring. (toString, join)
// const me = {
//   firstName: "Farrux",
//   lastName: "Ahmadjonov",
//   age: 19,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Kamron", "Ozod", "Jamiliddin", "Jamshid"],
// };
// const result = Object.values(me).forEach((key) => {
//   console.log(key.toString());
// });

//2.
//  Kalitlari 1 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvatratiga teng object hosil qiling. (for)
let n = 5;
const getLeveledTwo = {};
for (let i = 1; i <= n; i++) {
  console.log((getLeveledTwo.number = i), (getLeveledTwo.Newnumber = i ** 2));
}

// console.log(getLeveledTwo);

// 5.
// Shunday object berilganki, uning kalitlari mahsulotlardan va qiymatlari esa ularning narxlaridan tuzilgan. Barcha mahsulot qancha turishini toping. (Object.values())
// let sum = 0;
// const fruits = { Apelsin: 10000, Olma: 12000, Mandarin: 8000, Banan: 20000 };
// Object.values(fruits).forEach((price) => {
//   sum += price;
//   return sum;
// });
// console.log(sum);
