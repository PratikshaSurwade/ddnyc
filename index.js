gsap.to(".nav",{
  backgroundColor:"#000",
  color: "#fff",
	duration:0.1,
	scrollTrigger:{
		trigger:"nav",
		scroller:"body",
		start: "top -3%",
		end: "top -7%",
		// markers:true,
		scrub: 0.1,
	}
})

// page Statistics timeline

// Create the timeline
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contentBox",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    scrub: true, // Smooth out the animation with scrub
    // markers: true,
  }
});

// Animate the divider line
tl1.from(".dividerLine", {
  scaleX: 0,
  duration: 0.6,
  transformOrigin: "left center", // Ensures scaleX originates from the left
  stagger: 0.3, // Adjusted to avoid overlap
});

// Animate contentBox h4 and h5 elements
tl1.from(".contentBox > h4, .contentBox > h5", {
  opacity: 0,
  y: 50, // Reduced y to avoid large jump
  duration: 0.8,
  stagger: 0.4, // Adjust stagger for smoother effect
});


// 

document.querySelectorAll('.singleReco').forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.classList.add('active');  // Add 'active' class on hover
    });
  });
  

  document.querySelectorAll('.headingName').forEach(header => {
    header.addEventListener('click', function() {
        // Remove 'active' class from all headers
        document.querySelectorAll('.headingDName').forEach(h => h.classList.remove('activeDecription'));
        
        // Add 'active' class to the clicked header
        this.classList.add('activeDecription');
        
        // Get the image URL from the clicked header's 'myImage' attribute
        const imageUrl = this.getAttribute('myPhoto');
        console.log(imageUrl);
        
        //Get the Description from the clicked header's 'myText' attribute
        const imageDecription = this.getAttribute('myText');
        document.querySelector(".headingDescription").innerHTML=imageDecription;

        // Set the background image of the #image-display div
        document.querySelector('.headingImage').style.backgroundImage = `url(${imageUrl})`;
    });
});

// Optionally, you can trigger the click event on the first header to show an image by default
document.querySelector('.header').click();


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
    if (currentIndex > 0) {
      console.log(currentIndex,slides[currentIndex-1]);
      slides[currentIndex-1].classList.add('outgoing');
    }
    setTimeout(() => {
      slides[currentIndex-1].classList.remove('outgoing');
    }, 1000);  
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
