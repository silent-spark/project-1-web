const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    loginMessage.textContent = "";
    loginMessage.style.color = "red";

    if (!email || !password) {
        loginMessage.textContent = "Please fill in all fields.";
        return;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        loginMessage.textContent = "Invalid email format.";
        return;
    }

    
    let users = JSON.parse(localStorage.getItem("users")) || [];

    //
    const foundUser = users.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (!foundUser) {
        loginMessage.textContent = "Incorrect email or password.";
        return;
    }

   
    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    loginMessage.style.color = "green";
    loginMessage.textContent = "Login successful! Redirecting...";


    setTimeout(function () {
        if (foundUser.role === "admin") {
            window.location.href = "admin-dashboard.html";
        } else {
            window.location.href = "user-dashboard.html";
        }
    }, 1200);
});
