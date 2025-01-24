// For4.
// Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.
// let narx = +prompt(`Konfet narxini kiriting`);
// for (let i = 12; i <= 20; i++) {
//   console.log(`${i / 10} kg konfet narxi ${(i / 10) * narx}`);
// }

// For5.
// a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.
// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);
// let result = 0;
// for (let i = a; i < b; i++) {
//   result = result + i;
// }
// console.log(result);

// For6.
// a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.
// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt(`Ikkinchi sonni kiriting`);
// let result = 1;
// for (let i = a; i < b; i++) {
//   result = result * i;
// }
// console.log(result);

// For7.
// a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.
// let a = +prompt(`Birinchi sonni kiriting`);
// let b = +prompt("Ikkinchi sonni kiriting");
// let result = 0;
// for (let i = a; i < b; i++) {
//   result = i ** 2 + result;
// }
// console.log(result);

// For8.
// n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+...+1/n
// let n = 11;
// let result = 0;
// for (let i = 1; i <= n; i++) {
//   result = result += 1 / i;
// }
// console.log(result);

// For9.
// n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi programma tuzilsin. S=1.1*1.2* 1.3*... *n
// let n = 20;
// let result = 1;
// for (let i = 11; i <= n; i++) {
//   result = result * (i / 10);
// }
// console.log(result);

// For10.
// n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi formula asosida hisoblovchi programma tuzilsin.
// let n = 9;
// for (let i = 1; i < n; i++) {
//   result = (i ** 2 == i + 2 + (2 * n - 1));
// }

// console.log(result)

// For11.
// n butun soni va a haqiqiy soni berilgan (n > 0). a ning n - darajasini aniqlovchi programma tuzilsin.
// a^n=a*a*a...a;

// let a = prompt(`Birinchi sonni kiriting`);
// let n = prompt(`Ikkinchi sonni kiriting`);
// for (let i = 1; i <= n; i++) {
//   result = a ** n;
// }
// console.log(`${result} = ${a * i}`);

// For12.
// n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi programma tuzilsin.
// let a = 4;
// let n = 4;
// for (let i = 0; i <= n; i++) {
//   console.log(a ** i);
// }

// For13. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib quyidagi a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi va yig'indini hisoblovchi programma tuzilsin.
// S = 1+a^1+a^2 + a^3 + ... a^n
// let a = 3;
// let n = 5;
// let result = 0;
// for (let i = 0; i <= n; i++) {
//   console.log(a ** i);
//   result = result += a ** i;
// }
// console.log(`Umimiy yig'indi: ${result}`);

// For14.
// n butun soni berilgan (n > 0). Bir sikldan foydalangan holda quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = 1! + 2! + 3! + ... + n!
// let sum = 1;
// let n = 7;
// let result = 0;
// for (let i = 1; i <= n; i++) {
//   sum *= i;
// }
// console.log(sum);

// For15. N va K butun sonlari berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// S = 1^K + 2^K + ... + N^K
// let n = 4;
// let k = 5;
// let result = 0;
// for (let i = 1; i <= n; i++) {
//   result = result += i ** k;
// }
// console.log(result);

// For16. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// S = 1^1 + 2^2 + … + N^N
// let n = 4;
// let m = n;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i ** m;
// }
// console.log(sum);

// For18.
// Sonning barcha bo’luvchilarini, ularning sonini va yig’indisini chiqaruvchi dastur tuzing.
// let a = 12;
// let counter = 0;
// let result = 0;
// for (let i = 1; i <= a; i++) {
//   if (a % i == 0) {
//     result += i;
//     counter++;
//   }
// }
// console.log(result);
// console.log(counter);

// For19.
// n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.
// let n = 5;
// let counter = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     counter++;
//   }
// }
// if (counter == 2) {
//   console.log("Tub son");
// } else {
//   console.log("Tub son emas");
// }

// For20. Sonlarni quyidagi tartibda chiqaruvchi dastur tuzing. N = 5 bo’lganda,
// let n = 5;
// for (let i = 1; i <= 5; i++) {
//   for (let k = 1; k <= i; k++) {
//     console.log(i);
//   }
// }

// While1. A va B butun musbat sonlari berilgan (A> B). A usunlikdagi kesmada maksimal darajada B kesma joylashtirilgan. A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.
// let a = 25;
// let b = 3;
// for (let i = a; i >= b; i--) {
 
// }
// console.log(a);
