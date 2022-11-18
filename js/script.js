"use strict";

const adv = document.querySelectorAll(".promo__adv img"),
  wrapper = document.querySelector(".promo__bg"),
  genre = wrapper.querySelector(".promo__genre"),
  seriesList = document.querySelector(".promo__interactive-list");

// First homework  remove img
adv.forEach((item) => {
  item.remove(".promo__adv img");
});

// Second homework change genere
genre.textContent = "Comedy";

// Third homework change background img

wrapper.style.cssText = "background: url(../img/1.jpg) center/cover no-repeat";

// Fourth homework create array
const seriesDB = {
  series: [
    "Omar",
    "The Final Legacy",
    "ERTUGRUL",
    "MAGNIFICENT CENTURY",
    "GREAT SELJUKS: GUARDIANS..",
  ],
};
console.log(seriesDB);

//Fifth homework add series
seriesList.innerHTML = "";
seriesDB.series.forEach((item, idx) => {
  seriesList.innerHTML += `
  <li class="promo__interactive-item">${idx + 1} ${item}
    <div class ="delete"></div>
  </li>
  `;
});
