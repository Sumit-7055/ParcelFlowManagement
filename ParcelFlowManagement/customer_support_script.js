document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');
    const usernameSpan = document.getElementById('username');

    // Simulate setting the username dynamically
    usernameSpan.textContent = 'John Doe'; // Replace with actual username from login session

    logoutButton.addEventListener('click', () => {
        // Perform logout operations
        // For example, clear session storage or cookies
        alert('You have been logged out.');

        // Redirect to login page
        window.location.href = 'login.html'; // Adjust path as needed
    });
});
