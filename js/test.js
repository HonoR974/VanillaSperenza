// Sélectionner le bouton et le bandeau
const toggleButton = document.getElementById('toggleButton');
const bandeau = document.getElementById('bandeauVertical');

// Ajouter un événement au clic du bouton
toggleButton.addEventListener('click', () => {
    // Ajouter ou supprimer la classe "open" pour le bandeau
    bandeau.classList.toggle('open');
});
