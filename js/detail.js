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



//fais une verification du client
document.addEventListener("DOMContentLoaded", function () {});


//me test 
/*
async function me() {
  try {
    const response = await fetch("http://localhost:8080/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Nécessaire pour envoyer le cookie JWT
    });

    if (!response.ok) {
      throw new Error("Failed to fetch protected data");
    }

    const data = await response.json();
    console.log("Protected data:", data);
  } catch (error) {
    console.error("Error fetching protected data:", error);
  }
}

*/