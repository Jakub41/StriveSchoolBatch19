/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/

// Assigned values to sum into variables to store it
var a = 12;
var b = 20;

// Summing the values and thew result stored in a variable
var sum = a + b;
console.log("The total is " + sum);

/* EXERCISE 2
Create a variable named X containing the number 12
*/

var x = 12;

/* EXERCISE 3
Create a variable named name containing the string John Doe
*/

var name = "John Doe";

/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/

// Not equal
var difference = x != name;
console.log("That should be true -> " + difference);

// Equal
var difference2 = x == name;
console.log("That should be false -> " + difference2);

// Equal Strict
var difference3 = x === name;
console.log("That should be false -> " + difference3);

/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2.
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/

var name1 = "john";
var name2 = "John";

var nameDifferent = name1 != name2;
console.log("Name not equal to Name2 is " + nameDifferent);

var name2ToLowerCase = name2.toLowerCase();

var nameDifferent = name1 == name2ToLowerCase;
console.log("Name is equal to Name2 as lowercase is " + nameDifferent);

/* EXERCISE 6
Create and array with the first 5 positive numbers
*/

var positiveNumbersArray = [1, 2, 3, 4, 5];

/* EXERCISE 7
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/

var x = 6;

var number_array = ["One", "Two", "Three", "Four", "Five"];

var result_text = "None";

if (x < 6 && x > 0) {
  result_text = x + " => " + number_array[x - 1];
} else if (x > 5 && x < 11) {
  result_text = x + " => Five + " + number_array[x - 6];
}

var result = result_text;
console.log("literal ", result);

/* EXERCISE 8
Insert a value in a variable based on the result of a ternary if
*/

var ternaryIf = x == 4 ? true : false;
console.log("X is = 4 " + ternaryIf);

/* EXERCISE 9
Create an object containing your name, surname, email address and age.
*/

var myInfo = {
  name: "Jakub",
  surname: "Lemiszewski",
  email: "eamil@hey.com",
  age: 34
};

/* EXERCISE 10
Add to the previously created object a boolean value to represent whether you have or not a driving license
*/
myInfo.DriverLicense = true;
console.log("Updated Info: \n", myInfo);

/* EXERCISE 11
Remove to the previously created object the age
*/

delete myInfo.age;
console.log("Deleted Age: \n", myInfo);

/* EXERCISE 12
Create a second object with name, surname, email address and verify that this object has a different email address
*/

var obj2 = { name: "Jane", surname: "luis", email: "nen@email.com" };

// Used JSON.stringify to extract the value and stored in a var
var myInfoEmail = myInfo.email; // JSON.stringify Can be deleted as it is already a string
var myObj2Email = obj2.email;

// Compared the 2 values
var emailIsEqual = myInfoEmail == myObj2Email;
console.log(emailIsEqual); // False

/* EXERCISE 13
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

var totalShoppingCart = 60;
var shipmentCost = 10;
var promotion = 50;

// 60 > 50
if (totalShoppingCart > promotion) {
  var shipmentCost = 0;
  console.log("Hurrah!! you have a free shipment congrats!!");
}

// 60 + 0 = 60
var total = totalShoppingCart + shipmentCost;
console.log("Total " + total);

// Opposite situation
var totalShoppingCart2 = 40;
var shipmentCost = 10;
var promotion = 50;

// 40 < 50
if (totalShoppingCart2 > promotion) {
  var shipmentCost = 0;
  console.log("Hurrah!! you have a free shipment congrats!!");
}

// 40 + 10 = 50
var total = totalShoppingCart2 + shipmentCost;
console.log("Total " + total);

/* EXERCISE 14
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

var totalShoppingCart2 = 40;
var shipmentCost = 10;
var promotion = 50;
var blackFriday = 0.2;

// 40 < 50 -> condition false the inside is skipped
if (totalShoppingCart2 > promotion) {
  var shipmentCost = 0;
  console.log("Hurrah!! you have a free shipment congrats!!");
}

// 40 + 10 - 0.20 = 49.8
var total = totalShoppingCart2 + shipmentCost - blackFriday;
console.log("Total " + total);

var totalShoppingCart = 80;
var shipmentCost = 10;
var promotion = 50;
var blackFriday = 0.2;

// 80 > 50 -> condition true entering inside
if (totalShoppingCart > promotion) {
  var shipmentCost = 0;
  console.log("Hurrah!! you have a free shipment congrats!!");
}

// 80 + 0 - 0.20 = 79.8
var total = totalShoppingCart + shipmentCost - blackFriday;
console.log("Total " + total);

/* EXERCISE 15
You writing a very simple anti spam filter for your mailbox. In the variable emailContent you have the content of the email you are checking.
Check if the email is valid using regular expression. The email (in this example) if the words SPAM and SCAM does not appear.
*/

function emailValidCheck(email) {
  var regx = /(scam | spam)/;
  return regx.test(String(email).toLowerCase());
}

var email = "scam@email.com";
var validEmail = emailValidCheck(email);
console.log(validEmail); // False

/* EXERCISE 16
Create an object representing an car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

// Origin Car object
car1 = { brand: "Ferrari", model: "testa rossa", licensePlate: "12345" };

// Origin Car cloned
var car2 = JSON.parse(JSON.stringify(car1));
var car3 = JSON.parse(JSON.stringify(car1));
var car4 = JSON.parse(JSON.stringify(car1));
var car5 = JSON.parse(JSON.stringify(car1));

console.log(car2);

// License Template changed
car2.licensePlate = "changed1";
car3.licensePlate = "changed2";
car4.licensePlate = "changed3";
car5.licensePlate = "changed4";

/* EXERCISE 17
Create a new array called carsForRent containing all the cars from the previous exercise
*/

// Added cars before to new array
var carsForRent = [];
carsForRent = [car1, car2, car3, car4, car5];

/* EXERCISE 18
Remove the first and the last car from the carsForRent array.
*/
carsForRent.shift();
carsForRent.pop();
console.log("carsForRent", carsForRent);

/* EXERCISE 19
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/
console.log("carsForRent[2] brand:", carsForRent[2].brand);
console.log("carsForRent[2] model:", carsForRent[2].model);
console.log("carsForRent[2] licensePlate:", carsForRent[2].licensePlate);

/* EXERCISE 20
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/
var car3 = { brand: "Benz", model: "C200", licensePlate: "EKY 35 AA" };
var car4 = { brand: "Mazda", model: "6030", licensePlate: "AKR 145 AP" };
var car5 = { brand: "Nissan", model: "Bluebird", licensePlate: "WEN 999 AJ" };
var carsForSale = [car3, car4, car5];
console.log("carsForSale", carsForSale);

var totalCars = [];
var totalCars = {
  carsForSale: carsForSale.length,
  carsForRent: carsForRent.length
};
console.log("totalCars", totalCars);


/*
A different way to the car problem solution just extended for learning purposes
*/

// Empty arrays stored in vars
var carArr = [];
var carTemp = [];
var carTempArr = [];

// Create an object representing a car with properties like brand, model, licensePlate.
carObj = { brand: "", model: "", licensePlate: "" };
carTemp = carArr;

// Making 5 cars arrays
for (var i = 0; i < 5; i++) {
  var temp = {};
  temp.brand = i + "A";
  temp.model = i + "M";
  temp.licensePlate = i + "L";
  carArr.push(temp);
}

// Origin car object print
console.log("original", carArr);

// Clone carTempArr from origin carArr
var carTempArr = JSON.parse(JSON.stringify(carArr));

// Change licensePlate of first car in carTempArr
carTempArr[0].licensePlate = "changed";
console.log("changed", carTempArr);

// Add remain car array to carForSale from carsForRent
var carsForSale = carsForRent;
console.log("4", carsForSale);

// The number of cars in both carsForSale and carsForRent arrays
var totalCars = carsForRent.length + carsForSale.length;
console.log("5", totalCars);

// Create a new array carsForRent
var carsForRent = [];

// Add car array to carsForRent from carArr
carsForRent = carArr;
console.log("2", carsForRent);

// Remove first car of carsForRent
carsForRent.shift();

// Remove last car of carsForRent
carsForRent.pop();
console.log("3", carsForRent);
