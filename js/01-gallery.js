// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// 2.Реализация делегирования на div.gallery и получение url большого изображения.
// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// 4.Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// 5.Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

import { galleryItems } from './gallery-items.js';
// // Change code below this line
  
const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', onClickModal);

galleryMarkup()
function galleryMarkup() {
  const markup = galleryItems.map(({original, preview, description}) => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');
console.log(markup);
galleryList.innerHTML = markup;
};

function onClickModal(event) {
  event.preventDefault();
  
  if(event.target.nodeName !== 'IMG') {
    return;
  }

  if(event.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}" width="800" height="600"/>` 
    );
    instance.show();

    const instanceClose = (event) => {
      if(event.key === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', this);
      }
    }
    document.addEventListener('keydown', instanceClose);
  }
}


console.log(galleryItems);


