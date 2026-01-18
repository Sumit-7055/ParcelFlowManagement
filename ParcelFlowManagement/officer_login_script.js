document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const userIdInput = document.getElementById('user-id');
    const passwordInput = document.getElementById('password');
    const userIdError = document.getElementById('user-id-error');
    const passwordError = document.getElementById('password-error');
    const loginError = document.getElementById('login-error');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Clear previous error messages
        userIdError.textContent = '';
        passwordError.textContent = '';
        loginError.textContent = '';

        const userId = userIdInput.value.trim();
        const password = passwordInput.value.trim();

        let isValid = true;

        // Validate User ID
        if (userId.length < 5 || userId.length > 20) {
            userIdError.textContent = 'User ID must be between 5 and 20 characters.';
            isValid = false;
        }

        // Validate Password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,30}$/;
        if (!passwordRegex.test(password)) {
            passwordError.textContent = 'Password must be between 6 and 30 characters, including at least one uppercase letter, one lowercase letter, and one special character.';
            isValid = false;
        }

        // If validation passes, simulate login
        if (isValid) {
            simulateLogin(userId, password)
                .then(success => {
                    if (success) {
                        window.location.href = 'officer-dashboard.html'; // Redirect to officer dashboard
                    } else {
                        loginError.textContent = 'Invalid User ID or Password.';
                    }
                })
                .catch(error => {
                    loginError.textContent = 'An error occurred. Please try again.';
                    console.error('Error:', error);
                });
        }
    });

    // Simulate a login request (replace with actual API call)
    function simulateLogin(userId, password) {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Mock success (Replace with actual login check)
                const mockUserId = 'officer123';
                const mockPassword = 'Password1!';
                resolve(userId === mockUserId && password === mockPassword);
            }, 1000);
        });
    }
});
