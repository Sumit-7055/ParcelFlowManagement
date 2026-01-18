document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple client-side password match check
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Simulate username generation
    const generatedUsername = 'user' + Math.floor(Math.random() * 1000);

    // Show acknowledgement
    document.getElementById('generatedUsername').textContent = generatedUsername;
    document.getElementById('displayName').textContent = document.getElementById('customerName').value;
    document.getElementById('displayEmail').textContent = document.getElementById('email').value;
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('acknowledgement').style.display = 'block';
});
