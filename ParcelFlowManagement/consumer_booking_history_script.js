document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');
    const usernameSpan = document.getElementById('username');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const tableBody = document.querySelector('#booking-history-table tbody');
    
    let currentPage = 1;
    const itemsPerPage = 10;
    
    // Simulate setting the username dynamically
    usernameSpan.textContent = 'John Doe'; // Replace with actual username from login session
    
    // Function to fetch booking data
    const fetchBookingData = async (page) => {
        // Simulate fetching data
        // In practice, make an API call to fetch data
        const data = Array.from({ length: 50 }, (_, i) => ({
            customerId: 'C' + (i + 1),
            bookingId: 'B' + (i + 1),
            bookingDate: `2024-09-${(i % 30) + 1}`,
            receiverName: 'Name ' + (i + 1),
            deliveredAddress: 'Address ' + (i + 1),
            amount: `$${(i + 1) * 10}`,
            status: i % 2 === 0 ? 'Delivered' : 'In Transit'
        }));
        
        const start = (page - 1) * itemsPerPage;
        const end = page * itemsPerPage;
        const pageData = data.slice(start, end);

        return pageData;
    };

    const renderTable = async (page) => {
        const bookings = await fetchBookingData(page);

        tableBody.innerHTML = bookings.map(booking => `
            <tr>
                <td>${booking.customerId}</td>
                <td>${booking.bookingId}</td>
                <td>${booking.bookingDate}</td>
                <td>${booking.receiverName}</td>
                <td>${booking.deliveredAddress}</td>
                <td>${booking.amount}</td>
                <td>${booking.status}</td>
            </tr>
        `).join('');
    };

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable(currentPage);
        }
    });

    nextButton.addEventListener('click', () => {
        currentPage++;
        renderTable(currentPage);
    });

    logoutButton.addEventListener('click', () => {
        // Perform logout operations
        alert('You have been logged out.');

        // Redirect to login page
        window.location.href = 'login.html'; // Adjust path as needed
    });

    // Initial load
    renderTable(currentPage);
});
