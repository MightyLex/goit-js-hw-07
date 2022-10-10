import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const divGallery = document.querySelector(".gallery");


function makeGalleryMarkup(items) {
  const list = document.createElement("ul");
  const makeLi = document.createElement("li");
  const makeLink = document.createElement('a')
  const makeImg = document.createElement("img");
  const galleryListItems = [];

  galleryItems.forEach((item) => {
    makeLi.classList.add("gallery__item");
    makeLink.classList.add('gallery__link')
    makeLi.append(makeLink);
    makeImg.classList.add("gallery__image");
    makeImg.src = `${item.preview}`;
    makeImg.alt = `${item.description}`;
    makeLink.append(makeImg)
    list.append(makeLi);
    galleryListItems.push(makeLi)
    console.log(galleryListItems);


  });


  divGallery.append(list);
}
makeGalleryMarkup();
