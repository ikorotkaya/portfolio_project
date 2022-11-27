const $gallery = document.querySelector(".slideshow-page__horizontal-gallery");
const $picturesContainer = $gallery.querySelector(".horizontal-gallery__pictures");

// Select all pictures
const pictures = document.querySelectorAll(".pictures__picture");

const picture = document.querySelector(".pictures__picture");
const prevButton = $gallery.querySelector(".buttons__button-prev");
const nextButton = $gallery.querySelector(".buttons__button-next");

nextButton.addEventListener("click", () => {
  const pictureWidth = picture.clientWidth;
  $picturesContainer.scrollLeft += pictureWidth;
});

prevButton.addEventListener("click", () => {
  const pictureWidth = picture.clientWidth;
  $picturesContainer.scrollLeft -= pictureWidth;
});


