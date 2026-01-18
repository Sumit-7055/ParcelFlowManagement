document.addEventListener('DOMContentLoaded', function() {
    // Define the navigation actions
    document.getElementById('home').addEventListener('click', function(event) {
        event.preventDefault();
        location.reload(); // Refresh or redirect to the same page
    });

    document.getElementById('booking-service').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'booking.html'; // Redirect to Booking Service page
    });

    document.getElementById('tracking').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'tracking.html'; // Redirect to Tracking page
    });

    document.getElementById('previous-booking').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'previous-booking.html'; // Redirect to Previous Booking page
    });

    document.getElementById('contact-support').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'support.html'; // Redirect to Support page
    });

    document.getElementById('logout').addEventListener('click', function(event) {
        event.preventDefault();
        // Clear user session details (example: clear localStorage or cookies)
        localStorage.removeItem('userSession'); // Replace with actual session clearing logic

        // Redirect to login page
        window.location.href = 'login.html';
    });
});
