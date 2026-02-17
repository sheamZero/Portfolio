const service_id = "service_f9ra7ym";
const template_id = "template_5qebmdm";
const public_key = "jY7zQx0jEqw9JrT7e";

emailjs.init(public_key);
const contactForm = document.getElementById("contact-form");
const submitBtn = contactForm.querySelector("button");

// toster notification function
const showToaster = (text, type = "success") => {
    const toaster = document.createElement("div");
    toaster.className = `toast ${type}`;
    toaster.innerText = text;
    document.body.appendChild(toaster);

    setTimeout(() => {
        toaster.remove();
    }, 5000);
};

// handle form submission
const handleSubmit = (e) => {
    e.preventDefault();

    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    // Send form via EmailJS
    emailjs.sendForm(service_id, template_id, contactForm)
        .then(() => {
            // Success
            showToaster("Message sent successfully!", "success");
            contactForm.reset();
            submitBtn.innerText = "Send Message";
            submitBtn.disabled = false;
        })
        .catch((error) => {
            // Failure
            console.error("EmailJS Error:", error);
            showToaster("Failed to send message. Please try again.", "error");
            submitBtn.innerText = "Send Message";
            submitBtn.disabled = false;
        });
};

contactForm.addEventListener("submit", handleSubmit);
