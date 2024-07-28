const BASE_URL = "http://localhost:8080";

/* -------------- Menu Begin  -------------------*/
const menu = document.getElementById("menu");
const iconSide = document.querySelector(".iconSide");
const link = document.querySelector(".link");

showMenuIn3Sec();

function showMenuIn3Sec() {
  let index = 0;
  for (let i = 0; i < 7; i++) {
    console.log("For");
    setTimeout(() => {
      index += 3;
      iconSide.style.fontSize = index + "px";
      link.style.fontSize = index + "px";
    }, 2000);
  }
}

/* -------------- Menu  End -------------------*/

/* -------------- Carousel begin  -------------------*/

//Apparition des elements pour le carousel 
carousel();
function carousel() {

  fetch(BASE_URL+"/api/product/all")
  .then((res) => res.json())
  .then(res =>{
    const cardCarouselDiv = document.getElementById('carousel');

    let i =0; 
    res.forEach(product => {
      i++;
  
      const productDiv = document.createElement('div');
   
      productDiv.classList.add('carousel-item');
 
      //Ajout du nom du produit 
      const nomProduct = document.createElement('h2');
      nomProduct.textContent = `Name : ${product.name}`;
      productDiv.appendChild(nomProduct);

      //Ajout du prix 
     
      const prixProduct = document.createElement('p');
      prixProduct.textContent = `prix : ${product.prix}`;
      nomProduct.appendChild(prixProduct);

      const iterateNumber = document.createElement('p');
      iterateNumber.textContent = `tour : ${i}`;
      nomProduct.appendChild(iterateNumber);

      cardCarouselDiv.appendChild(productDiv);
    });
  });
}


/* -------------- Carousel end  -------------------*/
