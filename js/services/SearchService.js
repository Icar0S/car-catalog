// Serviço de busca
export class SearchService {
    constructor(catalog) {
        this.catalog = catalog;
    }

    search(searchTerm) {
        return this.catalog.flatMap(brand => 
            brand.vehicles.filter(vehicle => 
                vehicle.model.toLowerCase().includes(searchTerm) || 
                brand.brand.toLowerCase().includes(searchTerm)
            ).map(vehicle => ({...vehicle, brand: brand.brand}))
        );
    }

    // ... outros métodos de busca
} 