let div = document.querySelector("div")
div.addEventListener("pointerover", changeColors)
div.addEventListener("pointerout", revertColors)

function changeColors(){
    div.style.backgroundColor = "green"
}

function revertColors(){
    div.style.backgroundColor = "white"
}