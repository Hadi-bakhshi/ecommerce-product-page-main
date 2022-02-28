// elements
const cartBtn = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart-dropdown");
const sideBar = document.querySelector(".sidebar-wrapper");
const sideBarClose = document.getElementById("close");
const menuBtn = document.getElementById("menu-btn");
const section = document.querySelector(".p-section");
const cartList = document.querySelector(".dropdown-items");
const addCartBtn = document.getElementById("addtocart");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const counter = document.querySelector(".count-number");
const badge = document.querySelector(".cart-item-number");

let product = {
  name: "Fall Limited Edition ...",
  price: "125",
  quantity: 0,
};
counter.innerHTML = product.quantity;

// Event listeners
menuBtn.addEventListener("click", () => {
  sideBar.style.display = "block";
  section.style.filter = "blur(5px)";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 925) {
    section.style.filter = "none";
  } else if (sideBar.style.display === "block") {
    section.style.filter = "blur(5px)";
  }
});

section.addEventListener("click", closeMenu);
sideBarClose.addEventListener("click", closeMenu);

cartBtn.addEventListener("click", () => {
  cart.classList.toggle("deactive-dropdown");
});

addCartBtn.addEventListener("click", addProduct);

// add quantity to product object and cart
plus.addEventListener("click", () => {
  product.quantity++;
  counter.innerHTML = product.quantity;
});

// minus cart item and quantity
minus.addEventListener("click", () => {
  if (product.quantity > 0) {
    product.quantity--;
    counter.innerHTML = product.quantity;
  }
});

// Functions

function closeMenu() {
  sideBar.style.display = "none";
  section.style.filter = "blur(0px)";
}

function addProduct() {
  product.quantity++;
  counter.innerHTML = product.quantity;
  let cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `<div class="pcart-wrapper">
  <img src="./images/image-product-4.jpg" alt="product">
    <div class="title-amount">
      <h4>${product.name}</h4>
      <div class="amount-price">
      <span>$${product.price}</span>
      <p class="item-amount">x${product.quantity}</p>
      <span class="total-amount"></span>
      </div>
      </div>
      <div class="remove-container">
      <span class="remove-item"><img src="./images/icon-delete.svg"></span>
    </div>
    </div>
    <div class="check-btn">
    <button>Checkout</button>
    </div>
  `;
  // remove p tag from cart
  cartList.removeChild(cartList.lastElementChild);
  cartList.appendChild(cartItem);
  // add badge number
  badge.innerHTML = product.quantity;

  // remove item from cart
  let removeItem = document.querySelector(".remove-item");
  removeItem.addEventListener("click", () => {
    cartList.removeChild(cartItem);
    counter.innerHTML = 0;
    badge.innerHTML = 0;
    product.quantity = 0;
    // show a message if cart is empty
    if (cartList.children.length === 0) {
      let emptyCart = document.createElement("p");
      emptyCart.classList.add("empty-cart");
      emptyCart.innerHTML = "Your cart is empty";
      cartList.appendChild(emptyCart);
    }
  });
  // total amount
  let totalAmount = document.querySelector(".total-amount");
  totalAmount.innerHTML = `$${product.price * product.quantity}`;
}
