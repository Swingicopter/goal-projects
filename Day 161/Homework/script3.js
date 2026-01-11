// Use map to create a new array where each number is squared and console.log the new array.

function squaredD(num) {
    return num * num
}

let arr = [13, 5, 256, 55]
let newArr = arr.map(squaredD)

console.log(newArr)
