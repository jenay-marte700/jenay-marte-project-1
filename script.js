// loading bar at the top

const loadingFill = document.getElementById("loadingFill");
const percentage = document.getElementById("percentage");


// mini loading bar

const miniLoadingFill = document.getElementById("miniLoadingFill");


// title

const title = document.querySelector(".title");


// folder photos sound

const folder = document.getElementById("folder");
const photos = document.querySelectorAll(".photo");
const friends = document.getElementById("friends");
const clickSound = document.getElementById("clickSound");
 

// jumping title

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


// jumping folder

folder.animate(
    [
        { transform: "translateY(0px)" },
        { transform: "translateY(-8px)" },
        { transform: "translateY(0px)" }
    ],
    {
        duration: 900,
        iterations: Infinity,
        easing: "ease-in-out"
    }
);

friends.animate(
    [
        { transform: "translateY(0px)" },
        { transform: "translateY(-8px)" },
        { transform: "translateY(0px)" }
    ],
    {
        duration: 900,
        iterations: Infinity,
        easing: "ease-in-out"
    }
);


// characters

const characters = document.querySelectorAll(".fade-character");

characters.forEach(function(character) {

    gsap.set(character, {
        opacity: 0,
        y: 50
    });

});


// scroll

window.addEventListener("scroll", function() {

    // top loading bar

    let scrollTop = window.scrollY;

    let pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    let progress =
        (scrollTop / pageHeight) * 100;


    loadingFill.style.width =
        progress + "%";


    percentage.textContent =
        Math.round(progress) + "%";


    // mini loading bar

    const pageTwo =
        document.querySelector(".section-two");

    const pageTwoTop =
        pageTwo.offsetTop;

    const pageTwoHeight =
        pageTwo.offsetHeight;


    let miniProgress =
        20 + ((window.scrollY - pageTwoTop) / pageTwoHeight) * 80;


    miniProgress =
        Math.max(20, Math.min(100, miniProgress));


    miniLoadingFill.style.width =
        miniProgress + "%";


    // mini bar color change

    if (miniProgress < 40) {

        miniLoadingFill.style.backgroundColor =
            "#de5900";

    } else {

        miniLoadingFill.style.backgroundColor =
            "#debd00";

    }


    // fade up

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


// click the folder to see inside

folder.addEventListener("click", function() {

    clickSound.play();

    photos.forEach(function(photo) {

        gsap.to(photo, {
            opacity: 1,
            y: 0,
            duration: 0.7
        });

    });

});