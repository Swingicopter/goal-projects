function person(firstname, surname, year) {
    this.name = firstname
    this.lastname = surname
    this.age = year
}

const person1 = new person("George", "Washington", 293)
const person2 = new person("Joseph", "Biden", 82)

console.log(person1, person2)