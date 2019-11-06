// Create the type of element we pass in the parameters
function createNode(element) {
    return document.createElement(element);
}
// Append the second parameter(element) to the first one
function append(parent, el) {
    return parent.appendChild(el);
}
// Select one element
function $(element) {
    return document.querySelector(element);
}
// Select all elements
function $$(element) {
    return document.querySelectorAll(element);
}

export default {
    createNode,
    append,
    $,
    $$
};
