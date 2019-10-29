console.log("Here we are!!");

/* Helpers */
// select a list of matching elements
function $(selector, context) {
    return (context || document).querySelectorAll(selector);
}

// select the first match only
function $1(selector, context) {
    return (context || document).querySelector(selector);
}

//ex1
function navLink() {
    var lastNavLink = $1("nav:last-child");
    var newLink = document.createElement("a");
    var linkText = document.createTextNode("Sport");

    newLink.append(linkText);
    newLink.className = "p-2 text-muted";
    newLink.title = "Sport";
    newLink.href = "#";

    lastNavLink.append(newLink);
}

navLink();

//EX 2
function removeSearch() {
    var searchElement = $1("#searchToHide"); // Added an Id to simplify it
    searchElement.remove();
}

removeSearch();

// EX 3
function jumbotronNewBG() {
    var jumboTron = $1(".jumbotron");
    jumboTron.setAttribute("id", "yellow-bg");

    var a = $1(".jumbotron a");
    console.log(a);
    a.classList.remove("text-white");
    a.style.color = "#ff0000";
}

jumbotronNewBG();

// EX 4
function mainTitleColor() {
    var mainTitle = $1(".jumbotron h1");

    mainTitle.style.color = "rgb(0%, 100%, 0%)";
    console.log(mainTitle);
}

mainTitleColor();

// EX 5
function dimensionColPostHeadings() {
    var headings = $(".blog-post h2");

    headings.forEach(element => {
        element.className = "col-md-6";
    });
}

dimensionColPostHeadings();

// EX 6
function removeElsewhereLinks() {
    var toRemove = $1("aside div:last-child ol");
    toRemove.remove();
}

removeElsewhereLinks();

// EX7
function trimCharacters() {
    let blogPost = $(".blog-post");
    blogPost.forEach(d => {
        d.textContent = d.textContent.substring(0, 150);
    });
}
//trimCharacters();

// Bis
function trimAgain() {
    for (let post of $("div.blog-post")) {
        let content = post.textContent.substring(0, 150);
        post.innerHTML = content;
    }
}

trimAgain();

// EX 8
