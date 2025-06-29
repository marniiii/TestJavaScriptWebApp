// Consts grabbed from site.html
const table = document.getElementById('userTableBody');
const filter = document.getElementById('filter');
const filterType = document.getElementById('filterType');


// Function to call the API, check the response, and populate the table
async function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json(); // parses the JSON body
        })
        .then(data => {
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.company.name}</td>
                `;
                table.append(row);
            });
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    }

// Debounce function to slow down the processing of user input
function debounce(func, timeout) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}


// Function to filter the data based on your input
function filterTable(){
    if (filter.value === '') {
        resetTable();
        return;
    }
    const filterValue = filter.value.toLowerCase();
    const rows = table.querySelectorAll('tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if(filterType.value === 'Name') {
            // Filter by name
            if (!cells[0].textContent.toLowerCase().startsWith(filterValue)) {
                row.style.display = "none";
            }
        }
        else if (filterType.value === 'Email') {
            // Filter by email
            if (!cells[1].textContent.toLowerCase().startsWith(filterValue)) {
                row.style.display = "none";
            }
        }
        else if (filterType.value === 'Company') {
            // Filter by company
            if (!cells[2].textContent.toLowerCase().startsWith(filterValue)) {
                row.style.display = "none";
            }
        }
        else{
            let match = false;
            cells.forEach(cell => {
            if (cell.textContent.toLowerCase().startsWith(filterValue)) {
                match = true;
                cell.style.color = "red"; // Highlight the cell
            }
        })
            match ? row.style.display = "table-row" : row.style.display = "none";

        }
    });
}

// Set everything in the table back to shown
function resetTable() {
    table.querySelectorAll('td').forEach(cell => {
        cell.style.visibility = "visible";
        cell.style.color = "black"; // Reset cell color
    });
    table.querySelectorAll('tr').forEach(row => {
        row.style.display = "table-row";
    });
}

// ***************** EVENT LISTENERS *****************

// Every time the page loads, call getUsers 
window.addEventListener('load', () => {
    getUsers(); // Automatically load data when the page loads
});


// Anytime the user is typing, search the table
// debounce by 0 to avoid searching an empty table
filter.addEventListener('input', debounce(filterTable, 0));


// Anytime the filter type is changed, reset the table and filter by NEW filter
filterType.addEventListener('change', () => {
    resetTable();
    filterTable();
});