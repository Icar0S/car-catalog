// Arquivo principal
import { carCatalog, brandBackgrounds } from './data/carCatalog.js';
import { BrandController } from './controllers/BrandController.js';
import { SearchService } from './services/SearchService.js';

class App {
    constructor() {
        this.brandController = new BrandController(carCatalog, brandBackgrounds);
        this.searchService = new SearchService(carCatalog);
    }

    init() {
        this.initializeContent();
        this.setupEventListeners();
    }

    initializeContent() {
        const homeContent = `
            <div class="theme-toggle">
                <button id="theme-button">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
            <section class="hero-section">
                <h1>Bem-vindo ao Catálogo de Carros</h1>
                <p>Encontre o carro dos seus sonhos em nosso catálogo completo</p>
                
                <div class="search-container">
                    <input type="text" id="search-input" placeholder="Busque por marca ou modelo...">
                    <button id="search-button">Buscar</button>
                </div>
            </section>

            <section class="featured-brands">
                <h2>Marcas em Destaque</h2>
                <div class="brand-grid"></div>
            </section>
        `;

        const menuLinks = document.querySelectorAll('.nav-list a');
        const mainContent = document.querySelector('main');

        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                menuLinks.forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
                
                const section = e.target.getAttribute('href').substring(1);
                
                if (section === 'home') {
                    mainContent.innerHTML = homeContent;
                    this.initializeSearchListeners();
                } else {
                    const brandData = carCatalog.find(brand => 
                        brand.brand.toLowerCase() === section.toLowerCase()
                    );
                    if (brandData) {
                        this.brandController.displayVehicles(brandData.vehicles, brandData.brand);
                    }
                }
            });
        });

        // Mostra a home por padrão
        const homeLink = document.querySelector('.nav-list a[href="#home"]');
        if (homeLink) {
            homeLink.click();
        }
    }

    setupEventListeners() {
        this.brandController.populateBrandMenu();
        this.initializeSearchListeners();
        
        document.addEventListener('click', e => {
            if (e.target.closest('#theme-button')) {
                const button = e.target.closest('#theme-button');
                const icon = button.querySelector('i');
                document.body.classList.toggle('dark-mode');
                
                if (document.body.classList.contains('dark-mode')) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            }
        });
    }

    initializeSearchListeners() {
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');

        // Define os métodos como propriedades da classe usando arrow functions
        this.handleEnterKey = (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        };

        this.performSearch = () => {
            const searchInput = document.getElementById('search-input');
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (!searchTerm) {
                alert('Por favor, digite uma marca ou modelo para buscar.');
                return;
            }

            // Primeiro tenta encontrar pela marca exata
            let foundBrand = carCatalog.find(brand => 
                brand.brand.toLowerCase() === searchTerm
            );

            // Se não encontrar pela marca exata, procura por modelo
            if (!foundBrand) {
                foundBrand = carCatalog.find(brand => 
                    brand.vehicles.some(vehicle => 
                        vehicle.model.toLowerCase().includes(searchTerm)
                    )
                );
            }

            // Se ainda não encontrou, procura por marca parcial
            if (!foundBrand) {
                foundBrand = carCatalog.find(brand => 
                    brand.brand.toLowerCase().includes(searchTerm)
                );
            }

            if (foundBrand) {
                const brandId = foundBrand.brand.toLowerCase();
                const menuLink = document.querySelector(`a[href="#${brandId}"]`);
                
                if (menuLink) {
                    menuLink.click();
                    searchInput.value = '';
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            } else {
                alert('Marca ou modelo não encontrado no catálogo.');
            }
        };

        // Remove listeners antigos
        searchButton?.removeEventListener('click', this.performSearch);
        searchInput?.removeEventListener('keypress', this.handleEnterKey);

        // Adiciona os novos listeners
        if (searchButton) {
            searchButton.addEventListener('click', this.performSearch);
        }
        
        if (searchInput) {
            searchInput.addEventListener('keypress', this.handleEnterKey);
        }
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
}); 