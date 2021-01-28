function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(10));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(add(1, 5)));

const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
  h.push("NEW HOBBY");
  console.log(h);
}

printHobbies(hobbies);

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

// umesto ovoga
// const vatAmount = calculateTax(100, 0.19);
// const incomeTax = calculateTax(100, 0.25);

const calculateTaxVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateTaxVatAmount(100));
console.log(calculateTaxVatAmount(200));

userName = "Max";

function greetUser() {
  let name = "Anna";
  console.log("Hi " + name);
}

let name = "Maximilian";

userName = "Manuel";

greetUser();

// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

function powerOf(x, n) {
  //   if (n === 1) {
  //     return x;
  //   }

  //   return x * powerOf(x, n - 1);

  // shorter way but same as above
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2 * 2 * 2

const myself = {
  name: "Max",
  friends: [
    {
      name: "Manuel",
      friends: [
        { name: "Chris", friends: [{ name: "Hary" }, { name: "Emilia" }] },
      ],
    },
    {
      name: "Julia",
    },
  ],
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));
