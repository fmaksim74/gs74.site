var slideIndex = -1;

// Next/previous controls
function plusSlides(n) {
  
  slideIndex += n;
  showSlide();
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlide();
}

function showSlide() {

  var slides = document.getElementsByClassName("slide-container");
  var dots = document.getElementsByClassName("slide-dot");
  
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  
  for ( var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";

}

function cycleSlides(){
  ++slideIndex;
  showSlide();
  setTimeout(cycleSlides, 10000); // Change image every 10 seconds
}
