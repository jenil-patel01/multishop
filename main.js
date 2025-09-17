// Billing Form Validation
document.addEventListener('DOMContentLoaded', function() {
    // Select the form and the place order button
    const billingForm = document.getElementById('billingForm');
    
    if (billingForm) {
        billingForm.addEventListener('submit', function(event) {
            // Prevent the form from submitting by default
            event.preventDefault();

            // Perform validation
            let isFormValid = validateBillingForm();

            if (isFormValid) {
                // If the form is valid, you can submit it or show a success message
                // For this example, we'll just log a message and alert the user.
                console.log('Form is valid and ready to be submitted.');
                alert('Your order has been placed!');
                // To actually submit the form, you would use:
                // billingForm.submit(); 
            } else {
                console.log('Form has validation errors.');
            }
        });
    }

    function validateBillingForm() {
        let isValid = true;
        // List of all fields to validate by their ID
        const fieldsToValidate = ['firstName', 'lastName', 'email', 'mobileNo', 'address1', 'country', 'city', 'state', 'zip'];

        // Loop through each field
        fieldsToValidate.forEach(fieldId => {
            const input = document.getElementById(fieldId);
            // Reset styles by removing 'is-invalid' class
            input.classList.remove('is-invalid');

            // 1. Check for emptiness
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('is-invalid');
            }
            // 2. Specific check for email format
            else if (fieldId === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value.trim())) {
                    isValid = false;
                    input.classList.add('is-invalid');
                }
            }
             // 3. Specific check for mobile number (simple numeric check)
             else if (fieldId === 'mobileNo') {
                const mobileRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
                if (!mobileRegex.test(input.value.trim())) {
                    isValid = false;
                    input.classList.add('is-invalid');
                }
            }
        });

        return isValid;
    }
});