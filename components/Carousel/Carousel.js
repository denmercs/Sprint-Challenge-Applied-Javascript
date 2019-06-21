class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        // 1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
        this.rightBtn = this.carousel.querySelector('.right-button');
        this.leftBtn = this.carousel.querySelector('.left-button');

        // 2. You will need to grab a reference to all of the images
        this.images = this.carousel.querySelectorAll('img');

        // 3. Create a current index
        this.index = 0;
        this.currentImage = this.images[0];
        // 4. Those buttons are gonna need some click handlers.
        this.leftBtn.addEventListener('click', () => this.moveLeft());
        this.rightBtn.addEventListener('click', () => this.moveRight());

    }

    moveLeft() {
        /*
        this.images.forEach(img => img.classList.remove('img-show'));
        this.index--;
        if(this.index < 0) {
            this.index = 3;
        }
        */
       this.images.forEach(img => img.classList.remove('img-show'));
       this.index--;
       if(this.index < 0) {
           this.index = 3;
       }
        this.images[this.index].classList.add('img-show');
      }
    
    moveRight() {
        this.images.forEach(img => img.classList.remove("img-show"));
        this.index++;
        if (this.index > 3) {
            this.index = 0;
        }
        this.images[this.index].classList.add("img-show");
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
