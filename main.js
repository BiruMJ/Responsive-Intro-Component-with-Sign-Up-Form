document.getElementById("signUpForm").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();
    let isValid = true;
    
    const fields = [
        {id: 'firstName', message: 'First Name cannot be empty'},
        {id: 'lastName', message: 'Last Name cannot be empty'},
        {id: 'email', message: 'Looks like this is not an email'},
        {id: 'password', message: 'Password Name cannot be empty'},
    ]
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorSpan = document.getElementById(field.id + "Error");
        const errorIcon = document.getElementById(field.id + "Error-Icon");

        if (input.value.trim() === "") {
            input.classList.add("invalid");
            errorSpan.textContent = field.message;
            errorSpan.style.display = "block";  //Show error
            if (errorIcon) errorIcon.style.display = "block";
            isValid = false;
        } else {
            input.classList.remove("invalid");
            errorSpan.style.display = "none";
            if (errorIcon) errorIcon.style.display = "none";
        }
    });
    if (isValid) {
        // If all fields are valid, you can proceed with form submission
        alert("Form submitted successfully!");
        document.getElementById("signUpForm").reset();
    }
});