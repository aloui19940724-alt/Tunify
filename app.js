const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.toggle("active");
});

document.addEventListener("click", (e) => {

    if (
        sidebar.classList.contains("active") &&
        !sidebar.contains(e.target) &&
        e.target !== menuBtn
    ) {
        sidebar.classList.remove("active");
    }

});

async function goToProfile() {

    const {
        data: { session }
    } = await supabaseClient.auth.getSession();

    if (session) {
        window.location.href = "profile.html";
    } else {
        window.location.href = "login.html";
    }

}
async function loadProducts() {

  const { data, error } = await supabaseClient
    .from("products")
    .select("*");

  if (error) {
    console.error(error);
    return;
  }

  const productsGrid = document.getElementById("productsGrid");

  productsGrid.innerHTML = "";

  data.forEach(product => {

    productsGrid.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p class="price">${product.price} د.ت</p>
        <button onclick="viewProduct('${product.id}')">
          عرض المنتج
        </button>
      </div>
    `;
  });

}

function viewProduct(id){
  localStorage.setItem("productId", id);
  window.location.href = "product.html";
}

loadProducts();
