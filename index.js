const stars = document.querySelectorAll(".fa-star");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
let count = document.getElementById("count");
const productImg = document.querySelector(".small-img");
const mainImg = document.querySelector(".main-img");
const btns = document.querySelectorAll(".changeBtn");
const addToCartBtn = document.querySelector(".add-to-cart-btn");
const cartCount = document.querySelector(".number-cart");
const shadowDiv = document.querySelector(".for-shadow");
const cart = document.querySelector(".cart-container");
const sidebar = document.querySelector("aside");
const closeSidebarBtn = document.querySelector(".fa-x");
const quantity = document.querySelector("#product-quant");
const price = document.querySelector(".price");
const totalPrice = document.querySelector(".cart-total");
const boughtProduct = document.querySelector(".bought-product");
const emptySec = document.querySelector(".empty");

const products = [
  {
    id: 1,
    img: "images/yeshtery1.jpg",
  },
  {
    id: 2,

    img: "images/yeshtery2.jpg",
  },
  {
    id: 3,
    img: "images/yeshtery3.jpg",
  },
  {
    id: 4,
    img: "images/yeshtery4.jpg",
  },
  {
    id: 5,
    img: "images/yeshtery5.jpg",
  },
];

let index = 0;

const newProduct = () => {
  productImg.src = products[index].img;
  mainImg.src = products[index].img;
};

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("nextBtn")) {
      if (index < products.length - 1) {
        index += 1;
      } else {
        index = 0;
      }
    } else if (styles.contains("prevBtn")) {
      if (index > 0) {
        index -= 1;
      } else {
        index = products.length - 1;
      }
    }
    newProduct();
  });
  newProduct();
});

const activateStars = (index) => {
  stars.forEach((star, i) => {
    if (i < index + 1) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
};

stars.forEach((star, index) => {
  star.addEventListener("click", () => activateStars(index));
});

increase.addEventListener("click", () => {
  count.innerText = Number(count.innerText) + 1;
});

decrease.addEventListener("click", () => {
  if (Number(count.innerText) > 0) {
    count.innerText = Number(count.innerText) - 1;
  }
});

addToCartBtn.addEventListener("click", () => {
  cartCount.innerText = Number(cartCount.innerText) + 1;
  quantity.innerText = cartCount.innerText;
  totalPrice.innerText =
    Number(quantity.innerText) * Number(price.innerText) + " EGY";
  console.log(totalPrice.innerText);
});

cart.addEventListener("click", () => {
  sidebar.classList.add("open");
  shadowDiv.classList.add("add-shadow");
  if (Number(quantity.innerText) > 0) {
    boughtProduct.classList.remove("no-item");
    emptySec.classList.add("hide");
  }
});

closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
  shadowDiv.classList.remove("add-shadow");
});

shadowDiv.addEventListener("click", () => {
  sidebar.classList.remove("open");
  shadowDiv.classList.remove("add-shadow");
});
