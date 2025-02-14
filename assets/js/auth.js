document.addEventListener("DOMContentLoaded", function () {
    const validEmail = "admin@example.com";
    const validPassword = "123456";

    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.querySelector(".error-message");
    const button = document.getElementById("button");

    errorMessage.style.visibility = "hidden";
    errorMessage.style.opacity = "0";

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const email = emailInput.value;
            const password = passwordInput.value;

            button.textContent = "....."; 
            
            if (email === validEmail && password === validPassword) {
                setTimeout(() => {
                    localStorage.setItem("loggedIn", "true");
                    window.location.href = "home.html"; 
                }, 3000);
            } else {
                setTimeout(() => {
                    errorMessage.style.visibility = "visible"; 
                    errorMessage.style.display = "flex"; 
                    errorMessage.style.opacity = "1"; 
                    button.textContent = "Login Now"; 

                    setTimeout(() => {
                        errorMessage.style.opacity = "0";
                        setTimeout(() => {
                            errorMessage.style.visibility = "hidden"; 
                            emailInput.value = "";
                            passwordInput.value = "";
                            errorMessage.style.display = "none";
                        }, 500);
                    }, 3000);
                }, 3000); 
            }
        });
    }
});
