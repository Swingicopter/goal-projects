let count = 0

function decrease(){
    count -= 1
    document.getElementById("counter").textContent = count
}

function reset(){
    count = 0
    document.getElementById("counter").textContent = count
}

function increase(){
    count += 1
    document.getElementById("counter").textContent = count
}