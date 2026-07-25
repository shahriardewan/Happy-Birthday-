const slideshow = document.querySelector(".slideshow");

const music = document.getElementById("music");

const images = [
    "images/1.Sis 1.jpg",
    "images/2.Sis 3.jpg",
    "images/3.Sis 4.jpg",
    "images/4.Sis 5.jpg",
    "images/5.Sis 6.jpg",
    "images/6.Sis 7.jpg"
];

let index = 0;

function changeBackground() {
    slideshow.style.backgroundImage = `url('${images[index]}')`;

    index++;

    if (index >= images.length) {
        index = 0;
    }
}

changeBackground();

setInterval(changeBackground, 5000);

// প্রথম টাচ/ক্লিকের পর গান চালু হবে
function startMusic() {
    music.play().catch(() => {});
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
}

document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);
