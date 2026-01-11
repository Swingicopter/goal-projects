// Use map to add the string "!" at the end of each word in an array and console.log the new array.

function addExclamationMark(str) {
    return str + '!'
}

const strings = ["apple", "bob", "orange", "rapper"];
const stringsWithExclamationMarks = strings.map(addExclamationMark)

console.log(stringsWithExclamationMarks)