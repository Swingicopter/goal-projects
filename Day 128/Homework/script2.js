let content = document.getElementById("content")
let tagSelect = document.getElementById("tagSelect")
let searchInput = document.getElementById("searchInput")
let searchBtn = document.getElementById("searchBtn")
let sortBtn = document.getElementById("sortBtn")

let posts = []
let filteredPosts = []

function renderPosts(list) {
  content.innerHTML = ""
  if (list.length === 0) {
    content.innerHTML = "<p>No posts found.</p>"
    return
  }

  list.forEach(post => {
    let div = document.createElement("div")
    div.className = "post"
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <small>Tags: ${post.tags.join(", ")}</small><br>
      <small>❤️ ${post.reactions} reactions</small>
    `
    content.appendChild(div)
  })
}

function loadPosts() {
  fetch("https://dummyjson.com/posts")
    .then(res => res.json())
    .then(data => {
      posts = data.posts
      filteredPosts = [...posts]
      renderPosts(filteredPosts)
    });
}

tagSelect.addEventListener("change", () => {
  let selectedTag = tagSelect.value
  if (selectedTag === "") {
    filteredPosts = [...posts]
  } else {
    filteredPosts = posts.filter(post => post.tags.includes(selectedTag))
  }
  renderPosts(filteredPosts);
});

searchBtn.addEventListener("click", () => {
  let query = searchInput.value.trim()
  if (query === "") {
    filteredPosts = [...posts]
    renderPosts(filteredPosts)
    return
  }
  fetch(`https://dummyjson.com/posts/search?q=${query}`)
    .then(res => res.json())
    .then(data => {
      filteredPosts = data.posts
      renderPosts(filteredPosts)
    });
});

sortBtn.addEventListener("click", () => {
  filteredPosts.sort((a, b) => a.title.localeCompare(b.title))
  renderPosts(filteredPosts)
})

loadPosts()