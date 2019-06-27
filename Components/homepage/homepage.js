class Carousel {
    constructor(item) {

        this.item = item;

        this.rightBtn = carousel.querySelector(".right-button");
        this.leftBtn = carousel.querySelector(".left-button");

        this.images = Array.from(item.querySelectorAll(".carousel-image"));

        this.currentIndex = 0;
        this.defaultImage = this.images[this.currentIndex];
        this.images.forEach(function (img) {
            img.style.display = 'none';
        });
        this.defaultImage.style.display = "block";

        this.rightBtn.addEventListener("click", () => this.showNextImg());
        this.leftBtn.addEventListener("click", () => this.showBeforeImg());

        }


        showNextImg() {
            let allImages = document.querySelectorAll(".carousel-image");

            allImages.forEach(function (img) {
                img.style.display = "none";
            });

            this.currentIndex ++;

            if (this.currentIndex > allImages.length - 1) {
                this.currentIndex = 0;
            }

            allImages[this.currentIndex].style.display = "block";
            }


        showBeforeImg() {
            let allImages = document.querySelectorAll(".carousel-image");

            allImages.forEach(function (img) {
                img.style.display = "none";
            });

            this.currentIndex -=1;

            if (this.currentIndex < 0) {
                this.currentIndex = 3;
            }

            allImages[this.currentIndex].style.display = "block";
            }
        }


let carousel = document.querySelector(".carousel-section");

new Carousel (carousel);
