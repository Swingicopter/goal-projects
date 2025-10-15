// Take the array [1, 2, 3, 4, 5] and return a new array where each number is doubled if it’s even, otherwise leave it as is.

let arr = [1, 2, 3, 4, 5]

let newArr = arr.map(x => x % 2 == 0 ? x * 2 : x)

console.log(newArr)