let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow-container__slideshow-image");
  let dots = document.getElementsByClassName("dots__dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// 

const $container = document.querySelector(".portfolio-page__projects-overview");
const $subheadlines = $container.querySelector(".projects-overview__subheadlines");
const $gallery = $container.querySelector(".projects-overview__gallery");

$subheadlines.addEventListener("mouseover", (e) => {
	if (e.target.classList.contains("js-hover")) {  
  	const type = e.target.dataset.hoverType;
    
    $gallery.classList.add(type);
  }
});

$subheadlines.addEventListener("mouseout", (e) => {
	if (e.target.classList.contains("js-hover")) { 
    const type = e.target.dataset.hoverType;
  
    $gallery.classList.remove(type);
  }
});