export class CategoryComponent {
    constructor() {
        this.categories = [
            { id: 'hatch', name: 'Hatch', icon: './icons/categoriesCar/hatch.png' },
            { id: 'sedan', name: 'Sedã', icon: './icons/categoriesCar/sedan.png' },
            { id: 'sport', name: 'Sport', icon: './icons/categoriesCar/sport.png' },
            { id: 'pickup', name: 'Picapes', icon: './icons/categoriesCar/pickup.png' },
            { id: 'suv', name: 'Utilitário Esportivo', icon: './icons/categoriesCar/suv.png' },
            { id: 'minivan', name: 'Monovolume', icon: './icons/categoriesCar/minivan.png' },
            { id: 'wagon', name: 'Wagon/Perua', icon: './icons/categoriesCar/wagon.png' },
            { id: 'van', name: 'Van', icon: './icons/categoriesCar/van.png' },
            { id: 'convertible', name: 'Conversível/Cupê', icon: './icons/categoriesCar/convertible.png' },
            { id: 'electric', name: 'Híbrido/Elétrico', icon: './icons/categoriesCar/electric-car.png' },
            { id: 'moto', name: 'Moto', icon: './icons/categoriesCar/moto.png' }
        ];
    }

    init() {
        this.renderCategories();
    }

    renderCategories() {
        const categoryGrid = document.querySelector('.category-grid');
        if (!categoryGrid) return;

        categoryGrid.innerHTML = this.categories.map(category => `
            <div class="category-card" data-category="${category.id}">
                <a href="#category/${category.id}" class="category-link">
                    <img src="${category.icon}" alt="${category.name}" class="category-icon">
                    <h3>${category.name}</h3>
                </a>
            </div>
        `).join('');

        this.setupCategoryListeners();
    }

    setupCategoryListeners() {
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const categoryId = card.dataset.category;
                this.navigateToCategory(categoryId);
            });
        });
    }

    navigateToCategory(categoryId) {
        // Será implementado na navegação
        console.log(`Navegando para categoria: ${categoryId}`);
    }
} 