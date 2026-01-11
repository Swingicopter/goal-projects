// Use filter to create a new array containing only even numbers and console.log it.

let arr = [32, 33, 16, 40];
let arrEvenNumbersOnly = arr.filter(evenOnly)

function evenOnly(num) {
    if (num % 2 === 0) {
        return num
    }
}

console.log(arr)