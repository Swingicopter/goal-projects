let img = document.querySelector("img")
img.addEventListener("click", grow)

function grow(){
    if (img.style.width == "100px") {
        img.style.width = "300px"
    }
    else {
        img.style.width = "100px"
    }
}