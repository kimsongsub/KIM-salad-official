const MAX_PAGE_NUMBER = 29999;

let pageCount = 0;

export function initMainJS() {
  pageCount = 0;
  const rigthArrow = document.querySelector(".right-arrow");
  const leftArrow = document.querySelector(".left-arrow");
  const wrapDish = document.querySelectorAll(".wrap-section1-dish");

  rigthArrow.addEventListener("click", rightSlide);
  leftArrow.addEventListener("click", leftSlide);
  document.addEventListener("scroll", handleBackgroundColor);
  wrapDish.forEach((dish) => {
    dish.addEventListener("click", function () {
      putCartOrOrder(dish);
    });
  });
}

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

  section3Array[pageCount % 3].classList.add("hide-element");
  section3Array[(pageCount + 1) % 3].classList.remove("hide-element");
  const section3Background =
    section3Array[(pageCount + 1) % 3].querySelector("div");

  section3.style.backgroundColor =
    getComputedStyle(section3Background).backgroundColor;
  headerBackground.style.backgroundColor =
    getComputedStyle(section3Background).backgroundColor;
  detailMenuPage.style.backgroundColor =
    getComputedStyle(section3Background).backgroundColor;

  pageCount++;

  window.scroll({
    behavior: "smooth",
    top: section1.clientHeight + section2.clientHeight + 110,
  });
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
  section3Array[pageCount % 3].classList.add("hide-element");
  section3Array[(pageCount + 2) % 3].classList.remove("hide-element");
  const section3Background =
    section3Array[(pageCount + 2) % 3].querySelector("div");

  section3.style.backgroundColor =
    getComputedStyle(section3Background).backgroundColor;
  headerBackground.style.backgroundColor =
    getComputedStyle(section3Background).backgroundColor;
  detailMenuPage.style.backgroundColor =
    getComputedStyle(section3Background).backgroundColor;

  if (pageCount == 0) {
    pageCount = MAX_PAGE_NUMBER;
  } else {
    pageCount--;
  }

  window.scroll({
    behavior: "smooth",
    top: section1.clientHeight + section2.clientHeight + 110,
  });
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
  const headerBackground = document.querySelector(".header-background");
  const detailMenuPage = document.querySelector(".detail-menu-page");
  headerBackground.style.backgroundColor = getComputedStyle(
    findScrollInSectionNumber()
  ).backgroundColor;
  detailMenuPage.style.backgroundColor = getComputedStyle(
    findScrollInSectionNumber()
  ).backgroundColor;
}

function putCartOrOrder(dish) {
  const dishName = dish.querySelector(".paragrah-dish");
  console.log(`You selected ${dishName.innerText}`);
}
