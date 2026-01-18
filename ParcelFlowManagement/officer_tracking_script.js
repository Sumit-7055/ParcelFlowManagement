document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const packageList = document.getElementById('package-list');
    const searchResults = document.getElementById('search-results');
    const resultsList = document.getElementById('results-list');
    const customerIdInput = document.getElementById('customer-id');
    const logoutButton = document.getElementById('logout');

    // Simulate fetching all shipped packages
    function fetchAllPackages() {
        // Replace this with actual API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: '123456789012', status: 'Delivered', customerId: 'C001' },
                    { id: '123456789011', status: 'In Transit', customerId: 'C002' },
                    // More packages...
                ]);
            }, 1000);
        });
    }

    // Simulate fetching packages by Customer ID
    function fetchPackagesByCustomerId(customerId) {
        // Replace this with actual API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: '123456789012', status: 'Delivered', customerId: customerId },
                    // More packages...
                ]);
            }, 1000);
        });
    }

    // Display all shipped packages
    function displayAllPackages(packages) {
        packageList.innerHTML = '';
        packages.forEach(pkg => {
            const listItem = document.createElement('li');
            listItem.textContent = `Booking ID: ${pkg.id} - Status: ${pkg.status} - Customer ID: ${pkg.customerId}`;
            packageList.appendChild(listItem);
        });
    }

    // Display search results
    function displaySearchResults(packages) {
        resultsList.innerHTML = '';
        packages.forEach(pkg => {
            const listItem = document.createElement('li');
            listItem.textContent = `Booking ID: ${pkg.id} - Status: ${pkg.status}`;
            resultsList.appendChild(listItem);
        });
        searchResults.classList.remove('hidden');
    }

    // Fetch and display all packages on page load
    fetchAllPackages()
        .then(packages => {
            displayAllPackages(packages);
        })
        .catch(error => {
            console.error('Error fetching packages:', error);
        });

    // Handle search button click
    searchButton.addEventListener('click', () => {
        const customerId = customerIdInput.value.trim();

        if (customerId) {
            fetchPackagesByCustomerId(customerId)
                .then(packages => {
                    displaySearchResults(packages);
                })
                .catch(error => {
                    alert('Error fetching packages. Please try again.');
                    console.error('Error:', error);
                });
        } else {
            alert('Please enter a Customer ID.');
        }
    });

    // Handle logout
    logoutButton.addEventListener('click', () => {
        // Clear user session and redirect to login page
        alert('You have been logged out.');
        window.location.href = 'login-page.html'; // Redirect to login page
    });
});
