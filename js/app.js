// Array1.
// n natural soni berilgan. 3 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel3(n) nomli funksiya tuzing.
// let newNumbers = [];
// function getLevel3(n) {
//   for (let i = 1; i <= n; i++) {
//     newNumbers.push(i ** 3);
//   }
//   return newNumbers;
// }
// const result = getLevel3(5);
// console.log(result);

// Array2
// n natural soni va X, Y butun sonlari berilgan (n > 2).
// let n = 6;
// let x = 1;
// let y = 2;
// let arr = [x, y];
// let sum = arr[0] + arr[1];
// for (let i = 1; i < n; i++) {
//   arr.push(sum);
//   sum = sum += arr[i - 0];
// }
// console.log(arr);

// Array3
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning faqat toq indeksdagi elementlari teskari tartibda chiqarilsin.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = [];
// for (let i = arr.length; i >= 1; i--) {
//   if (i % 2 != 0) {
//     newArr.push(i);
//   }
// }

// console.log(newArr);

// Array4.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivda eng kichik va eng katta elementlar joylashgan indekslar yig‘indisi aniqlansin.
// const arr = [1, 15, 3, 8, 11, 6, 9];
// let minArr = Math.min(...arr);
// let maxArr = Math.max(...arr);
// let sum = 0;
// arr.map((x, index) => {
//   if (x == minArr) {
//     sum = sum += index;
//   }
//   if (x == maxArr) {
//     sum = sum += index;
//   }
// });
// console.log(sum);

// Array5
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning juft indeksdagi elementlari va toq indeksdagi elementlarini alohida massiv qilib chiqaring.
// const arr = [4, 5, 7, 8, 6, 9];
// let juftSonlar = [];
// let toqSonlar = [];
// arr.forEach((x) => {
//   if (x % 2 == 0) {
//     juftSonlar.push(x);
//     return juftSonlar;
//   } else {
//     toqSonlar.push(x);
//     return toqSonlar;
//   }
// });
// console.log(`Juft sonlar:`, juftSonlar);
// console.log(`Toq sonlar:`, toqSonlar);

// Array6
// n ta elementdan tashkil topgan massiv berilgan. Massivda eng ko‘p uchragan element va uning soni topilsin.
// const arr = [2, 3, 2, 5, 3, 3, 7, 2, 3];
// let counter = 0;
// let element;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[0] == arr[i]) {
//     counter++;
//   }
// }

// console.log(counter);
// console.log(element);

// Array7.
// n ta elementdan tashkil topgan massiv va R butun soni berilgan.
// Massiv elementlari orasidan R soniga eng uzoq son topilsin.

// const arr = [10, 15, 2, 30, 18];
// let r = 12;
// let maxElement;
// arr.forEach((x) => {
//   arr.push(r);
//   maxElement = Math.max(...arr);
//   return maxElement;
// });
// console.log(maxElement);

// Array8
// n ta elementdan tashkil topgan massiv berilgan. Massivni ikkiga ajrating:
// Birinchi yarmi o‘zidan katta bo‘lgan elementlarni
// Ikkinchi yarmi o‘zidan kichik bo‘lgan elementlarni chiqarib bering.
// const arr = [7, 3, 9, 1, 8, 2, 4];
// let kattaSonlar = [];
// let kichikSonlar = [];
// arr.forEach((i) => {
//   if (i >= arr.length) {
//     kattaSonlar.push(i);
//     return kattaSonlar;
//   } else {
//     kichikSonlar.push(i);
//     return kichikSonlar;
//   }
// });
// console.log(kattaSonlar);
// console.log(kichikSonlar);

// Array9.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning barcha elementlarini ikkita nusxada chiqaruvchi programma tuzing.
// let arr = [1, 2, 3, 4];
// let newArr = [];
// arr.map((x) => {
//   if (arr.includes(x)) {
//     arr.push(x);
//   }
// });
// console.log(arr);

// Array10
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning oxiridan boshlab har bir ikkinchi elementni chiqaruvchi programma tuzing.
// const arr = [4, 5, 7, 8, 6, 9, 10, 15];
// let newArr = [];
// for (let i = arr.length; i >= 1; i--) {
//   if (i % 2 != 0) {
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr);
