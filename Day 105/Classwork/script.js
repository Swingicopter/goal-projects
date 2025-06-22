let startButton = document.getElementById("start")
let stopButton = document.getElementById("stop")
let stopwatch = document.getElementById("stopWatch")
let timer = setInterval(add, 1)

function add(){
    stopwatch.textContent = String(stopwatch.textContent + 0.001)
}

startButton.onclick = function(){
    timer = setInterval(add, 1)
}

stopButton.onclick = function(){
    clearInterval(timer)
}