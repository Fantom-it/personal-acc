function menu() {
  document
    .getElementById("button-arrow-bbb-ggg")
    .classList.toggle("show-button-arrow-blue");
  document.getElementById("img-arrow").classList.toggle("show-img-arrow"); 
  document.getElementById("img-arrow-2").classList.toggle("show-img-arrow-2");
   document.getElementById("img-arrow-3").classList.toggle("show-img-arrow-2");
 /* document.getElementById("arrow-page").classList.toggle("show-img-arrow"); */
 
  document.getElementById("menu").classList.toggle("show-menu");
  document
    .getElementById("text-1")
    .classList.toggle("show-menu__content__text-div");
  document
    .getElementById("text-2")
    .classList.toggle("show-menu__content__text-div");
  document
    .getElementById("text-3")
    .classList.toggle("show-menu__content__text-div");
  document
    .getElementById("text-4")
    .classList.toggle("show-menu__content__text-div");
  document.getElementById("img-logo").classList.toggle("show-img-logo");
  document
    .getElementById("text-nok")
    .classList.toggle("show-menu__content__text-nok");
  document
    .getElementById("menu__content__text")
    .classList.toggle("show-menu__content__text");
  document
    .getElementById("menu__content")
    .classList.toggle("show-menu__content");
  document
    .getElementById("profile")
    .classList.toggle("show-menu__content__profile");
  document
    .getElementById("profile__text")
    .classList.toggle("show-menu__content__profile__text");
  document
    .getElementById("profile__text2")
    .classList.toggle("show-menu__content__profile__text2");
  document
    .getElementById("arrow1")
    .classList.toggle("show-menu__content__div__arrow");
  document
    .getElementById("arrow2")
    .classList.toggle("show-menu__content__div__arrow");
  document
    .getElementById("arrow3")
    .classList.toggle("show-menu__content__div__arrow");
  document
    .getElementById("arrow4")
    .classList.toggle("show-menu__content__div__arrow");
  document
    .getElementById("puncts")
    .classList.toggle("show-menu__content__puncts");
  document.getElementById("puncts-img").classList.toggle("show-puncts-img");
  document.getElementById("puncts-img2").classList.toggle("show-puncts-img");
  document.getElementById("puncts-img3").classList.toggle("show-puncts-img");
  document.getElementById("puncts-img4").classList.toggle("show-puncts-img");
  document
    .getElementById("personal-page")
    .classList.toggle("show-personal-acc-main-page");
  document
    .getElementById("button-save-min")
    .classList.toggle("show-personal-acc-main-page__content__button-save-min");
  document
    .getElementById("button-save")
    .classList.toggle("show-personal-acc-main-page__content__button-save");
  document
    .getElementById("content2")
    .classList.toggle("show-personal-acc-main-page__content2");
  document
    .getElementById("red")
    .classList.toggle("show-personal-acc-main-page__content__button-red");
  document
    .getElementById("content")
    .classList.toggle("show-personal-acc-main-page__content");
  document
    .getElementById("personal-page")
    .classList.toggle("show-personal-acc-main-page-margin");
  document
    .getElementById("personal-page")
    .classList.toggle("show-personal-acc-main-page-width");

  document
    .getElementById("arrow-2")
    .classList.toggle("show-menu__content__cricle-arrow2");
  document
    .getElementById("content")
    .classList.toggle("show-personal-acc-main-page__content-width");
  document
    .getElementById("arrow-absolute")
    .classList.toggle("show-arrow-absolute");
}
function arrowAbsolute() {
  document
    .getElementById("arrow-absolute")
    .classList.toggle("show-arrow-absolute");
}

function menuMob() {
  document.getElementById("menu-mob").classList.toggle("show-menu-mob");
  document
    .getElementById("menu-mob-menu")
    .classList.toggle("show-menu-mob-menu");
  document.getElementById("crestik").classList.toggle("show-crestik");
}

const password = document.querySelector("#password");
const toggleVisibility = document.querySelector("#toggle-visibility");
let state = new Map([
  ["password", "text"],
  ["text", "password"],
]);
toggleVisibility.addEventListener("click", () => {
  password.setAttribute("type", state.get(password.getAttribute("type")));
});

const password2 = document.querySelector("#password2");
const toggleVisibility2 = document.querySelector("#toggle-visibility2");
let state2 = new Map([
  ["password", "text"],
  ["text", "password"],
]);
toggleVisibility2.addEventListener("click", () => {
  password2.setAttribute("type", state2.get(password2.getAttribute("type")));
});

const password3 = document.querySelector("#password3");
const toggleVisibility3 = document.querySelector("#toggle-visibility3");
let state3 = new Map([
  ["password", "text"],
  ["text", "password"],
]);
toggleVisibility3.addEventListener("click", () => {
  password3.setAttribute("type", state2.get(password3.getAttribute("type")));
});

function glaz() {
  document
    .getElementById("toggle-visibility")
    .classList.toggle("show-button-glaz");
}
function glaz2() {
  document
    .getElementById("toggle-visibility2")
    .classList.toggle("show-button-glaz");
}
function glaz3() {
  document
    .getElementById("toggle-visibility3")
    .classList.toggle("show-button-glaz");
}
function buttonSogl() {
  document.getElementById("button-sogl").classList.toggle("show-button-sogl");
}
function menuClassification() {
  document.getElementById("block-list").classList.toggle("show-block-list");
  document
    .getElementById("blue-min-arrow")
    .classList.toggle("show-blue-min-arrow");
}
function menuClassificationV2() {
  document.getElementById("block-list").classList.toggle("show-block-list-v2");
  document
    .getElementById("blue-min-arrow")
    .classList.toggle("show-blue-min-arrow");
}

