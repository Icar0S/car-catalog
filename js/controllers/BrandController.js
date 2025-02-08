// Controlador das marcas
import { VehicleCard } from '../components/VehicleCard.js';

export class BrandController {
    constructor(catalog, backgrounds) {
        this.catalog = catalog;
        this.backgrounds = backgrounds;
    }

        
     // Função para exibir os veículos da marca selecionada
    displayVehicles(vehicles, brand, searchTerm = '') {
        const mainContent = document.querySelector('main');
        mainContent.innerHTML = '';
        
        // Remove qualquer classe anterior
        mainContent.className = '';
        // Adiciona classe específica para páginas de marca
        mainContent.classList.add('brand-page');
        
        const brandSection = document.createElement('section');
        brandSection.className = 'brand-vehicles';
        
        const brandTitle = document.createElement('h2');
        brandTitle.textContent = `Veículos ${brand}`;
        brandSection.appendChild(brandTitle);
        
        const vehiclesGrid = document.createElement('div');
        vehiclesGrid.className = 'vehicle-gallery';
        
        vehicles.forEach(vehicle => {
            const vehicleCard = new VehicleCard(vehicle, brand);
            const card = vehicleCard.createCard();
            
            if (searchTerm && 
                (vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                 brand.toLowerCase().includes(searchTerm.toLowerCase()))) {
                card.classList.add('highlighted');
            }
            
            vehiclesGrid.appendChild(card);
        });
        
        brandSection.appendChild(vehiclesGrid);
        mainContent.appendChild(brandSection);
        
        mainContent.style.backgroundColor = this.backgrounds[brand] || '#f5f5f5';
    }

    populateBrandMenu() {
        const navList = document.querySelector('.nav-list');
        
        navList.querySelectorAll('a').forEach(link => {
            if (link.getAttribute('href') === '#home') return;
            
            const brandId = link.getAttribute('href').substring(1);
            const brandData = this.catalog.find(b => b.brand.toLowerCase() === brandId);
            
            if (brandData) {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    
                    // Remove classe active de todos os links
                    navList.querySelectorAll('a').forEach(a => a.classList.remove('active'));
                    link.classList.add('active');
                    
                    // Atualiza a URL sem recarregar a página
                    window.history.pushState({}, '', link.getAttribute('href'));
                    
                    // Chama displayVehicles usando this
                    this.displayVehicles(brandData.vehicles, brandData.brand);
                });
            }
        });

        // Adiciona listener para o evento popstate (navegação pelo histórico)
        window.addEventListener('popstate', () => {
            const brandId = window.location.hash.substring(1);
            const brandData = this.catalog.find(b => b.brand.toLowerCase() === brandId);
            
            if (brandData) {
                this.displayVehicles(brandData.vehicles, brandData.brand);
            }
        });
    }

    // ... outros métodos relacionados às marcas
} 