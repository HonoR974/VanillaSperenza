

//affiche les informations du product demandé 
document.addEventListener("DOMContentLoaded", function () {
  // Récupérer les données du local storage
  var productInfo = localStorage.getItem("productInfo");

  if (productInfo) {
    var productData = JSON.parse(productInfo);
    // Afficher les informations
   
   //title 
   const title = document.getElementById("titleDetail");
   title.innerHTML = productData.name; 

    //image
    const divImage = document.getElementById("photo");
    divImage.innerHTML = "";
    
    const image = document.createElement('img');
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


