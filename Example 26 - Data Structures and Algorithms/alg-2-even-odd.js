function isEvenOrOdd(number) {
    // const result = number % 2;
    // if (result === 0) {
    //     return 'Even';
    // } else {
    //     return 'Odd'
    // }
    return number % 2 ? 'Odd' : 'Even'
    // this one always runs exactly once
}

// Constant Time Complexity => O(1)

console.log(isEvenOrOdd(10)); // Even
console.log(isEvenOrOdd(11)); // Odd