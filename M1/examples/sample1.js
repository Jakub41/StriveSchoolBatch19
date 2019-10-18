// We are starting on page load to generate our table
window.onload = function startBoard() {
    // Table create element & vars
    var table = document.createElement("table"),
        tr,
        td,
        i;
    // Looping
    // Creating numbers from 1 to 75
    for (i = 0; i < 75; i++) {
        // Creating the rows if we have 15 mod 15 == 0 then next row
        // Essentials a break point to create the rows and columns
        // We stop when numbers arrive on 75 mod 15 == 0
        // In this way we created a table 15 x 5
        if (i % 15 == 0) {
            // We append the rows to the table
            tr = table.appendChild(document.createElement("tr"));
        }
        // We add the cells
        td = tr.appendChild(document.createElement("td"));
        // We insert the numbers in the cells
        td.innerHTML = i + 1;
        // We add a selector class
        td.className = "borderNumbersCell";
    }
    // We append table to the container
    document.querySelector("#board").appendChild(table);
};

// We need to generate the extraction numbers in casual way
// We define an empty array as no selected numbers we have
var selectedNumbers = [];
function generateRandomNumbers() {
    var min = 1;
    var max = 75;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    generatesNextNumber();
    return random;
}

// We generates the next random number
function generatesNextNumber() {
    if (selectedNumbers.length > 75) {
        alert("Extraction Concluded");
        return 0;
    }

    var random = generateRandom();
    while (selectedNumbers.indexOf(random) > -1) {
        random = generateRandom();
    }
    selectedNumbers.push(random);
    return random;
}

// We generate on click
function generateClick() {
    var random = generatesNextNumber().toString();
    document.querySelector(".extracted-number span").textContent = random;
    document
        .querySelector("td.borderNumbersCell" + random)
        .classList.add("selected");
    var randomR = Math.floor(Math.random() * 255);
    var randomG = Math.floor(Math.random() * 255);
    var randomB = Math.floor(Math.random() * 255);
    document.querySelector(
        "td.borderNumbersCell" + random
    ).style.backgroundColor =
        "rgb(" + randomR + "," + randomG + "," + randomB + ")";
}
