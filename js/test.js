// Fonction pour générer le menu
function createMenu() {
  // Le code HTML du menu
  const menuHTML = `
      <!-- Menu -->
      <header>
          <nav>
              <div class="iconSide">
                  <a href="index.html">
                      <img class="icon" src="../assets/icon/logo.png" alt="logo icon">
                  </a>
              </div>
              <div class="link">
                  <ul>
                      <li><a href="index.html">Accueil</a></li>
                      <li><a href="productList.html">Produits</a></li>
                  </ul>
              </div>
              <div>
                  <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
              </div>
              <div id="log">
                  <a href="log.html">
                      <img class="icon" src="../assets/icon/login.png" alt="login icon">
                  </a>
              </div>
          </nav>
      </header>
  `;

  // Sélectionner l'élément dans lequel le menu sera inséré
  const menuContainer = document.getElementById("menu-container");

  // Insérer le menu dans le conteneur
  menuContainer.innerHTML = menuHTML;
}

// Attendre le chargement complet de la page pour exécuter la fonction
window.addEventListener("DOMContentLoaded", createMenu);

window.addEventListener("DOMContentLoaded", showMenuIn3Sec);

function showMenuIn3Sec() {
  const iconSide = document.querySelector(".iconSide");
  const link = document.querySelector(".link");
  let index = 0;
  for (let i = 0; i < 7; i++) {
    setTimeout(() => {
      index += 3;
      iconSide.style.fontSize = index + "px";
      link.style.fontSize = index + "px";
    }, 2000);
  }
}
