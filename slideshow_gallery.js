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

  if(containerWidth >= remainingScrollRight(currentPictureIndex)) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

const remainingScrollRight = (pictureIndex) => {
  let result = 0;
  
  for (let i = pictureIndex; i < pictureCount; i++) {
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

  if(remainingScrollRight(currentPictureIndex) - containerWidth > lastPictureWidth) {
    shiftWidth = pictureWidths[currentPictureIndex] + gap;
  } else {
    shiftWidth = remainingScrollRight(currentPictureIndex) - containerWidth;
  }
  
  $picturesContainer.scrollLeft += shiftWidth;
  
  currentPictureIndex += 1;

  updateNavState();
});

prevButton.addEventListener("click", (e) => {
  let shiftWidth;
  
  if(containerWidth > remainingScrollRight(currentPictureIndex)) {
    shiftWidth = remainingScrollRight(currentPictureIndex - 1) - containerWidth;
  } else {
    shiftWidth = pictureWidths[currentPictureIndex - 1] + gap;
  }

  $picturesContainer.scrollLeft -= shiftWidth;
    
  currentPictureIndex -= 1;

  updateNavState();
});
