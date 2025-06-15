let img = document.querySelector("img")
let button = document.querySelector("button")
button.addEventListener("pointerdown", changeImage)

function changeImage(){
    img.src = "Level04cw.png"
}