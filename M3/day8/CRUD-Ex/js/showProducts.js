/**
 * ! Show All Products
 * * Method to show all the products to the the client side
 *
 * @async initAllProducts
 * @function showAllProduct
 * @param { Array } allProducts
 * @param { Object} productCard
 *
 * */
// Initializer
initAllProducts = async () => {
    // We get the data
    let allProducts = await getProducts();
    console.log("All products...", allProducts);
    // We select the DOM elements and append what we need
    let productsSection = H.$1("#products-section");
    let productRowDiv = H.createNode("div");
    productRowDiv.className = "row";
    let productCard = productsSection.appendChild(productRowDiv);
    // We call the function passing the data and the dom element
    showAllProduct(allProducts, productCard);
};
// We show all the products
showAllProduct = (allProducts, productCard) => {
    // To DOM element we add the product cards
    productCard.innerHTML = allProducts
        // We map the array
        .map(
            // The product card layout with data
            product => `
            <div class="col-md-3 py-2">
                <div class="card bg-dark text-white bg-dark h-100 d-flex flex-column" id="${product._id}">
                    <img class="card-img-top" src="${product.imageUrl}" alt="product">
                    <div class="card-block">
                    <h4 class="card-title">${product.name}</h4>
                    <p class="card-text">${product.brand}</p>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">${product.price}</p>
                    <a href="/details" class="btn btn-outline-light btn-sm">Details</a>
                    </div>
                </div>
            </div>`
        )
        .join("");
};
// Init the function
initAllProducts();
