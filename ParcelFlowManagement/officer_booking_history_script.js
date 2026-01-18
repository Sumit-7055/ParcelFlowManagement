document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');
    const usernameSpan = document.getElementById('username');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const tableBody = document.querySelector('#booking-history-table tbody');
    const searchForm = document.getElementById('search-form');
    
    let currentPage = 1;
    const itemsPerPage = 10;

    // Simulate setting the username dynamically
    usernameSpan.textContent = 'Officer Name'; // Replace with actual username from login session

    const fetchBookingData = async (customerId, startDate, endDate, page) => {
        // Simulate fetching data based on search parameters
        // In practice, make an API call to fetch data
        const data = Array.from({ length: 50 }, (_, i) => ({
            customerId: 'C' + (i + 1),
            bookingId: 'B' + (i + 1),
            bookingDate: `2024-09-${(i % 30) + 1}`,
            receiverName: 'Name ' + (i + 1),
            deliveredAddress: 'Address ' + (i + 1),
            amount: `$${(i + 1) * 10}`,
            status: i % 2 === 0 ? 'Delivered' : 'In Transit'
        })).filter(item => {
            return (customerId === '' || item.customerId === customerId) &&
                   (startDate === '' || new Date(item.bookingDate) >= new Date(startDate)) &&
                   (endDate === '' || new Date(item.bookingDate) <= new Date(endDate));
        });

        const start = (page - 1) * itemsPerPage;
        const end = page * itemsPerPage;
        const pageData = data.slice(start, end);

        return pageData;
    };

    const renderTable = async (customerId, startDate, endDate, page) => {
        const bookings = await fetchBookingData(customerId, startDate, endDate, page);

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

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const customerId = document.getElementById('customer-id').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        currentPage = 1; // Reset to first page on new search
        await renderTable(customerId, startDate, endDate, currentPage);
    });

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            const customerId = document.getElementById('customer-id').value;
            const startDate = document.getElementById('start-date').value;
            const endDate = document.getElementById('end-date').value;
            renderTable(customerId, startDate, endDate, currentPage);
        }
    });

    nextButton.addEventListener('click', async () => {
        const customerId = document.getElementById('customer-id').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        currentPage++;
        await renderTable(customerId, startDate, endDate, currentPage);
    });

    logoutButton.addEventListener('click', () => {
        // Perform logout operations
        alert('You have been logged out.');

        // Redirect to login page
        window.location.href = 'login.html'; // Adjust path as needed
    });
});
