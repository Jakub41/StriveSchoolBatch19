console.log("AddProductForm...");

/**
 *
 * ! Add Product
 * * Method to add a product from a form
 * * and POST it to the server API
 *
 * @function addProductsForm
 * @async
 * @param { Strings } name, brand, description, image
 * @param { Number } price
 *
 */
// Button click on the form
H.$1("#addProductForm .btn").addEventListener("click", e => {
    e.preventDefault();
    // Values from the form
    const name = H.$1("#name").value;
    const brand = H.$1("#brand").value;
    const description = H.$1("#description").value;
    const price = H.$1("#price").value;
    const image = H.$1("#imageUrl").value;
    // We call the function to POST the data
    addProductsForm(name, brand, description, price, image);
});

// POST Function
addProductsForm = async (name, brand, description, price, image) => {
    console.log("Adding product");
    // We create the product to API
    const response = await Fetch.create("/product", {
        name: name,
        brand: brand,
        description: description,
        price: price,
        imageUrl: image
    });
    // Reset the form on complete
    H.$1("#addProductForm").reset();
};
