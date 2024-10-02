const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.pagination-dot');
const lineSegments = document.querySelectorAll('.line-segment');
const currentSlideText = document.querySelector('.current-slide');

let currentIndex = 0;
let totalSlides = slides.length;
let slideInterval = setInterval(nextSlide, 4000); // Auto slide every 4 seconds

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.remove('active');
    if (i === index) {
      dot.classList.add('active');
    }
  });

  lineSegments.forEach((segment, i) => {
    segment.classList.remove('active');
    if (i === index) {
      segment.classList.add('active');
    }
  });

  currentSlideText.textContent = index + 1;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Event listeners for manual navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
    resetInterval();
  });
});

// Reset auto-slide timer on manual navigation
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 4000);
}
