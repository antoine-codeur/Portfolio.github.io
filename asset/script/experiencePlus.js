document.addEventListener("DOMContentLoaded", function () {
    const voirPlusBtn = document.getElementById("voirPlusBtn");
    const loading = document.getElementById("loading");
    const experiences = document.querySelectorAll('.experiences-section .experience');

    // Masque toutes les expériences sauf les deux premières
    for (let i = 3; i < experiences.length; i++) {
        experiences[i].style.display = "none";
    }

    voirPlusBtn.addEventListener("click", function () {
        loading.style.display = "block";

        setTimeout(function () {
            // Affiche toutes les expériences
            for (let i = 3; i < experiences.length; i++) {
                experiences[i].style.display = "block";
            }

            // Masque le bouton "Voir Plus"
            voirPlusBtn.style.display = "none";
            loading.style.display = "none";
        }, Math.floor(Math.random() * 675));
    });
});
