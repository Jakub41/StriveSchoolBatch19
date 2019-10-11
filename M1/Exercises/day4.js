/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- Load the HTML into your fav browser and call the function by name (es.: area(12, 23))
*/

/* EXERCISE 1 (EXAMPLE)
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

function area(l1, l2) {
    return l1 * l2;
}

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

// Function to triple the sum
function tripleSum(int1, int2) {
    console.log("Doing triple sum");
    return (int1 + int2) * 3;
}

// Crazy Sum will call tripleSum if int1 == int2
function crazySum(int1, int2) {
    if (int1 == int2) return tripleSum(int1, int2);

    // Simple sum to return if int1 != int2
    sum = int1 + int2;

    console.log("Doing simple sum");

    // Return the simple sum
    return sum;
}

var result = crazySum(2, 2);
console.log("Am I Crazy Sum? ", result);

/* EXERCISE 3
Write a function "crazyDiff" that computes the
absolute difference between a given number and 19.
Returns triple their absolute difference if
the specified number is greater than 19.
*/
var n;
var fixNumber = 19;

function crazyDiff(n, fixNumber) {
    if (n < fixNumber) {
        diff = n - fixNumber;
        return Math.abs(diff);
    } else {
        diff = (n - fixNumber) * 3;
        return Math.abs(diff);
    }
}

result = crazyDiff(20, fixNumber);
console.log("Am I Crazy Diff? ", result);

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/
var fixed = 400;

function boundary(n, min, max) {
    return (n >= min && n <= max) || n === fixed ? "true" : "false";
}

var boundary = boundary(10, 20, 100);

console.log("What the boundaries? ",boundary);

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

// Could be done with indexOf
function strivify(s) {
    var strive = "Strive";

    if (s == strive) return s;

    return s + "" + strive;
}

var result = strivify("Strive");
console.log("S or not S ", result);

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
function check3and7(n) {
    return (n > 0 && n % 3 == 0) || n % 7 == 0 ? true : false;
}

var result = check3and7(-1); // False
console.log("Multiple 3 or 7 maybe? ", result);

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

// Using in built method
function reverseString(s) {
    return s
        .split("")
        .reverse()
        .join("");
}

result = reverseString("esreveR");

console.log("Reverse ", result);

// Using recursion method
function reverseString(s) {
    return s === "" ? "" : reverseString(s.substr(1)) + s.charAt(0);
}

result = reverseString("Strive");
console.log(result);

// We can also use other ways as for loop for example
function reverseString(s) {
    var string = "";
    /*
    Starting point of the loop (s.length - 1) which corresponds to the
    last character of the string, "e"
    As long as i is greater than or equals 0, the loop will go on
    We decrement i after each iteration */
    for (i = s.length - 1; i >= 0; i--) {
        string += s[i];
    }
    return string;
}
result = reverseString("strive");
console.log(result);

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

function upperFirst(s) {
    if (s[0] !== s[0].toLowerCase()) return "Already Upper Case";

    return s.charAt(0).toUpperCase() + s.slice(1);
}

result = upperFirst("Ciao");

console.log("Make me UpperFirst ", result);

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
function cutString(s) {
    // Sub first letter and Taking length of the word -1 like Strive -> triv
    return s.substring(1, s.length - 1);
}
result = cutString("Strive");
console.log("Cutting? ", result);

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

function giveRandom(n) {
    var random_array = new Array(10)
        .fill()
        .map((n, i) => (n = i))
        .sort(() => Math.random() - 0.5);
    return random_array;
}

result = giveRandom(10);
console.log("Lottery", result);

// Different way
function giveMeRandom(n) {
    const result = [];
    // check n is number
    if (typeof n !== "number" || isNaN(n)) {
        console.log("not a number");
        return result;
    }

    // when n is negative or 0 skip populating array
    if (n <= 0) {
        console.log("not a positive number");
        return result;
    }

    const min = 0;
    const max = 10;
    for (let i = 0; i < n; i++) {
        // generate random value in min-max range
        let randomValue = Math.random() * (max - min) + min;
        // round value
        let roundedValue = Math.round(randomValue);
        // push to the array
        result.push(roundedValue);
    }
    return result;
}

console.log("Do I win? ", giveMeRandom(10));

/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/

function checkArray(arr) {
    let result = 0;
    if (!Array.isArray(arr)) {
        console.log("not an array");
        return result;
    }

    const length = arr.length;
    if (length === 0) {
        console.log("array is empty");
        return result;
    }

    for (let i = 0; i < length; i++) {
        let element = arr[i];
        if (element > 5) {
            console.log(`Element ${element} with index ${i} is bigger than 5`);
            result += element;
        } else {
            console.log(
                `Element ${element} with index ${i} is not bigger than 5`
            );
            return "Sorry no elements bigger then 5!!";
        }
    }

    return result;
}

const randomArray = giveMeRandom(5);
console.log(randomArray);

const sum = checkArray(randomArray);
console.log("Am I the big 5", sum);

/** Ex 10 and 11 another version **/
function giveMeRandom(n) {
    let randomNumbers = [];

    if (n > 0) {
        for (let i = 0; i < n; i++) {
            randomNumbers.push(Math.ceil(Math.random() * 10) - 1);
            /* random() method returns a float number less than 1. If multiplied by 10,
             * it will give a number less than 10. Using ceil() method, it will make sure number is less than 10.
             * And by subtracting number by 1, it will make sure number is less than 10.
             */
        }
    }

    return randomNumbers;
}

console.log("Another random", giveMeRandom(5));

function checkArray(randomNumbers) {
    let sum = 0;
    if (randomNumbers.length > 0) {
        // length property will return total number of items in the array. Check if it has any items in the array
        let numbersBiggerThanFive = [];
        let totalLength = randomNumbers.length;

        console.log("Given Numbers: ", randomNumbers);

        for (let i = 0; i < totalLength; i++) {
            if (randomNumbers[i] > 5) {
                sum += randomNumbers[i];
                numbersBiggerThanFive.push(randomNumbers[i]);
            }
        }

        console.log("Numbers bigger than 5: ", numbersBiggerThanFive);
    }

    console.log("Total sum of numbers bigger than 5: ", sum);

    return sum;
}

console.log("Another big 5", checkArray(giveMeRandom(5)));

/* EXERCISE 12
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

/* A Global variable is created so that it can be accessible inside the function.
 * If we create global variable named "shoppingCart" inside the function it will not store past data.
 * And overtime the function is called, a new variable will be created, where all data will lost.
 * Here, we create global variable by not adding "var" or "let" keyword in front of the variable
 */
shoppingCart = [
    {
        id: 6688,
        name: "Essentials Jeans",
        price: 39.9,
        qty: 2
    },
    {
        id: 9671,
        name: "Checkerboard Old School Platform",
        price: 129.99,
        qty: 1
    }
];

function shippingCartTotal() {
    /* Accessing Global variable */
    let totalItems = shoppingCart.length;
    let totalPrice = 0;

    if (totalItems > 0) {
        for (let i = 0; i < totalItems; i++) {
            totalPrice +=
                parseFloat(shoppingCart[i].price) *
                parseInt(shoppingCart[i].qty);
        }
    }

    return Math.round(totalPrice * 100) / 100; // round function normally rounds number to integer. By multiplying and dividing it by 100, it will make sure it have 2 decimal numbers.
}

console.log("TOTAL:", shippingCartTotal(shoppingCart));

/* EXERCISE 13
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "addToShoppingCart" which receives a new object and add it to shoppingCart and returns the number of items in the shoppingCart.
*/

function AddToShoppingCart(cart) {
    if (cart.id && cart.name && cart.price && cart.qty) {
        //prevent from adding invalid data
        shoppingCart.push(cart);
    } else {
        console.error(
            "Unable to add item in the cart. Incomplete data: ",
            cart
        );
    }

    return shoppingCart.length;
}

/* Adding items in the cart */
AddToShoppingCart({
    id: 5575,
    name: "Skinny jeans",
    price: 39.9, qty: 1
    // qty -> Purposely missing to see the error
});
AddToShoppingCart({
    id: 0905,
    name: "Ripped Skinny jeans",
    price: 69.9,
    qty: 3
});
AddToShoppingCart({
    id: 0840,
    name: "Skinny jeans with chains",
    price: 69.9,
    qty: 1
});

console.log("ADD", AddToShoppingCart(shoppingCart));

/* EXERCISE 14
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

function maxShoppingCart(cart) {
    let expensivePrice = 0;
    let expensiveItem = [];

    let totalItems = cart.length;
    for (let i = 0; i < totalItems; i++) {
        if (parseFloat(cart[i].price) > expensivePrice) {
            expensivePrice = parseFloat(cart[i].price);
            expensiveItem = cart[i];
        }
    }

    return expensiveItem;
}

console.log("MAX", maxShoppingCart(shoppingCart));

/* EXERCISE 15
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/
function latestShoppingCart(cart) {
    if (cart.length > 0) {
        let newCart = Object.assign([], cart); // Clone array so that main cart variable won't be changed
        return newCart.pop();
    }

    return [];
}

console.log("LATEST", maxShoppingCart(shoppingCart));

/* EXERCISE 16
Create a function "loopUntil" which receives an integer X between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than X three times in a row.
*/
function loopUntil(x) {
    if (x > 0 && x < 9) {
        let count = 0;
        while (1) {
            //Infinite loop, which will only break if the count is equals to 3
            let rand = Math.ceil(Math.random() * 10) - 1;
            if (x < rand) {
                count++;
                console.log("Bigger: ", count);
            } else {
                console.log(rand);
            }

            if (count == 3) {
                console.log("Finally Done");
                break;
            }
        }
    }
}

console.log("INFINITE LOOP", loopUntil(1));

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

function average(items) {
    let len = items.length;

    let avg = items.reduce(function(total, val) {
        if (!isNaN(val)) {
            return total + val / len;
        }
    }, 0);

    return avg;
}

console.log("AVG", average([11, 23, "45", 56, "204"])); // "45" && "204" Skipped

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

function longest(strings) {
    let len = strings.length;
    let longestLen = 0;
    let longestString = "";

    for (let i = 0; i < len; i++) {
        if (strings[i].length > longestLen) {
            longestLen = strings[i].length;
            longestString = strings[i];
        }
    }

    return longestString;
}

console.log("LONGEST", longest(["Andiamo", "hello", "annotazione", "Tak"]));

/* EXERCISE 19
Write a function that receives a date D as parameter and calculates the number of days passes since the D.
*/
function dayPassed(D) {
    /* Date format: mm/dd/yyyy */

    /* To get date difference, we first need to get time in milliseconds */

    let date = new Date(D).getTime(); // Convert date string to JavaScript's date object
    let currentDate = new Date().getTime(); // Get current date

    let diffInTime = (currentDate - date) / (1000 * 3600 * 24); //Get time difference and then convert it to days

    diffInTime = Math.ceil(diffInTime); //Get the rounded value

    return diffInTime;
}

console.log("MANY DAYS", dayPassed("10/11/2018"));

/* EXERCISE 20
Write a function "matrixGenerator" that receives X and Y as parameter. The result should be a matrix of X times Y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/
console.log("+++++++++++");

function matrixGenerator(x, y) {
    return Array.from(
        {
            length: x
        },
        () => new Array(y).fill(0)
    );
}

console.log(matrixGenerator(2, 2));
console.log("++++++++++");

// My way to generate a Matrix just to try out
// Given n generates n times matrix random like:
// n = 1 -> [[ 1 ]]
// n = 2 -> [ [ 1, 2 ], [ 4, 3 ] ]
// n = 3 -> [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]
// C = Column & R = Row
// Es per example we have when 1 just 1C 1R is generated containing that number
// When 2 we have then 2C 2R but numbers are incremented by 1 and on the
// first array we hav 1,2 and second but revert 4,3
// When 3 -> 3C 3R -> but we have the first C and R as starting point
// So we have 1,2,3 then 8,9,4 ...
function matrixGenerator(n) {
    // Generates an nxn empty matrix
    let result = new Array(n).fill().map(() => new Array(n).fill(""));

    // From where to count
    let counter = 1;

    // Start C end C
    let startCol = 0;
    let endCol = n - 1;

    // Start R end R
    let startRow = 0;
    let endRow = n - 1;

    // Loop in a range of the nxn matrix C1 <= Cn and R1 <= Rn
    // Ex 1 x 1 until that true loop goes when false stop
    // Until the central 1x1 portion of the matrix is reached
    while (startCol <= endCol && startRow <= endRow) {
        // Fill horizontally left to right: all the available columns in the current row
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        // Prepare for the next row
        startRow++;

        // Fill vertically top to bottom: all the available rows in the current column (the last column from the previous for loop)
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }
        // Prepare for the next column
        endCol--;

        // Fill horizontally right to left: all the available columns in the current row
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        // Prepare for the next row
        endRow--;

        // Fill vertically bottom to top: all the available rows in the current column
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        // Prepare for the next column
        startCol++;
    }

    return result;
}

result = matrixGenerator(10);
console.log(result);

/* Another approach
 * There are two digits in the matrix, and two rows.
 * This means there are two loops.
 * So, we are going to create a loop for first digit, that goes from 0 to y,
 * and another loop for second digit that goes from 0 to x
 */

function matrixGenerator(x, y) {
    let matrix = [];
    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            matrix.push(i + "" + j);
        }
    }

    return matrix;
}

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
