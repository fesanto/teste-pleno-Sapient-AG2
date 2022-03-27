import openMenu from "../components/menu";
import playVideo from "../components/video";
import openAccordion from "../components/accordion";
import openWiki from "../components/wiki";
import openModal from "../components/modal";


openMenu();
playVideo();
openAccordion();
openWiki();
openModal();

// Funcionalidade do carrossel
let sliderImages = document.querySelectorAll("#carousel .item"),
    current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

function slide() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

function carousel() {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slide();
};
setInterval(carousel, 1800);