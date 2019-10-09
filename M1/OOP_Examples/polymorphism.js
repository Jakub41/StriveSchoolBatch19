console.log("+++Polymorphism+++");

/**
 * Generic class Animal
 * **/
class Animal {
  // Constructor method Animal Name
  constructor(name) {
    this.name = name;
  }

  // Method we will override for Animal Sound
  makeSound() {
    console.log("Sound of an animal");
  }
}

// New Instance of the Animal Class
const a1 = new Animal("Fuffy");
console.log(a1);

// Let the animal make a sound
a1.makeSound();

/**
 * SubClass Dog child of Animal Class
 * **/
class Dog extends Animal {
  constructor(name) {
    // Call this constructor from the parent Animal -> Inheritance
    super(name);
  }

  // Polymorphism we override the method of the parent makeSound()
  makeSound() {
    console.log("Woof! Woof!");
  }
}

// New Dog instance
const a2 = new Dog("Billy");
console.log(a2);

// Dog make a sound
a2.makeSound();

/**
 * SubClass Cat child of Animal Class
 * **/
class Cat extends Animal {
  constructor(name) {
    // Call this constructor from the parent Animal -> Inheritance
    super(name);
  }

  // Polymorphism we override the method of the parent makeSound()
  makeSound() {
    console.log("Miaou! Miaou!");
  }
}

// Cat instance
const a3 = new Cat("Fuffy");
console.log(a3);

// Cat Sound
a3.makeSound();

console.log("++++++");
