const inputRangeEl = document.querySelector("#font-size-control");
const outputTextEl = document.querySelector("#text");

// Немного самодеятельности:)
// Задаю исходное значение размера шрифта для текста
const initialFontSize = (outputTextEl.style.fontSize = "15px");

// Перезаписываю атрибуты для "ползунка"
inputRangeEl.value = Number.parseInt(initialFontSize);
inputRangeEl.min = 0;
inputRangeEl.max = 30;
inputRangeEl.step = 1;

// Дальше согласно заданию
const inputRangeHandler = (event) => {
  const inputRangeValue = event.currentTarget.value;

  outputTextEl.style.fontSize = `${inputRangeValue}px`;
};

inputRangeEl.addEventListener("input", inputRangeHandler);
