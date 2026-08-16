/* ==================================================
   PRITAM BHATTACHARYA PORTFOLIO
   JavaScript
================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* ================= TYPING EFFECT ================= */

const typingElement =
    document.getElementById("typing");


const words = [

    "Web Developer",

    "Frontend Developer",

    "Programmer",

    "Computer Science Student",

    "Software Developer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typingEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(
                typingEffect,
                1500
            );

            return;

        }

    }

    else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;


            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }


    const speed =
        deleting ? 50 : 100;


    setTimeout(
        typingEffect,
        speed
    );

}


typingEffect();


/* ================= BACK TO TOP ================= */

const topBtn =
    document.getElementById("top-btn");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 400) {

            topBtn.classList.add("show");

        }

        else {

            topBtn.classList.remove("show");

        }

    }
);


topBtn.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section");


const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    function () {

        let current = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navItems.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById(
        "contact-form"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            alert(
                "Please fill in all fields."
            );

            return;

        }


        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );


        contactForm.reset();

    }
);


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".project-card, " +
        ".skill-card, " +
        ".timeline-item, " +
        ".certificate-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(
    function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "all 0.7s ease";

        observer.observe(element);

    }
);


/* ================= PAGE LOAD ================= */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "loaded"
        );

    }
);