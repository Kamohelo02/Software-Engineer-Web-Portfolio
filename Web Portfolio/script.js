let type = new Typed('#changing-text', {
    strings : ['Software Engineer', 'Software Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

// Get all sections and nav links for scroll active class
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

// Function to add or remove 'active' class based on scroll position
function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        // Adjust offset as needed based on your header's height and desired scroll-trigger point
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute('id');

        // Check if the current scroll position is within the bounds of the current section
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            // Add 'active' class to the corresponding navigation link
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active');
        }else{
            // Remove 'active' class if not in the current section
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

// Listen for scroll event to update active navigation link
window.addEventListener('scroll', scrollActive);

// Initial call to set active class on page load
scrollActive();


// Contact Form Validation and Submission with EmailJS
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formMessage = document.getElementById('formMessage');

// Initialize EmailJS with your Public Key
(function() {
    emailjs.init({
        publicKey: 't6C7pRhnJIjz9v0PY', // Replace with your Public Key
    });
})();


// Function to validate email format
function isValidEmail(email) {
    // Basic regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to display error message for a specific input
function showError(element, message, errorDiv) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    element.classList.add('input-error'); // Optional: Add a class for error styling on the input
}

// Function to clear error message for a specific input
function clearError(element, errorDiv) {
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
    element.classList.remove('input-error'); // Optional: Remove error styling
}

// Event listener for form submission
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Clear previous error messages
    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(messageInput, messageError);
    formMessage.style.display = 'none';
    formMessage.classList.remove('success', 'error');

    // Validate Name
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required.', nameError);
        isValid = false;
    }

    // Validate Email
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required.', emailError);
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.', emailError);
        isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required.', messageError);
        isValid = false;
    }

    if (isValid) {
        // If all validations pass, attempt to send the email using EmailJS
        formMessage.textContent = 'Sending message...';
        formMessage.style.display = 'block';
        formMessage.classList.add('success'); // Use success class for "sending" state

        emailjs.sendForm('service_obkl1vs', 't6C7pRhnJIjz9v0PY', this)
            .then(() => {
                formMessage.textContent = 'Message Sent!';
                formMessage.classList.remove('error');
                formMessage.classList.add('success');
                contactForm.reset(); // Clear the form fields after successful submission
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                formMessage.textContent = 'Failed to send message. Please try again later.';
                formMessage.classList.remove('success');
                formMessage.classList.add('error');
            });

    } else {
        // If validation fails, show a general error message
        formMessage.textContent = 'Please correct the errors in the form.';
        formMessage.style.display = 'block';
        formMessage.classList.add('error');
    }
});
