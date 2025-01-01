const BASE_URL = "http://localhost:8080";

const btnShowRegister = document.getElementsByClassName("show");
const registerSide = document.getElementById("registerSide");
const signinSide = document.getElementById("signin");

registerSide.style.display = "none";

//loggin Or register
function show() {
  if (registerSide.style.display === "none") {
    registerSide.style.display = "block";
    signinSide.style.display = "none";
  } else {
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
  
    console.log("appel login"); 
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
      credentials: "include", // Inclut les cookies dans la requête
    };

    login(userData.username, userData.username);

  });

  async function login(username, password) {
    try {

      
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }
   
        const data = await response.json();
        const token = data.token;

        // Enregistrer le token dans les cookies
        document.cookie = `jwt=${token}; path=/; Secure; HttpOnly`;

         // Rediriger vers la nouvelle page
         window.location.href = "productList.html";
    } catch (error) {
        console.error('Error during login:', error);
    }
}


//------------------------ Connexion End

//------------------------ jwt

function addCookie(cookie) {
  // Créer un cookie avec le JWT
  document.cookie = `token=${cookie}; path=/; Secure;  HttpOnly; SameSite=Strict;`;
  // Options supplémentaires (si vous pouvez configurer via le serveur ou autres moyens) :
  // - HttpOnly : Empêche l'accès au cookie via JavaScript (doit être configuré côté serveur)
  // - Secure : Le cookie est envoyé uniquement sur des connexions HTTPS
  // - SameSite=Strict : Empêche l'envoi du cookie avec les requêtes cross-site
  // - path=/ : Le cookie est accessible sur toutes les pages du site
}


//------------------------ jwt End

//------------------------ Register
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("usernameRegister").value;
    const password = document.getElementById("passwordRegister").value;
    const email = document.getElementById("emailRegister").value;
   
    const userData = {
      username: username,
      password: password,
      email: email,
    };
   
    inscription(userData.username, userData.password, userData.email);
   
  });

  async function inscription(username, password, email) {
    const postInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
      mode: "cors",
    };
    try {

      const response = await fetch(BASE_URL + "/signup", postInit);
      
      if (!response.ok) {
        throw new Error('Register failed');
     }

     const data = await response.json();
     const token = data.token;

     // Enregistrer le token dans les cookies
     document.cookie = `jwt=${token}; path=/; Secure; HttpOnly`;

     // Rediriger vers la nouvelle page
     window.location.href = "productList.html";
    } catch (error) {
        console.error('Error during Register:', error);
    }
  }
