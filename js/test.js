// Sélectionner le bouton et l'élément à cacher/montrer
const toggleButton = document.getElementById('toggleButton');
const myElement = document.getElementById('myElement');
myElement.style.display = 'none';


// Ajouter un écouteur d'événements pour le clic sur le bouton
toggleButton.addEventListener('click', function() {
    // Vérifier si l'élément est actuellement caché
    if (myElement.style.display === 'none') {
        // Si l'élément est caché, on le montre
        myElement.style.display = 'block';
        // Changer le texte du bouton
        toggleButton.textContent = 'Cacher l\'élément';
    } else {
        // Si l'élément est montré, on le cache
        myElement.style.display = 'none';
        // Changer le texte du bouton
        toggleButton.textContent = 'Afficher l\'élément';
    }
});
