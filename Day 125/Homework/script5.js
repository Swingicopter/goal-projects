let form = document.querySelector("form")
let div = document.getElementById("div")
let select = document.getElementById("selection")
let clear = document.getElementById("clear")

let savedColor = localStorage.getItem("Color")

if (savedColor) {
    div.style.backgroundColor = savedColor
    select.value = savedColor
}
else {
    div.style.backgroundColor = "white"
}

select.addEventListener("change", () => {
    let chosenColor = select.value
    div.style.backgroundColor = chosenColor
    localStorage.setItem("Color", chosenColor)
})

clear.addEventListener("click", () => {
    localStorage.removeItem("Color")
    select.value = "Red"
    div.style.backgroundColor = "white"
})