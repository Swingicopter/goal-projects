function calculateBMI() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    let result = document.getElementById('classification') 
    
    weight = parseFloat(weight)
    height = parseFloat(height)
    
    height = height / 100
    let bmi = weight / (height * height)

    if (bmi < 18.5) {
        result.textContent = bmi + " (Underweight)"
    }
    else if (bmi < 25) {
        result.textContent = bmi + " (Normal)"
    }
    else if (bmi < 30) {
        result.textContent = bmi + " (Overweight)"
    }
    else if (bmi < 35) {
        result.textContent = bmi + " (Obese)"
    }
    else {
        result.textContent = bmi + " (Extremely Obese)"
    }
}