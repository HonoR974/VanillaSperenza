window.onload = function () {
    console.log("debut du timing ")
    setTimeout(returnAfterSuccess, 5000);
};

/**
 * Renvois sur la partie front après le paiement 
 */
function returnAfterSuccess() {
    window.location = "profile.html";
}