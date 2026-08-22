function showWeather(city, temp) {
  console.log(`Сейчас в ${city} температура — ${temp} градусов по Цельсию`);
}

showWeather("Бишкек", 25);
showWeather("Алматы", 18);


const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость");
  } else if (speed < LIGHT_SPEED) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(150000000);
checkSpeed(299792458);
checkSpeed(500000000);


const productName = "Ноутбук";
const productPrice = 850; // Цена в $

function buyProduct(budget) {
  // Проверяем, достаточно ли денег (бюджет больше или равен цене)
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    // Вычисляем, сколько не хватает
    const difference = productPrice - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}

buyProduct(1000);
buyProduct(500);


const userName = "Алина";
const userAge = 22;
const isStudent = true;

function showGreeting() {
  console.log("Привет, " + userName + "!");
}

showGreeting();