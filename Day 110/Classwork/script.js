console.log(5)

let div = document.getElementById("list")
let list = ["Yes", "No", "Maybe"]

for (let i = 0; i < list.length; i ++) {
    let text = document.createTextNode(list[i] + String(i))
    div.appendChild(text)
}