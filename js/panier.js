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
  if (event.target === sidebarContainer) {
    // Vérifie si on clique en dehors de la sidebar
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

function addProductToPanier() {
  getPanierfromLocalStorage();
  //cherche le produit dans le localStorage
  var productInfo = JSON.parse(localStorage.getItem("productInfo"));

  let quantityToAdd = parseInt(document.getElementById("quantity").value);
  // Vérifie si le produit existe déjà dans le panier
  let existingProduct = products.find(
    (product) => product.id === productInfo.id
  );
  if (existingProduct) {
    // Si le produit existe déjà, augmente la quantité
    existingProduct.quantite += quantityToAdd;
  } else {
    // Sinon, ajoute un nouveau produit
    let productDetail = new Product(
      productInfo.id,
      productInfo.name,
      productInfo.prix,
      parseInt(document.getElementById("quantity").value),
      productInfo.pathImage
    );
    products.push(productDetail);
  }

  addPanierToLocalStorage();
}

function addPanierToLocalStorage() {
  localStorage.setItem("panier", JSON.stringify(products));
}

function getPanierfromLocalStorage() {
  products = JSON.parse(localStorage.getItem("panier")) || [];
}

function getPanierContent() {

  //containerDetail
  const contentPanier = document.getElementById("productFromPanier");
  products = JSON.parse(localStorage.getItem("panier")) || [];

  products.forEach((product) => {
    //creation de la ligne
    const line = document.createElement("div");
    line.className = "lineProduct";

    //image
    const divImage = document.createElement("div");
    divImage.className = "contentImgProduct";
    divImage.innerHTML = "";

    const imgProduct = document.createElement("img");
    imgProduct.className = "imgLineProduct";
    imgProduct.src = product.pathImage;

    divImage.appendChild(imgProduct);
    line.appendChild(divImage);

    //titre & quantite
    const contentProduct = document.createElement("div");

    //title
    const titleProduct = document.createElement("div");
    titleProduct.className = "titleProduct";

    titleProduct.innerHTML = product.name;

    contentProduct.appendChild(titleProduct);

    //Quantity
    const contentQuantity = document.createElement("div");
    contentQuantity.className = "number-input";

    const btnDecrease = document.createElement("button");
    btnDecrease.className = "button-number decrease";
    btnDecrease.innerHTML = "-";

    const btnIncrease = document.createElement("button");
    btnIncrease.id = "increase";
    btnIncrease.className = "button-number increase";
    btnIncrease.innerHTML = "+";

    btnDecrease.addEventListener("click", () => {
      console.log("decrease button"); 
      let currentValue = parseInt(numberInput.value);
      if (currentValue > parseInt(numberInput.min)) {
        numberInput.value = currentValue - 1;
      }
    });

    btnIncrease.addEventListener("click", () => {
      console.log("increase button"); 
      let currentValue = parseInt(numberInput.value);
      if (currentValue < parseInt(numberInput.max)) {
        numberInput.value = currentValue + 1;
      }
    });

    const numberInput = document.createElement("input");
    numberInput.className = "quantityNumber";
    numberInput.type = numberInput;
    numberInput.value = product.quantite;
    numberInput.min = 0;
    numberInput.max = 100;

    contentQuantity.appendChild(btnDecrease);
    contentQuantity.appendChild(numberInput);
    contentQuantity.appendChild(btnIncrease);

    contentProduct.appendChild(contentQuantity);

    line.appendChild(contentProduct);

    //prix & croix de suppression 
    const contentRight = document.createElement("div"); 
    
    const croixSuppression = document.createElement("button"); 
    croixSuppression.className =  "croixSuppression"; 
    croixSuppression.innerHTML = "&times";
    
    croixSuppression.onclick  = () => deleteArticleFromPanier(product.id); 

    const prix = document.createElement("div");
    prix.innerHTML = product.prix + "€";

    contentRight.appendChild(croixSuppression); 
    contentRight.appendChild(prix); 

    line.appendChild(contentRight);

    contentPanier.appendChild(line);
  });
}

function deleteArticleFromPanier(id) {
  console.log("Suppression de l'article avec l'id : " + id);

  // Filtrer le produit à supprimer
  products = products.filter((product) => product.id !== id);

  // Met à jour le localStorage
  addPanierToLocalStorage();

  // Met à jour l'affichage du panier
  deletePanierContent();
  getPanierContent();

}

function deletePanierContent() {
  const contentPanier = document.getElementById("productFromPanier");
  contentPanier.innerHTML = "";
}
