const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryCreator = (inputData, galleryId) => {
  const galleryItems = inputData.map(({ url, alt }) => {
    return `<li class = "list__item"><img class = "list__img" src = "${url}" alt = "${alt}"></li>`;
  });

  const galleryListEl = document.querySelector(galleryId);

  galleryListEl.insertAdjacentHTML("afterbegin", galleryItems);

  console.log(galleryListEl);

  galleryListEl.classList = "list";
};

galleryCreator(images, "#gallery");
