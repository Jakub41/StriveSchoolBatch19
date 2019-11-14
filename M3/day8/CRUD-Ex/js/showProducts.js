initAllProducts = async () => {
    let allProducts = await getProducts();
    console.log("All products...", allProducts);

    let productsSection = H.$("#products-section");
    let productRow = H.createNode("div");
    productRow.className = "row";
    let productCard = productsSection.append(productRow);
    productCard.innerHTML = "hello";

    showAllProduct(allProducts, productCard);
};

showAllProduct = (allProducts, productCard) => {
    productCard.innerHtml = allProducts.map(
        product => `<h1>${product.name}</h1>`
    );
};

initAllProducts();
