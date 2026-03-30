window.onload = function() {
    updateDetailsPage();
};

function updateDetailsPage() {
    const library = JSON.parse(localStorage.getItem('libraryStatus'));
    const book = library.find(b => b.id === 'cpp'); 
    
    const statusTag = document.querySelector('p b');
    const form = document.querySelector('form');
    const button = form.querySelector('button');

    // Update the Status Text and Color
    statusTag.innerText = book.status;
    statusTag.style.color = (book.status === 'Available') ? 'green' : 'red';

    // Change Button Text and Action based on Status
    if (book.status === 'Borrowed') {
        button.innerText = "Return Book";
        button.style.backgroundColor = "orange";
        
        // Change what happens when clicked (Return logic)
        form.onsubmit = function(e) {
            e.preventDefault();
            returnThisBook('cpp', library);
        };
    } else {
        button.innerText = "Borrow This Book";
        
        // Change what happens when clicked (Borrow logic)
        form.onsubmit = function(e) {
            e.preventDefault();
            borrowThisBook('cpp', library);
        };
    }
}

function borrowThisBook(id, library) {
    const updated = library.map(b => b.id === id ? {...b, status: 'Borrowed'} : b);
    localStorage.setItem('libraryStatus', JSON.stringify(updated));
    alert("Book Borrowed!");
    window.location.href = "borrowed-books.html";
}

function returnThisBook(id, library) {
    const updated = library.map(b => b.id === id ? {...b, status: 'Available'} : b);
    localStorage.setItem('libraryStatus', JSON.stringify(updated));
    alert("Book Returned!");
    location.reload();
}