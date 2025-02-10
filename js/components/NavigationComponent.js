export class NavigationComponent {
    constructor(brandController) {
        this.brandController = brandController;
        this.homeContent = document.querySelector('main').innerHTML; // Guarda o conteúdo inicial da home
        this.searchComponent = null; // Será inicializado no App
        this.featuredBrandsComponent = null;
        this.init();
    }

    setComponents(searchComponent, featuredBrandsComponent) {
        this.searchComponent = searchComponent;
        this.featuredBrandsComponent = featuredBrandsComponent;
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
      
            // Atualiza o link ativo
            this.updateActiveLink(e.target, menuLinks);
      
            const targetId = e.target.getAttribute('href').substring(1);
            window.location.hash = targetId;
      
            if (targetId === 'home') {
              this.handleHomeNavigation(mainContent);
            } else {
              this.handleOtherNavigation(targetId);
            }
          });
        });
      }
      
      updateActiveLink(target, links) {
        links.forEach(link => link.classList.remove('active'));
        target.classList.add('active');
      }
      
      toggleHomeSections(show) {
        const heroSection = document.querySelector('.hero-section');
        const featuredSections = document.querySelectorAll('.featured-brands');
      
        if (heroSection) {
          heroSection.style.display = show ? '' : 'none';
        }
        featuredSections.forEach(section => {
          section.style.display = show ? '' : 'none';
        });
      }
      
      handleHomeNavigation(mainContent) {
        // Restaura o conteúdo da home
        mainContent.innerHTML = this.homeContent;
      
        // Reinicializa os componentes da home, se existirem
        if (this.searchComponent) {
          this.searchComponent.initializeSearchListeners();
        }
        if (this.featuredBrandsComponent) {
          this.featuredBrandsComponent.loadFeaturedBrands();
        }
      
        // Mostra as seções da home
        this.toggleHomeSections(true);
      
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
      }
      
      handleOtherNavigation(targetId) {
        // Esconde elementos da home
        this.toggleHomeSections(false);
      
        // Mostra e atualiza a galeria de veículos
        const vehicleGallery = document.getElementById('vehicle-gallery');
        if (vehicleGallery) {
          vehicleGallery.style.display = 'block';
      
          // O brandController será responsável por mostrar os veículos, se existir
          if (this.brandController) {
            this.brandController.displayBrandContent(targetId);
          }
        }
    }
} 