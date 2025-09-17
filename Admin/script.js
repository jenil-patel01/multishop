document.addEventListener('DOMContentLoaded', function() {

    // --- LOGIC FOR LOGIN PAGE (Admin_Login.html) ---
    const loginButton = document.getElementById('LoginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            const adminName = document.getElementById('AdminNameTextBox').value;
            const adminPass = document.getElementById('AdminPassTextBox').value;
            const loginAlert = document.getElementById('loginAlert');

            // Simulated Login: In a real application, you would send this to a server.
            // Using "admin" and "password" for demonstration.
            if (adminName === 'admin' && adminPass === '123') {
                // Store a "logged in" state in the browser's session storage
                sessionStorage.setItem('isAdminLoggedIn', 'true');
                // Redirect to the default dashboard page (orders)
                window.location.href = 'dashboard.html';
            } else {
                loginAlert.textContent = 'Invalid username or password.';
                loginAlert.style.display = 'block';
            }
        });
    }

    // --- LOGIC FOR ADMIN PAGES (orders.html, products.html) ---
    const adminPanel = document.getElementById('admin-panel');
    if (adminPanel) {
        // Check if the user is logged in. If not, redirect to the login page.
        // This protects all admin pages.
        if (sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
            window.location.href = 'Admin_Login.html';
        }
    }
});

// --- GENERAL FUNCTIONS ---

// Logs the user out by clearing session storage and redirecting to the login page
function logout() {
    sessionStorage.removeItem('isAdminLoggedIn');
    window.location.href = 'Admin_Login.html';
}

// Opens the "Add Product" popup (used on products.html)
function openPopup() {
    document.getElementById('addProductPopup').style.display = 'block';
}

// Closes the "Add Product" popup (used on products.html)
function closePopup() {
    document.getElementById('addProductPopup').style.display = 'none';
}