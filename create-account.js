const registerForm = document.getElementById("registerForm");
const registerMessage = document.getElementById("registerMessage");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const role = document.getElementById("role").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    /* Check password */

    if (password !== confirmPassword) {

        registerMessage.textContent =
            "Passwords do not match.";

        registerMessage.style.color = "#a64b42";

        return;
    }


    /* Check password length */

    if (password.length < 6) {

        registerMessage.textContent =
            "Password must contain at least 6 characters.";

        registerMessage.style.color = "#a64b42";

        return;
    }


    /* Create user object */

    const user = {
        fullName: fullName,
        email: email,
        phone: phone,
        role: role,
        password: password
    };


    /* Save account in browser */

    localStorage.setItem(
        "empowerUser",
        JSON.stringify(user)
    );


    /* Success message */

    registerMessage.textContent =
        "Account created successfully! Redirecting to login...";

    registerMessage.style.color = "#52765f";


    /* Go to login page */

    setTimeout(function () {

        window.location.href = "login.html";

    }, 1500);

});