const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".right-navbar");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});