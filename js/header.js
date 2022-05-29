(function () {
  const detailMenuItem = document.querySelectorAll(".inner-detail-page a");
  const headerMenuItem = document.querySelectorAll(".header-menu li");
  const headerLogo = document.querySelector("#KIM-salad");
  const headerFruitLink = document.querySelector("#fruits-ingredients");
  const headerVegiLink = document.querySelector("#vegitables-ingredients");

  detailMenuItem.forEach((menuItem) => {
    menuItem.addEventListener("click", route);
    menuItem.addEventListener("click", handleDetailMenu);
  });

  headerMenuItem.forEach((item) => {
    item.addEventListener("click", handleDetailMenu);
  });

  headerLogo.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });

  headerFruitLink.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });

  headerVegiLink.addEventListener("click", function () {
    window.scrollTo(0, 1450);
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
