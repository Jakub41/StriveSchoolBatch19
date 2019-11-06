// Handle the form submit
function handleSubmit(event) {
    event.preventDefault();
    // Value from the input
    const input = document.querySelector(".searchForm-input").value;
    // trim it
    const searchQuery = input.trim();
    // Call for the result
    fetchResults(searchQuery);
}

// Results of the query
function fetchResults(searchQuery) {
    // Add to base url the query
    const url = `${baseUrl}/search?q=${searchQuery}`;
    // Fetch it and data in response
    fetch(url, { method: 'GET', headers })
        .then(response => response.json())
        .then(data => {
            const results = data.data;
            displayResults(results);
        })
        // Errors
        .catch((e) => console.log("An error occurred", e));
}

// Display the results
function displayResults(results) {
    // Search result section
    const searchResults = document.querySelector(".searchResults");
    searchResults.innerHTML = "";
    // Looping into the searches
    results.forEach(result => {
        // Search results to the DOM
        searchResults.insertAdjacentHTML(
            "beforeend",
            `<div class="resultItem">
                <h3 class="resultItem-title">${result.title}</h3>
                <span class="resultItem-snippet">${result.album.title}</span><br>
                <a href="${result.link}" class="resultItem-link" target="_blank" rel="noopener">${result.link}</a>
            </div>`
        );
    });
}

// Form on submit event start the process
const form = document.querySelector(".searchForm");
form.addEventListener("submit", handleSubmit);
