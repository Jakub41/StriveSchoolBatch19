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

function crazySum(n1, n2) {
    if (n1 == n2)
        return n1 * 6 //(n1 + n1) * 3
    else
        return n1 + n2

    //return n1 == n2 ? n1 * 3 : n1 + n2
}

/* EXERCISE 3
Write a function "crazyDiff" that computes the
absolute difference between a given number and 19.
Returns triple their absolute difference if
the specified number is greater than 19.
*/

function crazyDiff(n1) {
    if (n1 > 19)
        return Math.abs(n1 - 19) * 3

    return Math.abs(n1 - 19)

    // return n1 > 19 ? Math.abs(n1 - 19) * 3 : Math.abs(n1 - 19)
}


/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

function boundary(N) {
    //n = parseInt(prompt('Give me a num bro'))
    if (N >= 20 && N <= 100 || N === 400) {
        return true
    } else {
        return false
    }

    //return (N >= 20 && N <= 100 ||N === 400)
}


/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string S.
Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

function strivify(S) {
    // "Strive is a school"
    // [Strive, is, a, school]
    // ---^

    arr = S.split(" ");
    if (arr[0] == "Strive") {
        return S;
    } else {
        return false;
    }
}

function strivify(S) {
    //indexOf is returning the position in the string in which the String you are searching begins
    //If the string you are searching is not in the whole string, it returns -1

    if (S.indexOf("Strive") == 0) { //if it starts with Strive
        return S
    } else {
        return "Strive" + S
    }

    return S.indexOf("Strive") == 0 ? S : "Strive" + S
}

// function strivify(userString){
//     switch(userString){
//         case "S":
//             return userString+"trive";
//             break;
//         case "Strive":
//         case "STRIVE":
//             return userString;
//         default:
//             {
//                 if (userString.indexOf("Strive") == 0 || userString.indexOf("STRIVE") == 0){
//                     return userString;
//                 } else {
//                     return console.log('String not accpeted. Try again with "S" or "Strive" or "STRIVE"');
//                 };
//             }
//     }
// };


/* WRITE YOUR CODE HERE */

/* EXERCISE 6
    Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
    HINT: Module Operator
    */

function check3and7(number) {
    if (number % 3 == 0) {
        return "It'/s a multiple of 3";
    } else if (number % 7 == 0) {
        return "It is a multiple of 7";
    } else {
        return "Not a multiple of 3 or 7";
    }
}


/* WRITE YOUR CODE HERE */

/* EXERCISE 7
    Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
    */

function reverseString(text) {
    return text
        .split("")
        .reverse()
        .join("");
}

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i];
    }
    return newString;
}



/* WRITE YOUR CODE HERE */

/* EXERCISE 8
    Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
    */

function upperFirst(text) {
    var wordPieces = text.split(" "); //splitting the words on the space
    for (var i = 0; i < wordPieces.length; i++) { //for each word of the sentence
        var word = wordPieces[i].charAt(0).toUpperCase(); //it's making the uppercase of the first letter
        wordPieces[i] = word + wordPieces[i].substr(1); //replacing it
    }
    return wordPieces.join(" "); //rejoin the several words
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

function cutString(myStr) {
    var newStrWord = myStr.substr(1).slice(0, -1);
    return newStrWord;
}

cutString("soft");


/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

function giveMeRandom(n) {
    //var n = prompt('Give me a num bro\'')
    var firstArray = Array.from({
        length: n
    }, () => Math.floor(Math.random() * n));
    return (firstArray)
}

function giveMeRandom(n) {
    var arryNumbers = [];
    for (var i = 0; i < n; i++) {
        arryNumbers.push(Math.floor(Math.random() * 11));
    }
    return arryNumbers;
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 11
    Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
    The function returs the sum of the numbers bigger than 5.
    */

function checkArray() {
    var myLongArray = giveMeRandom(10)
    var myShortArray = myLongArray.filter(isGreaterThanFive)
    var sum = 0
    for (var i = 0; i < myShortArray.length; i++) {
        sum += myShortArray[i]
    }
    return sum
}

function isGreaterThanFive(x) {
    return x > 5;
}

function checkArray(userArray) { //array as an input param
    var sum = 0; //we are setting the sum to 0
    userArray.forEach(function (element) { //foreach element in the array
        if (element > 5) { //if it's bigger than 5
            sum += element; //we are gonna sum it to sum ==> sum = sum + element
            console.log(element + " is bigger than 5");
        } else //else, we just print it out
            console.log(element + " is smaller than 5");
    });
    return sum; //return the total
};

function checkArray(userArray) { //array as an input param
    var sum = 0; //we are setting the sum to 0    [4, 7] ==> sum = 0;
    for (var i = 0; i < userArray.length; i++) //foreach element in the array
    {
        if (userArray[i] > 5) { //if it's bigger than 5
            sum += userArray[i]; //we are gonna sum it to sum ==> sum = sum + element
            console.log(userArray[i] + " is bigger than 5");
        } else //else, we just print it out
            console.log(userArray[i] + " is smaller than 5");
    }
    return sum; //return the total
};


/* WRITE YOUR CODE HERE */

/* EXERCISE 12
In your eCommerce you have an array of object called shoppingCart.
In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

var shoppingCart = [{
        price: 20,
        name: "USB Hub",
        id: "A01",
        number: 2
    },
    {
        price: 80,
        name: "USB Drive",
        id: "A02",
        number: 3
    },
    {
        price: 40,
        name: "MacBook Pro",
        id: "A03",
        number: 1
    },
    {
        price: 80,
        name: "USBC Charger",
        id: "A04",
        number: 1
    }
];


function shippingCartTotal() {
    var totalDue = 0;
    //ES6+ version
    shoppingCart.forEach(function (shopCartElem) { //running through each object element by element
        totalDue += shopCartElem.price * shopCartElem.number; //extracting price of each object and adding to total due to the shop.
    });

    // for (var i = 0; i < shoppingCart.length; i++){ ==> ES5 version
    //     let shopCartElem = shoppingCart[i];
    //     //here the code of your anonymous fuction will be exectud
    // }
    return totalDue;
};


/* WRITE YOUR CODE HERE */

/* EXERCISE 13
    In your eCommerce you have an array of object called shoppingCart.
    In this array you have a number of objects with a price, name, id and number to be shipped.
    Create a function "addToShoppingCart" which receives a new object and add it to shoppingCart and returns the number of items in the shoppingCart.
    */

function addToShoppingCart(newProduct) {
    shoppingCart.push(newProduct);
    return shoppingCart.length;
}



/* WRITE YOUR CODE HERE */

/* EXERCISE 14
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

function maxShoppingCart() {
    var max = shoppingCart[0];
    for (var i = 1; i < shoppingCart.length; i++) {
        if (shoppingCart[i].price > max.price)
            max = shoppingCart[i]
    }
    return "The most expensive element is  " + JSON.stringify(max);
}


/* WRITE YOUR CODE HERE */

/* EXERCISE 15
In your eCommerce you have an array of object called shoppingCart.
In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

function latestShoppingCart(shoppingCart) {
    //if an array has 10 elements, lenght will be 10 but the last element,
    //since we start counting from 0 will be in position 9!
    return shoppingCart[shoppingCart.length - 1];
};


/* WRITE YOUR CODE HERE */

/* EXERCISE 16
Create a function "loopUntil" which receives an integer X between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than X three times in a row.
*/

function loopUntil(intX) {
    //checking if the number is between 0-9, is an integer and not anything else.
    if (intX < 0 || intX > 9 || !Number.isInteger(intX) || Number.isNaN(intX)) {
        console.log("Please enter an integer between 0 and 9");
    } else {
        var times = 0; //setting times to zero
        var rndNum; //initializing random number variable
        while (times !== 3) { //condition to check if 3 times in a row is reached
            rndNum = Math.random() * 10;
            rndNum > intX ? times++ : times = 0; //resetting time if random number is less than number
            console.log(rndNum.toFixed(2)); //prints random number up to 2 d.p.
        };
    };
};


/* WRITE YOUR CODE HERE */

/* EXERCISE 17
Write a function "average" which receives an array and return the average value.
The function automatically skips non-numeric entries in the array.
*/

function average(array) {
    var sum = 0;
    var total = 0;
    for (var i = 0; i < array.length; i++)
        if (typeof (array[i]) == "number") {
            total++; //total = total+1;
            sum += array[i]
        }
    else
        console.log("Skipping " + array[i])

    return sum / total;
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/


/*
    Max = 0
    [ "aaa", "bbb", "ccc"]
    max--^
    -----------^ is bigger than max
    -----------------^ is bigger than max
*/

function longest(arrayOfStrings) {
    var long = arrayOfStrings[0];
    for (var i = 1; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length > long.length)
            long = arrayOfStrings[i]
    }

    return long;
}

//' this is my input for Micheal exercise ' //alternative version for sentences
function longest(word) {
    var wordSplit = word.split(' ');
    var longestWord = 0;
    for (var i = 0; i < wordSplit.length; i++) {
        if (splitWord[i].length > longestWord) {
            longestWord = splitWord[i].length;
        }
    }

    return longestWord;
}


/* WRITE YOUR CODE HERE */

/* EXERCISE 19
    Write a function that receives a date D as parameter and calculates the number of days passes since the D.
    */

function daysOfDifferenceFromNow(D) {
    var firstDate = new Date(); //today
    var dateDiff = Math.abs(firstDate.getTime() - D.getTime()) //milliseconds
    //var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = dateDiff / (1000 * 3600 * 24); //1000 = milliseconds per hour, 3600 seconds per hour, 24 hours per day
    return Difference_In_Days;
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 20
Write a function "matrixGenerator" that receives X and Y as parameter. The result should be a matrix of X times Y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

function matrixGenerator(x, y) {
    return Array.from({
        length: x
    }, () => new Array(y).fill(0));
}

function matrixGenerator2(x, y) {
    var matrix = [];

    for (var i = 0; i < x; i++) { //this part commands how many rows should be created and add them to the matrix
        var row = [];
        for (var j = 0; j < y; j++) //this part generates rows of Y elements
            row.push(i + "<>" + j) //and add them into the row

        matrix.push(row); // -> push it into matrix
    }

    return matrix;
}


/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
  Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
  */
