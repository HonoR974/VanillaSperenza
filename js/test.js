// Sélection des éléments


//const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");
const sidebarContainer = document.getElementById("sidebar-container");
const sidebar = document.getElementById("sidebar");

const opentBtnPanier = document.getElementById("panier"); 

// Ouvrir la sidebar
 /*
openBtn.addEventListener("click", () => {
  console.log("appel click");
  sidebarContainer.classList.add("active");
  sidebar.classList.add("active");
});
*/
/**/
opentBtnPanier.addEventListener("click", () => {
    console.log("appel click 2");
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
  if (event.target === sidebarContainer) {
    // Vérifie si on clique en dehors de la sidebar
    sidebarContainer.classList.remove("active");
    sidebar.classList.remove("active");
  }
});



function productList() {
  window.location.href = "productList.html";
}
