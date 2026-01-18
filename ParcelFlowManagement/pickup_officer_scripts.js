document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const pickupDetailsFieldset = document.getElementById('pickup-details');
    const bookingIdInput = document.getElementById('booking-id');
    const form = document.getElementById('pickup-form');

    searchButton.addEventListener('click', () => {
        const bookingId = bookingIdInput.value.trim();

        if (bookingId.length === 12) { // Assuming Booking ID is 12 digits long
            // Simulate an API call to check if Booking ID is valid
            const bookingExists = true; // Replace with actual API call

            if (bookingExists) {
                pickupDetailsFieldset.style.display = 'block';
            } else {
                alert('Invalid Booking ID. Please try again.');
                pickupDetailsFieldset.style.display = 'none';
            }
        } else {
            alert('Please enter a valid 12-digit Booking ID.');
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const pickupDate = document.getElementById('pickup-date').value;
        const pickupTime = document.getElementById('pickup-time').value;

        if (pickupDate && pickupTime) {
            // Simulate form submission
            alert(`Pickup scheduled for ${pickupDate} at ${pickupTime}.`);

            // Here you would typically send the data to the server
        } else {
            alert('Please enter both date and time.');
        }
    });
});
