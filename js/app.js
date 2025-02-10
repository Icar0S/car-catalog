// Arquivo principal
import { carCatalog, brandBackgrounds } from './data/carCatalog.js';
import { BrandController } from './controllers/BrandController.js';
import { SearchService } from './services/SearchService.js';
import { MenuComponent } from './components/MenuComponent.js';
import { SearchComponent } from './components/SearchComponent.js';
import { ThemeComponent } from './components/ThemeComponent.js';
import { FeaturedBrandsComponent } from './components/FeaturedBrandsComponent.js';
import { NavigationComponent } from './components/NavigationComponent.js';

class App {
    constructor() {
        this.brandController = new BrandController(carCatalog, brandBackgrounds);
        this.searchService = new SearchService(carCatalog);
        this.menuComponent = new MenuComponent();
        this.searchComponent = new SearchComponent(this.searchService, this.brandController);
        this.themeComponent = new ThemeComponent();
        this.featuredBrandsComponent = new FeaturedBrandsComponent(this.brandController);
        this.navigationComponent = new NavigationComponent(this.brandController);
    }

    init() {
        this.menuComponent.init();
        this.setupEventListeners();
        this.featuredBrandsComponent.loadFeaturedBrands();
    }

    setupEventListeners() {
        this.brandController.populateBrandMenu();
        this.searchComponent.initializeSearchListeners();
        this.themeComponent.initializeThemeToggle();
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
}); 