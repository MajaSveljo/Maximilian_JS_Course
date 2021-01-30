function sumUp(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }

    return sum;
}

// Linear Time Complexity => O(n)

const array = [1, 2, 5];

console.log(sumUp(array)); // 8