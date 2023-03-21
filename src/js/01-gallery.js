// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector(".gallery");
console.log(SimpleLightbox)

const markups = galleryItems
  .map(
    (items) =>
      `<li class="gallery__items">
      <a class="gallery__item" href="${items.original}">
      <img class="gallery__image" src="${items.preview}" alt="${items.description}" />
    </a>
  </li>`
  )
  .join("");
  
galleryList.innerHTML = markups;
new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: 'bottom', captionDelay: 250 });