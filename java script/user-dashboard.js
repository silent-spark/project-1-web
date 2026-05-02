window.onload = function() {
  const defaultLibrary = [
      {
          id: 'cpp',
          title: 'C++ How to Program',
          author: 'Deitel & Deitel',
          status: 'Available',
          category: ['programming', 'coding']
      },
      {
          id: 'clean',
          title: 'Clean Code',
          author: 'Robert C. Martin',
          status: 'Available',
          category: ['coding']
      },
      {
          id: 'alg',
          title: 'Introduction to Algorithms',
          author: 'CLRS',
          status: 'Available',
          category: ['technology', 'programming']
      }
  ];

    if (!localStorage.getItem('libraryStatus')) {
        localStorage.setItem('libraryStatus', JSON.stringify(defaultLibrary));
    }

    const currentLibrary = JSON.parse(localStorage.getItem('libraryStatus'));
    const rows = document.querySelectorAll("table tr");

    const params = new URLSearchParams(window.location.search);
        const q = params.get('searchQuery') ? params.get('searchQuery').toLowerCase() : "";
        const cat = params.get('category') ? params.get('category').toLowerCase() : "";


        for (let i = 1; i < rows.length; i++) {
            const title = rows[i].cells[0].innerText.toLowerCase();
            const author = rows[i].cells[1].innerText.toLowerCase();

            const bookId = i === 1 ? 'cpp' : i === 2 ? 'clean' : 'alg';
            const bookData = currentLibrary.find(b => b.id === bookId);

            if (bookData) {

                updateRowStatus(rows[i], bookData.status);

                
                const isSearchEmpty = (q === "" && cat === "");
                const matchesQuery = title.includes(q) || author.includes(q);
                const matchesCat = (cat === "" || (bookData && bookData.category.includes(cat)));

                if (isSearchEmpty || (matchesQuery && matchesCat)) {
                    rows[i].style.display = "";
                } else {
                    rows[i].style.display = "none";
                }
            }
        }
    };
function updateRowStatus(row, status) {
    const statusCell = row.cells[2].querySelector('b');
    statusCell.innerText = status;
    statusCell.style.color = (status === 'Available') ? 'green' : 'red';
}
