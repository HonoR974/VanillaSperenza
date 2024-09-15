let linkMenu = new Map();
linkMenu.set("Accueil", "index.html");
linkMenu.set("Produits", "productList.html");
linkMenu.set("Logs", "log.html");

const iconPath = "../assets/icon/logo.png";

document.addEventListener("DOMContentLoaded", function () {

/**
 * 
 * for (let [key, value] of map) {
    console.log(key, value);
}
 */

  const header = document.getElementsByTagName("header");

  const iconSide = document.createElement("div");
  iconSide.className = "icon-side";

  const aSide = document.createElement("a");
  aSide.href = "index.html";

  const icon = document.createElement("img");
  icon.className = "icon";
  icon.src = "../assets/icon/logo.png";

  aSide.appendChild(icon);
  iconSide.appendChild(aSide);
  header.appendChild(iconSide);
  
});



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
