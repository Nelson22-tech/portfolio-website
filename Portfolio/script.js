/* =========================
   HAMBURGER MENU
========================= */

const hamburger = document.getElementById("hamburger");

const navLinks = document.getElementById("nav-links");

const hamburgerIcon = hamburger.querySelector("i");


hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");


    const isOpen =
        navLinks.classList.contains("active");


    hamburger.setAttribute(
        "aria-expanded",
        isOpen
    );


    if (isOpen) {

        hamburgerIcon.classList.remove("fa-bars");

        hamburgerIcon.classList.add("fa-xmark");

    } else {

        hamburgerIcon.classList.remove("fa-xmark");

        hamburgerIcon.classList.add("fa-bars");

    }

});


/* =========================
   CLOSE MENU AFTER CLICKING
   A NAVIGATION LINK
========================= */

const navItems =
    document.querySelectorAll("#nav-links a");


navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");


        hamburger.setAttribute(
            "aria-expanded",
            "false"
        );


        hamburgerIcon.classList.remove("fa-xmark");

        hamburgerIcon.classList.add("fa-bars");

    });

});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;


        const revealPoint = 100;


        if (
            elementTop <
            windowHeight - revealPoint
        ) {

            element.classList.add("active");

        }

    });

}


/* Run when user scrolls */

window.addEventListener(
    "scroll",
    revealOnScroll
);


/* Run when page loads */

window.addEventListener(
    "load",
    revealOnScroll
);


/* =========================
   TYPING ANIMATION
========================= */

const typingText =
    document.getElementById("typing-text");


const roles = [

    "Software Engineering Student",

    "Web Developer",

    "Aspiring Software Engineer"

];


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeRole() {

    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );


        characterIndex++;


        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeRole,
                1500
            );

            return;

        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );


        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;


            roleIndex =
                (roleIndex + 1) %
                roles.length;

        }

    }


    const typingSpeed =
        deleting ? 50 : 100;


    setTimeout(
        typeRole,
        typingSpeed
    );

}


/* Start typing animation */

typeRole();