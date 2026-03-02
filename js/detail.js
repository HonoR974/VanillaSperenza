 let idProduct;

const BASE_URL = "http://localhost:8080";

//affiche les informations du product demandé
document.addEventListener("DOMContentLoaded", function () {
  // Récupérer les données du local storage
  var productInfo = localStorage.getItem("productInfo");

  if (productInfo) {
    var productData = JSON.parse(productInfo);
    // Afficher les informations

    //enregistre l'oid
    idProduct = productData.id;
   // window.idProduct = idProduct;
    console.log("id " + idProduct); 

    //title
    const title = document.getElementById("titleDetail");
    title.innerHTML = productData.name;

    //image
    const divImage = document.getElementById("photo");
    divImage.innerHTML = "";

    const image = document.createElement("img");
    image.src = productData.pathImage;
    divImage.appendChild(image);

    //description
    const description = document.getElementById("description");
    description.innerHTML = productData.description;

    //prix
    const prix = document.getElementById("prix");
    prix.innerHTML = productData.prix + "€";

    

  } else {
    // Gérer le cas où il n'y a pas de données dans le local storage
    var detailsContainer = document.getElementById("detailsContainer");
    detailsContainer.innerHTML = `<p>Aucune information disponible.</p>`;
  }
});


window.addEventListener("load", function() {

  const btn = document.getElementById("btnDetail");

  if (!btn) {
    console.log("Bouton introuvable !");
    return;
  }

  btn.addEventListener("click", function() {
    console.log("addEvent  from detail");
    addProductToPanier(); 
  
  });

});



function addProductToPanier() {
  console.log("addProductToPanier from detail");

  const input = document.getElementById("quantity");

  if (!input) {
    console.log("Input quantity introuvable !");
    return;
  }

  const quantity = parseInt(input.value);

  if (isNaN(quantity) || quantity < 1) {
    alert("Quantité invalide");
    return;
  }

  console.log("Quantité validée :", quantity);
  addProductToPanierWithQuantity(quantity); 
}

function addProductToPanierWithQuantity( quantity) {

  
  getPanierfromLocalStorage();
  //cherche le produit dans le localStorage
  var productInfo = JSON.parse(localStorage.getItem("productInfo"));

  // Vérifie si le produit existe déjà dans le panier
  let existingProduct = products.find(
    (product) => idProduct === productInfo.id
  );
  if (existingProduct) {
    // Si le produit existe déjà, augmente la quantité
    existingProduct.quantite = quantity;
  } else {
    // Sinon, ajoute un nouveau produit
    let productDetail = new Product(
      idProduct,
      productInfo.name,
      productInfo.prix,
      quantity,
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

