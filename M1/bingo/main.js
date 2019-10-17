function generateRandom() {
    var selectedNumbers = [];
    var min = 1;
    var max = 89;
    if (selectedNumbers.length > 88) {
        alert("All numbers Exhausted");
    } else {
        nextRandomNumber(min, max);
    }
}

function nextRandomNumber(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(random);

    random.selectedNumbers.push(random);
}
