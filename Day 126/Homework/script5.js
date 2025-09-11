function manualMap(arr, callback) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr))
    }
    return result
}

function manualFilter(arr, callback) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result
}


let numbers = [1, 2, 3, 4, 5]

let doubled = manualMap(numbers, n => n * 2)
console.log(doubled)

let even = manualFilter(numbers, n => n % 2 === 0)
console.log(even)