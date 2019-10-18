/**
 *
 * Player board
 *
 **/

// Starting on load page
window.onload = start;

// Defining the length of my array of numbers in the extraction
var extractedNumbers = new Array(76);

// Function to start the game
function start() {
    if (document.querySelector) {
        document.querySelector("reload").onclick = anotherCard;
        newCard();
    } else {
        alert("Sorry, you cannot play :( ");
    }
}

// Creating a new card
