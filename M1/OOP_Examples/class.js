console.log("+++Classes+++");

/**
 * OOP Class Example
 * **/
class Square {

  // Setting Up The Object
  constructor(width, height, color) {
    console.log("The square is being created");

    // What my Square have
    // Assign to Square the proprieties it has and make it available to the rest of the code
    this.width = width;
    this.height = height;
    this.color = color;
  }
}

// Instance of Square Class
let square = new Square(10,10, "Red");
console.log("The Square params -> "
            + "\n" + "W - " + square.width + "\n" + "H - " +square.height + "\n" + "C - " + square.color);

console.log("++++++");
