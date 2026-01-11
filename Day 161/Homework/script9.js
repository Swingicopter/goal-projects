// Use filter to remove all numbers less than 10 from an array and console.log the result.

let nums = [13, 5, 256, 55]
let numsFiltered = nums.filter(noLessThanTen)

function noLessThanTen(num) {
    if (num >= 10) {
        return num
    }
}

console.log(numsFiltered)
