const duck = document.getElementById("duck-hotspot");
const overlay = document.getElementById("fade-overlay");

duck.addEventListener("click", () => {

    overlay.classList.add("active");

    setTimeout(() => {
        window.location.href = "main.html";
    }, 1000);

});