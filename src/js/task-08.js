const refs = {
  inputEl: document.querySelector("#controls").firstElementChild,
  renderBtnEl: document.querySelector("[data-action = render]"),
  destroyBtnEl: document.querySelector("[data-action = destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

const getElWidth = (index) => {
  let elWidth = 30;
  for (let i = 0; i < index; i += 1) {
    elWidth += 10;
  }
  return elWidth;
};

const getElHeight = (index) => {
  let elHeight = 30;
  for (let i = 0; i < index; i += 1) {
    elHeight += 10;
  }
  return elHeight;
};

const getRandomNum = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const createBoxes = () => {
  const amount = refs.inputEl.value;

  let elArr = [];

  for (let i = 0; i < amount; i += 1) {
    const el = document.createElement("div");
    const randomRedColor = getRandomNum(0, 256);
    const randomGreenColor = getRandomNum(0, 256);
    const randomBlueColor = getRandomNum(0, 256);

    el.id = "box";
    el.style.width = `${getElWidth(i)}px`;
    el.style.height = `${getElHeight(i)}px`;
    el.style.backgroundColor = `rgb(${randomRedColor}, ${randomGreenColor}, ${randomBlueColor})`;
    elArr.push(el);
  }

  refs.boxesEl.append(...elArr);
};

const destroyBoxes = () => {
  const arrCreateEl = [...document.querySelectorAll("#box")];

  arrCreateEl.map((item) => {
    return refs.boxesEl.removeChild(item);
  });

  refs.inputEl.value = "";
};

refs.renderBtnEl.addEventListener("click", createBoxes);
refs.destroyBtnEl.addEventListener("click", destroyBoxes);
