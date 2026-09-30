const loadingFill = document.getElementById("loadingFill");
const percentage = document.getElementById("percentage");
const loadingCharacter = document.getElementById("loadingCharacter");
const finalCharacter = document.getElementById("finalCharacter");
const angryCharacter = document.getElementById("angryCharacter");
const folder = document.getElementById("folder");
const photoOne = document.getElementById("photoOne");
const photoTwo = document.getElementById("photoTwo");
const photoThree = document.getElementById("photoThree");
const clickSound = document.getElementById("clickSound");
const scrollMessage = document.getElementById("scrollMessage");
const clickInstruction = document.getElementById("clickInstruction");



const fadeCharacters = document.querySelectorAll(".fade-character");

fadeCharacters.forEach(function(character) {
    gsap.set(character,{
        opacity: 0;
        y: 50
    });
});

window.addEventListener("scroll", function (){
    const scrollTop = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / pageHeight) * 100;
    loadingFill.style.width = scrollPercent + "%";

    percentage.textContent = Math.round(scrollPercent) + "%";

    gsap.to(loadingCharacter, {
        x:scrollPercent * 1.5,
        duration: 0.3,
        ease: "power2.out"
    });

    



})

