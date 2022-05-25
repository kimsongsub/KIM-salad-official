(function () {
  const detailMenuItem = document.querySelectorAll(".inner-detail-page a");
  const headerMenuItem = document.querySelectorAll(".header-menu li");

  detailMenuItem.forEach((menuItem) => {
    menuItem.addEventListener("click", handleDetailMenu);
  });

  headerMenuItem.forEach((item) => {
    item.addEventListener("click", handleDetailMenu);
  });
})();

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
