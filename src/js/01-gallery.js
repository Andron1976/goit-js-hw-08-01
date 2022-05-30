import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/01-gallery.css';
import '../css/common.css';

const galleryEl = document.querySelector('.gallery');

function newItem() {
    return galleryItems.map(
        (pics) =>
          `<a class="gallery__item" href="${pics.original}">
          <img class="gallery__image" src="${pics.preview}" alt="${pics.description}" />
          </a>`
      ).join("");
  }

galleryEl.insertAdjacentHTML('afterbegin', makeGalleryCard(galleryItems));

let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  console.log(galleryItems);
