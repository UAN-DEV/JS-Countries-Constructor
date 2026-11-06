"use strict";

// Task #1. Напишите конструктор для создания объекта Country (title - название страны, capital - столица, population - население, area - площадь).
function Country(
  title = "Ukraine",
  capital = "Kyiv",
  population = "18 000 000 p.",
  area = "603 549 km²",
) {
  this.title = title;
  this.capital = capital;
  this.population = population;
  this.area = area;
  // Task #2. В этом конструкторе создайте метод showCountry(), который возвращает всю информацию о стране в одной строке.
  this.showCountry = () =>
    `Information of country: title = ${this.title}, capital = ${this.capital}, population = ${this.population}, area = ${this.area}.`;
}

// Task #3. Создайте при помощи конструктора две страны (на ваше усмотрение) со всеми необходимыми свойствами. Можно использовать параметры по умолчанию.
const COUNTRY_UKREINE = Object.freeze(new Country()); // создфние страны с параметрами по умолчанию.

const COUNTRY_POLAND = Object.freeze(
  new Country("Poland", "Warszawa", "37 212 000 p.", "312 696 km²"), // создание страны по переданным значениям.
);
const COUNTRY_NETHERLANDS = Object.freeze(
  new Country("Netherlands", "Amsterdam", "18.130 000 p.", "41 543 km²"),
);

console.log(COUNTRY_UKREINE.showCountry());
console.log(COUNTRY_POLAND.showCountry());
console.log(COUNTRY_NETHERLANDS.showCountry());

// Task #4. Напишите функцию, которая будет в цикле выводить все свойства объекта, кроме методов в консоль в формате key: value.
function showProperties(country) {
  Object.entries(country).forEach(([key, value]) => {
    if (typeof value !== "function") console.log(`${key}: ${value}`);
  });
}
showProperties(COUNTRY_UKREINE);
showProperties(COUNTRY_POLAND);

// Task #4﹡. Та же функция, но без цикла выводит все свойства объекта, кроме методов в консоль в формате key: value.
const showPropertiesWithoutLoop = (obj) =>
  console.log(JSON.stringify(obj).slice(1, -1).replaceAll('":"', ": ").replaceAll('"', "").replaceAll(",", "\n"));

showPropertiesWithoutLoop(COUNTRY_NETHERLANDS);
