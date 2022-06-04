(function () {
  const detailMenuItem = document.querySelectorAll(".inner-detail-page a");
  const homeBtn = document.querySelector(".header-logo a");
  const headerMenuItem = document.querySelectorAll(".header-menu li");
  const headerLogo = document.querySelector("#KIMSalad");
  const headerFruitLink = document.querySelector("#fruitsIngredients");
  const headerVegiLink = document.querySelector("#vegitablesIngredients");
  const headerSauceLink = document.querySelector("#SauceIngredients");
  const scrollTopBtn = document.querySelector(".scroll-top-btn");

  detailMenuItem.forEach((menuItem) => {
    menuItem.addEventListener("click", route);
    menuItem.addEventListener("click", handleDetailMenu);
  });

  homeBtn.addEventListener("click", route);

  headerMenuItem.forEach((item) => {
    item.addEventListener("click", handleDetailMenu);
  });

  headerLogo.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });

  headerFruitLink.addEventListener("click", function () {
    window.scroll({
      behavior: "smooth",
      top: 0,
    });
  });

  headerVegiLink.addEventListener("click", function () {
    window.scroll({
      behavior: "smooth",
      top: document.documentElement.scrollHeight / 3,
    });
  });

  headerSauceLink.addEventListener("click", function () {
    window.scroll({
      behavior: "smooth",
      top: (document.documentElement.scrollHeight * 7) / 10,
    });
  });

  scrollTopBtn.addEventListener("click", function () {
    window.scroll({
      behavior: "smooth",
      top: 0,
    });
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
