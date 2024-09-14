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

//------------------- Product list



//retourne les produits pour la liste
function getProductList() {


    window.location.href = "productList.html";
}
