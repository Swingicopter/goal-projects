let ul = document.getElementById("list")
let list = ["Yes", "No", "Maybe"]

for (let i = 0; i < list.length; i ++) {
    let li = document.createElement("li")
    let text = document.createTextNode(list[i] + String(i))
    li.appendChild(text)

    ul.appendChild(li)
}