// Hero Button Action
const heroButton = document.querySelector(".hero-cta");

if (heroButton) {
    heroButton.addEventListener("click", () => {
        window.location.href = "contact.html";
    });
}


// Contact Form EmailJS
emailjs.init({
    publicKey: "71Cwt4XhZ3JapqnNG",
});

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
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
