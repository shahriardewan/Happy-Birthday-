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
const heartContainer = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize = (18 + Math.random()*25) + "px";

    heart.style.animationDuration = (5 + Math.random()*4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(createHeart,350);
const balloons=document.getElementById("balloons");

function createBalloon(){

const balloon=document.createElement("div");

balloon.className="balloon";

const list=["🎈","🎈","🎈","🎉"];

balloon.innerHTML=list[Math.floor(Math.random()*list.length)];

balloon.style.left=Math.random()*100+"%";

balloon.style.animationDuration=(8+Math.random()*4)+"s";

balloons.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},12000);

}

setInterval(createBalloon,1200);



const sparkles=document.getElementById("sparkles");

function createSparkle(){

const star=document.createElement("div");

star.className="sparkle";

star.innerHTML="✨";

star.style.left=Math.random()*100+"%";

star.style.animationDuration=(3+Math.random()*3)+"s";

sparkles.appendChild(star);

setTimeout(()=>{

star.remove();

},6000);

}

setInterval(createSparkle,250);
const celebrate=document.getElementById("celebrate");

celebrate.addEventListener("click",()=>{

const emoji=["🎊","🎉","✨","💖","🎈"];

for(let i=0;i<150;i++){

const c=document.createElement("div");

c.className="confetti";

c.innerHTML=emoji[Math.floor(Math.random()*emoji.length)];

c.style.left=Math.random()*100+"%";

c.style.animationDuration=(3+Math.random()*3)+"s";

c.style.fontSize=(15+Math.random()*20)+"px";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},6000);

}

});
