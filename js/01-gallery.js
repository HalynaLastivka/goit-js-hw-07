import { galleryItems } from './gallery-items.js';
// Change code below this line


let instance;
const ulEl = document.querySelector('.gallery');
const newElImg = createLi(galleryItems);

ulEl.insertAdjacentHTML('beforeend', newElImg);
const refItem = document.querySelectorAll('.gallery__link');
const liEl = document.querySelectorAll('.gallery__image');


liEl.forEach(function (liItem) {
    liItem.addEventListener('click', onImgClick); 
})


// cancel event on ref
refItem.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
  });
});


function createLi(gallery) {

   return gallery.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`; }).join('');   
}

function onImgClick(event) {
    const dataSource = event.currentTarget.getAttribute('data-source');

     instance = basicLightbox.create(
    `<img src="${dataSource}" width="800" height="600">`)

  instance.show();
  window.addEventListener('keydown', pressEsc);

}
  function pressEsc(event) {
    console.log('hello');
    if (event.key !== "Escape") {
      return;
    }
    instance.close();
    window.removeEventListener('keydown', pressEsc);

  }
 
