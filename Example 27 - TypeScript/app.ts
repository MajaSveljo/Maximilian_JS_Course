// class User {
//   name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

interface Greetable { // interfaces can be used to force classes to have certain properties, to have certain structure
  // or as a blueprint for an object
  // classes can always add more than the interface has, but never less
  name: string
}

interface Printable {
  print(): void;
}

class User implements Greetable, Printable {
  constructor(public name: string, private age: number) {}

  print() {
    console.log(this.name)
  }
}

class Admin extends User {
  constructor(name: string, age: number, private permissions: string[]) {
    super(name, age);
  }
}

const user = new User('Max', 30);
// console.log(user.name, user.age);

const num1Input = document.getElementById("num1") as HTMLInputElement; // one syntax for typecasting
const num2Input = <HTMLInputElement>document.getElementById("num2"); // other syntax for typecasting
const buttonElement = document.querySelector("button")!;

// if (buttonElement) {

// }

function add(a: number, b: number) { // : number {
  return a + b;
}

type PrintMode = 'console' | 'alert';
enum OutputMode { CONSOLE, ALERT };

function printResult(result: string | number, printMode: OutputMode) { // : void {
  if (printMode === OutputMode.CONSOLE) {
    console.log(result);
  } else if (printMode === OutputMode.ALERT) {
    alert(result);
  }

}

// const result = add(5, 3);

// printResult(result);

interface CalculationContainer {
  res: number;
  // print: () => void; same as
  print(): void;
}
type CalculationResults = CalculationContainer[]; 

const results: CalculationResults = [];
// const results: Array<CalculationContainer> = []; // Array is generic type 
const names = ['Max'];

buttonElement.addEventListener('click', () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer = {
    res: result,
    print() {
      console.log(this.res)
    }
  };
  results.push(resultContainer);
  // results.push(5);
  // printResult(results)
  // results[0].print();
  printResult(result, OutputMode.CONSOLE)
  printResult(result, OutputMode.ALERT)
  // printResult(result, 'window')
})

function logAndEcho<T>(val: T) { // this is how we create custom generic type
  console.log(val);
  return val;
}

logAndEcho<string>('Hi there!').split(' '); // now when ever this function is used we have to specify data type