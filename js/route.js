const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/page/404.html",
  "/": "/page/main.html",
  "/food-ingredients": "/page/food-ingredients.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
  dynamicImportCSS(path);
  dynamicImportJS(path);
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

const importedCSS = [];

async function dynamicImportJS(path) {
  let jsFilePath;

  if (path === "/") {
    jsFilePath = "/js/main.js";
    let mainFile = await import(jsFilePath);
    mainFile.addEvent();
    mainFile.aa();
  } else if (path === "/food-ingredients") {
    jsFilePath = "/js/food-ingredients.js";
  }
}

function dynamicImportCSS(path) {
  let cssFilePath;
  if (path === "/") {
    cssFilePath = "/css/style.css";
  } else if (path === "/food-ingredients") {
    cssFilePath = "/css/food-ingredients.css";
  }

  if (!importedCSS.includes(cssFilePath)) {
    importedCSS.push(cssFilePath);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssFilePath;
    head = document.querySelector("head");
    head.appendChild(link);
  }
}
