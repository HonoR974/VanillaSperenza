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

    const userData = {
      username: username,
      password: password,
    };

    login(userData.username, userData.username);
  });

async function login(username, password) {
  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    if (response.status != 200) {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
}

async function fetchDataWithToken() {
  try {
    const response = await fetch("http://localhost:8080/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Nécessaire pour envoyer le cookie JWT
    });

    if (!response.ok) {
      throw new Error("Failed to fetch protected data");
    }

    const data = await response.json();
    console.log("Protected data:", data);
  } catch (error) {
    console.error("Error fetching protected data:", error);
  }
}

async function logout() {
  try {
      const response = await fetch('http://localhost:8080/api/auth/logout', {
          method: 'POST', // Assurez-vous que votre backend accepte cette méthode
          credentials: 'include' // Nécessaire pour envoyer les cookies dans la requête
      });

      if (!response.ok) {
          throw new Error('Logout failed');
      }

      // Supprimer le cookie côté client (si accessible)
     // document.cookie = "jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";

      console.log('Logout successful');

      // Redirection vers la page de connexion ou d'accueil
      window.location.href = "/login.html"; 
  } catch (error) {
      console.error('Error during logout:', error);
  }
}

//------------------------ Connexion End

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
      throw new Error("Register failed");
    }

    const data = await response.json();
    const token = data.token;

    // Enregistrer le token dans les cookies
    document.cookie = `jwt=${token}; path=/; Secure; HttpOnly`;

    // Rediriger vers la nouvelle page
    window.location.href = "productList.html";
  } catch (error) {
    console.error("Error during Register:", error);
  }
}
