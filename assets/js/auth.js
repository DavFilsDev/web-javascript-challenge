document.addEventListener("DOMContentLoaded", function () {
    const validEmail = "admin@example.com";
    const validPassword = "123456";

    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.querySelector(".error-message");
    const button = document.getElementById("button");

    // Initialement, cacher le message d'erreur
    errorMessage.style.visibility = "hidden";
    errorMessage.style.opacity = "0";

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const email = emailInput.value;
            const password = passwordInput.value;

            button.textContent = "....."; // Changement du texte du bouton
            
            if (email === validEmail && password === validPassword) {
                setTimeout(() => {
                    localStorage.setItem("loggedIn", "true");
                    window.location.href = "home.html"; // Redirection après 10 secondes
                }, 3000);
            } else {
                setTimeout(() => {
                    errorMessage.style.visibility = "visible"; // Rendre visible
                    errorMessage.style.opacity = "1"; // Faire apparaître en douceur
                    
                    setTimeout(() => {
                        errorMessage.style.opacity = "0"; // Rendre invisible en douceur
                        setTimeout(() => {
                            errorMessage.style.visibility = "hidden"; // Cacher complètement
                            emailInput.value = "";
                            passwordInput.value = "";
                            button.textContent = "Login Now"; // Remettre le texte normal
                        }, 500);
                    }, 5000);
                }, 3000); // Attendre 5 secondes avant d'afficher le message d'erreur
            }
        });
    }

    if (window.location.pathname.includes("home.html")) {
        if (localStorage.getItem("loggedIn") !== "true") {
            window.location.href = "index.html";
        }

        const logoutBtn = document.getElementById("logoutBtn");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", function () {
                localStorage.removeItem("loggedIn");
                window.location.href = "index.html";
            });
        }
    }
});
