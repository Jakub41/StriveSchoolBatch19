console.log("AddProductForm...");
H.$1("#addProductForm .btn").addEventListener("click", e => {
    e.preventDefault();
    const name = H.$1("#name").value;
    const brand = H.$1("#brand").value;
    const description = H.$1("#description").value;
    const price = H.$1("#price").value;
    const image = H.$1("#imageUrl").value;
    addProductsForm(name, brand, description, price, image);
});

addProductsForm = async (name, brand, description, price, image) => {
    console.log("Adding product");

    const response = await Fetch.create("/product", {
        name: name,
        brand: brand,
        description: description,
        price: price,
        imageUrl: image
    });

    H.$1("#addProductForm").reset();

    console.log(response);
};
