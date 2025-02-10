export class FeaturedBrandsComponent {
    constructor(brandController) {
        this.brandController = brandController;
    }

    loadFeaturedBrands() {
        const brandGrid = document.querySelector('.brand-grid');
        if (!brandGrid) return;

        const featuredBrands = this.getFeaturedBrandsData();
        this.renderFeaturedBrands(brandGrid, featuredBrands);
    }

    getFeaturedBrandsData() {
        return [
            {
                brand: "Ford",
                image: "icons/frontalArtCars/mustang-art.png",
                models: ["Mustang", "Mustang GT500", "Raptor", "F-150"]
            },
            {
                brand: "Honda",
                image: "icons/frontalArtCars/acura-art.png",
                models: ["Civic Si", "Civic Type R", "Accord", "CR-V"]

            },
            {
                brand: "Toyota",
                image: "icons/frontalArtCars/suprav0-art.png",
                models: ["Supra", "Corolla", "RAV4", "Camry"]

            },
            {
                brand: "Volkswagen",
                image: "icons/frontalArtCars/porsche-art.png",
                models: ["Golf GTI", "Jetta", "Tiguan", "Polo"]
            },
            {
                brand: "Nissan",
                image: "icons/frontalArtCars/skyline-art.png",
                models: ["R-32", "R-33", "R-34", "R-35"]
            }

        ];
    }

    renderFeaturedBrands(brandGrid, featuredBrands) {
        brandGrid.innerHTML = '';

        featuredBrands.forEach(featured => {
            const brandCard = this.createBrandCard(featured);
            brandGrid.appendChild(brandCard);
            this.setupCardEventListeners(brandCard, featured);
        });
    }

    createBrandCard(featured) {
        const brandCard = document.createElement('div');
        brandCard.className = 'brand-card';
        
        const modelsList = featured.models
            .map(model => `<li>${model}</li>`)
            .join('');

        brandCard.innerHTML = `
            <div class="brand-image-container">
                <img src="${featured.image}" alt="${featured.brand}" 
                     onerror="this.src='placeholder.png'">
            </div>
            <div class="brand-info">
                <h3>${featured.brand}</h3>
                <ul class="models-list">
                    ${modelsList}
                </ul>
                <button class="view-brand" data-brand="${featured.brand.toLowerCase()}">
                    Ver Catálogo Completo
                </button>
            </div>
        `;

        return brandCard;
    }

    setupCardEventListeners(brandCard, featured) {
        const viewButton = brandCard.querySelector('.view-brand');
        if (viewButton) {
            viewButton.addEventListener('click', () => {
                const brandLink = document.querySelector(`.nav-list a[href="#${featured.brand.toLowerCase()}"]`);
                if (brandLink) {
                    brandLink.click();
                }
            });
        }
    }
} 