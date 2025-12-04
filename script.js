let type = new Typed('#changing-text', {
    strings : ['Data Engineer', 'Software Engineer', 'Software Developer'],
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
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active');
        }else{
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);
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

(function() {
    emailjs.init({
        publicKey: 't6C7pRhnJIjz9v0PY',
    });
})();

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(element, message, errorDiv) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    element.classList.add('input-error');
}

function clearError(element, errorDiv) {
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
    element.classList.remove('input-error');
}

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(messageInput, messageError);
    formMessage.style.display = 'none';
    formMessage.classList.remove('success', 'error');

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required.', nameError);
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required.', emailError);
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.', emailError);
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required.', messageError);
        isValid = false;
    }

    if (isValid) {
        formMessage.textContent = 'Sending message...';
        formMessage.style.display = 'block';
        formMessage.classList.add('success');

        emailjs.sendForm('service_obkl1vs', 't6C7pRhnJIjz9v0PY', this)
            .then(() => {
                formMessage.textContent = 'Message Sent!';
                formMessage.classList.remove('error');
                formMessage.classList.add('success');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                formMessage.textContent = 'Failed to send message. Please try again later.';
                formMessage.classList.remove('success');
                formMessage.classList.add('error');
            });

    } else {
        formMessage.textContent = 'Please correct the errors in the form.';
        formMessage.style.display = 'block';
        formMessage.classList.add('error');
    }
});
