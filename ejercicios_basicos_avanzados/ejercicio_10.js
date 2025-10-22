const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    let totalSumNumbers = 0;
    for (const number of numberList) {
        totalSumNumbers += number
    }
    return totalSumNumbers / numberList.length;
}
console.log(average(numbers));