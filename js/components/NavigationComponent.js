export class NavigationComponent {
    constructor(brandController) {
        this.brandController = brandController;
        this.homeContent = document.querySelector('main').innerHTML; // Guarda o conteúdo inicial da home
        this.init();
    }

    init() {
        this.setupNavigationListeners();
        this.handleInitialNavigation();
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

    setupNavigationListeners() {
        const menuLinks = document.querySelectorAll('.nav-list a');
        const mainContent = document.querySelector('main');

        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove classe active de todos os links e adiciona ao clicado
                menuLinks.forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
                
                const targetId = e.target.getAttribute('href').substring(1);
                window.location.hash = targetId;

                if (targetId === 'home') {
                    // Restaura o conteúdo da home
                    mainContent.innerHTML = this.homeContent;
                    
                    // Mostra as seções da home
                    const heroSection = document.querySelector('.hero-section');
                    const featuredSections = document.querySelectorAll('.featured-brands');
                    
                    if (heroSection) heroSection.style.display = '';
                    featuredSections.forEach(section => section.style.display = '');
                    
                    // Esconde a galeria de veículos
                    const vehicleGallery = document.getElementById('vehicle-gallery');
                    if (vehicleGallery) {
                        vehicleGallery.style.display = 'none';
                        vehicleGallery.innerHTML = '';
                    }

                    // Rola para o topo
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    // Esconde elementos da home
                    const heroSection = document.querySelector('.hero-section');
                    const featuredSections = document.querySelectorAll('.featured-brands');
                    
                    if (heroSection) heroSection.style.display = 'none';
                    featuredSections.forEach(section => section.style.display = 'none');

                    // Mostra e atualiza a galeria de veículos
                    const vehicleGallery = document.getElementById('vehicle-gallery');
                    if (vehicleGallery) {
                        vehicleGallery.style.display = 'block';
                        // O brandController será responsável por mostrar os veículos
                        if (this.brandController) {
                            this.brandController.displayBrandContent(targetId);
                        }
                    }
                }
            });
        });
    }
} 