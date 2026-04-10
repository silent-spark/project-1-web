
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser || currentUser.role !== "admin") {
    alert("Access denied! Admins only.");
    window.location.href = "login.html";
}

let books = JSON.parse(localStorage.getItem("books"));

if (!books || books.length === 0) {
    books = [
        {
            title: "C++",
            author: "Bjarne Stroustrup",
            category: "Programming",
            available: true
        },
        {
            title: "Clean Code",
            author: "Robert C. Martin",
            category: "Software Engineering",
            available: true
        },
        {
            title: "Introduction to Algorithms",
            author: "Thomas H. Cormen",
            category: "Algorithms",
            available: true
        }
    ];

    localStorage.setItem("books", JSON.stringify(books));
}


function displayBooks() {
    const tableBody = document.querySelector("#booksTable tbody");

    if (!tableBody) return;

    const books = JSON.parse(localStorage.getItem("books")) || [];

    tableBody.innerHTML = "";

    books.forEach((book, index) => {
        const row = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.category}</td>
                <td>${book.available ? "Available" : "Borrowed"}</td>
                <td>
                    <button onclick="deleteBook(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}


function deleteBook(index) {
    let books = JSON.parse(localStorage.getItem("books")) || [];

    books.splice(index, 1);

    localStorage.setItem("books", JSON.stringify(books));

    displayBooks();
}


displayBooks();
