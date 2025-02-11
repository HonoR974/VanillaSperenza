// Sélection des éléments
const opentBtnPanier = document.getElementById("panier");
const closeBtn = document.getElementById("closeSidebar");
const sidebarContainer = document.getElementById("sidebar-container");
const sidebar = document.getElementById("sidebar");

// Ouvrir la sidebar
opentBtnPanier.addEventListener("click", () => {
    sidebarContainer.classList.add("active");
    sidebar.classList.add("active");
  });

// Fermer la sidebar
closeBtn.addEventListener("click", () => {
    sidebarContainer.classList.remove("active");
    sidebar.classList.remove("active");
});

// Fermer en cliquant en dehors du panier
sidebarContainer.addEventListener("click", (event) => {
    if (event.target === sidebarContainer) { // Vérifie si on clique en dehors de la sidebar
        sidebarContainer.classList.remove("active");
        sidebar.classList.remove("active");
    }
});
