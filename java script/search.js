window.onload = function() {
    const searchForm = document.querySelector('form');

    if (searchForm) { // Check if form exists
        searchForm.addEventListener('submit', (event) => {
            const query = document.getElementById('searchQuery').value.trim();
            const category = document.getElementById('category').value;

            if (query === "" && category === "") {
                event.preventDefault();
                alert("Please fill any field!");
                return;
            }

            alert("Searching for: " + (query || "all books"));
        });
    }
};
