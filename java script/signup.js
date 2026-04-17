
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
}

const signupForm = document.getElementById("signupForm");
const signupMessage = document.getElementById("signupMessage");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const accountType = document.getElementById("accountType").value;

    signupMessage.textContent = "";
    signupMessage.style.color = "red";

    // Required fields
    if (!fullName || !email || !password || !confirmPassword || !accountType) {
        signupMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        signupMessage.textContent = "Please enter a valid email.";
        return;
    }

    // Password length
    if (password.length < 6) {
        signupMessage.textContent = "Password must be at least 6 characters.";
        return;
    }

    // Confirm password
    if (password !== confirmPassword) {
        signupMessage.textContent = "Passwords do not match.";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users"));

    // Check duplicate email
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        signupMessage.textContent = "Email already exists.";
        return;
    }

    // Create new user
    const newUser = {
        fullName: fullName,
        email: email,
        password: password,
        role: accountType
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    signupMessage.style.color = "green";
    signupMessage.textContent = "Account created successfully! Redirecting...";

    signupForm.reset();

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
});
