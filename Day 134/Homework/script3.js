// From ["alice", "bob", "charlie"], return a new array of names where only the first letter is capitalized.

let arr = ["alice", "bob", "charlie"]

let capitalizedArr = arr.map(n => n[0].toUpperCase() + n.slice(1, n.length))

console.log(capitalizedArr)