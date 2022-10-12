import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divGallery = document.querySelector(".gallery");
// const list = document.createElement("ul");
// list.classList.add('gallery')
// divGallery.append(list)

const makeGalleryMarkup = function (items) {
  
  return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
    <a href="${original}" class="gallery__link"> <img src="${preview}" alt="${description}" class="gallery__image" data-source="${original}"/></a>
    </div>`;
  }).join('')
  
  // const makeLi = document.createElement("li");
  // const makeLink = document.createElement('a')
  // const makeImg = document.createElement("img");
  // galleryItems.forEach((item) => {
    //   makeLi.classList.add("gallery__item");
    //   makeLink.classList.add('gallery__link')
    //   makeImg.classList.add("gallery__image");
    //   makeImg.src = `${item.preview}`;
    //   makeImg.alt = `${item.description}`;
    //   makeLink.append(makeImg)
    //   makeLi.append(makeLink);
    //   list.append(makeLi);
    // });
    
    //   divGallery.append(list);
    
    // почему так не работает ???????????????
    // аппендится только ласт лишка.
    
  }
  
  divGallery.insertAdjacentHTML('beforeend', makeGalleryMarkup(galleryItems))


  divGallery.addEventListener('click', onGalleryClick)

  function onGalleryClick(event) {
      event.preventDefault();

      if (event.target.classList.contains('gallery__image')) {
        const modalImg = basicLightbox.create(`
      <img src= ${event.target.dataset.source} >
      `)
  
      modalImg.show()
      
      
      addEventListener('keydown', onEscPress)

      function onEscPress(event) {
        console.log(event.code);
        if (event.code === 'Escape') {
          modalImg.close()
          removeEventListener('keydown', onEscPress)

        }
        }        
      }  
    }
    
    
