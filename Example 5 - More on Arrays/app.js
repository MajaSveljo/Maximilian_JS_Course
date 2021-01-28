// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = new Array(5);
// // // const moreNumbers = Array(5); //this is the same
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// // const moreNumbers = Array.from(1, 2); //will not work!
// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetails: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

// console.log(personalData[1]);

// const hobbies = ['Cooking', 'Sports'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; //rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good food');
// // hobbies.splice(1, 0, 'Good food', 'Music');
// console.log(hobbies);

// hobbies.splice(0, 1);
// // const removedElements = hobbies.splice(0, 1);
// console.log(hobbies);

// // hobbies.splice(0);
// // console.log(hobbies);

// // hobbies.splice(1);
// // console.log(hobbies);

// // hobbies.splice(-2, 1); // negative indexes are exclusive for splice method
// // console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults;
// testResults.push(5.91);

// console.log(storedResults, testResults);

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.slice(0, 2);
// const storedResults = testResults.slice(2);
const storedResults = testResults.concat([3.99, 2]); // returns a new array
// const storedResults = testResults.push([3.99, 2]);

testResults.push(5.91);

console.log(storedResults, testResults);

// const testResults = [1, 5.3, 1.5, 1.5, 10.99, -5, 10];

console.log(testResults.indexOf(1.5));
// console.log(testResults.indexOf(1.5, 2));
// console.log(testResults.lastIndexOf(1.5));

console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99 !== -1)); // does the same thing!

const personalData = [{name: 'Max'}, {name: 'Manuel'}, {name: 'Manuel'}];
console.log(personalData.indexOf({name: 'Manuel'}));

const manuel = personalData.find((person, idx, persons) => {
    return person.name === 'Manuel';
});

manuel.name = 'Anna';

console.log(manuel, personalData);

const maxIndex = personalData.findIndex((person, idx, persons) => {
    return person.name === 'Max';
});

console.log(maxIndex);