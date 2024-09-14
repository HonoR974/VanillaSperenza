const BASE_URL = "http://localhost:8080";

const get = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
};


document.addEventListener("DOMContentLoaded", function () {
  fetch(BASE_URL + "/api/product/all", get)
    .then((res) => res.json())
    .then((data) => {
      const cardList = document.querySelector(".card-list");
      data.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.className = "card-item";

        // pathImage
        const img = document.createElement("img");
        img.src = product.pathImage;
        img.className = "product-image";
        productDiv.appendChild(img);

        //name
        const name = document.createElement("h2");
        name.className = "product-name";
        name.textContent = product.name;
        productDiv.appendChild(name);

        //prix
        const prix = document.createElement("p");
        prix.className = "product-prix";
        prix.textContent = product.prix + "€";
        productDiv.appendChild(prix);

        //quantite

        //id avec bouton
        //ajout du bouton
        const button = document.createElement("button");
        button.className = "message-button";
        button.textContent = "Voir ";

        // Assigner une méthode au bouton
        button.onclick = function () {
          // Envoyer une requête à l'API Spring Boot
          fetch(BASE_URL + `/api/product/${encodeURIComponent(product.id)}`)
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
});


