let form = document.querySelector('form')
let toDoList = document.getElementById('todolist')

let input = document.getElementById("todolist");
let button = document.querySelector("input[type=button]");
let ul = document.createElement("ul");
document.body.appendChild(ul);

// Load existing tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Add new task
button.addEventListener("click", () => {
    let task = input.value.trim();
    if (task) {
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        input.value = "";
        renderTasks();
    }
});

// Render tasks
function renderTasks() {
    ul.innerHTML = "";
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task;
        ul.appendChild(li);
    });
}