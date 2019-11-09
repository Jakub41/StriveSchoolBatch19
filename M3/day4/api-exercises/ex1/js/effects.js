// Toggle search bar effect
document.querySelector(".icon").addEventListener("click", () => {
    console.log("Clicking..");
    let searchQuery = document.querySelector(".search-query");
    searchQuery.classList.toggle("active");
});

// Shopping cart effect
document.querySelector("#cart").addEventListener("click", () => {
    console.log("Clicking..");
    let shoppingBag = document.querySelector(".shopping-bag");
    shoppingBag.classList.toggle("active");
});
