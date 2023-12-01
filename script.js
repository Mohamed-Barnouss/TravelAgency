"use strict";

let cardBtns = document.querySelectorAll(".card-btn");
let overlay = document.querySelector(".overlay");
//namibia btn
let namibiaBtn = document.querySelector(".namibia-btn");
let namibia = document.querySelector(".namibia");
//china btn
let chinaBtn = document.querySelector(".china-btn");
let china = document.querySelector(".china");

let canyonBtn = document.querySelector(".canyon-btn");
let icelandBtn = document.querySelector(".iceland-btn");
let svalbardBtn = document.querySelector(".svalbard-btn");
let australiaBtn = document.querySelector(".australia-btn");
let patagoniaBtn = document.querySelector(".patagonia-btn");

//cards names
let canyon = document.querySelector(".canyon");
let iceland = document.querySelector(".iceland");
let svalbard = document.querySelector(".svalbard");
let australia = document.querySelector(".australia");
let patagonia = document.querySelector(".patagonia");
let allDestination = [
  namibia,
  china,
  canyon,
  iceland,
  svalbard,
  australia,
  patagonia,
];
console.log(cardBtns);
console.log(overlay);

//per ogni bottone cliccato mettere overlay visibile
for (let i = 0; i < cardBtns.length; i++) {
  cardBtns[i].addEventListener("click", function () {
    overlay.classList.remove("hidden");
    nav[0].classList.remove("sticky"); // put navbar invisible
  });
}

//cancello overlay
overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  nav[0].classList.add("sticky"); //putt nav visible again
});

//Funzione per cancellare la card quando click su overlay
let closeAll = function (destination) {
  overlay.addEventListener("click", function () {
    destination.classList.add("hidden");
  });
};

//namibia card visible
namibiaBtn.addEventListener("click", function () {
  namibia.classList.remove("hidden");
  closeAll(namibia);
});

chinaBtn.addEventListener("click", function () {
  china.classList.remove("hidden");
  closeAll(china);
});

canyonBtn.addEventListener("click", function () {
  canyon.classList.remove("hidden");
  closeAll(canyon);
});

icelandBtn.addEventListener("click", function () {
  iceland.classList.remove("hidden");
  closeAll(iceland);
});

svalbardBtn.addEventListener("click", function () {
  svalbard.classList.remove("hidden");
  closeAll(svalbard);
});

australiaBtn.addEventListener("click", function () {
  australia.classList.remove("hidden");
  closeAll(australia);
});

patagoniaBtn.addEventListener("click", function () {
  patagonia.classList.remove("hidden");
  closeAll(patagonia);
});
//ogni borrone ha un corrispettivo modale e bisogna rendere visibile quello

//FILTER
let cards = document.querySelectorAll(".card");
console.log(cards);
let allBtn = document.querySelector(".all-btn");
let africaBtn = document.querySelector(".africa-btn");
let americaBtn = document.querySelector(".america-btn");
let asiaBtn = document.querySelector(".asia-btn");
let europaBtn = document.querySelector(".europe-btn");
let oceaniaBtn = document.querySelector(".oceania-btn");
let destinationsBtn = document.querySelectorAll(".destinations-btn");

// filter function
let filter = (continent) => {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].className.includes(continent)) continue;
    else cards[i].classList.add("hidden");
  }
};

// remove hidden
let removeHidden = () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("hidden");
  }
};

//remove with ESC e SPACE bar
//QUAAAAAA SOTTOOOOOOOOOOO

//FUNZIONE PER CANCELLARE TUTTO CON BOTTONI
let closeEscBtn = function () {
  overlay.classList.add("hidden");
  allDestination.forEach((el) => el.classList.add("hidden"));
};

document.addEventListener("keydown", function (e) {
  console.log(e);
  e.preventDefault();
  if (e.code === "Space" || e.code === "Escape") {
    closeEscBtn();
  }
});

//ACTIVE button and remove
let activeBtn = () => {
  for (let i = 0; i < destinationsBtn.length; i++) {
    destinationsBtn[i].classList.remove("btn-clicked");
  }
};

//buttons filter

allBtn.addEventListener("click", function () {
  removeHidden();
  activeBtn();
  this.classList.add("btn-clicked");
});

africaBtn.addEventListener("click", function () {
  removeHidden();
  filter("africa");
  activeBtn();
  this.classList.add("btn-clicked");
});

americaBtn.addEventListener("click", function () {
  removeHidden();
  filter("america");
  activeBtn();
  this.classList.add("btn-clicked");
});

asiaBtn.addEventListener("click", function () {
  removeHidden();
  filter("asia");
  activeBtn();
  this.classList.add("btn-clicked");
});

europaBtn.addEventListener("click", function () {
  removeHidden();
  filter("europe");
  activeBtn();
  this.classList.add("btn-clicked");
});

oceaniaBtn.addEventListener("click", function () {
  removeHidden();
  filter("oceania");
  activeBtn();
  this.classList.add("btn-clicked");
});

//Navbar sticky
let presentationBox = document.querySelector(".presentation");
let nav = document.getElementsByTagName("header");
console.log("bounding client react");
console.log(nav[0].getBoundingClientRect().height);
console.log(" nav class list");
console.log(nav[0]);

let navSticky = function (entries) {
  let [entry] = entries;
  if (!entry.isIntersecting) nav[0].classList.add("sticky");
  else nav[0].classList.remove("sticky");
};

const observer = new IntersectionObserver(navSticky, {
  root: null,
  threshold: 0.1,
  rootMargin: `-${nav[0].getBoundingClientRect().height}px`,
});

observer.observe(presentationBox);

//Navbar Show and filter
let buttonNav = document.querySelector(".icon-button");
console.log(buttonNav);
let header = document.getElementsByTagName("header");
let elementNav = document.querySelectorAll(".scroll");

buttonNav.addEventListener("click", function () {
  header[0].classList.toggle("nav-open");
});

elementNav.forEach((el) => {
  el.addEventListener("click", function () {
    header[0].classList.toggle("nav-open");
  });
});
