/**
 *
 * Default values and globals need it for the quiz
 *
 */
// Initial state of the sections as we want to hide them until the Quiz starts
display("quiz-section", "none");
display("result-section", "none");
// We call the categories function as it is fetching from the API
getCategories();
// Globals initial values to be filled with the relative behaviour and proprieties
var globalData = [];
var globAnswer = 0;
var quizUrl = "";
var globSingleQuestion = {};

/**
 *
 *  Starting the quiz onClick event when the button
 *  `Start Quiz` is clicked
 *
 **/
function startQuiz() {
    // Getting the name of the player into a var name
    let name = document.querySelector(".user-name").value;
    // We check if the input is not empty and the name length is > 3
    if (name.length != 0 && name.length > 3) {
        // Game starts so we hide the first section of the player options to select
        display("game-section", "none");
        // We display the quiz section
        display("quiz-section", "block");
        // We add the name of the player passing its value to the heading
        // We are using `Template Literals` it is allowing us to pass a value to the HTML in embedded form
        document.querySelector(
            ".user_content"
        ).innerHTML = `<h3>Welcome ${name}<h3>`;
        // We are calling our function to get our Questions and Answers
        getQuestionsAnswers();
    } else {
        console.log("No name");
    }
}

/**
 *
 * Function to dynamically change the API URL
 * The reason is that we are fetching from API the the following data:
 *
 * - Categories   - sport, computer science, etc ...
 * - Difficulty   - easy, normal & hard
 * - Type         - True/false or multiple choice
 *
 */
function changeUrl() {
    // We assign the values the player choose from options tags
    // X, y and z stores the choice of the player
    // Ex: x = sport & y = hard & z = true/false
    // We can also leave all as default the system then will randomize all
    var x = document.querySelector(".quiz-categories").value;
    var y = document.querySelector(".difficulty-categories").value;
    var z = document.querySelector(".type-categories").value;
    // We build our URL with the values above and with the API base URL
    // In this context the amount was fixed to 10 questions for simplicity
    // The API can accept custom values also for how many questions a player wants
    quizUrl = `https://opentdb.com/api.php?amount=10&category=${x}&difficulty=${y}${
        z != "any" ? `&type=${z}` : ""
    }`;
}

/**
 *
 * We use this to display the fields and the proprieties
 * dynamically using the `Template Literal`
 *
 */
function display(field, prop) {
    // We just selecting the field and giving it a display style property
    // Ex in the initial state we have as follow:
    // field = quiz-section display = none as we are hiding it
    document.querySelector(`.${field}`).style.display = `${prop}`;
}

/**
 *
 * Getting the categories from the API
 *
 */
function getCategories() {
    // Base URL where the categories are
    var url = "https://opentdb.com/api_category.php";
    // XMLHttpRequest it is a OBJ interface to communicate with the server to send requests it is based on Ajax
    var xhttp = new XMLHttpRequest();
    // onreadystatechange we using this as we are doing an HTTP request to the API
    // as we can get different state and status from server response we need to be ready to catch that
    xhttp.onreadystatechange = function() {
        // We can start our game only if we get a status 200 from the server which means all operates normally
        // Ex if we get 404 means notfound then not possible to play the game
        // readyState we use to get back the status of our request
        // 4 means all done and ok to go as the fetch operation was successful
        if (this.readyState == 4 && this.status == 200) {
            // As we get an OBJ from API {} we need to parse it to be able to manipulate it as an array []
            // We parse the response of the categories from data and store its `key: value`
            // `trivia_categories` this comes from the data as was used as a key for the categories values
            // The OBJ categories:
            // {trivia_categories: [{id: 9, name: "General Knowledge"}, {id: 10, name: "Entertainment: Books"},…]
            var response = JSON.parse(this.responseText).trivia_categories;
            // Mapping a form of modern loop essentially does as a for loop but the syntax is a bit more readable
            // ES6 syntax to shorter a function `=>`
            var selectOptions = response.map(o => {
                // We do essentially for each element in this response we map `o` so we can access the value
                // like o.id and o.name
                // This populate our option tag with a selection of categories
                return `<option value="${o.id}">${o.name}</option>`;
            });
            // We just assign to the DOM the selection of the options above
            document.querySelector(
                ".quiz-categories"
            ).innerHTML = selectOptions;
            // We call change URL as we need to pass to base API the category we choose
            changeUrl();
        }
    };
    // We need to open a GET request to be able to communicate with the server
    // we pass the method we use `GET` the url where we apply it `URL` and a boolean `true`
    // The boolean means we want to have this Asynchronous as we use event listeners
    // we want a send response every time an event is done and not to wait the response is received
    xhttp.open("GET", url, true);
    // We need to send our request and get back a response
    xhttp.send();
}

/**
 *
 * We are getting our questions and answers
 *
 */
function getQuestionsAnswers() {
    // Request to server
    var xhttp = new XMLHttpRequest();
    // Ready for state and status
    xhttp.onreadystatechange = function() {
        // 4 & 200 we are ok to go
        if (this.readyState == 4 && this.status == 200) {
            // Parsing the response
            var response = JSON.parse(this.responseText);
            globalData = response.results;
            // We validating the data as the API on certain situations is not giving back an empty response
            // we need to check if the data length is > 0 otherwise is not good
            if (globalData.length > 0) {
                // We are ok so we start getting the the questions
                bindQuestions(0);
            } else {
                // We are not ok
                // we reload
                alert("Question's not found!");
                location.reload();
            }
        }
    };
    // Opening the `GET` request
    xhttp.open("GET", quizUrl, true);
    // Sending request
    xhttp.send();
}

/**
 *
 * We getting our questions
 *
 */
function bindQuestions(index) {
    // We store a starting point of the questions
    var question = globalData[index];
    // We need an array where to store the data
    let tempArr = [];
    // A container for the answers
    var answerHtml;
    // We need a condition as we can have multiple or/and true/false questions answers
    if (question.type == "multiple") {
        // Multiple then I store in an array multiple answers
        // [...] Spread syntax array literals we use that to be expanded
        // in places where zero or elements are expected
        tempArr = [...question.incorrect_answers];
        // Pushing the array of correct answers
        tempArr.push(question.correct_answer);
        // We shuffle the questions random
        shuffle(tempArr);
        // As it is `multiple` we need to have it showed so we map the possible answers
        // Then we can show in the DOM
        answerHtml = tempArr.map(o => {
            return `<input type="radio" name="options" value="${o}" onclick="handleRadioClick(this)"><span class="span-data">${o}</span><br>`;
        });
    } else {
        // For True/false we just add 2 options no mapping is required
        answerHtml = [
            `<input type="radio" name="options" value="True"> True<br>`,
            `<input type="radio" name="options" value="False"> False<br>`
        ];
    }
    // We get the quiz section
    document.querySelector(".quiz_section").innerHTML =
        // We give the title the question phrase
        `<h3>${question.question}</h3>` +
        // We join the question with its answers
        answerHtml.join("") +
        // We add a button to go next when we answer and we increment the index + 1
        // We add a check for the correct answer to mark the wrong in red
        // We add a restart button so we can restart the game
        `<input type="button" value="next" onclick="bindQuestionsAnswers( ${index +
            1} )" />
            <input type="hidden" class="answer-input" value="${
                question.correct_answer
            }" />
            <input type="button" value="Restart" onclick="reset()" />
            <div id="some_div"></div>`;
    // Call to the timer function with an index param
    timer(index);
}

/**
 *
 * We get Questions and Answers together
 *
 */
function bindQuestionsAnswers(index) {
    // Just a reset call for the countdown
    clear();
    // Getting the value of the answer
    var answerData = document.querySelector('input[name="options"]:checked')
        .value;
    // We check the answer and decrement the index of -1 as we have 10 questions
    // We check a question and we go next
    var answer = globalData[index - 1].correct_answer;
    // If we heave an answer we increment
    if (answerData == answer) globAnswer++;
    // We have 10 question
    // when we have 10 questions completed we see the result otherwise we go to next questions
    if (index == 10) showResult();
    else bindQuestions(index);
}

// We just reset the game
function reset() {
    location.reload();
}

// We shuffle the questions ina sorted array and decremented the index
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// Global timerId
var timerId;

/**
 *
 * Timer for our questions countdown
 *
 */
function timer(index) {
    // We clear the countdown
    clearTimeout(timerId);
    // Time left we want for the questions
    var timeLeft = 50;
    // We set an interval for the timeLeft
    timerId = setInterval(countdown, 1000);
    // We countDown
    function countdown() {
        // If time elapsed 0 game over go to next question
        if (timeLeft == 0) {
            clearTimeout(timerId);
            // We check if we are on the last questions so we show the results directly
            if (index < 9) bindQuestions(index + 1);
            else showResult();
        } else {
            // We show the remaining seconds
            var elem = document.getElementById("some_div");
            elem.innerHTML = timeLeft + " seconds remaining";
            timeLeft--;
        }
    }
}

// A reset timer
function clear() {
    clearTimeout(timerId);
}

/**
 *
 * We show the results
 *
 */
function showResult() {
    // We select where to show the results
    // We show the results based on how many equations we answered
    document.querySelector(
        ".result-section"
    ).innerHTML = `<h1>Your result out of 10 is ${globAnswer}</h1><br /><input type="button" onclick="reset()" value="Restart Quiz" />`;
    // We display the result section and hide quiz section
    display("result-section", "block");
    display("quiz-section", "none");
}

/**
 *
 * We handle the radio answer for wrong answers
 * TODO fix the fact I can select many wrong answers and select the correct answer and go next
 * TODO solution make as attempts on the second one wrong go next without giving the possibility to choose the answer
 *
 */
function handleRadioClick(data) {
    // We get the answer value
    var answer = document.querySelector(".answer-input").value;
    // If not correct we mark in red
    if (data.value != answer) {
        data.nextElementSibling.style.color = "red";
    }
}
