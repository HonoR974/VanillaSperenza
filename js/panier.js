// Sélection des éléments
const opentBtnPanier = document.getElementById("panier");
const closeBtn = document.getElementById("closeSidebar");
const sidebarContainer = document.getElementById("sidebar-container");
const sidebar = document.getElementById("sidebar");

// Ouvrir la sidebar
opentBtnPanier.addEventListener("click", () => {
    sidebarContainer.classList.add("active");
    sidebar.classList.add("active");
    getPanierContent(); 
  });

// Fermer la sidebar
closeBtn.addEventListener("click", () => {
    sidebarContainer.classList.remove("active");
    sidebar.classList.remove("active");
    deletePanierContent(); 
});

// Fermer en cliquant en dehors du panier
sidebarContainer.addEventListener("click", (event) => {
    if (event.target === sidebarContainer) { // Vérifie si on clique en dehors de la sidebar
        sidebarContainer.classList.remove("active");
        sidebar.classList.remove("active");
        deletePanierContent(); 
    }
});

class Product {
    id; 
    name; 
    prix; 
    quantite; 
    pathImage; 

    constructor(id, name, prix, quantite, pathImage) {
        this.id = id; 
        this.name = name; 
        this.prix = prix; 
        this.quantite = quantite; 
        this.pathImage = pathImage; 
    }

}

let products = []; 


function addProductToPanier () {
    getPanierfromLocalStorage(); 
    //cherche le produit dans le localStorage 
    var productInfo = JSON.parse(localStorage.getItem("productInfo"));
    let productDetail = new Product(productInfo.id, productInfo.name,
                                    productInfo.prix, 
                                    parseInt(document.getElementById("quantity").value),
                                    productInfo.pathImage); 
     console.log("ajout de ce produit " + productDetail.JSON); 
     
     //ajout à l'array 
     products.push(productDetail); 
     addPanierToLocalStorage(); 
     console.log("products apres ajout " + products.length); 
}

function addPanierToLocalStorage() {

    localStorage.setItem("panier", JSON.stringify(products)); 
}

function getPanierfromLocalStorage() {
    products = JSON.parse(localStorage.getItem("panier")) || [];

}

function getPanierContent() {

    console.log(typeof products); // Vérifie le type
console.log(Array.isArray(products)); // Vérifie si c'est un tableau
console.log(products); // Affiche son contenu


//containerDetail
    const contentPanier = document.getElementById("productFromPanier")
    console.log("products  " + products.length); 
     products = JSON.parse(localStorage.getItem("panier")) || [];

    console.log("products second " + products.length);
    

   products.forEach(product => {

    const title = document.createElement("div"); 
    title.className = "titleProduct" ; 
    

  

    title.innerHTML = product.name +  "  / quantity " + product.quantite; 

    contentPanier.appendChild(title); 
 
   });

}

function deletePanierContent() {
    const contentPanier = document.getElementById("productFromPanier");
    contentPanier.innerHTML = ""; 
}
