document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const loginError = document.getElementById('login-error');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Clear previous error messages
        usernameError.textContent = '';
        passwordError.textContent = '';
        loginError.textContent = '';

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        let isValid = true;

        // Validate username
        if (username.length < 5 || username.length > 20) {
            usernameError.textContent = 'Username must be between 5 and 20 characters.';
            isValid = false;
        }

        // Validate password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,30}$/;
        if (!passwordRegex.test(password)) {
            passwordError.textContent = 'Password must be between 6 and 30 characters, including at least one uppercase letter, one lowercase letter, and one special character.';
            isValid = false;
        }

        // If validation passes, simulate login
        if (isValid) {
            simulateLogin(username, password)
                .then(success => {
                    if (success) {
                        window.location.href = 'dashboard.html'; // Redirect to dashboard page
                    } else {
                        loginError.textContent = 'Invalid username or password.';
                    }
                })
                .catch(error => {
                    loginError.textContent = 'An error occurred. Please try again.';
                    console.error('Error:', error);
                });
        }
    });

    // Simulate a login request (replace this with an actual API call)
    function simulateLogin(username, password) {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Mock success (Replace with actual login check)
                const mockUsername = 'customer';
                const mockPassword = 'Password1!';
                resolve(username === mockUsername && password === mockPassword);
            }, 1000);
        });
    }
});
