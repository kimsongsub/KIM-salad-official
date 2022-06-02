const route = (event) => {
  const previousHref = window.location.href;
  event = event || window.event;
  if (event.target.href !== "https://www.instagram.com/kim_salad_official/") {
    if (previousHref !== event.target.href) {
      window.history.pushState({}, "", event.target.href);
    }
    event.preventDefault();
    handleLocation();
  }
};

const routes = {
  404: "/page/404.html",
  "/": "/page/main.html",
  "/index.html": "/page/main.html",
  "/food-ingredients": "/page/food-ingredients.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("mainPage").innerHTML = html;
  dynamicImportJS(path);
  changeHeaderBackground(path);
};

async function dynamicImportJS(path) {
  if (path === "/" || path === "/index.html") {
    const mainJS = await import("/js/main.js");
    mainJS.initMainJS();
  } else if (path === "/food-ingredients") {
    const foodIngredientsJS = await import("/js/food-ingredients.js");
    foodIngredientsJS.initFoodIngredientsJS();
  }
}

function changeHeaderBackground(path) {
  const headerBackground = document.querySelector(".header-background");
  const detailMenuPage = document.querySelector(".detail-menu-page");
  if (path === "/" || path === "/index.html") {
    headerBackground.style.backgroundColor = "#e6de6e";
    detailMenuPage.style.backgroundColor = "#e6de6e";
  } else if (path === "/food-ingredients") {
    headerBackground.style.backgroundColor = "#fff2f2";
    detailMenuPage.style.backgroundColor = "#fff2f2";
  }
}

(function () {
  const detailMenuItem = document.querySelectorAll(".inner-detail-page a");
  detailMenuItem.forEach((menuItem) => {
    if (menuItem.target !== "_blank") {
      menuItem.addEventListener("click", route);
    }
  });

  window.onpopstate = handleLocation;
  window.route = route;

  handleLocation();
})();
