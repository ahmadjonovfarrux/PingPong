// For1.
// k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.
// let n = 12;
// let k = 700;
// for (let i = 0; i < n; i++) {
//   console.log(k);
// }

// For2.
// Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, …, 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.
// let narx = +prompt(`Konfet narxini kiriting`);

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i / 10} kg ${Math.floor((i / 10) * narx)} so'm`);
// }

// For3.
// n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = n^2 +(n+1)^2+(n+2)^2 + ... +(2*n)^2
// let n = 5;
// let result = 0;
// for (let i = 0; i <= n; i++) {
//   result += (n + i) ** 2;
// }
// console.log(result);

// For4.
// N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// 1^N+2^(N-1) + ...+ N^1
// Input: N = 5;
// 1 ^ 5 + 2 ^ 4 + 3 ^ 3 + 4 ^ 2 + 5 ^ 1
// Output: 65
// let n = 5;
// let k = n;
// let result = 0;
// for (let i = 1; i <= 5; i++) {
//   result += i ** k;
//   k--;
// }
// console.log(result);

// For5. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda har bir son o'zining qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.

// let a = 2;
// let b = 7;
// for (let i = a; i < b; i++) {
//   for (let k = 0; k < i; k++) {
//     console.log(i);
//   }
// }

// For6. Sonning bo’luvchilarini topish;
// let son = 12;
// for (let i = 1; i <= son; i++) {
//   if (son % i == 0) {
//     console.log(i);
//   }
// }

// While1. N va K butun musbat sonlari berilgan. Faqat ayirish va qo'shish amallarini ishlatib N sonini K soniga bo'lgandagi qoldiq va butun qismini aniqlovchi programma tuzilsin.
// let k = 3;
// let n = 50;
// let counter = 0;
// while (k < n) {
//   n = n - k;
//   counter++;
// }
// console.log(`Butun son ${counter} va qoldiq ${n}`);
// For bilan ishlangan varianti
// for (let i = k; i <= n; i += 3) {
//  counter++
// }
// console.log(counter);

// While2. 2 sonining qandaydir darajasini bildiruvchi n butun soni berilgan (n > 0). n = 2^k ni aniqlovchi programma tuzilsin.

// let n = +prompt(`2 ning darajasi bo'lgan sonlarni kiriting`);
// let k = 0;
// for (let i = k; i <= n; i++) {
//   if (n == 2 ** i) {
//     console.log(i);
//   }
// }

// For1. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).
// let counter = 0;
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// for (let i = a; i <= b; i++) {
//   counter++;
//   console.log(i);
// }
// console.log(`a va b orasidagi sonlar soni ${counter}`);

// For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.
// let counter = 0;
// let a = 3;
// let b = 7;
// for (let i = b; i >= a; i--) {
//   counter++;
//   console.log(i);
// }
// console.log(`a va b sonlar orasidagi sonlar soni ${counter}`)

// For3. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.
// let narx = +prompt(`Konfet narxini kiriting`);
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} kg konfet ${narx * i} so'm`);
// }
