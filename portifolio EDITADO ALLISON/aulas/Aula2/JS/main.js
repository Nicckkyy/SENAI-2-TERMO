document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".lessons_container");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const aula = this.getAttribute("data-aula");
            window.location.href = `../${aula}/index.html`;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const iconHome = document.querySelector(".icon_home");

    iconHome.addEventListener("click", function () {
        window.location.href = "../index.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".activity_container");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            const exercicio = card.getAttribute("data-exercicio");

            window.location.href = exercicio;
        });
    });
});
