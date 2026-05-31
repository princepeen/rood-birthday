const starsContainer = document.getElementById("stars");

/* Create Twinkling Stars */

for(let i = 0; i < 80; i++){

const star = document.createElement("div");

star.classList.add("star");

star.style.left = Math.random() * 100 + "vw";

star.style.top = Math.random() * 100 + "vh";

star.style.width =
    Math.random() * 3 + 1 + "px";

star.style.height =
    star.style.width;

star.style.animationDuration =
    Math.random() * 4 + 2 + "s";

star.style.animationDelay =
    Math.random() * 5 + "s";

starsContainer.appendChild(star);

}

/* Shooting Stars */

function createShootingStar(){

const star = document.createElement("div");

star.classList.add("falling-star");

star.style.left =
    Math.random() * window.innerWidth + "px";

star.style.top =
    Math.random() * 200 + "px";

document.body.appendChild(star);

setTimeout(() => {
    star.remove();
}, 3000);

}

/* Random Interval */

function randomShootingStar(){

createShootingStar();

const nextTime =
    Math.random() * 6000 + 6000;

setTimeout(
    randomShootingStar,
    nextTime
);

}

randomShootingStar();
