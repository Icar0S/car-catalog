// Serviço de busca
export class SearchService {
    constructor(catalog) {
        this.catalog = catalog;
    }

    search(searchTerm) {
        // Primeiro tenta encontrar pela marca exata
        let foundBrand = this.catalog.find(brand => 
            brand.brand.toLowerCase() === searchTerm
        );

        // Se não encontrar pela marca exata, procura por modelo
        if (!foundBrand) {
            foundBrand = this.catalog.find(brand => 
                brand.vehicles.some(vehicle => 
                    vehicle.model.toLowerCase().includes(searchTerm)
                )
            );
        }

        // Se ainda não encontrou, procura por marca parcial
        if (!foundBrand) {
            foundBrand = this.catalog.find(brand => 
                brand.brand.toLowerCase().includes(searchTerm)
            );
        }

        return foundBrand;
    }

    // ... outros métodos de busca
} 