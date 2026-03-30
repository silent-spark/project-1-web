window.onload = function() {
    // Show books as soon as the page opens
    displayBorrowedBooks();
};

function displayBorrowedBooks() {
    // 1. Get books from LocalStorage (the browser's memory)
    const library = JSON.parse(localStorage.getItem('libraryStatus')) || [];

    // 2. Find the table body in HTML
    const tableBody = document.querySelector("table tbody");

    // 3. Clear the table before adding new rows
    tableBody.innerHTML = "";

    // 4. Find only the books with "Borrowed" status
    const borrowedBooks = library.filter(book => book.status === 'Borrowed');

    // 5. Show a message if no books are borrowed
    if (borrowedBooks.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='5' style='text-align:center;'>No books borrowed yet.</td></tr>";
        return;
    }

    // 6. Create a new row for each borrowed book
    borrowedBooks.forEach(book => {
        const row = document.createElement("tr");

        // Put book info and a "Return" button inside the row
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>2026-03-30</td>
            <td>2026-04-13</td>
            <td><button type="button" onclick="returnFromTable('${book.id}')">Return Book</button></td>
        `;

        // Add the row to the table
        tableBody.appendChild(row);
    });
}

// Logic to return a book back to the library
function returnFromTable(id) {
    const library = JSON.parse(localStorage.getItem('libraryStatus'));

    // Ask the user: Are you sure?
    if (confirm("Are you sure you want to return this book?")) {

        // Change book status to "Available"
        const updated = library.map(b => b.id === id ? {...b, status: 'Available'} : b);

        // Save the new list back to LocalStorage
        localStorage.setItem('libraryStatus', JSON.stringify(updated));

        alert("Book Returned!");

        // Refresh the table to hide the returned book
        displayBorrowedBooks();
    }
}
