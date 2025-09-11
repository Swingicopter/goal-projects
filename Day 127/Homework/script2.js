let productsContainer = document.getElementById("products");
let cartCount = document.getElementById("cart-count");
let cart = 0;

async function fetchProducts() {
  try {
    let res = await fetch("https://api.escuelajs.co/api/v1/products");
    let products = await res.json();

    products.slice(0, 20).forEach(p => {
      let card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${p.images[0]}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p class="price">$${p.price}</p>
        <button><i class="fas fa-cart-plus"></i> Add to Cart</button>
      `;

      let btn = card.querySelector("button");
      btn.addEventListener("click", () => {
        cart++;
        cartCount.textContent = cart;
      });

      productsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();