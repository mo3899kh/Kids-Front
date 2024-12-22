let myCart = document.querySelector(".my-cart");
let myCartCard = document.querySelector(".my__cart");
let mycartOverly = document.querySelector(".mycart__overly");

myCart.addEventListener("click", () => {
  myCartCard.classList.toggle("active");
  mycartOverly.classList.toggle("active");
});

mycartOverly.addEventListener("click", () => {
  myCartCard.classList.toggle("active");
  mycartOverly.classList.toggle("active");
});

let sizeGuide = document.querySelector(".size-guide");
let sizeGuide1 = document.querySelector(".size-guide1");
let size__guide = document.querySelector(".size__guide");
let size_guide_close = document.querySelector(".size-guide-close");
let overlay = document.querySelector(".overlay");
sizeGuide.addEventListener("click", () => {
  size__guide.classList.toggle("active");
  overlay.classList.toggle("active");
});
sizeGuide1.addEventListener("click", () => {
  size__guide.classList.toggle("active");
  overlay.classList.toggle("active");
});
size_guide_close.addEventListener("click", () => {
  size__guide.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
  size__guide.classList.toggle("active");
  overlay.classList.toggle("active");
});
