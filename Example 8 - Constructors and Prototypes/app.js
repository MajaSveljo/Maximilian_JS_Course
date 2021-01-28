class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = "Max";

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old"
    );
  }
}

// function Person() {
//   this.age = 30;
//   this.name = "Max";
//   this.greet = function () {
//     console.log(
//       "Hi, I am " + this.name + " and I am " + this.age + " years old"
//     );
//   };
// }

// Person.describe = function () {
//   console.log("Creatin persons");
// };

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person);
// console.log(person.toString());
// const p2 = new person.__proto__.constructor();
// console.log(Object);

// const p = new Person();
// console.log(p);

const course = {
  title: "JavaScript",
  rating: 5,
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  //   ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

course.printRating();

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: "Max",
      writable: true,
    },
  }
);

// student.name = "Max";

Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

student.printProgress();

console.log(student);
