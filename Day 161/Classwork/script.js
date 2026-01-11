// Use for of to loop through an array of numbers 
// and console.log() each number multiplied by two.

function arrTwoTimes(numbers) {
    for (num of numbers) {
        return num * 2
    }
}

console.log(arrTwoTimes([5, 6, 10]))