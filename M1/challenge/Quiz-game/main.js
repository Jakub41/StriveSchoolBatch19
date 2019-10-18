/**
 *
 * @GET url of the API https://opentdb.com
 *
 */
// Creating a request variable with the OBJ inside
var request = new XMLHttpRequest();
// Opening a GET request to the API
request.open("GET", "https://opentdb.com/api.php?amount=10&difficulty=hard", true);
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
            // Creating the question card
            var card = document.createElement("div");
            card.setAttribute("class", "card");
            // Creating the heading using the question
            var h1 = document.createElement("h4");
            h1.textContent = results.question;

            var incorrect = document.createElement("p").setAttribute("class", "incorrect-answer");
            data.results.incorrect_answers.foreach( results =>
                {
                    var incorrectList = document.createElement(li);
                    results.incorrect_answers = results.incorrect_answers;
                    incorrectList.textContent = results.incorrect_answers;
                });

                incorrect.appendChild(incorrectList);
            // Creating the correct answer element
            var correct = document.createElement("p").etAttribute("class", "correct-answer");
            results.correct_answer = results.correct_answer;
            correct.textContent = `${results.correct_answer}`;
            // Append to DOM
            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        });
    } else {
        // Showing error for the status
        console.log("error");
        var errorMessage = document.createElement("status-error-message");
        errorMessage.textContent = 'Not working!';
        quiz.appendChild(errorMessage);
    }
};
// Request send
request.send();
