// Toggle search bar effect
document.querySelector(".icon").addEventListener("click", () => {
    console.log("Clicking..");
    let searchQuery = document.querySelector(".search-query");
    searchQuery.classList.toggle("active");
});
