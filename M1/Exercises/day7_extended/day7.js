/**
 * Ex1
 *
 * Changing dynamically the title of h1
 *
 * **/
var h1 = document.querySelector(".heading h1");

// this handler will be executed only once when the cursor moves over the unordered list
h1.addEventListener(
    "mouseenter",
    function(event) {
        // highlight the mouseenter target
        event.target.style.color = "purple";
        event.target.innerHTML = "Do I change?";
        event.target.classList.add("hover");

        // reset the color after a short delay
        setTimeout(function() {
            event.target.style.color = "red";
        }, 500);
    },
    false
);

h1.addEventListener(
    "mouseout",
    function(event) {
        // highlight the mouseenter target
        event.target.style.color = "black";
        event.target.innerHTML = "Hello";
        event.target.classList.add("hover");

        // reset the color after a short delay
        setTimeout(function() {
            event.target.style.color = " darkgreen";
        }, 500);
    },
    false
);

/**
 * Ex2
 *
 * Simple click event which add a class
 * **/
h1.addEventListener("click", function(event) {
    document.querySelector("h1").className = "letterSpacing";
});

/**
 * Ex3
 *
 * P changes on mouse hover
 */
var p = document.querySelector("article .articleTxt");

p.addEventListener("mouseover", function(event) {
    event.target.innerHTML = "Not really :(";
});

/**
 *
 * Ex4
 *
 * Change links to Google
 *
 **/
function changeToG() {
    var linksToChange = document.querySelectorAll("a");
    for (var i = 0; i < linksToChange.length; i++) {
        linksToChange[i].setAttribute("href", "http://goolge.com/");
    }
}
changeToG();

/**
 *
 *  An Example showed to a fellow student to let him understand 2 ways for the event
 *
 *  1st need to add to html 'onclick' -> <h2 onclick='changeTitle();'></h2>
 *
 *  2sd not need to add 'onclick' the event is listen directly on function
 *
 **/

// function changeTitle() {
//     var title = document.querySelector("h2");
//     title.innerText = "My New Title";
// }

var h2 = document.querySelector("h2");

h2.addEventListener("click", function(event) {
    event.target.innerText = "My New Title";
});

// Just to test to see the node parent same can be done using 'childNodes'
var x = document.querySelector("h1").parentNode.nodeName;

console.log("Am I parent", x);

// Wait for window load
window.onload = function() {
    // Show the alert
    alert("Welcome!!!");
};

function ulColorBk() {
    var ul = document.querySelector(".bkColor");
}
