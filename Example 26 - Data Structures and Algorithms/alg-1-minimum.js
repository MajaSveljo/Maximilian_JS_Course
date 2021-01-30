// BEST CASE: [5] => O(1)
// WORST CASE: [3, 1] => O(n)
function getMin(numbers) {
    if (!numbers.length) { // 1 execution
        throw new Error('Should not be an empty array!');
    }
    let currentMinimum = numbers[0]; // max 1 execution
    // console.log("EXECUTION - INIT")

    for (let i = 1; i < numbers.length; i++) { // 1 execution
        // console.log("EXECUTION - FOR")
        if (numbers[i] < currentMinimum) { // n - 1
            currentMinimum = numbers[i] // from 0 to n - 1
        }
    }

    // console.log("EXECUTION - RETURN")
    return currentMinimum; // 1 execution
}

// T = constant 1 + n*c2 (c2 = 2 in the above case) + constant 1
// T = n => Linear Time Complexity => O(n)

// BEST CASE: [1, 2, 3] => O(n^2)
// WORST CASE: [3, 2, 1] => O(n^2) + // even worse than best case because if in inner loop also runs
// that is not written because it doesn't matter for really big numbers
// also like other constants weren't written up
// AVERAGE CASE: [?, ?, ?]: => O(n^2)
function getMin2(numbers) {
    if (!numbers.length) { // c2
        throw new Error('Should not be an empty array!');
    }

    for (let i = 0; i < numbers.length; i++) {
        let outerElement = numbers[i]; // n times
        for (let j = i + 1; j < numbers.length; j++) {
            let innerElement = numbers[j];  // n - 1

            if (outerElement > innerElement) {
                // swap
                numbers[i] = innerElement;
                numbers[j] = outerElement;

                outerElement = numbers[i];
                innerElement = numbers[j];

                // console.log(numbers[i], numbers[j])
            }
        }
    }
    
    return numbers[0]; // c2
}

// Quadratic Time complexity => n * n => O(n^2)

const testNumbers = [2, 1, -5, 10, 10, -10]

// const min = getMin(testNumbers);
const min = getMin2(testNumbers);

console.log(min)