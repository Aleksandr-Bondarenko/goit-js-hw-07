const categoriesItemsEl = document.querySelectorAll(".item");

console.log(`В списке ${categoriesItemsEl.length} категории.`);

categoriesItemsEl.forEach((item) => {
  const categoryNameEl = item.firstElementChild;
  const categoryItemCount = categoryNameEl.nextElementSibling.children.length;

  console.log(
    `Категория: ${categoryNameEl.textContent}
Количество элементов: ${categoryItemCount}`
  );
});
