var navMain = document.querySelector(".main-navigation");
var navToggle = document.querySelector(".page-header__toggle");

navMain.classList.remove("main-navigation--nojs");
navToggle.addEventListener("click", function() {
if (navMain.classList.contains("main-navigation--closed")) {
    navMain.classList.remove("main-navigation--closed");
    navToggle.classList.remove("page-header__toggle--closed");
    navMain.classList.add("main-navigation--opened");
    navToggle.classList.add("page-header__toggle--opened");
} else {
    navMain.classList.add("main-navigation--closed");
    navMain.classList.remove("main-navigation--opened");
    navToggle.classList.add("page-header__toggle--closed");
    navToggle.classList.remove("page-header__toggle--opened");
}
})
