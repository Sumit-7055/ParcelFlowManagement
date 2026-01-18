document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('parcel-form');
    const serviceCostElement = document.getElementById('service-cost');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Collect form data and process the submission
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Simulate service cost calculation
        const cost = calculateCost(data);
        serviceCostElement.textContent = `Estimated Cost: $${cost.toFixed(2)}`;

        // Proceed with form submission (e.g., send data to the server)
        // For example:
        // fetch('your-server-endpoint', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));
        
        alert('Form submitted successfully!');
    });

    function calculateCost(data) {
        // Example cost calculation (you can replace with real logic)
        let cost = 10.00; // Base cost
        if (data['delivery-speed'] === 'express') cost += 20.00;
        if (data['delivery-speed'] === 'overnight') cost += 30.00;
        if (data['packaging'] === 'custom') cost += 5.00;
        if (data['packaging'] === 'eco-friendly') cost += 3.00;
        if (data['insurance'] === 'yes') cost += 15.00;
        return cost;
    }
});
