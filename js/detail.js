const BASE_URL = "http://localhost:8080";

document.addEventListener("DOMContentLoaded", function () {
    // Récupérer les données du local storage
    var productInfo = localStorage.getItem('productInfo');

    if (productInfo) {
     
      var productData = JSON.parse(productInfo);
      console.log("product data " + productData );
      // Afficher les informations
      var detailsContainer = document.getElementById("detailsContainer");
      const reussite = document.createElement('h2');
      reussite.innerHTML = "reussite";

      const name = document.createElement('h1');
      name.innerHTML = productData.name;

      detailsContainer.appendChild(reussite);
      detailsContainer.appendChild(name);


    } else {
      // Gérer le cas où il n'y a pas de données dans le local storage
      var detailsContainer = document.getElementById("detailsContainer");
      detailsContainer.innerHTML = `<p>Aucune information disponible.</p>`;
    }
  });


 /* -------------- Menu Begin  -------------------*/
const menu = document.getElementById("menu");
const iconSide = document.querySelector(".iconSide");
const link = document.querySelector(".link");

showMenuIn3Sec();
//changer la rapidité pour les test 
//a redefinir 
function showMenuIn3Sec() {
  let index = 0;
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      index += 3;
      iconSide.style.fontSize = index + "px";
      link.style.fontSize = index + "px";
    }, 1000);
  }
}

/* -------------- Menu  End -------------------*/ 