// Global constants
const products = [];
// Load on document load
window.onload = event => {
    console.log("page loaded...");
    // API base URL
    const url = "https://api.myjson.com/bins/18fh4d";
    // Fetch the API
    fetch(url, { method: "GET" })
        // We get response in JSON OBJ
        .then(response => response.json())
        // We get the data and use it
        .then(product => {
            // We call the method passing the data
            showALlProducts(product);
        });
};

// we show all products
const showALlProducts = listOfProducts => {
    console.log(listOfProducts);
    // Selecting the row where to append the card
    let row = document.querySelector("#all-products");
    // Defining an output to the DOM as starting point empty
    let out;
    listOfProducts.forEach(product => {
        console.log(product);
        out += `<div class="col-sm-6 col-md-4">Hello</div>`;
        // out += `<div class="card mb-3">`;
        // out += `<img src="${product.img}" class="card-img-top" alt="${product.asin}">`;
        // out += `<div class="card-body">`;
        // out += `<div class="card-body">`;
        // out += `<h5 class="card-title">${product.title}</h5>`;
        // out += `<p class="card-text">${product.price}$</p>`;
        // out += `</div>`;
        // out += `</div>`;
        // out += `</div>`;
        // out += `</div>`;
    });

    // Attach card to dom row
    row.append(out);
};


