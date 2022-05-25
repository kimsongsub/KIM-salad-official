"use strict";

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
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
  document.getElementById("main-page").innerHTML = html;
  dynamicImportJS(path);
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

async function dynamicImportJS(path) {
  if (path === "/" || path === "/index.html") {
    const mainJs = await import("/js/main.js");
    mainJs.addEvent();
  } else if (path === "/food-ingredients") {
    const foodIngredientsJs = await import("/js/food-ingredients.js");
  }
}
