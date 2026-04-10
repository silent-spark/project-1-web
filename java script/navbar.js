function renderNavbar() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    let links = `<a href="index.html">Home</a>`;

  
    if (!currentUser) {
        links += `
            | <a href="login.html">Login</a>
            | <a href="signup.html">Sign Up</a>
        `;
    }

    else if (currentUser.role === "admin") {
        links += `
            | <a href="admin-dashboard.html">Dashboard</a>
            | <a href="view-books-admin.html">View Books</a>
            | <a href="add-book.html">Add Book</a>
            | <a href="#" id="logoutBtn">Logout</a>
        `;
    }

  
    else {
        links += `
            | <a href="view-books-user.html">View Books</a>
            | <a href="search.html">Search</a>
            | <a href="borrowed-books.html">Borrowed Books</a>
            | <a href="#" id="logoutBtn">Logout</a>
        `;
    }

    navbar.innerHTML = links;

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.removeItem("currentUser");
            window.location.href = "index.html";
        });
    }
}

renderNavbar();
