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

const myHeaders = new Headers();
const get = {
  method :"GET", 
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors"
};

carousel();
function carousel() {
  fetch(BASE_URL + "/api/product/carousel", get)
    .then((res) => res.json())
    .then((res) => {
      const cardList = document.querySelector(".card-list");
      res.forEach((product) => {
        const productDiv = document.createElement("div");

        //productDiv.classList.add('carousel-item');
        productDiv.className = "card-item swiper-slide";

        //Ajout de l'image
        const img = document.createElement("img");
        img.src = product.pathImage;
        img.className = "product-image";

        productDiv.appendChild(img);

        //ajout du nom
        const name = document.createElement("h2");
        name.className = "product-name";
        name.textContent = product.name;
        productDiv.appendChild(name);

        //ajout du prix
        const prix = document.createElement("p");
        prix.className = "product-prix";
        prix.textContent = product.prix + "€";
        productDiv.appendChild(prix);

        //ajout du bouton
        const button = document.createElement("button");
        button.className = "message-button";
        button.textContent = "Voir "; 

        // Assigner une méthode au bouton
        button.onclick = function () {
          // Envoyer une requête à l'API Spring Boot
          fetch(BASE_URL +  `/api/product/${encodeURIComponent(product.id)}`)
            .then((response) => response.json())
            .then((data) => {
              // Stocker les données dans le local storage
              localStorage.setItem("productInfo", JSON.stringify(data));

              // Rediriger vers la nouvelle page
              window.location.href = "productDetail.html";
            })
            .catch((error) => console.error("Erreur:", error));
        };

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

/* -------------- Carousel end  -------------------*/
