
// TOP LOADING BAR

const loadingFill = document.getElementById("loadingFill");
const percentage = document.getElementById("percentage");


// MINI LOADING BAR

const miniLoadingFill = document.getElementById("miniLoadingFill");


// TITLE BOUNCE

const title = document.querySelector(".title");

title.animate(
    [
        { transform: "translateY(0px)" },
        { transform: "translateY(-8px)" },
        { transform: "translateY(0px)" }
    ],
    {
        duration: 2500,
        iterations: Infinity,
        easing: "ease-in-out"
    }
);


// CHARACTERS

const characters = document.querySelectorAll(".fade-character");


// FOLDER, PHOTOS, AND SOUND

const folder = document.getElementById("folder");
const photos = document.querySelectorAll(".photo");
const clickSound = document.getElementById("clickSound");


// HIDE CHARACTERS AT THE BEGINNING

characters.forEach(function(character) {

    gsap.set(character, {
        opacity: 0,
        y: 50
    });

});


// SCROLL FUNCTION

window.addEventListener("scroll", function() {

    // TOP LOADING BAR

    let scrollTop = window.scrollY;

    let pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    let progress =
        (scrollTop / pageHeight) * 100;


    loadingFill.style.width =
        progress + "%";


    percentage.textContent =
        Math.round(progress) + "%";


    // MINI LOADING BAR

    const pageTwo =
        document.querySelector(".section-two");

    const pageTwoTop =
        pageTwo.offsetTop;

    const pageTwoHeight =
        pageTwo.offsetHeight;


    // Starts at 20% and reaches 100%

    let miniProgress =
        20 + ((window.scrollY - pageTwoTop) / pageTwoHeight) * 80;


    // Keep the mini bar between 20% and 100%

    miniProgress =
        Math.max(20, Math.min(100, miniProgress));


    miniLoadingFill.style.width =
        miniProgress + "%";


    // MINI BAR COLOR

    if (miniProgress < 40) {

        miniLoadingFill.style.backgroundColor =
            "#de5900";

    } else {

        miniLoadingFill.style.backgroundColor =
            "#debd00";

    }


    // CHARACTER ANIMATIONS

    characters.forEach(function(character) {

        let position =
            character.getBoundingClientRect().top;


        if (position < window.innerHeight - 100) {

            gsap.to(character, {
                opacity: 1,
                y: 0,
                duration: 0.5
            });

        }

    });

});


// CLICK FOLDER

folder.addEventListener("click", function() {

    // Play click sound

    clickSound.play();


    // Show photos

    photos.forEach(function(photo) {

        gsap.to(photo, {
            opacity: 1,
            y: 0,
            duration: 0.7
        });

    });

});
