function handleSubmit(event) {
    event.preventDefault();
    const input = document.querySelector(".searchForm-input").value;
    const searchQuery = input.trim();
    fetchResults(searchQuery);
}

function fetchResults(searchQuery) {
    const url = `${baseUrl}/search?q=${searchQuery}`;
    fetch(url, { method: 'GET', headers })
        .then(response => response.json())
        .then(data => {
            const results = data.data;
            displayResults(results);
        })
        .catch((e) => console.log("An error occurred", e));
}

function displayResults(results) {
    const searchResults = document.querySelector(".searchResults");
    searchResults.innerHTML = "";
    results.forEach(result => {
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

const form = document.querySelector(".searchForm");
form.addEventListener("submit", handleSubmit);
