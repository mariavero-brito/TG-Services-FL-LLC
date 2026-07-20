// Hero Button Action
const heroButton = document.querySelector(".hero-cta");

if (heroButton) {
    heroButton.addEventListener("click", () => {
        window.location.href = "contact.html";
    });
}


// Contact Form EmailJS
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
    emailjs.init({
        publicKey: "71Cwt4XhZ3JapqnNG",
    });
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_o7b88hm", "template_udjaedt", this)
            .then(() => {
                console.log("Success");
                formStatus.textContent = "Thanks! We'll be in touch.";
                formStatus.classList.remove("error");
                formStatus.classList.add("visible", "success");
            }, (error) => {
                console.log("Failed", error);
                formStatus.textContent = "Something went wrong. Please try again.";
                formStatus.classList.remove("success");
                formStatus.classList.add("visible", "error");
            });
    })
}

//Portfolio Carousel
const images = ["images/images/garden-design-4.jpg", 
    "images/images/garden-design-5.jpg", 
    "images/images/paver-installation.jpg", 
    "images/images/planting.jpg", 
    "images/images/turf-installation.jpg", 
    "images/images/turf-installation-2.jpg",];
let currentIndex = 1;

const previousSlide = document.querySelector(".gallery-slide-previous img");
const activeSlide = document.querySelector(".gallery-slide-active img");
const nextSlide = document.querySelector(".gallery-slide-next img");
const leftButton = document.querySelector(".left-gallery-button");
const rightButton = document.querySelector(".right-gallery-button");

function updateSlides() {
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    previousSlide.src = images[previousIndex];
    activeSlide.src = images[currentIndex];
    nextSlide.src = images[nextIndex];
}

if (leftButton && rightButton) {
    leftButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlides();
    });

    rightButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1 + images.length) % images.length;
        updateSlides();
    });
}