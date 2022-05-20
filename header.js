const wrapDetailPage = document.querySelector(".wrap-detail-page");
const detailMenuPage = document.querySelector(".detail-menu-page");
const headerBackground = document.querySelector(".header-background");
const headerMenuItem = document.querySelectorAll(".header-menu li");

function handleDetailMenu() {
  if (wrapDetailPage.classList.contains("unvisible")) {
    wrapDetailPage.classList.remove("unvisible");
    wrapDetailPage.style.opacity = 1;
  } else {
    wrapDetailPage.classList.add("unvisible");
    wrapDetailPage.style.opacity = 0;
  }
}

headerMenuItem.forEach((item) => {
  item.addEventListener("click", handleDetailMenu);
});
