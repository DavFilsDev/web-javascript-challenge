document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.getElementById("sign-out");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            console.log("Déconnexion en cours...");
            localStorage.removeItem("loggedIn"); 
            window.location.href = "index.html";
        });
    } else {
        console.error("Le bouton de déconnexion n'a pas été trouvé !");
    }
});
