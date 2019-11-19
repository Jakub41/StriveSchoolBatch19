H.$1("button.btn.delete-product").addEventListener("click", e => {
    e.preventDefault();
    console.log("Clicking");

});

const removeProduct = async productID => {
    const request = await Fetch.remove("/product" + productID);
};
