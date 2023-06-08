let min = 10;
min--;
let max = 20;

let price = Math.floor(Math.random() * (max - min) + min + 1);

console.log(price);

const priceInfo = document.querySelector(".priceInfo");
priceInfo.innerText = `오늘의 철 가격은 얼마일까요? ${price}`;
