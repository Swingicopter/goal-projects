checkboxStatus1 = document.getElementById("cb1").checked
checkboxStatus2 = document.getElementById("cb2").checked
submitBtn = document.getElementById("submitBtn")
text = document.getElementById("p1").textContent

function submitted(){
    if (checkboxStatus1 === true && checkboxStatus2 === true) {
        text = "result of the operation is true/false."
        console.log("result of the operation is true/false.")
    }
}

submitBtn.onclick() = submitted()