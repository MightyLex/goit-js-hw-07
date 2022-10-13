import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divGallery = document.querySelector(".gallery");

const makeGalleryMarkup = function (items) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <a href="${original}" class="gallery__item"> 
        <img src="${preview}" alt="${description}" class="gallery__image" />
        </a>
        `;
    })
    .join("");
};

divGallery.insertAdjacentHTML("beforeend", makeGalleryMarkup(galleryItems));
console.log(divGallery);

var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250  });

