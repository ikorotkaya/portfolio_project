const $gallery = document.querySelector(".slideshow-page__horizontal-gallery");
const $picturesContainer = $gallery.querySelector(".horizontal-gallery__pictures");

const containerWidth = $picturesContainer.clientWidth;

const pictures = document.querySelectorAll(".pictures__picture");
const picture = document.querySelector(".pictures__picture");

const prevButton = $gallery.querySelector(".buttons__button-prev");
const nextButton = $gallery.querySelector(".buttons__button-next");

let currentPictureIndex = 0;
const pictureCount = pictures.length;

const gap = 10; // px

const pictureWidths = [];

pictures.forEach(picture => {
  pictureWidths.push(picture.clientWidth);
});

const updateNavState = () => {
  if(currentPictureIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if(containerWidth >= remainingGalleryWidth()) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

const remainingGalleryWidth = () => {
  let result = 0;
  for (let i = currentPictureIndex; i < pictureCount; i++) {
    result += pictureWidths[i];

    if (i !== pictureCount - 1) {
      result += gap;
    }
  }

  return result; 
}

updateNavState();

nextButton.addEventListener("click", (e) => {
  let shiftWidth;
  const lastPictureWidth = pictureWidths[pictureCount - 1];

  if(remainingGalleryWidth() - containerWidth > lastPictureWidth) {
    shiftWidth = pictureWidths[currentPictureIndex] + gap;
  } else {
    shiftWidth = remainingGalleryWidth() - containerWidth;
  }
  
  $picturesContainer.scrollLeft += shiftWidth;
  
  currentPictureIndex += 1;

  updateNavState();
});

prevButton.addEventListener("click", (e) => {
  const shiftWidth = pictureWidths[currentPictureIndex - 1] + gap;
  
  if (shiftWidth > 0) {
    $picturesContainer.scrollLeft -= shiftWidth;
    
    currentPictureIndex -= 1;
  }

  updateNavState();
});
