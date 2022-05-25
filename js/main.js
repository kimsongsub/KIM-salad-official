"use strict";

export { addEvent };

const MAX_PAGE_NUMBER = 29999;

let i = 0;

function rightSlide() {
  const detailMenuPage = document.querySelector(".detail-menu-page");
  const headerBackground = document.querySelector(".header-background");
  const section3_1 = document.getElementsByClassName("section3-1")[0];
  const section3_2 = document.getElementsByClassName("section3-2")[0];
  const section3_3 = document.getElementsByClassName("section3-3")[0];
  const section1 = document.querySelector(".section1");
  const section2 = document.querySelector(".section2");
  const section3 = document.querySelector(".section3");
  const section3Array = [section3_1, section3_2, section3_3];

  section3Array[i % 3].classList.add("hide-element");
  section3Array[(i + 1) % 3].classList.remove("hide-element");
  const section3Background = section3Array[(i + 1) % 3].querySelector("div");

  section3.style.backgroundColor =
    getComputedStyle(section3Background).backgroundColor;
  headerBackground.style.backgroundColor =
    getComputedStyle(section3Background).backgroundColor;
  detailMenuPage.style.backgroundColor =
    getComputedStyle(section3Background).backgroundColor;

  i++;

  scrollTo(0, section1.clientHeight + section2.clientHeight + 110);
}

function leftSlide() {
  const detailMenuPage = document.querySelector(".detail-menu-page");
  const headerBackground = document.querySelector(".header-background");
  const section3_1 = document.getElementsByClassName("section3-1")[0];
  const section3_2 = document.getElementsByClassName("section3-2")[0];
  const section3_3 = document.getElementsByClassName("section3-3")[0];
  const section1 = document.querySelector(".section1");
  const section2 = document.querySelector(".section2");
  const section3 = document.querySelector(".section3");
  const section3Array = [section3_1, section3_2, section3_3];
  section3Array[i % 3].classList.add("hide-element");
  section3Array[(i + 2) % 3].classList.remove("hide-element");
  const section3Background = section3Array[(i + 2) % 3].querySelector("div");

  section3.style.backgroundColor =
    getComputedStyle(section3Background).backgroundColor;
  headerBackground.style.backgroundColor =
    getComputedStyle(section3Background).backgroundColor;
  detailMenuPage.style.backgroundColor =
    getComputedStyle(section3Background).backgroundColor;

  if (i == 0) {
    i = MAX_PAGE_NUMBER;
  } else {
    i--;
  }

  scrollTo(0, section1.clientHeight + section2.clientHeight + 110);
}

function handleDetailMenu() {
  const wrapDetailPage = document.querySelector(".wrap-detail-page");
  if (wrapDetailPage.classList.contains("unvisible")) {
    wrapDetailPage.classList.remove("unvisible");
    wrapDetailPage.style.opacity = 1;
  } else {
    wrapDetailPage.classList.add("unvisible");
    wrapDetailPage.style.opacity = 0;
  }
}

function findScrollInSectionNumber() {
  const section1 = document.querySelector(".section1");
  const section2 = document.querySelector(".section2");
  const section3 = document.querySelector(".section3");
  const section4 = document.querySelector(".section4");
  if (window.scrollY < section1.clientHeight) {
    return section1;
  } else if (window.scrollY < section1.clientHeight + section2.clientHeight) {
    return section2;
  } else if (
    window.scrollY <
    section1.clientHeight + section2.clientHeight + section3.clientHeight
  ) {
    return section3;
  } else {
    return section4;
  }
}

function handleBackgroundColor() {
  const detailMenuPage = document.querySelector(".detail-menu-page");
  const headerBackground = document.querySelector(".header-background");
  headerBackground.style.backgroundColor = getComputedStyle(
    findScrollInSectionNumber()
  ).backgroundColor;
  detailMenuPage.style.backgroundColor = getComputedStyle(
    findScrollInSectionNumber()
  ).backgroundColor;
}

function addEvent() {
  const headerMenuItem = document.querySelectorAll(".header-menu li");
  const rigthArrow = document.querySelector("#right_arrow");
  const leftArrow = document.querySelector("#left_arrow");

  headerMenuItem.forEach((item) => {
    item.addEventListener("click", handleDetailMenu);
  });

  rigthArrow.addEventListener("click", rightSlide);
  leftArrow.addEventListener("click", leftSlide);

  document.addEventListener("scroll", handleBackgroundColor);
}