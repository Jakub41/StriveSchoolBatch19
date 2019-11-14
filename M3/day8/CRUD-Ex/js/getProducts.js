console.log("getProducts...");
const getProducts = async () => {
    const products = await Fetch.get("/product");
    console.log("products...", products);
    return products;
};

getProducts();
