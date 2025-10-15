// From the array [{id:1, name:"apple"}, {id:2, name:"banana"}, {id:3, name:"cherry"}],
// return a new array containing only the name values in uppercase.

let arr = [{id:1, name:"apple"}, {id:2, name:"banana"}, {id:3, name:"cherry"}]

let arrNames = arr.map(obj => obj["name"].toUpperCase())

console.log(arrNames);