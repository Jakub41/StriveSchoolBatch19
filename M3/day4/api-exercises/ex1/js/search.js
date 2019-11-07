

// var search = function(searchString) {
//     var searchableRows = ["General AUX", "Ansser", "Etcetera", ...]
//     var matchedSearch = [];
//     for (var i=0; i<searchableRows.length; i++) {
//       if (searchableRows[i].indexOf(searchString) > -1) {
//         matchedSearch[i]=1;
//       }
//     }

// Toggle search bar
document.querySelector(".icon").addEventListener("click", () => {
    console.log("Clicking..");
    let searchQuery = document.querySelector(".search-query");
    searchQuery.classList.toggle("active");
});
