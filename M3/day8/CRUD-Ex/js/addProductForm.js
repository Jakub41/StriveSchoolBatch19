console.log("AddProductForm...");
H.$1("#addProductForm .btn").addEventListener("click", e => {
    e.preventDefault();
    const name = H.$1("#name").val;
    const brand = H.$1("#brand").val;
    const description = H.$1("#description").val;
    const price = H.$1("#price").val;
    const image = "https://picsum.photos/400";
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

    console.log(response);
};
