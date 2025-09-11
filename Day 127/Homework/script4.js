let searchBtn = document.getElementById("searchBtn");
let usernameInput = document.getElementById("username");
let result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  let username = usernameInput.value.trim();
  if (username === "") {
    result.innerHTML = "<p>Please enter a username.</p>";
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    })
    .then(user => {
      result.innerHTML = `
        <div class="card">
          <img src="${user.avatar_url}" alt="${user.login}">
          <h2>${user.login}</h2>
          <p>${user.bio ? user.bio : "No bio available"}</p>
          <p>📂 Public Repos: ${user.public_repos}</p>
          <a href="${user.html_url}" target="_blank">View Profile</a>
        </div>
      `;
    })
    .catch(error => {
      result.innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
});