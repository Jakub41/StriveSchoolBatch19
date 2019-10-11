/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

function giveMeRandom(n) {
    let newArray = [];
    for (let i = 0; i < n; i++) {
        let randNum = Math.round(Math.random() * 10);
        newArray.push(randNum);
    }
    return newArray;
}

/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/

function checkArray(n_array) {
    let sum = 0;
    n_array.forEach(element => {
        if (element > 5)
            sum += element
    });
    return sum;
}

/* EXERCISE 12
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

function shippingCartTotal() {
    let shippingCart = [{
            id: 1,
            price: 100,
            name: "A",
            ship_num: 3
        },
        {
            id: 2,
            price: 110,
            name: "B",
            ship_num: 5
        },
        {
            id: 3,
            price: 140,
            name: "C",
            ship_num: 1
        },
        {
            id: 4,
            price: 200,
            name: "D",
            ship_num: 2
        }
    ];
    let shippingTotalPrice = 0;
    for (let i = 0; i < shippingCart.length; i++) {
        shippingTotalPrice += shippingCart[i].price * shippingCart[i].ship_num;
    }
    return shippingTotalPrice;
}



/* EXERCISE 13
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "addToShoppingCart" which receives a new object and add it to shoppingCart and returns the number of items in the shoppingCart.
*/

function addToShoppingCart(new_cart) {
    let shoppingCart = [{
            id: 1,
            price: 100,
            name: "A",
            ship_num: 3
        },
        {
            id: 2,
            price: 110,
            name: "B",
            ship_num: 5
        },
        {
            id: 3,
            price: 140,
            name: "C",
            ship_num: 1
        },
        {
            id: 4,
            price: 200,
            name: "D",
            ship_num: 2
        }
    ];

    shoppingCart.push(new_cart);
    return shoppingCart;
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 14
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

function naxShoppingCart(cart_array) {
    let return_item = null;
    let maxPrice = -1;
    cart_array.forEach(element => {
        if (element.price > maxPrice) {
            maxPrice = element.price;
            return_item = element;
        }
    });
    return return_item;
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 15
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

function latestShoppingCart(cart_array) {
    return cart_array[cart_array.length - 1];
}



/* WRITE YOUR CODE HERE */

/* EXERCISE 16
Create a function "loopUntil" which receives an integer X between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than X three times in a row.
*/

function loopUntil(X) {
    let times = 0;
    for (;;) {
        let rand = Math.round(Math.random * 10);
        if (rand > X) times++;
        console.log("rand and times : ", rand, times);
        if (times > 2) break;
    }
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

function average(avg_array) {
    let sum = 0;
    avg_array.forEach((item) => {
        if (isNaN(item)) continue;
        sum += item;
    });
    return sum / avg_array.length;
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

function longest(str_array) {
    let str_length = 0;
    let result_str = "";
    str_array.forEach(element => {
        if (element.length > str_length) {
            str_length = element.length;
            result_str = element;
        }
    });
    return result_str;
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 19
Write a function that receives a date D as parameter and calculates the number of days passes since the D.
*/

function calc_date(day) {
    let today = Date.now();
    let target_date = new Date(day).getTime();
    let pass_day = Math.round((today - target_date) / (1000 * 3600 * 24));

    console.log("today date : ", today, target_date);
    return pass_day;
}



/* WRITE YOUR CODE HERE */

/* EXERCISE 20
Write a function "matrixGenerator" that receives X and Y as parameter. The result should be a matrix of X times Y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

function matrixGenerator(Y, X) {
    let result = "["
    for (let i = 0; i < X; i++) {
        for (let j = 0; j < Y; j++) {
            let item = i + "" + j;
            result += item;
            if (j < Y - 1)
                result += ",";
        }

        if (i < X - 1)
            result += "\n";
    }

    result += "]";
    return result;
}

function show_result() {

    let randArray = giveMeRandom(20);
    console.log("give me array : ", randArray);

    let checkSum = checkArray(randArray);
    console.log("Check Sum : ", checkSum);

    let shippingTotal = shippingCartTotal();
    console.log("shipping total : ", shippingTotal);

    let shoppingCart = addToShoppingCart({
        id: 5,
        price: 140,
        name: "F",
        ship_num: 1
    });
    console.log("shopping cart : ", shoppingCart);


    let cart_array = [{
            id: 1,
            price: 100,
            name: "A",
            ship_num: 3
        },
        {
            id: 2,
            price: 110,
            name: "B",
            ship_num: 5
        },
        {
            id: 3,
            price: 140,
            name: "C",
            ship_num: 1
        },
        {
            id: 4,
            price: 200,
            name: "D",
            ship_num: 2
        }
    ];

    let maxCart = naxShoppingCart(cart_array);
    console.log("shopping cart : ", maxCart);

    let latestCart = latestShoppingCart(cart_array);
    console.log("Latest cart : ", latestCart);

    let loggestStr = longest(["aa", "aaa", "sfsfafa", "34f"]);
    console.log("logest str : ", loggestStr);


    let date = calc_date("2015-3-25");
    console.log("date : ", date);

    let resultMatrix = matrixGenerator(4, 4);
    console.log("matrix generator:\n", resultMatrix);


}

console.log(show_result());
