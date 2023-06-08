let priceFunc = (min, max, item) => {
  let minPrice = min - 1;
  let maxPrice = max;
  let todayPrice = Math.floor(
    Math.random() * (maxPrice - minPrice) + minPrice + 1
  );

  const itemTag = document.querySelector("." + item);
  itemTag.innerText = `💲 ${todayPrice}`;
};

let priceList = () => {
  priceFunc(10, 20, "stone");
  priceFunc(10, 20, "coal");
  priceFunc(10, 20, "iron");
  priceFunc(10, 20, "copper");
  priceFunc(10, 20, "gold");
  priceFunc(10, 20, "lapis_lazuli");
  priceFunc(100, 200, "diamond");
};

priceList();
setInterval(() => priceList(), 1000 * 60 * 60 * 12);
