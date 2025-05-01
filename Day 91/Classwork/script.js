let weight = Number(prompt("Enter your weight (kg): "))
let height = Number(prompt("Enter your height (cm): "))
let bmi = weight / ((height / 100) * (height / 100))

if (bmi < 18.5) {
    console.log(bmi + " (Underweight)")
}
else if (bmi < 25) {
    console.log(bmi + " (Normal)")
}
else if (bmi < 30) {
    console.log(bmi + " (Overweight)")
}
else if (bmi < 35) {
    console.log(bmi + " (Obese)")
}
else{
    console.log(bmi + " (Extremely Obese)")
}