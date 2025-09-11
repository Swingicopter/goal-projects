let todoList = document.getElementById("todo-list");

async function fetchTodos() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let todos = await res.json();

    todos.slice(0, 20).forEach(todo => {
      let li = document.createElement("li");
      li.textContent = todo.title;

      if (todo.completed) {
        li.classList.add("completed");
      }

      todoList.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

fetchTodos();
