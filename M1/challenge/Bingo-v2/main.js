var defaultWinnerCombination = new Array(
    31,
    992,
    31744,
    1015808,
    32505856,
    1082401,
    2164802,
    4329604,
    8659208,
    17318416,
    17043521,
    1118480
);

var winnerObjects = {};

document.addEventListener("DOMContentLoaded", event => {
    var generateTableBody = document.querySelector(
        "#generateNumbersTable tbody"
    );
    var number = 0;
    var bodyInnerHtml = "";
    for (var row = 0; row < 5; row++) {
        var rowHtml = "<tr>";
        for (var col = 0; col < 15; col++) {
            number++;
            rowHtml += '<td class="cell_' + number + '">' + number + "</td>";
        }
        rowHtml += "</tr>";
        bodyInnerHtml += rowHtml;
    }
    generateTableBody.innerHTML = bodyInnerHtml;

    //generate btn
    var bingoGenerator = new Bingo();
    var generateNumberBtn = document.querySelector("#generateNumberBtn");
    generateNumberBtn.addEventListener("click", event => {
        var random = bingoGenerator.generateNextRandom().toString();
        var numberContainer = document.querySelector("#generatedNumber");
        numberContainer.innerHTML = random;
        var tdWithNumber = generateTableBody.querySelector("td.cell_" + random);
        if (tdWithNumber) tdWithNumber.classList.add("selected-number");
    });

    // reset btn
    var resetTableBtn = document.querySelector("#resetGenerateNumberTable");
    resetTableBtn.addEventListener("click", event => {
        bingoGenerator = new Bingo();
        var selectedNumbers = generateTableBody.querySelectorAll(
            "td.selected-number"
        );
        selectedNumbers.forEach(cell => {
            cell.classList.remove("selected-number");
        });
        var numberContainer = document.querySelector("#generatedNumber");
        numberContainer.innerHTML = "0";
    });

    // generate board
    var boards = [];
    var addNewBoardBtn = document.querySelector("#addNewBoardBtn");
    addNewBoardBtn.addEventListener("click", event => {
        if (boards.length >= 5) {
            alert("You can create max 5 boards");
            return;
        }
        var userBoardContainer = document.querySelector("#userBoardContainer");
        var templateContainer = document.querySelector(
            "#userTemplateContainer0"
        );
        var userTemplateContainer = templateContainer.cloneNode(true);
        var boardNumber = boards.length + 1;

        // userTemplateContainer
        var boardId = userTemplateContainer.getAttribute("id");
        boardId = boardId.substr(0, boardId.length - 1);
        boardId += boardNumber;
        userTemplateContainer.setAttribute("id", boardId);
        userTemplateContainer.style.display = "block";

        //userBoardLabel
        var userLabel = userTemplateContainer.querySelector("#userBoardLabel0");
        var userLabelId = userLabel.getAttribute("id");
        userLabelId = userLabelId.substr(0, userLabelId.length - 1);
        userLabelId += boardNumber;
        userLabel.setAttribute("id", userLabelId);
        userLabel.innerHTML = "Board number: " + boardNumber;

        //boardTable
        var boardTable = userTemplateContainer.querySelector("#userBoard0");
        var boardTableId = boardTable.getAttribute("id");
        boardTableId = boardTableId.substr(0, boardTableId.length - 1);
        boardTableId += boardNumber;
        boardTable.setAttribute("id", boardTableId);
        boardTable.setAttribute("board-number", boardNumber);
        boardTable.addEventListener("click", event => {
            var cell = event.target;
            if (cell.classList.contains("checked-cell")) {
                cell.classList.remove("checked-cell");
            } else {
                var tableEl = event.currentTarget;
                var boardNumber = tableEl.getAttribute("board-number");
                var cellNumber = +cell.innerHTML;
                if (bingoGenerator.selectedNumbers.includes(cellNumber)) {
                    cell.classList.add("checked-cell");
                    checkWin(boardNumber);
                } else {
                    alert("You can't choose this number!");
                }
            }
        });

        //newBoardBtn
        var newBoardBtn = userTemplateContainer.querySelector("#newBoardBtn0");
        var btnId = newBoardBtn.getAttribute("id");
        btnId = btnId.substr(0, btnId.length - 1);
        btnId += boardNumber;
        newBoardBtn.setAttribute("id", btnId);
        newBoardBtn.setAttribute("board-number", boardNumber);
        newBoardBtn.addEventListener("click", generateBoard);

        userBoardContainer.appendChild(userTemplateContainer);
        newBoardBtn.click();

        boards.push(boardNumber);
    });
});

function checkWin(boardNumber) {
    var winningOption = -1;
    var setSquares = 0;
    var winners = winnerObjects[boardNumber];
    for (var i = 0; i < 25; i++) {
        var currSquare = "#square_" + boardNumber + "_" + i;
        if (document.querySelector(currSquare).className !== "") {
            document.querySelector(currSquare).className = "checked-cell";
            setSquares = setSquares | Math.pow(2, i);
        }
    }
    for (var i = 0; i < winners.length; i++) {
        if ((winners[i] & setSquares) == winners[i]) {
            winningOption = i;
            break;
        }
    }
    if (winningOption > -1) {
        for (var i = 0; i < 24; i++) {
            if (winners[winningOption] & Math.pow(2, i)) {
                winnerObjects[boardNumber].splice(winningOption, 1);
                setTimeout(() => {
                    alert("Board with number " + boardNumber + " winner!!!!");
                    var boardLabel = document.querySelector(
                        "#userBoardLabel" + boardNumber
                    );
                    boardLabel.parentNode.classList.add("winner-label");
                }, 500);

                return;
            }
        }
    }
}

function generateBoard(e) {
    var btn = e.target;
    var boardNumber = btn.getAttribute("board-number");

    var tableBody = document.querySelector(
        "#userBoard" + boardNumber + " tbody"
    );

    var boardLabel = document.querySelector("#userBoardLabel" + boardNumber);
    boardLabel.parentNode.classList.remove("winner-label");

    winnerObjects[boardNumber] = new Array(...defaultWinnerCombination);
    var cellNumbers = 0;
    var bodyInner = "";
    var bingo = new Bingo();
    for (var row = 0; row < 5; row++) {
        bodyInner += "<tr>";
        for (var col = 0; col < 5; col++) {
            var random = bingo.generateNextRandom().toString();
            bodyInner +=
                '<td id="square_' +
                boardNumber +
                "_" +
                cellNumbers +
                '">' +
                random +
                "</td>";
            cellNumbers++;
        }
        bodyInner += "</tr>";
    }
    tableBody.innerHTML = bodyInner;
}

class Bingo {
    _selectedNumbers = [];

    get selectedNumbers() {
        return this._selectedNumbers;
    }

    generateRandom() {
        var min = 1;
        var max = 75;
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random;
    }
    generateNextRandom() {
        if (this._selectedNumbers.length > 74) {
            alert("All numbers Exhausted");
            return 0;
        }
        var random = this.generateRandom();
        while (this._selectedNumbers.includes(random)) {
            random = this.generateRandom();
        }
        this._selectedNumbers.push(random);
        return random;
    }
}
