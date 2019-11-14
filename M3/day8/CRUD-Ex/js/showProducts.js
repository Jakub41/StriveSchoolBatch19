initAllProducts = async () => {
    let allProducts = await getProducts();
    console.log("All products...", allProducts);
    let productsSection = H.$("#products-section");
    let productRowDiv = H.createNode("div");
    productRowDiv.className = "row";
    let productCard = productsSection.appendChild(productRowDiv);
    showAllProduct(allProducts, productCard);
};

showAllProduct = (allProducts, productCard) => {
    productCard.innerHTML = allProducts
        .map(
            product => `
            <div class="col-sm-6 col-md-4 py-2">
                <div id="${product._id}" class="card mb-4 text-white bg-dark h-100 d-flex flex-column">
                    <img class="card-img-top" src="${product.imageUrl}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.brand}</p>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">${product.price}</p>
                        <a href="/details" class="btn btn-outline-light btn-sm">Details</a>
                    </div>
                </div>
             </div>
    `
        )
        .join("");
};
initAllProducts();
