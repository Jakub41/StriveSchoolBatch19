display("quiz-section", "none");
display("result-section", "none");
getCategories();
var globalData = [];
var globAnswer = 0;
var quizUrl = "";

function startQuiz() {
    let name = document.querySelector(".user_name").value;
    display("name-section", "none");
    display("quiz-section", "block");
    document.querySelector(
        ".user_content"
    ).innerHTML = `<h3>Welcome ${name}<h3>`;
    getQuestionsAnswers();
}

function changeUrl() {
    var __x = document.querySelector(".quiz-categories").value;
    var __y = document.querySelector(".difficulty-categories").value;
    var __z = document.querySelector(".type-categories").value;
    quizUrl = `https://opentdb.com/api.php?amount=10&category=${__x}&difficulty=${__y}${
        __z != "any" ? `&type=${__z}` : ""
    }`;
}

function display(field, prop) {
    document.querySelector(`.${field}`).style.display = `${prop}`;
}

function getCategories() {
    var url = "https://opentdb.com/api_category.php";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText).trivia_categories;
            var selectOptions = response.map((o, i) => {
                return `<option value="${o.id}">${o.name}</option>`;
            });
            document.querySelector(
                ".quiz-categories"
            ).innerHTML = selectOptions;
            changeUrl();
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function getQuestionsAnswers() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            globalData = response.results;
            if (globalData.length > 0) {
                bindQuestions(0);
            } else {
                alert("Question's not found!");
                location.reload();
            }
        }
    };
    xhttp.open("GET", quizUrl, true);
    xhttp.send();
}

function bindQuestions(index) {
    var question = globalData[index];
    let stringAnswer;
    let tempArr = [];
    var answerHtml;
    if (question.type == "multiple") {
        tempArr = [...question.incorrect_answers];
        tempArr.push(question.correct_answer);
        shuffle(tempArr);
        answerHtml = tempArr.map((o, i) => {
            return `<input type="radio" name="options" value="${o}">${o}<br>`;
        });
    } else {
        answerHtml = [
            `<input type="radio" name="options" value="True"> True<br>`,
            `<input type="radio" name="options" value="False"> False<br>`
        ];
    }
    document.querySelector(".quiz_section").innerHTML =
        `<h3>${question.question}</h3>` +
        answerHtml.join("") +
        `<input type="button" value="next" onclick="bindQuestionsAnswers( ${index +
            1} )" /><div id="some_div"></div>`;
    timer(index);
}

function bindQuestionsAnswers(index) {
    clear();
    if (index < 10) {
        var answerData = document.querySelector('input[name="options"]:checked')
            .value;
        var answer = globalData[index - 1].correct_answer;
        if (answerData == answer) globAnswer++;

        bindQuestions(index);
    } else {
        showResult();
    }
}

function reset() {
    location.reload();
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

var timerId;

function timer(index) {
    clearTimeout(timerId);
    var timeLeft = 5;
    timerId = setInterval(countdown, 1000000000);
    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            if (index < 9) bindQuestions(index + 1);
            else showResult();
        } else {
            var elem = document.getElementById("some_div");
            elem.innerHTML = timeLeft + " seconds remaining";
            timeLeft--;
        }
    }
}

function clear() {
    clearTimeout(timerId);
}

function showResult() {
    document.querySelector(
        ".result-section"
    ).innerHTML = `<h1>Your result out of 10 is ${globAnswer}</h1><br /><input type="button" onclick="reset()" value="Restart Quiz" />`;
    display("result-section", "block");
    display("quiz-section", "none");
}
