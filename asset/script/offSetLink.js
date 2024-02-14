// Récupérer tous les liens de navigation
const navLinks = document.querySelectorAll('nav ul li a');

// Ajouter un écouteur d'événements à chaque lien de navigation
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Empêcher le comportement par défaut du lien
        
        const targetId = this.getAttribute('href').substring(1); // Récupérer l'ID de la cible
        const targetElement = document.querySelector(`#${targetId}`); // Récupérer l'élément cible
        
        if (targetElement) {
            const headerHeight = document.querySelector('#header').offsetHeight; // Hauteur du header
            const headerPaddingTop = parseInt(window.getComputedStyle(document.querySelector('#header')).paddingTop); // Padding top du header
            const headerPaddingBottom = parseInt(window.getComputedStyle(document.querySelector('#header')).paddingBottom); // Padding bottom du header
            const totalPadding = headerPaddingTop + headerPaddingBottom; // Somme des paddings du header
            const targetPosition = targetElement.offsetTop - headerHeight - totalPadding; // Position de la cible avec décalage
            
            // Faire défiler la page jusqu'à la cible avec décalage
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Animation de défilement fluide
            });
        }
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Empêcher le comportement par défaut du lien
        
        const targetId = this.getAttribute('href').substring(1); // Récupérer l'ID de la cible
        const targetElement = document.querySelector(`#${targetId}`); // Récupérer l'élément cible
        
        if (targetElement) {
            const headerHeight = document.querySelector('#header').offsetHeight; // Hauteur du header
            const headerPaddingTop = parseInt(window.getComputedStyle(document.querySelector('#header')).paddingTop); // Padding top du header
            const headerPaddingBottom = parseInt(window.getComputedStyle(document.querySelector('#header')).paddingBottom); // Padding bottom du header
            const totalPadding = headerPaddingTop + headerPaddingBottom; // Somme des paddings du header
            const targetPosition = targetElement.offsetTop - headerHeight - totalPadding; // Position de la cible avec décalage
            
            // Faire défiler la page jusqu'à la cible avec décalage
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Animation de défilement fluide
            });

            // Ajouter la classe temporaire à la section ciblée
            targetElement.classList.add('temp-class');

            // Supprimer la classe temporaire après 1 seconde
            setTimeout(() => {
                targetElement.classList.remove('temp-class');
            }, 1000);
        }
    });
});