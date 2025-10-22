const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
    let totalSum = 0;
    for (const number of numberList) {
        totalSum += number;
    }
    return totalSum;
}
console.log(sumNumbers(numbers))