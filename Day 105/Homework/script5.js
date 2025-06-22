let timebomb = document.getElementById("timer")

function timerFunc(){
    timebomb.textContent = String(Number(timebomb.textContent) - 1)
}

let timer = setTimeout(timerFunc, 10)

document.body.style.backgroundImage = "Explosion.gif"