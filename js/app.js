// Akhor web
// Dom Selectors
// 1) getElementsByTagName bu array qaytarsa ham bu  array emas bu htmlCollection hisoblanadi ammo length va [] orqali olishimiz mumkin.
// const listItem = document.getElementsByTagName("li");
// listItem.forEach((li) => {
//   console.log(li);
// });

// 2) getElementsByClassName
// const listItem = document.getElementsByClassName("list-item");
// console.log(listItem);

// 3) getElementById bu bitta elementni faqat bir marta olishi mumkin
// const idItem = document.getElementById('click__btn');
// console.log(idItem)

// 4) querySelector / querySelectorAll
// const listItem = document.querySelector("#title");
// console.log(listItem);

// innerText / textContent ichki textlarni o'zgartirish
// textContent orqali element ichidagi textni olishimiz va yangi text qo'shishimiz mumkin
// const title = document.getElementById("title");
// title.textContent += " New text";
// const listItem = document.querySelectorAll(".list-item");
// listItem.forEach((li) => {
//   li.textContent += " darslari";
// });
// title.innerHTML = "<i>New text html</i>";
// title.textContent = "<i>New text html</i>";
// innerHtml
// const names = ["Farrux", "Sardor", "Doniyor"];
// const ol = document.querySelector("ul");
// names.forEach((name) => {
//   ol.innerHTML += `<li>${name}</li>`;
// });

// Berilgan tagning atribute qiymatini olish uchun getAttributeni ishlatishimiz mumkin
// Berilgan tagning atribute qiymatini o'zgartirish uchun esa setAttribute ishlatamiz va qo'shimcha atribute qo'shishda ham ishlatish mumkin.
// const link = document.querySelector("a");
// link.setAttribute("href", "https://www.yandex.ru");
// link.textContent = "Go to Yandex Main Page";

// const text = document.querySelector("p");
// text.setAttribute("class", "textEror");
// console.log(text.getAttribute("class"));

// text.setAttribute("style", "color:red");

// 1- Mashq

// const button = document.querySelector("#btn");
// const paragrph1 = document.querySelector("#para1");
// const paragrph2 = document.querySelector("#para2");
// button.addEventListener("click", () => {
//   paragrph1.style.color = "red";
//   paragrph2.style.color = "green";
// });

// 2-Mashq
// const button = document.querySelector("#changeImageBtn");
// const image = document.querySelector("#myImage");
// button.addEventListener("click", () => {
//   image.setAttribute(
//     "src",
//     "https://static.toiimg.com/thumb/msid-100486881,width-748,height-499,resizemode=4,imgsize-102540/.jpg"
//   );
// });

// // 3-mashq
// const button = document.querySelector("#addElementBtn");
// const ul = document.querySelector("ul");
// button.addEventListener("click", () => {
//   const div = document.createElement("div");
//   div.textContent =
//     "Our group is trying to be one of the most successesfull group in this academy";
//   ul.appendChild(div);
// });

// Tonsky.me
const container = document.querySelector("#homeContainer");
const button = document.querySelector("#changerBtn");
button.addEventListener("click", () => {
  container.style.backgroundColor = "black";
  container.style.color = "white";
});
button.addEventListener("dblclick", () => {
  container.style.backgroundColor = "white";
  container.style.color = "black";
});
