// Global constants
//const products = [];
// Load on document load
window.onload = event => {
  console.log("page loaded...");
  // API URL
  const url = "https://api.myjson.com/bins/18fh4d";
  // Spinner load
  showSpinner();
  // API base URL
  // Fetch the API
  fetch(url, { method: "GET" })
    // We get response in JSON OBJ
    .then(response => response.json())
    // We get the data and use it
    .then(product => {
      // We call the method passing the data
      showALlProducts(product);
      searchProducts(product);
    });
};

// we show all products
const showALlProducts = listOfProducts => {
  // Defining an output to the DOM as starting point empty
  // Message for thee user when no product
  let messageNoResults = `
        <div class="emoji  emoji--sad">
        <div class="emoji__face">
            <div class="emoji__eyebrows"></div>
            <div class="emoji__eyes"></div>
            <div class="emoji__mouth"></div>
        </div>
  `;
  // Selecting the row where to append the card and attach the card
  let row = document.querySelector("#all-products");
  // We check for products from search input if not we show message
  let out = listOfProducts.length === 0 ? messageNoResults : "";
  // We loop into products
  listOfProducts.forEach(product => {
    // We create a template a blueprint for our cards and passing with literal template
    // Dynamically as foreach will loop and for every product in the array will print the card
    // using ${product.title} we pass the title of the product from JSON OBJ of our products
    // fetched from API
    out += `<div class="col-sm-6 col-md-4 py-2">`;
    out += `    <div id="${product.asin}" class="card h-100 d-flex flex-column">`;
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

    let productSelected = document.querySelector(`#${product.asin}`);
    console.log(productSelected);
  });
  row.innerHTML = out;

  // Add to cart

//   document.querySelector(".add-to-cart").addEventListener("click", () => {
//     console.log("click");.classList.add(".selected");

//   });

};

// Product Search
const searchProducts = searchProductQuery => {
  // lets filters it
  let searchInput = document.querySelector(".search-product-query");
  // We filter the products based on the keyword
  const filterProducts = keyword => {
    filteredProducts = searchProductQuery.filter(product =>
      product.title.toLowerCase().includes(keyword.toLowerCase())
    );
    // We use same cards calling the function just displaying only results
    showALlProducts(filteredProducts);
  };
  // Search input after 3 char on keyup the search begin
  searchInput.addEventListener("keyup", e => {
    // If char written >= 3
    if (e.target.value.length >= 3) {
      filterProducts(e.target.value);
      // Otherwise we just show all products
    } else if (e.target.value.length === 0) {
      showALlProducts(searchProductQuery);
    }
  });
};
