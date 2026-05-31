const duck = document.getElementById("duck-hotspot");
const overlay = document.getElementById("fade-overlay");

duck.addEventListener("click", () => {

createStarBurst();

overlay.classList.add("active");

setTimeout(() => {
    window.location.href = "main.html";
}, 1500);

});

function createStarBurst(){

const rect = duck.getBoundingClientRect();

const centerX = rect.left + rect.width / 2;
const centerY = rect.top + rect.height / 2;

for(let i = 0; i < 60; i++){

    const star = document.createElement("div");

    star.innerHTML = "✦";

    star.classList.add("burst-star");

    star.style.left = centerX + "px";
    star.style.top = centerY + "px";

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 250 + 100;

    star.style.setProperty(
        "--x",
        Math.cos(angle) * distance + "px"
    );

    star.style.setProperty(
        "--y",
        Math.sin(angle) * distance + "px"
    );

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 1500);
}

}
