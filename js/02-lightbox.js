import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryList = document.querySelector('.gallery');

galleryMarkup()
function galleryMarkup() {
  const markup = galleryItems.map(({original, preview, description}) =>  
    `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`).join('');
galleryList.innerHTML = markup;
};

const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});