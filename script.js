const loadingFill = document.getElementById("loadingFill");

const percentage = document.getElementById("percentage");

const miniLoadingFill = document.getElementById("miniLoadingFill");

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

const characters = document.querySelectorAll(".fade-characrer");
const folder = document.getElementById("folder")


