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

let arrayId = [];
initArray();

/**
 * Initialise la variable arrayId
 */
function initArray() {
  arrayid = localStorage.getItem("listOidProduct");
  if (arrayid.length != 0) {
  } else {
    //va cherche les infos
    fetch(BASE_URL + "/api/product/all", get)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((product) => {
          arrayId.setItem(product.id);
        });
      });
    localStorage.setItem("listOidProduct", arrayid);
  }
}

function getPrecedentProduct() {
  let index = arrayId.indexOf(idProduct);

  let size = arrayId.length;
  var idTarget;

  if (index != 0) {
    idTarget = arrayId[index--];
  } else if (index == 0) {
    //si l'index est egale a 0 on prend le dernier de la liste
    idTarget = arrayId[size--];
  } else if (index == size--) {
    idTarget = arrayId[0];
  }

  fetch(BASE_URL + `/api/product/${encodeURIComponent(idTarget)}`)
    .then((response) => response.json())
    .then((data) => {
      // Stocker les données dans le local storage
      localStorage.setItem("productInfo", JSON.stringify(data));

      // Rediriger vers la nouvelle page
      window.location.href = "productDetail.html";
    });
}

//Ajoute un produit au client
function addProductToPanier() {

  const requestAddProduct = {

      idProduct :  idProduct
  };

    const postInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Indique que les cookies doivent être inclus
      body: JSON.stringify(requestAddProduct),
      mode: "cors",
    };

    fetch(BASE_URL + "/api/panier/add", postInit) 
    .then((response) => response.json())
    .then((response) => {
      console.log("response " + response); 
    })
    .catch((error) => console.error("Erreur:", error));
}

//fais une verification du client
document.addEventListener("DOMContentLoaded", function () {});

//recupere le panier courant
