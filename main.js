const btnAddCar = document.getElementById("btn-add-car");
const number = document.getElementById("number");
const icon = document.getElementById("icon");
const menuCart = document.getElementById("menu-cart");
const iconCartDetails = document.getElementById("icon-cart-details");
const iconCartDetailsClose = document.getElementById("icon-cart-details-close");

const containerPrincipalShop = document.getElementById('container-principal-shop');


const img = document.querySelector(".container-img");
const detailsImg = document.querySelector(".container-text-details");
const cantidadDelete = document.querySelector(".cantidad-delete");
const subtotalDelete = document.querySelector(".subtotal-delete");
const totalDelete = document.querySelector(".total__h5");



btnAddCar.addEventListener("click", addProduct);
icon.addEventListener("click", openAndCloseCart)
iconCartDetails.addEventListener("click", productDelete);
iconCartDetailsClose.addEventListener("click", openShop);


function openShop() {
  menuCart.classList.add("inactive");
  iconCartDetails.classList.remove("inactive");
  containerPrincipalShop.classList.add("inactive");
  containerPrincipalShop.classList.toggle("active");
}

function addProduct() {
  number.classList.remove("inactive");
  img.classList.remove("inactive");
  detailsImg.classList.remove("inactive");
  cantidadDelete.classList.remove("inactive");
  subtotalDelete.classList.remove("inactive");
  totalDelete.classList.remove("inactive");
  iconCartDetails.classList.remove("inactive");
};


function openAndCloseCart() {
  menuCart.classList.toggle("inactive");
  containerPrincipalShop.classList.add("inactive");
  containerPrincipalShop.classList.toggle("active");
  iconCartDetails.classList.remove("inactive");
  menuCart.classList.add("animacionIn");
};

function productDelete() {
  img.classList.add("inactive");
  detailsImg.classList.add("inactive");
  cantidadDelete.classList.add("inactive");
  subtotalDelete.classList.add("inactive");
  totalDelete.classList.add("inactive");
  iconCartDetails.classList.add("inactive");
  number.classList.add("inactive");
};