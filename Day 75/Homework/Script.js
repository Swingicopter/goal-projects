let button = document.getElementById("btn0")

function changecolors(){
    button.style = "border-radius: 15px; border: 2px white solid; background-color: black; color: white;"
}

function mathoperations(){
    console.log("2d + 6 = " + String(4 + 6))
    console.log("2d = 10 - 6")
    console.log("2d = 4")
    console.log("d = 4 ÷ 2")
    console.log("d = " + String(4 / 2))
    console.log("49 + 70 = " + String(49 + 70))
    console.log("23 × 2 = " + String(23 * 2))
    console.log("1 ÷ ⅟9 = 1 × 9 = " + String(1 / (1 / 9)))
}

mathoperations()