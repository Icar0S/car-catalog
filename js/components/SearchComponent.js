export class SearchComponent {
    constructor(searchService, brandController) {
        this.searchService = searchService;
        this.brandController = brandController;
        this.handleEnterKey = this.handleEnterKey.bind(this);
        this.performSearch = this.performSearch.bind(this);
        this.initializeSearchListeners();
    }

    initializeSearchListeners() {
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');

        if (searchButton) {
            searchButton.removeEventListener('click', this.performSearch);
            searchButton.addEventListener('click', () => {
                this.performSearch();
            });
        }
        
        if (searchInput) {
            searchInput.removeEventListener('keypress', this.handleEnterKey);
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch();
                }
            });
        }
    }

    handleEnterKey(e) {
        if (e.key === 'Enter') {
            this.performSearch();
        }
    }

    performSearch() {
        const searchInput = document.getElementById('search-input');
        const searchTerm = searchInput?.value.toLowerCase().trim();
        
        if (!searchTerm) {
            alert('Por favor, digite uma marca ou modelo para buscar.');
            return;
        }

        const foundBrand = this.searchService.search(searchTerm);
        
        if (foundBrand) {
            this.handleSearchResult(foundBrand, searchInput);
        } else {
            alert('Marca ou modelo não encontrado no catálogo.');
        }
    }

    handleSearchResult(foundBrand, searchInput) {
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
    }
} 