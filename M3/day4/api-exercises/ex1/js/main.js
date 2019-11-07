// Global constants
//const products = [];
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
    // Defining an output to the DOM as starting point empty
    let out = ``;
    // We loop into products
    listOfProducts.forEach(product => {
        // We create a template a blueprint for our cards and passing with literal template
        // Dynamically as foreach will loop and for every product in the array will print the card
        // using ${product.title} we pass the title of the product from JSON OBJ of our products
        // fetched from API
        out += `<div class="col-sm-6 col-md-4 py-2">`;
        out += `    <div class="card h-100 d-flex flex-column">`;
                        // To img we give src of the img from JSON OBJ and ALT the ASIN
        out += `        <img src="${product.img}" class="card-img-top" alt="${product.asin}">`;
        out += `        <div class="card-body">`;
                            // We pass product title & price from JSON OBJ
        out += `            <h5 class="card-title">${product.title}</h5>`;
        out += `            <p class="card-text">${product.price}$</p>`;
                            // Button add to cart & skip
        out += `            <button class="btn add-to-cart"><i class="fas fa-cart-plus"></i></button>`;
        out += `            <button class="btn skip"><i class="far fa-trash-alt"></i></button>`;
        out += `        </div>`;
        out += `    </div>`;
        out += `</div>`;
    });

    // Selecting the row where to append the card and attach the card
    let row = document.querySelector("#all-products");
    row.innerHTML = out;
};


