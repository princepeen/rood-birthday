const starsContainer =
document.getElementById("stars");

/* Create Background Stars */

for(let i = 0; i < 150; i++){

const star =
document.createElement("div");

star.classList.add("star");

star.style.left =
Math.random() * 100 + "vw";

star.style.top =
Math.random() * 100 + "vh";

const size =
Math.random() * 3 + 1;

star.style.width =
size + "px";

star.style.height =
size + "px";

star.style.animationDuration =
(Math.random() * 4 + 2) + "s";

starsContainer.appendChild(star);

}

/* Falling Stars */

function createFallingStar(){

const star =
document.createElement("div");

star.classList.add(
"falling-star"
);

star.style.left =
Math.random() *
window.innerWidth + "px";

star.style.animationDuration =
(Math.random() * 4 + 4) + "s";

document.body.appendChild(
star
);

setTimeout(() => {

    star.remove();

},8000);

}

/* Spawn Continuously */

setInterval(() => {

createFallingStar();

},300);
