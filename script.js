document.addEventListener('DOMContentLoaded', function() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const usernameError = document.getElementById('usernameError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  const registerButton = document.getElementById('registerButton');
  const successMessage = document.getElementById('successMessage');

  usernameInput.addEventListener('input', validate);
  passwordInput.addEventListener('input', validate);
  confirmPasswordInput.addEventListener('input', validate);

  function validate() {
    usernameError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    if (usernameInput.validity.valueMissing) {
      usernameError.textContent = 'Username is required';
    }

    if (passwordInput.validity.valueMissing) {
      passwordError.textContent = 'Password is required';
    }

    if (confirmPasswordInput.validity.valueMissing) {
      confirmPasswordError.textContent = 'Confirm Password is required';
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordError.textContent = 'Passwords do not match';
    }

    registerButton.disabled =
      usernameInput.validity.valueMissing ||
      passwordInput.validity.valueMissing ||
      confirmPasswordInput.validity.valueMissing ||
      passwordInput.value !== confirmPasswordInput.value;
  }

  document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    successMessage.style.display = 'block';
  });
});
