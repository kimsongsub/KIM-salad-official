"use strict";

const slideSection3_1 = document.getElementsByClassName("section3-1")[0];
const slideSection3_2 = document.getElementsByClassName("section3-2")[0];
const slideSection3_3 = document.getElementsByClassName("section3-3")[0];

const rigthArrow = document.querySelector("#right_arrow");
const leftArrow = document.querySelector("#left_arrow");

const section3 = [slideSection3_1, slideSection3_2, slideSection3_3];

let i = 0;

function rightSlide() {
  section3[i % 3].style.left = "3840px"; //첫번째 맨뒤로
  section3[(i + 1) % 3].style.left = "0px"; //두번째 첫번째로
  section3[(i + 2) % 3].style.left = "1920px"; //세번째 두번째로

  i++;
}

function leftSlide() {
  section3[i % 3].style.left = "1920px"; //첫번째 두번째로
  section3[(i + 1) % 3].style.left = "3840px"; //두번째 세번째로
  section3[(i + 2) % 3].style.left = "0px"; //세번째 맨앞으로

  if (i == 0) {
    i = 299;
  } else {
    i--;
  }
}

rigthArrow.addEventListener("click", rightSlide);
leftArrow.addEventListener("click", leftSlide);
