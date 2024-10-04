gsap.to(".nav",{
	borderBottom: "grey solid 1px",
	duration:0.5,
	scrollTrigger:{
		trigger:"nav",
		scroller:"body",
		start: "top -5%",
		end: "top -11%",
		markers:true,
		scrub: 1,
	}
})
document.querySelectorAll('.singleReco').forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.classList.add('active');  // Add 'active' class on hover
    });
  });
  


// Get all the elements For Slider
const slides = document.querySelectorAll('.slide');
const paginationNumbers = document.querySelector('.pagination-numbers');
const currentSlideNumber = document.querySelector('.current-slide');
const totalSlides = document.querySelector('.total-slides');
const lines = document.querySelectorAll('.line');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const slideCount = slides.length;

// Set total number of slides
totalSlides.textContent = `0${slideCount}`;

// Function to update the slider
function updateSlider() {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    lines.forEach(line => line.classList.remove('active'));

    // Show the current slide
    slides[currentIndex].classList.add('active');
    lines[currentIndex].classList.add('active');

    // Update the pagination numbers
    currentSlideNumber.textContent = `0${currentIndex + 1}`;
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Add event listeners for the arrows
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto-slide every 4 seconds
setInterval(nextSlide, 4000);

// Initialize slider
updateSlider();
