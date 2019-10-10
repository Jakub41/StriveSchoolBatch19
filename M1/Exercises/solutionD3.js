/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/
​
​
/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/
​
12 + 20
​
var a = 12
var b = 20
console.log(a + b)
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 2
Create a variable named X containing the number 12
*/
​
var X = 12
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 3
Create a variable named name containing the string John Doe
*/
​
var name = "John Doe"
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/
​
var X = 12;
console.log(12 - X)
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 5
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2.
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/
​
var name1 = "john";
var name2 = "John";
​
if (name1 == name2) {
    result = "Names are the same";
} else {
    if (name1 == name2.toLowerCase()) {
        result = "Names are the same, but there were capital letters";
    }
}
​
console.log(result)
​
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 6
Create and array with the first 5 positive numbers
*/
​
var myArray = [1,2,3,4,5]
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 7
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/
​
var literalNumber = ['one','two','three','four','five','six','seven','eight','nine','ten'];
​
var selectedNumber =  parseInt(prompt("Enter a number less than 10 :")) - 1 ;
​
if ( (selectedNumber < 10) && (selectedNumber >= 0)) {
    console.log( selectedNumber + 1 + '  =======>  ' +literalNumber[selectedNumber]);
} else {
    console.log('the number is greater than 10 or  equal to 0');
}
​
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 8
Insert a value in a variable based on the resut of a ternary if
*/
​
var totalamount = 1000;
var shippingchargers = 0;
totalamount = totalamount > 500 ? totalamount : totalamount - shippingchargers;
​
var totalShoppingCart = 10;
var Shipping = 50;
totalCost = (totalShoppingCart > 50 ) ? totalShoppingCart : totalShoppingCart + Shipping;
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 9
Create an object containing your name, surname, email address and age.
*/
​
var myself = {
    name: "diego",
    surname: "banovaz",
    email: "diego@strive.school",
    age: 33
}
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 10
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/
​
myself.drivingLicense = true;
myself["drivingLicense"] = true; //THESE ARE THE SAME!!!
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 11
Remove to the previously created object the age
*/
​
delete myself.age;
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 12
Create a second object with name, surname, email address and verify that this object has a different email address
*/
​
var obj2 = { name: "Jane", surname: "luis", email: "nen@email.com" };
​
// Used JSON.stringify to extract the value and stored in a var
var myInfoEmail = (myInfo.email); //this is already a string
var myObj2Email = (obj2.email);
​
// Compared the 2 values
var emailIsEqual = myInfoEmail == myObj2Email;
console.log(emailIsEqual); // False
​
var personalDetails2 = {name: "Zoe", surname: "Olusanya", email: "zoeolu@gmail.com"};
​
if (personalDetails.email === personalDetails2.email)
	console.log("same");
else
    console.log("not same");
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 13
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/
​
/* WRITE YOUR CODE HERE */
​
var totalShoppingCart = 100;
var totalCost = totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + 10;
console.log(totalCost);
​
​
/* EXERCISE 14
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/
​
/* WRITE YOUR CODE HERE */
let totalShoppingCart = 549
let shippingCost = 10
let blackFridayDiscount = 20/100
if (totalShoppingCart > 50) {
	shippingCost = 0
	totalShoppingCart = totalShoppingCart - (totalShoppingCart * blackFridayDiscount)
} else {
	totalShoppingCart = totalShoppingCart + shippingCost
	totalShoppingCart = totalShoppingCart - (totalShoppingCart * blackFridayDiscount)
}
console.log (totalShoppingCart)
​
var x = 0; //example number
var shipping = 10;
var customer = {
    totalShoppingCart : x
}
if (customer.totalShoppingCart > 50){
    shipping = 0;
}
var totalprice = customer.totalShoppingCart + shipping;
​
function discount(value){
    var bf_percent = (20 / 100);
    var bf_discount = (value*bf_percent);
    return totalprice - bf_discount;
}
​
console.log(discount(totalprice));
​
/* EXERCISE 15
You writing a very simple anti spam filter for your mailbox. In the variable emailContent you have the content of the email you are checking.
Check if the email is valid using regular expression. The email (in this example) if the words SPAM and SCAM does not appear.
*/
let emailContent = 'I am a SCAM email and I\'m going to Spam your inbox';
let spamFilter = /(spam|scam)/; //<= create a regular expression in JS
let iFoundYouLittleSpammy = spamFilter.test(emailContent.toLowerCase())
console.log(iFoundYouLittleSpammy)
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 16
Create an object rapresenting an car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/
​
var car = { brand: "Toyotal", model: "Corolla Sport", licensePlate: "AKR 341 BC"};
var car2 = Object.assign({}, car);
car2.licensePlate = "JTA 543 FR";
​
console.log(car);
console.log(car2);
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 17
Create a new array called carsForRent containing all the cars from the previous exercise
*/
​
var carsForRent = [car, car2];
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 18
Remove the first and the last car from the carsForRent array.
*/
​
carsForRent.shift(); //removes the first car
carsForRent.pop(); //removes the last car
​
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 19
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/
​
//What is request => prints details of carsForRent[2]
console.log(carsForRent[2].brand)
console.log(carsForRent[2].model)
console.log(carsForRent[2].licensePlate)
​
//Prints the details of every car in our store
for(var i = 0; i < carsForRent.length; i++){
    console.log("Brand: " + carsForRent[i].brand + " Model: " + carsForRent[i].model + " License Plate No.:" + carsForRent[i].licensePlate);
}
​
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 20
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/
​
var car3 = { brand: "Benz", model: "C200", licensePlate: "EKY 35 AA" };
var car4 = { brand: "Mazda", model: "6030", licensePlate: "AKR 145 AP" };
var car5 = { brand: "Nissan", model: "Bluebird", licensePlate: "WEN 999 AJ" };
var carsForSale = [car3, car4, car5];
var totalCars = carsForRent.length + carsForSale.length //[carsForSale, carsForRent];
​
var totalCars = {
    carsForSale: carsForSale.length,
    carsForRent: carsForRent.length
}
​
​
/* WRITE YOUR CODE HERE */
​
/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT
*/
