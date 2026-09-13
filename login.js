const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    // Get registered user
    const savedUser = localStorage.getItem("empowerUser");

    // Check whether account exists
    if (!savedUser) {

        loginMessage.textContent =
            "No account found. Please create an account first.";

        loginMessage.style.color = "#a64b42";

        return;
    }

    // Convert saved data into an object
    const user = JSON.parse(savedUser);

    // Check login details
    if (
        email === user.email &&
        password === user.password
    ) {

        // Save login status
        localStorage.setItem("isLoggedIn", "true");

        // Save current user
        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );

        loginMessage.textContent =
            "Login successful! Opening dashboard...";

        loginMessage.style.color = "#52765f";

        // Redirect to dashboard
        setTimeout(function () {

            window.location.href = "dashboard.html";

        }, 1000);

    } else {

        loginMessage.textContent =
            "Incorrect email or password.";

        loginMessage.style.color = "#a64b42";
    }

});