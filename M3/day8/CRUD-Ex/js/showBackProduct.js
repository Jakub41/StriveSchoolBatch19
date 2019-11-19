console.log("Show Back Office Products...");
const showBackProducts = async () => {
    let allProducts = await getProducts();

    let backProducts = H.$1("#listProducts");
    let backProductsRow = H.createNode("div");
    backProductsRow.className = "row py-4";
    let listProducts = backProducts.appendChild(backProductsRow);

    productListShow(allProducts, listProducts);
};

productListShow = (allProducts, listProducts) => {
    if (allProducts.length > 0) {
        let out = `<div class="col-md-8 col-lg-8 mx-auto" id="backProductList">`;
        out += `<ul class="list-group shadow">`;
        out += allProducts
            .map(
                product => `
                <!-- list group item-->
                <li class="list-group-item" id="${product._id}">
                    <!-- Custom content-->
                    <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                            <h5 class="mt-0 font-weight-bold mb-2">${product.name}</h5>
                            <p class="font-italic text-muted mb-0 small">${product.brand}</p>
                            <p class="font-italic text-muted mb-0 small">${product.description}</p>
                            <div class="d-flex align-items-center justify-content-between mt-1">
                                <h6 class="font-weight-bold my-2">${product.price}</h6>
                            </div>
                            <button type="submit" class="btn delete-product">X</button>
                        </div><img src="${product.imageUrl}"
                            alt="product" width="200" height="200" class="ml-lg-5 order-1 order-lg-2">
                    </div>
                    <!-- End -->
                </li>`
            )
            .join("");

        out += `</ul>`;
        out += `</div>`;
        listProducts.innerHTML = out;
    } else {
        listProducts.innerText = "No products added!";
    }
};

showBackProducts();
