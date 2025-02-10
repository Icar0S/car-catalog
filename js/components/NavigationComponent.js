export class NavigationComponent {
    constructor(brandController) {
        this.brandController = brandController;
        this.homeContent = document.querySelector('main').innerHTML; // Guarda o conteúdo inicial da home
        this.searchComponent = null;
        this.featuredBrandsComponent = null;
        this.slideShowComponent = null;
        this.categoryComponent = null;
        this.init();
    }

    setComponents(searchComponent, featuredBrandsComponent, slideShowComponent, categoryComponent) {
        this.searchComponent = searchComponent;
        this.featuredBrandsComponent = featuredBrandsComponent;
        this.slideShowComponent = slideShowComponent;
        this.categoryComponent = categoryComponent;
    }

    init() {
        this.setupNavigationListeners();
        this.handleInitialNavigation();
    }

    setupNavigationListeners() {
        const menuLinks = document.querySelectorAll('.nav-list a');
        const mainContent = document.querySelector('main');

        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                menuLinks.forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
                
                const targetId = e.target.getAttribute('href').substring(1);
                window.location.hash = targetId;

                if (targetId === 'home') {
                    // Limpa o conteúdo principal
                    mainContent.innerHTML = '';
                    
                    // Recria a estrutura da home na ordem correta
                    this.createHomeStructure(mainContent);
                    
                    // Reinicializa os componentes na ordem correta
                    if (this.searchComponent) {
                        this.searchComponent.initializeSearchListeners();
                    }

                    // Primeiro carrega as marcas em destaque
                    if (this.featuredBrandsComponent) {
                        this.featuredBrandsComponent.loadFeaturedBrands();
                    }

                    // Depois inicializa o slideshow
                    if (this.slideShowComponent) {
                        this.slideShowComponent.destroy(); // Limpa o slideshow anterior
                        this.slideShowComponent.init();
                    }

                    if (this.categoryComponent) {
                        this.categoryComponent.init();
                    }
                    
                    // Rola para o topo
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    // Limpa o slideshow ao sair da home
                    if (this.slideShowComponent) {
                        this.slideShowComponent.destroy();
                    }

                    // Esconde elementos da home
                    const heroSection = document.querySelector('.hero-section');
                    const featuredSections = document.querySelectorAll('.featured-brands');
                    const slideshowSection = document.querySelector('.slideshow-section');
                    
                    if (heroSection) heroSection.style.display = 'none';
                    featuredSections.forEach(section => section.style.display = 'none');
                    if (slideshowSection) slideshowSection.style.display = 'none';

                    // Mostra e atualiza a galeria de veículos
                    const vehicleGallery = document.getElementById('vehicle-gallery');
                    if (vehicleGallery) {
                        vehicleGallery.style.display = 'block';
                        if (this.brandController) {
                            this.brandController.displayBrandContent(targetId);
                        }
                    }
                }
            });
        });
    }

    createHomeStructure(mainContent) {
        mainContent.innerHTML = `
            <section class="hero-section">
                <h1>Bem-vindo ao Catálogo de Carros</h1>
                <p>Encontre o carro dos seus sonhos em nosso catálogo completo</p>
                <div class="search-container">
                    <input type="text" id="search-input" placeholder="Busque por marca ou modelo...">
                    <button id="search-button">Buscar</button>
                </div>
            </section>
            <section class="featured-brands">
                <h2>Fotografias</h2>
                <div class="photos-grid">
                    <!-- As imagens serão carregadas via JavaScript -->
                </div>
            </section>
            <section class="featured-brands">
                <h2>Marcas em Destaque</h2>
                <div class="brand-grid">
                    <!-- As imagens serão carregadas via JavaScript -->
                </div>
            </section>
            <section class="featured-brands">
                <h2>Categorias</h2>
                <div class="category-grid">
                    <!-- As imagens serão carregadas via JavaScript -->
                </div>
            </section>
            <div id="vehicle-gallery" style="display: none;"></div>
        `;
    }

    handleInitialNavigation() {
        const hash = window.location.hash.substring(1);
        const homeLink = document.querySelector('.nav-list a[href="#home"]');
        
        if (hash === '' && homeLink) {
            homeLink.click();
        } else if (hash) {
            const targetLink = document.querySelector(`.nav-list a[href="#${hash}"]`);
            if (targetLink) {
                targetLink.click();
            }
        }
    }
} 