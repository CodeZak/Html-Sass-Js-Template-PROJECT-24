function effect() {
    var effects = document.querySelectorAll(".effect");
    for (var i = 0; i < effects.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = effects[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight) {
            effects[i].classList.add("active");
        } /* else {
            reveals[i].classList.remove("active");
        } */
    }
}

effect();

window.addEventListener("scroll", effect);
