let content = document.getElementById("content")
let feedLink = document.getElementById("feedLink")
let regLink = document.getElementById("regLink")
let authLink = document.getElementById("authLink")

feedLink.addEventListener("click", (e) => {
  e.preventDefault()
  loadFeed()
})

regLink.addEventListener("click", (e) => {
  e.preventDefault()
  content.innerHTML = `
    <h2>Registration</h2>
    <form>
      <input type="text" placeholder="Username"><br><br>
      <input type="email" placeholder="Email"><br><br>
      <input type="password" placeholder="Password"><br><br>
      <button type="submit">Register</button>
    </form>
  `
})

authLink.addEventListener("click", (e) => {
  e.preventDefault()
  content.innerHTML = `
    <h2>Authorization</h2>
    <form>
      <input type="text" placeholder="Username"><br><br>
      <input type="password" placeholder="Password"><br><br>
      <button type="submit">Login</button>
    </form>
  `
})

function loadFeed() {
  content.innerHTML = "<h2>Loading feed...</h2>"
  fetch("https://dummyjson.com/posts")
    .then(res => res.json())
    .then(data => {
      content.innerHTML = "<h2>News Feed</h2>"
      data.posts.forEach(post => {
        let postDiv = document.createElement("div")
        postDiv.className = "post";
        postDiv.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <small>❤️ ${post.reactions} reactions</small>
        `
        content.appendChild(postDiv)
      })
    })
    .catch(err => {
      content.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`
    });
}

loadFeed()