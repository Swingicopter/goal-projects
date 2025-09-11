// indexOf აბრუნებს სად არის სტრინგში ეს მნიშვნელობა ასე:
let text = "Hello world, welcome to the universe.";
text.indexOf("e");

// შეგვიძლია მივუთითოთ საიდან დაიწყოს ძიება:
let text2 = "Hello world, welcome to the universe.";
text.indexOf("e", 5);

// lastIndexOf არის indexOf-სავით, მაგრამ პირველის მაგივრად, ეძებს სად არის ბოლო იგივე მნიშვნელობა.
let text3 = "ნელა ზვიადი, არ შეგეშალოს ხელი.";
let result = text.lastIndexOf("ხელი");

// includes, მეთოდი, რომელიც გვეუბნება არის თუ არა სიაში მითითებული მნიშვნელობა.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango");