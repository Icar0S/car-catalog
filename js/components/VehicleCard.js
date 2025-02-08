// Componente do card de veículo
export class VehicleCard {
    constructor(vehicle, brand) {
        this.vehicle = vehicle;
        this.brand = brand;
    }

    createCard() {
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        
        const hasMultipleImages = Array.isArray(this.vehicle.images) && this.vehicle.images.length > 1;
        const imageUrl = hasMultipleImages ? this.vehicle.images[0] : this.vehicle.image;
        
        card.innerHTML = this.createCardHTML(imageUrl);
        
        if (hasMultipleImages) {
            this.setupImageRotation(card);
        }
        
        return card;
    }

    createCardHTML(imageUrl) {
        return `
            <div class="image-container">
                <img src="${imageUrl}" alt="${this.vehicle.model}" 
                     onerror="this.src='placeholder.png'"
                     ${this.getImagesDataAttribute()}>
            </div>
            <div class="text-container">
                <h3>${this.vehicle.model}</h3>
                <p class="brand-name">${this.brand}</p>
            </div>
        `;
    }

    getImagesDataAttribute() {
        if (Array.isArray(this.vehicle.images) && this.vehicle.images.length > 1) {
            return `data-images="${this.vehicle.images.join(',')}"`;
        }
        return '';
    }

    setupImageRotation(card) {
        let currentIndex = 0;
        const img = card.querySelector('img');
        let intervalId;
        
        card.addEventListener('mouseenter', () => {
            intervalId = setInterval(() => {
                currentIndex = (currentIndex + 1) % this.vehicle.images.length;
                img.src = this.vehicle.images[currentIndex];
            }, 1000);
        });
        
        card.addEventListener('mouseleave', () => {
            clearInterval(intervalId);
            img.src = this.vehicle.images[0];
            currentIndex = 0;
        });
    }

    // ... outros métodos do componente
} 