console.log("AddProductForm...");
addProductsForm = async () => {

    console.log("Adding product");

    const name = H.$("#name").val();
    const brand =  H.$("#brand").val();
    const description =  H.$("#description").val();
    const price =  H.$("#price").val();
    const image = "https://picsum.photos/400";

    const response = await Fetch.create('/product', {
        name: name,
        brand: brand,
        description: description,
        price: price,
        imageUrl: image
      });

      console.log(response);

      return response;
};

addProductsForm();
