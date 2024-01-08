
class Picture {
    constructor(img) {
        this.pictures = [];
        this.img = img;
        this.totalPictures = 142;
        this.index = 0;

        this.random();
        this.display();
    }

    random() {
        let number;

        do {
            number = random(this.totalPictures);
        } while (this.pictures.includes(number));

        this.pictures.push(number)
        this.index = this.pictures.length - 1;
    }
    
    display() {
        this.img.src = `./assets/${this.pictures[this.index]}.jpg`;
    }

    previous() {
        this.index--;
    }

    next() {
        this.index++;
    }

    isPrevious() {
        return this.index > 0;
    }

    isNext() {
        return this.index < this.pictures.length - 1;
    }
}


function random(maximum) {
    return Math.floor((Math.random() * maximum) + 1);
}

export { Picture }