document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "var(--terty-color)";
            header.style.width = "100vw";
            header.style.borderRadius = "0px";
            header.style.top = "0";
            header.style.left = "0"; 
            header.style.transform = "none";
        } else { 
            header.style.backgroundColor = "var(--white)";
            header.style.width = "95%";
            header.style.borderRadius = "10px";
            header.style.top = "15px";
            header.style.left = "50%";
            header.style.transform = "translateX(-50%)"; 
        }
    });
});


function animateNumber(id, finalValue, duration) {
    let start = 0;
    let increment = finalValue / (duration / 50);
    let element = document.getElementById(id);

    let interval = setInterval(() => {
        start += increment;
        if (start >= finalValue) {
            start = finalValue;
            clearInterval(interval);
        }
        element.textContent = Math.floor(start);
    }, 50);
}

function checkScroll() {
    if (window.scrollY >= 750) {
        animateNumber("percent", 77, 5000);
        animateNumber("countries", 169, 5000);
        animateNumber("years", 38, 5000);
        
        window.removeEventListener("scroll", checkScroll);
    }
}


window.addEventListener("scroll", checkScroll);


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const sectionTriggers = {
        "section2": 750,  
        "section3": 1500, 
        "section4": 2250,  
        "section5": 3000, 
    };

    let activatedSections = new Set();

    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const sectionId = section.id;
            const triggerPoint = sectionTriggers[sectionId];

            if (window.scrollY >= triggerPoint && !activatedSections.has(sectionId)) {
                activatedSections.add(sectionId);
                setTimeout(() => {
                    section.classList.add("visible");
                }, 5); 
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".container-fourth-section__reservation-container__text__form");
    const messageBlock = document.getElementById("reservation-confirmation");

    if (messageBlock) {
        messageBlock.style.display = "none";
    }

    form.addEventListener("submit", function (event) {
        if (form.checkValidity()) {
            event.preventDefault(); 

            form.reset(); 
            messageBlock.style.display = "flex"; 
            
            setTimeout(() => {
                messageBlock.style.display = "none";
            }, 5000);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".last-footer-section__newsletter");
    const messageValidation = document.getElementById("last-footer-section__validation-message");

    if (messageValidation) {
        messageValidation.style.display = "none";
    }

    form.addEventListener("submit", function (event) {
        if (form.checkValidity()) {
            event.preventDefault(); 

            form.reset(); 
            messageValidation.style.display = "flex"; 
            
            setTimeout(() => {
                messageValidation.style.display = "none";
            }, 5000);
        }
    });
});