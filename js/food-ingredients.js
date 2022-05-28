(function () {
  const otherFruits = document.querySelectorAll(".other-fruits-img");

  otherFruits.forEach((fruit) => {
    fruit.addEventListener("click", function () {
      handleOtherFruits(fruit);
    });
  });
})();

function handleOtherFruits(fruit) {
  const mainFruitImg = document.querySelector("#main-fruits-img");
  const gridColor = document.querySelectorAll(".fruits-effect-content");
  const [src, alt, color] = [
    mainFruitImg.src,
    mainFruitImg.alt,
    mainFruitImg.dataset.color,
  ];
  mainFruitImg.src = fruit.src;
  mainFruitImg.alt = fruit.alt;
  mainFruitImg.dataset.color = fruit.dataset.color;
  gridColor.forEach((content) => {
    content.style.backgroundColor = fruit.dataset.color;
  });
  fruit.src = src;
  fruit.alt = alt;
  fruit.dataset.color = color;
  window.scroll({
    behavior: "smooth",
    top: 250,
  });
}

(function () {
  const otherVegitables = document.querySelectorAll(".other-vegitables-img");

  otherVegitables.forEach((vegitable) => {
    vegitable.addEventListener("click", function () {
      handleOtherVegitables(vegitable);
    });
  });
})();

function handleOtherVegitables(vegitable) {
  const mainVegitablesImg = document.querySelector("#main-vegitable-img");
  const gridColor = document.querySelectorAll(".vegitables-effect-content");
  const [src, alt, color] = [
    mainVegitablesImg.src,
    mainVegitablesImg.alt,
    mainVegitablesImg.dataset.color,
  ];
  mainVegitablesImg.src = vegitable.src;
  mainVegitablesImg.alt = vegitable.alt;
  mainVegitablesImg.dataset.color = vegitable.dataset.color;
  gridColor.forEach((content) => {
    content.style.backgroundColor = vegitable.dataset.color;
  });
  vegitable.src = src;
  vegitable.alt = alt;
  vegitable.dataset.color = color;
  window.scroll({
    behavior: "smooth",
    top: 1700,
  });
}
