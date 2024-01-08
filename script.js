import { Picture } from "./js/picture.js";

const previous = document.getElementById("previous");
const random = document.getElementById("random");
const next = document.getElementById("next");

const image = document.getElementById("image");

const picture = new Picture(image);

next.disabled = true;
previous.disabled = true;

random.addEventListener("click", (event) => {
    picture.random();
    picture.display();

    checkButtons();
});

next.addEventListener("click", (event) => {
    const isNext = picture.isNext();

    if (isNext) {
        picture.next();
        picture.display();
    }

    checkButtons();
});

previous.addEventListener("click", (event) => {
    const isPrevious = picture.isPrevious();

    if (isPrevious) {
        picture.previous();
        picture.display();
    }

    checkButtons();
});

function checkButtons() {
   next.disabled = !picture.isNext(); 
   previous.disabled = !picture.isPrevious(); 
}