/**
 *
 * @GET url of the API https://opentdb.com
 *
 */
// Creating a request variable with the OBJ inside
var request = new XMLHttpRequest();
// Opening a GET request to the API
request.open("GET", "https://opentdb.com/api.php?amount=10", true);
// Load the request
request.onload = function() {
    // Accessing the JSON data
    var data = JSON.parse(this.response).results;
    console.log(data);
    // Checking if we have status 200 good to go otherwise error
    if (request.status >= 200 && request.status < 400) {
        // Looping the data
        data.forEach(results => {
            console.log(results.question);

            var card = document.createElement("div");
            card.setAttribute("class", "card");

            var h1 = document.createElement("h1");
            h1.textContent = results.question;

            var p = document.createElement("p");
            results.correct_answer = results.correct_answer;
            p.textContent = `${results.correct_answer}`;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        });
    } else {
        // Showing error for the status
        console.log("error");
    }
};
// Request send
request.send();
