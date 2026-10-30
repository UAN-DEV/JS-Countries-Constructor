"use strict";

function Country({
  title = "Ukraine",
  capital = "Kyiv",
  population = 18e9,
  area = "603 549 km²",
} = {}) {
  this.title = title;
  this.capital = capital;
  this.population = population;
  this.area = area;
  this.showCountry = function () {
  console.log(
    `Information of country: ${Object.entries(this)
      .filter((item) => typeof item[1] !== "function")
      .map((item) => ` ${item[0]} - ${item[1]}`)
      .toString()
      .trim()}`,
  );
};
}

const COUNTRY_UKREINE = new Country();
const COUNTRY_PULAND = new Country({
  title: "Poland",
  capital: "Warszawa",
  population: 37.212e9,
  area: "312 696 km²",
});

COUNTRY_UKREINE.showCountry();
COUNTRY_PULAND.showCountry();

function showProperties(country) {
  Object.entries(country).forEach((item) => {
    if (typeof item[1] !== "function") {
      console.log(`${item[0]}: ${item[1]}`);
    }
  });
}

const COUNTRY_DATA = {
  title: "Netherlands",
  capital: "Amsterdam",
  population: 18.13e9,
  area: "41 543 km²",
}
showProperties(COUNTRY_DATA);
