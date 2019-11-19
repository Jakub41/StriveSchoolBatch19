console.log("getProducts...");
/**
 * ! Get Products
 * * Method to GET the data from API
 * * we use the GET exposed from fetchData
 *
 * @function getProducts
 * @async
 * @param { String } URL
 *
*/
const getProducts = async () => {
    // We fetch all products GET method
    const products = await Fetch.get("/product");
    console.log("products...", products);
    // Return the data
    return products;
};
// Init the function
getProducts();
