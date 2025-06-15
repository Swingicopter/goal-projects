let body = document.body
let counter = document.getElementById("counter")
let image = document.querySelector("img")
image.addEventListener("mouseover", bigger)
image.addEventListener("mouseout", smaller)

function add(){
    counter.textContent = Number(counter.textContent) + 1
}

function bigger(){
    image.width += 200
}

function smaller(){
    image.width -= 200
}

body.onmousedown = function(){
    body.style.backgroundColor = "black"
    counter.style.color = "white"
}

body.onmouseup = function(){
    body.style.backgroundColor = "white"
    counter.style.color = "black"
}