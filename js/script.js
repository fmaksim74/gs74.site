var slideIndex = 1;
//showSlide(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slide-container");
  var dots = document.getElementsByClassName("slide-dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for ( var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for ( var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function cycleSlides(){
  showSlide(slideIndex);
  ++slideIndex;
  setTimeout(cycleSlides, 5000); // Change image every 2 seconds
}
