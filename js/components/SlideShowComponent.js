export class SlideShowComponent {
    constructor() {
        this.currentSlide = 0;
        this.images = [
            'images/01-fotografias/tland-0.png',
            'images/01-fotografias/amg-mercedes-benz-cls-class.jpg',
            'images/01-fotografias/mercedesbenz-cls.jpg',
            'images/01-fotografias/ferrari.jpg',
            'images/01-fotografias/ferrari-1.png',
            'images/01-fotografias/ferrari-2.png',
            'images/01-fotografias/infinit.jpg',
            'images/01-fotografias/jetta.jpg',
            'images/01-fotografias/golf-0.png',
            'images/01-fotografias/golf-1.png',
            'images/01-fotografias/mustang.jpg',
            'images/01-fotografias/porsche_cayman.jpg',
            'images/01-fotografias/porsche-0.png',
            'images/01-fotografias/porsche-1.png',
            'images/01-fotografias/porsche.jpg',
            'images/01-fotografias/evo-mit.jpg',
            'images/01-fotografias/mazda-Rx8.jpg',
            'images/01-fotografias/mitsubishi_lancer_evo_x.jpg',
            'images/01-fotografias/nissan-silvia-S15.jpg',
            'images/01-fotografias/nissan-silvia.jpg',
            'images/01-fotografias/nissan-0.png',
            'images/01-fotografias/nissan-1.png',
            'images/01-fotografias/r35-1.jpg',
            'images/01-fotografias/r35.jpg',
            'images/01-fotografias/s14.jpg',
            'images/01-fotografias/subaru_impreza_wrx_sti.jpg',
            
            'images/01-fotografias/tjeep-0.png',
            'images/01-fotografias/tford-0.png',
            'images/01-fotografias/tford-1.png',
            'images/01-fotografias/tford-2.png',
            'images/01-fotografias/tford-3.png',
            'images/01-fotografias/tnissan-0.png',
            'images/01-fotografias/tram-0.png',
            'images/01-fotografias/toyota-0.png',
            'images/01-fotografias/toyota-1.png',
            'images/01-fotografias/toyota-2.png'
            
        ];
        this.slideInterval = null;
    }

    init() {
        // Limpa qualquer intervalo existente
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
        
        // Remove qualquer slideshow existente
        const existingSlideshow = document.querySelector('.slideshow-section');
        if (existingSlideshow) {
            existingSlideshow.remove();
        }

        this.createSlideShowSection();
        this.startSlideShow();
    }

    createSlideShowSection() {
        const main = document.querySelector('main');
        if (!main) return;

        const slideShowSection = document.createElement('section');
        slideShowSection.className = 'slideshow-section';
        slideShowSection.innerHTML = `
            <div class="slideshow-container">
                <div class="slides-wrapper">
                    ${this.images.map(img => `
                        <div class="slide">
                            <img src="${img}" alt="Carro em destaque">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Insere após a seção featured-brands
        const featuredBrands = document.querySelector('.featured-brands');
        if (featuredBrands) {
            featuredBrands.after(slideShowSection);
        }
    }

    startSlideShow() {
        const slidesWrapper = document.querySelector('.slides-wrapper');
        if (!slidesWrapper) return;

        this.slideInterval = setInterval(() => {
            this.currentSlide = (this.currentSlide + 1) % this.images.length;
            slidesWrapper.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        }, 3000);
    }

    destroy() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }
} 