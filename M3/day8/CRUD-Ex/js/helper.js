const H = {
    createNode: element => document.createElement(element),
    append: element => parent.appendChild(element),
    $: element => document.querySelector(element),
    $$: element => document.querySelectorAll(element)
};
