class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        // 1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
        this.rightBtn = this.carousel.querySelector('.right-button');
        this.leftBtn = this.carousel.querySelector('.left-button');

        // 2. You will need to grab a reference to all of the images
        this.img = this.carousel.querySelectorAll('img');

        // 3. Create a current index
        this.currentSlideIndex = 0;
        this.currentImg = this.img[0];
        this.currentImg.style.display = 'flex';

        // 4. Those buttons are gonna need some click handlers.
        this.left.addEventListener('click', () => this.moveLeft());
        this.right.addEventListener('click', () => this.moveRight());

    }

    moveLeft() {
        
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    
    
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
