document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const trackingStatus = document.getElementById('tracking-status');
    const statusElement = document.getElementById('status');
    const locationElement = document.getElementById('location');
    const estimatedDeliveryElement = document.getElementById('estimated-delivery');
    const bookingIdInput = document.getElementById('booking-id');
    const logoutButton = document.getElementById('logout');

    // Handle search button click
    searchButton.addEventListener('click', () => {
        const bookingId = bookingIdInput.value.trim();

        if (bookingId.length === 12) {
            // Simulate fetching tracking information (Replace this with actual API call)
            fetchTrackingInfo(bookingId)
                .then(trackingInfo => {
                    // Update UI with tracking information
                    statusElement.textContent = trackingInfo.status;
                    locationElement.textContent = trackingInfo.currentLocation;
                    estimatedDeliveryElement.textContent = trackingInfo.estimatedDelivery;

                    trackingStatus.classList.remove('hidden');
                })
                .catch(error => {
                    alert('Error fetching tracking information. Please try again.');
                    console.error('Error:', error);
                });
        } else {
            alert('Please enter a valid 12-digit Booking ID.');
        }
    });

    // Simulate fetching tracking information
    function fetchTrackingInfo(bookingId) {
        // Replace with actual API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Mock tracking information
                resolve({
                    status: 'In Transit',
                    currentLocation: 'Springfield Hub',
                    estimatedDelivery: '2024-09-10'
                });
            }, 1000);
        });
    }

    // Handle logout
    logoutButton.addEventListener('click', () => {
        // Clear user session and redirect to login page
        alert('You have been logged out.');
        window.location.href = 'login-page.html'; // Redirect to login page
    });
});
