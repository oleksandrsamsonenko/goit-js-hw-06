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

const gallery = document.querySelector(`.gallery`);
const picture = document.querySelector(`.picture`);
gallery.style.display = `flex`;
gallery.style.justifyContent = `space-around`;
gallery.style.backgroundColor = `teal`;
gallery.style.padding = `25px`;
gallery.style.borderRadius = `25px`;

images.forEach((image) => {
  gallery.insertAdjacentHTML(
    `beforeend`,
    `<img src="${image.url}" alt="${image.alt}" class="picture" style = "width:30vw">`
  );
});
