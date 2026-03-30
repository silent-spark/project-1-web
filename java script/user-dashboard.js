window.onload = function() {

const defaultLibrary = [
    { id: 'cpp', title: 'C++ How to Program', author: 'Deitel & Deitel', status: 'Available' },
    { id: 'clean', title: 'Clean Code', author: 'Robert C. Martin', status: 'Available' },
    { id: 'alg', title: 'Introduction to Algorithms', author: 'CLRS', status: 'Available' }
];

    if (!localStorage.getItem('libraryStatus')) {
        localStorage.setItem('libraryStatus', JSON.stringify(defaultLibrary));
    }

    const currentLibrary = JSON.parse(localStorage.getItem('libraryStatus'));
    const rows = document.querySelectorAll("table tr");

    // Update rows 1, 2, and 3
    if (rows[1]) updateRowStatus(rows[1], currentLibrary.find(b => b.id === 'cpp').status);
    if (rows[2]) updateRowStatus(rows[2], currentLibrary.find(b => b.id === 'clean').status);
    if (rows[3]) updateRowStatus(rows[3], currentLibrary.find(b => b.id === 'alg').status);
};

function updateRowStatus(row, status) {
    const statusCell = row.cells[2].querySelector('b');
    statusCell.innerText = status;
    statusCell.style.color = (status === 'Available') ? 'green' : 'red';
}