const menuButton = document.querySelector(".menuButton-smallScreen");
const mega_menu = document.querySelector(".mega_menu");

menuButton.addEventListener("click", () => {
    if (mega_menu.classList.contains("show")) {
        mega_menu.classList.remove("show");
    } else {
        mega_menu.classList.add("show");
    }
});

mega_menu.addEventListener("click", () => {
    mega_menu.classList.remove("show");
});
window.addEventListener("resize", () => {
    mega_menu.classList.remove("show");
});
