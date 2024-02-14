document.addEventListener("DOMContentLoaded", function() {
    const burgerBtn = document.getElementById('burger-btn');
    const nav = document.querySelector('nav');

    burgerBtn.addEventListener('click', function() {
        nav.classList.toggle('open');
        burgerBtn.classList.toggle('open');
    });
});
