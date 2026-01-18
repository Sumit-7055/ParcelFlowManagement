document.addEventListener('DOMContentLoaded', () => {
    const payNowButton = document.getElementById('pay-now');
    const backToHomeButton = document.getElementById('back-to-home');
    const makePaymentButton = document.getElementById('make-payment');
    const creditCardForm = document.getElementById('credit-card-form');
    const paymentContainer = document.querySelector('.payment-container');
    const logoutButton = document.getElementById('logout');

    // Show credit card form when Pay Now button is clicked
    payNowButton.addEventListener('click', () => {
        const paymentMode = document.querySelector('input[name="payment-mode"]:checked').value;
        if (paymentMode) {
            paymentContainer.classList.add('hidden');
            creditCardForm.classList.remove('hidden');
        } else {
            alert('Please select a payment mode.');
        }
    });

    // Redirect to booking service page
    backToHomeButton.addEventListener('click', () => {
        window.location.href = 'booking-service-page.html'; // Redirect to booking service page
    });

    // Handle make payment
    makePaymentButton.addEventListener('click', () => {
        // Validate card details (basic example)
        const cardNo = document.getElementById('card-no').value;
        const cardHolderName = document.getElementById('card-holder-name').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;

        if (cardNo.length === 16 && cardHolderName && expiryDate && cvv.length === 3) {
            alert('Payment Successful! Redirecting to invoice page...');
            window.location.href = 'invoice-page.html'; // Redirect to invoice page
        } else {
            alert('Please fill in all required fields correctly.');
        }
    });

    // Handle logout
    logoutButton.addEventListener('click', () => {
        // Clear user session and redirect to login page
        alert('You have been logged out.');
        window.location.href = 'login-page.html'; // Redirect to login page
    });
});
