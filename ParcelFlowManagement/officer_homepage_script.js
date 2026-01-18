document.addEventListener('DOMContentLoaded', () => {
    const officerName = 'John Doe'; // Replace this with the actual officer's name
    document.getElementById('officer-name').textContent = officerName;

    const homeLink = document.getElementById('home-link');
    const trackingLink = document.getElementById('tracking-link');
    const deliveryStatusLink = document.getElementById('delivery-status-link');
    const pickupSchedulingLink = document.getElementById('pickup-scheduling-link');
    const previousBookingLink = document.getElementById('previous-booking-link');
    const logoutButton = document.getElementById('logout-button');
    const mainContent = document.getElementById('main-content');

    homeLink.addEventListener('click', () => {
        mainContent.innerHTML = '<h2>Home Page</h2><p>Welcome to the Officer Home Page.</p>';
    });

    trackingLink.addEventListener('click', () => {
        mainContent.innerHTML = '<h2>Tracking Page</h2><p>Here you can track packages.</p>';
    });

    deliveryStatusLink.addEventListener('click', () => {
        mainContent.innerHTML = '<h2>Delivery Status Page</h2><p>View the status of deliveries.</p>';
    });

    pickupSchedulingLink.addEventListener('click', () => {
        mainContent.innerHTML = '<h2>Pickup Scheduling Page</h2><p>Schedule pickups for packages.</p>';
    });

    previousBookingLink.addEventListener('click', () => {
        mainContent.innerHTML = '<h2>Previous Booking Page</h2><p>Review previous bookings.</p>';
    });

    logoutButton.addEventListener('click', () => {
        // Clear session or local storage if needed
        window.location.href = 'login.html'; // Redirect to login page
    });

    // Load home content by default
    homeLink.click();
});
