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
        this.loadFeaturedBrands();
    }

    initializeContent() {
        const navList = document.querySelector('.nav-list');
        if (navList) {
            // Cria o botão hambúrguer
            const hamburgerButton = document.createElement('button');
            hamburgerButton.id = 'hamburger-menu';
            hamburgerButton.innerHTML = `
                <img src="./icons/icon-burger.png" alt="Menu">
            `;

            // Insere o botão antes da nav-list
            navList.parentNode.insertBefore(hamburgerButton, navList);

            // Adiciona os event listeners para o menu
            const setupMenuListeners = () => {
                const hamburgerButton = document.getElementById('hamburger-menu');
                const closeButton = document.getElementById('close-menu');
                const sideMenu = document.getElementById('side-menu');
                
                hamburgerButton?.addEventListener('click', (e) => {
                    e.stopPropagation();
                    sideMenu?.classList.remove('-translate-x-full');
                });
                
                closeButton?.addEventListener('click', () => {
                    sideMenu?.classList.add('-translate-x-full');
                });
                
                // Fecha o menu ao clicar fora dele
                document.addEventListener('click', (e) => {
                    if (sideMenu && 
                        !sideMenu.contains(e.target) && 
                        !hamburgerButton?.contains(e.target) && 
                        !sideMenu.classList.contains('-translate-x-full')) {
                        sideMenu.classList.add('-translate-x-full');
                    }
                });
            };

            setupMenuListeners();
        }

        // Adiciona o menu lateral ao body
        const sideMenuHTML = `
            <div id="side-menu" class="fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out z-[60] overflow-y-auto">
                <div class="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <h2 class="text-lg font-bold">Menu</h2>
                    <button id="close-menu" class="text-gray-500 hover:text-gray-700 dark:text-gray-300">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <nav class="p-4">
                    <ul class="space-y-4">
                        <li><a href="#" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900">ÚLTIMAS NOTÍCIAS</a></li>
                        <li><a href="#" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900">EDIÇÕES ANTERIORES</a></li>
                        <li><a href="#" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900">CATÁLOGO NO YOUTUBE</a></li>
                        <li><a href="#" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900">TABELA DE PREÇOS</a></li>
                        <li><a href="#" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900">TESTES</a></li>
                        <li><a href="#" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900">AUTO-SERVIÇO</a></li>
                        <li><a href="#" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900">SEGREDO</a></li>
                        <li><a href="#" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900">CLÁSSICOS</a></li>
                        <li><a href="#" class="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900">CARROS USADOS</a></li>
                    </ul>
                </nav>
            </div>
        `;

        document.body.insertAdjacentHTML('afterbegin', sideMenuHTML);

        // Adiciona CSS personalizado para garantir o tamanho e posicionamento correto do botão
        const style = document.createElement('style');
        style.textContent = `
            #hamburger-menu {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
                margin-right: 8px;
                padding: 0;
                border: none;
                background: none;
                cursor: pointer;
            }
            
            #hamburger-menu img {
                width: 24px;
                height: 24px;
                object-fit: contain;
            }
            
            .nav-list {
                display: flex;
                align-items: center;
            }
        `;
        document.head.appendChild(style);

        // Continuar direto com o homeContent
        const homeContent = `
            <div class="theme-toggle fixed top-20 right-5 z-10">
                <button id="theme-button" class="p-3 rounded-full bg-white shadow-md hover:shadow-lg click-effect dark:bg-gray-800">
                    <i class="fas fa-moon dark:text-white"></i>
                </button>
            </div>
            <section class="hero-section bg-white dark:bg-gray-900 py-16 px-4 animate-slide-up">
                <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-4 font-montserrat">
                    Bem-vindo ao Catálogo de Carros
                </h1>
                <p class="text-gray-600 dark:text-gray-300 mb-8 font-montserrat">
                    Encontre o carro dos seus sonhos em nosso catálogo completo
                </p>
                
                <div class="search-container max-w-2xl mx-auto flex gap-4 flex-wrap justify-center">
                    <input type="text" 
                           id="search-input" 
                           placeholder="Busque por marca ou modelo..." 
                           class="flex-1 min-w-[200px] p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                    <button id="search-button" 
                            class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg click-effect transition-colors duration-300">
                        Buscar
                    </button>
                </div>
            </section>

            <section class="featured-brands bg-gray-50 dark:bg-gray-800 py-12 px-4">
                <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 font-montserrat">
                    Marcas em Destaque
                </h2>
                <div class="brand-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                </div>
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
                    this.loadFeaturedBrands();
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

    loadFeaturedBrands() {
        const brandGrid = document.querySelector('.brand-grid');
        if (!brandGrid) return;

        // Marcas em destaque com seus modelos mais populares
        const featuredBrands = [
            {
                brand: "Ford",
                image: "images/ford/ford-Mustang.png",
                models: ["Mustang", "Mustang GT500", "Raptor", "F-150"]
            },
            {
                brand: "Honda",
                image: "images/honda/honda-civic-si.png",
                models: ["Civic Si", "Civic Type R", "Accord", "CR-V"]
            },
            {
                brand: "Toyota",
                image: "images/toyota/toyota-supra.png",
                models: ["Supra", "Corolla", "RAV4", "Camry"]
            },
            {
                brand: "Volkswagen",
                image: "images/volkswagen/vw-golf-gti.png",
                models: ["Golf GTI", "Jetta", "Tiguan", "Polo"]
            }
        ];

        brandGrid.innerHTML = ''; // Limpa o conteúdo existente

        featuredBrands.forEach(featured => {
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

            brandGrid.appendChild(brandCard);

            // Adiciona evento de clique no botão
            const viewButton = brandCard.querySelector('.view-brand');
            viewButton.addEventListener('click', () => {
                const brandLink = document.querySelector(`.nav-list a[href="#${featured.brand.toLowerCase()}"]`);
                if (brandLink) {
                    brandLink.click();
                }
            });
        });
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
}); 