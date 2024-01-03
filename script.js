const button = document.getElementById("button");
const image = document.getElementById("image");

function randomPicture() {
    const picture = random();
    image.src = `./assets/${picture}.jpg`;
}

function random() {
    const maximum = 142;
    return Math.floor((Math.random() * maximum) + 1);
}

button.addEventListener("click", (event) => {
    randomPicture();
});
