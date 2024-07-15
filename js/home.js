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

carousel();
function carousel() {
  let product = {
    id : Number, 
    name: String
  }
  let products = [];
 

  fetch(BASE_URL+"/api/product/all")
  .then((res) => res.json())
  .then(res =>{
    const cardCarouselDiv = document.getElementById('cardCarousel');
    cardCarouselDiv.innerHTML = ''; 

    res.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.innerText = `Name : ${product.name}`;
      cardCarouselDiv.appendChild(productDiv);
    });
  });

  
}

/* -------------- Carousel end  -------------------*/
