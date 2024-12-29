function switchToLogin() {
    window.location.href = "_login.html";
}

function switchToRegister() {
    window.location.href = "main/register.html";
}

function validateForm(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email.';
    } else {
        emailError.textContent = 'Form submitted successfully!';
    }
}