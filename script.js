const previous = document.getElementById("previous");
const next = document.getElementById("next");
const image = document.getElementById("image");
let seenPictures = [];

function randomPicture() {
    const picture = random();
    image.src = `./assets/${picture}.jpg`;

    seenPictures.push(picture);

    console.log(seenPictures);
}

function previousPicture() {
    if (seenPictures.length > 1) {
        seenPictures.pop();
        image.src = `./assets/${seenPictures[seenPictures.length - 1]}.jpg`;
        console.log(seenPictures);
    }
}

function random() {
    const maximum = 142;
    return Math.floor((Math.random() * maximum) + 1);
}

next.addEventListener("click", (event) => {
    randomPicture();
});

previous.addEventListener("click", (event) => {
    previousPicture();
});
