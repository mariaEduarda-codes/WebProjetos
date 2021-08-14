const banner0 = document.querySelector(".banner0");
const banner1 = document.querySelector(".banner1");
const banner2 = document.querySelector(".banner2");
const banner3 = document.querySelector(".banner3");

const ctrl0 = document.querySelector(".ctrl0");
const ctrl1 = document.querySelector(".ctrl1");
const ctrl2 = document.querySelector(".ctrl2");
const ctrl3 = document.querySelector(".ctrl3");

ctrl0.addEventListener("click", function(){
  banner0.classList.remove("hidden");
  banner1.classList.add("hidden");
  banner2.classList.add("hidden");
  banner3.classList.add("hidden");
});

ctrl1.addEventListener("click", function (){
  banner0.classList.add("hidden");
  banner1.classList.remove("hidden");
  banner2.classList.add("hidden");
  banner3.classList.add("hidden");
});

ctrl2.addEventListener("click", function (){
  banner0.classList.add("hidden");
  banner1.classList.add("hidden");
  banner2.classList.remove("hidden");
  banner3.classList.add("hidden");
});

ctrl3.addEventListener("click", function (){
  banner0.classList.add("hidden");
  banner1.classList.add("hidden");
  banner2.classList.add("hidden");
  banner3.classList.remove("hidden");
});
