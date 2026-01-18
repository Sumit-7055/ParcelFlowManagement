document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const statusUpdateFieldset = document.getElementById('status-update-details');
    const bookingIdInput = document.getElementById('booking-id');
    const currentStatusInput = document.getElementById('current-status');
    const newStatusSelect = document.getElementById('new-status');
    const form = document.getElementById('status-update-form');

    searchButton.addEventListener('click', () => {
        const bookingId = bookingIdInput.value.trim();

        if (bookingId.length === 12) { // Assuming Booking ID is 12 digits long
            // Simulate an API call to check if Booking ID is valid and get current status
            const bookingData = {
                id: bookingId,
                currentStatus: 'In Transit' // Replace with actual API call result
            };

            if (bookingData) {
                currentStatusInput.value = bookingData.currentStatus;
                statusUpdateFieldset.style.display = 'block';
                alert('Booking ID found. You can now update the status.');
            } else {
                alert('Invalid Booking ID. Please try again.');
                statusUpdateFieldset.style.display = 'none';
            }
        } else {
            alert('Please enter a valid 12-digit Booking ID.');
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const newStatus = newStatusSelect.value;

        if (newStatus) {
            // Simulate form submission
            alert(`Status updated to '${newStatus}' successfully.`);
            
            // Here you would typically send the data to the server
            // For example:
            // fetch('/update-status', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ bookingId: bookingIdInput.value, status: newStatus })
            // })
            // .then(response => response.json())
            // .then(data => alert('Status updated successfully!'))
            // .catch(error => alert('Error updating status: ' + error));
        } else {
            alert('Please select a new status.');
        }
    });
});
