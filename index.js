gsap.to(".nav", {
	backgroundColor: "#000",
	color: "#fff",
	duration: 0.1,
	scrollTrigger: {
		trigger: "nav",
		scroller: "body",
		start: "top -3%",
		end: "top -7%",
		// markers:true,
		scrub: 0.1,
	},
});

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
	},
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

// const tl2 = gsap.timeline();

// tl2.from(".headingDescription",{
//   opacity: 0,
//   y: 50, // Reduced y to avoid large jump
//   duration: 0.8,
// })
// tl2.from(".headingImage",{
//   opacity: 0,
//   y: -50, // Reduced y to avoid large jump
//   duration: 0.8,
// })

//

document.querySelectorAll(".singleReco").forEach((item) => {
	item.addEventListener("mouseenter", function () {
		this.classList.add("active"); // Add 'active' class on hover
	});
});

document.querySelectorAll(".headingDName").forEach((header) => {
    header.addEventListener("click", function () {
        document.querySelectorAll(".headingDName").forEach((h) => h.classList.remove("activeDecription"));
        this.classList.add("activeDecription");

        // Set description and trigger animation on update
        const imageDescription = this.getAttribute("myText");
        const headingDescription = document.querySelector(".headingDescription");

        headingDescription.innerHTML = imageDescription;

        // Animate each time a new description is loaded
        gsap.fromTo(
            headingDescription,
            { clipPath: "inset(0 100% 0 0)" },  // Start fully clipped
            { clipPath: "inset(0 0% 0 0)", duration: 0.6}  // Reveal from left to right
        );
    });
});


// Get all the elements For Slider
const slides = document.querySelectorAll(".slide");
const paginationNumbers = document.querySelector(".pagination-numbers");
const currentSlideNumber = document.querySelector(".current-slide");
const slideActiveImg = document.querySelectorAll(".slideImg");
const captionLine = document.querySelectorAll(".caption");
const totalSlides = document.querySelector(".total-slides");
const lines = document.querySelectorAll(".line");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const slideCount = slides.length;

// Set total number of slides
totalSlides.textContent = `0${slideCount}`;

// Function to update the slider
function updateSlider() {
	// Hide all slides
	slides.forEach((slide) => slide.classList.remove("active"));
	lines.forEach((line) => line.classList.remove("active"));

	// Show the current slide
	slides[currentIndex].classList.add("active");
	lines[currentIndex].classList.add("active");

	// Update the pagination numbers
	currentSlideNumber.textContent = `0${currentIndex + 1}`;

	// Apply GSAP animation
	gsap.fromTo(
		slideActiveImg,
		{ scaleX: 0, clipPath: "inset(0 100% 0 0)" }, // Start from slightly left
		{ scaleX: 1, duration: 0.5, ease: "power2.out", clipPath: "inset(0 0 0 0)" } // Transition to center smoothly
	);
	gsap.fromTo(
	  captionLine,
	  { scaleX: 0, clipPath: "inset(0 100% 0 0)" }, // Start from slightly left
	  { scaleX: 1, duration: 0.5, ease: "power2.out", clipPath: "inset(0 0 0 0)" } // Transition to center smoothly
  );
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
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Auto-slide every 4 seconds
setInterval(nextSlide, 4000);

// Initialize slider
updateSlider();
