// For the array [10, 20, 30], return a new array of strings in the form "Index: X, Value: Y".

let arr = [10, 20, 30]

let newArr = arr.map((val, i) => `Index: ${i}, Value: ${val}`)

console.log(newArr)