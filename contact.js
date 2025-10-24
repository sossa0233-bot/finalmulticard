const form = document.getElementById('contactForm');
const successMsg = document.querySelector('[data-testid="test-contact-success"]');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  let valid = true;

  // Clear previous errors
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  // Full Name
  const name = form.name.value.trim();
  if (!name) {
    document.querySelector('[data-testid="test-contact-error-name"]').textContent = "Name is required.";
    valid = false;
  }

  // Email
  const email = form.email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    document.querySelector('[data-testid="test-contact-error-email"]').textContent = "Email is required.";
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.querySelector('[data-testid="test-contact-error-email"]').textContent = "Enter a valid email.";
    valid = false;
  }

  // Subject
  const subject = form.subject.value.trim();
  if (!subject) {
    document.querySelector('[data-testid="test-contact-error-subject"]').textContent = "Subject is required.";
    valid = false;
  }

  // Message
  const message = form.message.value.trim();
  if (!message) {
    document.querySelector('[data-testid="test-contact-error-message"]').textContent = "Message is required.";
    valid = false;
  } else if (message.length < 10) {
    document.querySelector('[data-testid="test-contact-error-message"]').textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  // Show success if valid
  if (valid) {
    successMsg.style.display = 'block';
    form.reset();
  } else {
    successMsg.style.display = 'none';
  }
});
