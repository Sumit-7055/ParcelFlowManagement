document.addEventListener('DOMContentLoaded', () => {
    // Simulate fetching sender information
    const senderInfo = {
        name: 'Jane Smith',
        address: '1234 Elm Street, Springfield',
        contact: '+1-234-567-890'
    };

    // Populate sender information
    document.getElementById('sender-name').value = senderInfo.name;
    document.getElementById('sender-address').value = senderInfo.address;
    document.getElementById('sender-contact').value = senderInfo.contact;

    // Show payment details when a payment method is selected
    const paymentMethodSelect = document.getElementById('payment-method');
    const paymentDetailsDiv = document.getElementById('payment-details');

    paymentMethodSelect.addEventListener('change', () => {
        if (paymentMethodSelect.value === 'credit' || paymentMethodSelect.value === 'debit') {
            paymentDetailsDiv.style.display = 'block';
        } else {
            paymentDetailsDiv.style.display = 'none';
        }
    });

    // Handle form submission
    const form = document.getElementById('booking-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('Booking Data:', data);

        // Simulate form submission
        alert('Booking submitted successfully!');

        // Here you would typically send the data to the server
    });
});
