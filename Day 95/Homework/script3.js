let namePrompt = prompt("Enter your name:")
let surnamePrompt = prompt("Enter your surname:")
let agePrompt = Number(prompt("Enter your age:"))
alert("Check the console.")

const person = {
    name: namePrompt,
    surname: surnamePrompt,
    age: agePrompt
}

console.log(person)

person.name = "Giorgi"

console.log(person)