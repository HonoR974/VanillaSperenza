const BASE_URL = "http://localhost:8080";

/* -------------- Menu Begin  -------------------*/
const menu = document.getElementById("menu");
const iconSide = document.querySelector(".iconSide");
const link = document.querySelector(".link");

showMenuIn3Sec();

function showMenuIn3Sec() {
  let index = 0;
  for (let i = 0; i < 7; i++) {
 
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
    const cardList =  document.querySelector(".card-list");

    res.forEach(product => {
  
      const productDiv = document.createElement('div');
   
      //productDiv.classList.add('carousel-item');
      productDiv.className = "card-item swiper-slide";

      //Ajout de l'image 
      const img = document.createElement('img');
      img.src = product.pathImage ;
      img.className = "user-image";

      productDiv.appendChild(img);

      //ajout du nom 
      const name = document.createElement('h2');
      name.className = "user-name";
      name.textContent = product.name;
      productDiv.appendChild(name);

      //ajout du prix 
      const prix = document.createElement('p');
      prix.className = "user-profession";
      prix.textContent = product.prix + "€";
      productDiv.appendChild(prix);

      //ajout du bouton 
      const button = document.createElement('button');
      button.className = "message-button";
      button.textContent = "Voir";
      productDiv.appendChild(button);

      cardList.appendChild(productDiv);
    });
  });
}


const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //Responseive BreakPoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

/**
 *  const nomProduct = document.createElement('h2');
      nomProduct.textContent = `Name : ${product.name}`;
      productDiv.appendChild(nomProduct);

      //Ajout du prix 
     
      const prixProduct = document.createElement('p');
      prixProduct.textContent = `prix : ${product.prix}`;
      nomProduct.appendChild(prixProduct);

      const iterateNumber = document.createElement('p');
      iterateNumber.textContent = `tour : ${i}`;
      nomProduct.appendChild(iterateNumber);
 */

/* -------------- Carousel end  -------------------*/
