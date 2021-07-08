const refs = {
  inputEl: document.querySelector("#controls").firstElementChild,
  renderBtnEl: document.querySelector("[data-action = render]"),
  destroyBtnEl: document.querySelector("[data-action = destroy]"),
  boxesEl: document.querySelector("#boxes"),
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

    el.style.width = `${30 + 10 * i}px`;
    el.style.height = el.style.width;
    el.style.backgroundColor = `rgb(${randomRedColor}, ${randomGreenColor}, ${randomBlueColor})`;
    elArr.push(el);
  }

  refs.boxesEl.append(...elArr);
};

const destroyBoxes = () => {
  refs.boxesEl.innerHTML = '';
  refs.inputEl.value = "";
};

refs.renderBtnEl.addEventListener("click", createBoxes);
refs.destroyBtnEl.addEventListener("click", destroyBoxes);
