/**
 * ! Helper
 *
 * * methods to help with the DOM interactions
 *
 * @function H
 * @param  { String } parent
 * @param  { String } element
 */
const H = {
    // Create the DOM element
    createNode: element => document.createElement(element),
    // Append first child to parent
    append: (parent, element) => parent.appendChild(element),
    // Query selector
    $1: element => document.querySelector(element),
    // Query selector all
    $a: element => document.querySelectorAll(element)
};
