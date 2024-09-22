const BASE_URL = "http://localhost:8080";

const btnShowRegister = document.getElementsByClassName("show");
const registerSide = document.getElementById("registerSide");
const signinSide = document.getElementById("signin");

registerSide.style.display = "none";

//loggin Or register 
function show () {

  if (registerSide.style.display=== 'none') {
    registerSide.style.display = "block";
    signinSide.style.display = "none";
  }else {
      registerSide.style.display = "none";
    signinSide.style.display = "block";
  }
}

//------------------------ Connexion Begin 

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    var jwt ;

    const userData = {
      username: username,
      password: password,
    };
    const postInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        mode: "cors",
      };
   

    fetch(BASE_URL + "/api/auth/login", postInit)
      .then((response) => response.json())
      .then((response) => {
        jwt = response.accessToken;

        addCookie(jwt);
      })
      .catch((error) => console.error("Erreur:", error));
  });

//------------------------ Connexion End 

//------------------------ jwt 

function addCookie(cookie) {
  console.log("jwt " + cookie);
  // Créer un cookie avec le JWT
  document.cookie = `token=${cookie}; path=/; Secure;  HttpOnly; SameSite=Strict;`;

  // Options supplémentaires (si vous pouvez configurer via le serveur ou autres moyens) :
  // - HttpOnly : Empêche l'accès au cookie via JavaScript (doit être configuré côté serveur)
  // - Secure : Le cookie est envoyé uniquement sur des connexions HTTPS
  // - SameSite=Strict : Empêche l'envoi du cookie avec les requêtes cross-site
  // - path=/ : Le cookie est accessible sur toutes les pages du site
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const btnTest = document.getElementById("test");

function test() {
    console.log("test");
    const jwtFromCookie = getCookie('token');
    console.log("before test " + jwtFromCookie);

    fetch(BASE_URL + "/api/product/all",{
        method: 'GET',  
        headers: {
            'Authorization': `Bearer ${jwtFromCookie}`,  
            'Content-Type': 'application/json',  
        }
    }).then(response => {
        if (!response.ok) {
        
            throw new Error('Network response was not ok');
        }
        return response.json();  
    })
    .then(data => {
        console.log('Data:', data); 
    });

}
//------------------------ jwt End 

//------------------------ Register 
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const cookieName = 'token';
    // Si le cookie était sécurisé et utilisait SameSite, vous pouvez également ajouter ces attributs
    document.cookie = `${cookieName}=; path=/; Secure; SameSite=Strict; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;

    const username = document.getElementById("usernameRegister").value;
    const password = document.getElementById("passwordRegister").value;
    const email = document.getElementById("emailRegister").value;
    var jwt ;

    const userData = {
      username: username,
      password: password,
      email: email
    };
    const postInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        mode: "cors",
      };
   

    fetch(BASE_URL + "/api/auth/register", postInit)
      .then((response) => response.json())
      .then((response) => {
        jwt = response.accessToken;

        addCookie(jwt);
      })
      .catch((error) => console.error("Erreur:", error));
  });


