let toggle = document.getElementById("toggle")
let body = document.body

let savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.className = savedTheme;
}

toggle.addEventListener("click", () => {
    if (body.className === "dark") {
        body.className = "light";
        localStorage.setItem("theme", "light");
    } else {
        body.className = "dark";
        localStorage.setItem("theme", "dark");
    }
});