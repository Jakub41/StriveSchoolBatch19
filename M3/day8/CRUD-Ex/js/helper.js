/**
 * ! Helper
 *
 * * methods to help with the DOM interactions
 */

const H = {
    createNode: element => document.createElement(element),
    append: (parent, element) => parent.appendChild(element),
    $: element => document.querySelector(element),
    $$: element => document.querySelectorAll(element)
};
