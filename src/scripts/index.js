var burger = document.getElementById("burger");
var burgerContainer = document.getElementById("burger-container");
var burgerPoints = burgerContainer.getElementsByClassName("menu__link");

function toggleClassesBecauseBurger() {
  burgerContainer.classList.toggle("menu__container_active");
  burger.classList.toggle("menu__burger_active");
  // prevent scroll when our menu is opened
  document.body.style.overflow =
    document.body.style.overflow === "hidden" ? "auto" : "hidden";
  // to prevent little horizontal reflow (because we hide scroll)
  document.body.style.paddingRight =
    document.body.style.overflow === "hidden" ? "12px" : "0";
}

function burgerListener(event) {
  event.preventDefault();
  toggleClassesBecauseBurger();
}

function menuListener(event) {
  event.preventDefault();
  toggleClassesBecauseBurger();
}

function listenBurgerPoints() {
  Array.prototype.forEach.call(burgerPoints, function (burger) {
    burger.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      toggleClassesBecauseBurger();
    });
  });
}

burger.addEventListener("click", burgerListener);

listenBurgerPoints();
