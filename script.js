/* script.js */

// Dados do catálogo de carros
const carCatalog = [
    {
        brand: "Audi",
        vehicles: [
            { model: "A3", image: "images/audi/audi-a3.png" },
            { model: "A4", image: "images/audi/audi-a4.png" },
            { model: "R8", image: "images/audi/audi-r8.png" }
        ]
    },
    {
        brand: "BMW",
        vehicles: [
            { model: "M3", image: "images/bmw/bmw-m3.png" },
            { model: "M4", image: "images/bmw/bmw-m4.png" },
            { model: "X6", image: "images/bmw/bmw-x6.png" }
        ]
    },
    {
        brand: "Ferrari",
        vehicles: [
            { model: "F8 Tributo", image: "images/ferrari/ferrari-f8.png" },
            { model: "SF90", image: "images/ferrari/ferrari-sf90.png" },
            { model: "812 Superfast", image: "images/ferrari/ferrari-812.png" }
        ]
    },
    {
        brand: "Fiat",
        vehicles: [
            { model: "Pulse", image: "images/fiat/fiat-pulse.png" },
            { model: "Fastback", image: "images/fiat/fiat-fastback.png" },
            { model: "Toro", image: "images/fiat/fiat-toro.png" }
        ]
    },
    {
        brand: "Ford",
        vehicles: [
            { model: "Mustang", image: "images/ford/ford-Mustang.png" },
            { model: "Mustang GT500", image: "images/ford/ford-eleanor-mustang.png" },
            { model: "Raptor", image: "images/ford/ford-Raptor.avif" },
            { model: "F-150", image: "images/ford/ford-f150.png" },
            { model: "F-150 V2", image: "images/ford/ford-f150-2.png" }
        ]
    },
    {
        brand: "Honda",
        vehicles: [
            { model: "Accord", image: "images/honda/honda-accord.png" },
            { model: "Accord Sport", image: "images/honda/honda-accord-gray.png" },
            { model: "Civic", image: "images/honda/honda-civic-red.png" },
            { model: "Civic Sport", image: "images/honda/honda-civic-black.png" },
            { model: "Civic Si", image: "images/honda/honda-civic-si.png" },
            { model: "Civic Type R", image: "images/honda/honda-civic.avif" },
            { model: "CR-V", image: "images/honda/honda-crv.png" }
        ]
    },
    {
        brand: "Hyundai",
        vehicles: [
            { model: "HB20", image: "images/hyundai/hyundai-hb20.png" },
            { model: "Creta", image: "images/hyundai/hyundai-creta.png" },
            { model: "Santa Fe", image: "images/hyundai/hyundai-santafe.png" }
        ]
    },
    {
        brand: "Lamborghini",
        vehicles: [
            { model: "Huracán", image: "images/lamborghini/lamborghini-huracan.png" },
            { model: "Aventador", image: "images/lamborghini/lamborghini-aventador.png" },
            { model: "Urus", image: "images/lamborghini/lamborghini-urus.png" }
        ]
    },
    {
        brand: "Mercedes",
        vehicles: [
            { model: "AMG GT", image: "images/mercedes/mercedes-amg-gt.png" },
            { model: "Classe C", image: "images/mercedes/mercedes-c-class.png" },
            { model: "GLA", image: "images/mercedes/mercedes-gla.png" }
        ]
    },
    {
        brand: "Porsche",
        vehicles: [
            { model: "911", image: "images/porsche/porsche-911.png" },
            { model: "Cayenne", image: "images/porsche/porsche-cayenne.png" },
            { model: "Taycan", image: "images/porsche/porsche-taycan.png" }
        ]
    },
    {
        brand: "Toyota",
        vehicles: [
            { model: "Corolla", image: "images/toyota/toyota-corolla.png" },
            { model: "GR Corolla", image: "images/toyota/toyota-gr-corolla.png" },
            { model: "Hilux GR Sport 2024", image: "images/toyota/toyota-hilux-gr-sport-2024.webp" },
            { model: "Hilux", image: "images/toyota/toyota-hilux.png" },

            { model: "Supra", image: "images/toyota/toyota-supra.png" },
            { model: "Supra Film", image: "images/toyota/toyota-supra-film.png" }
        ]
    },
    {
        brand: "Volkswagen",
        vehicles: [
            { model: "Golf GTI", image: "images/volkswagen/vw-golf-gti.png" },
            { model: "Jetta", image: "images/volkswagen/vw-jetta.png" },
            { model: "Tiguan", image: "images/volkswagen/vw-tiguan.png" }
        ]
    }
];

// Define fundos diferentes para cada marca
const brandBackgrounds = {
    "Audi": "#f5f5f5",      // cinza claro
    "BMW": "#e0e0e0",       // cinza médio
    "Ferrari": "#ffebee",    // vermelho claro
    "Fiat": "#e3f2fd",      // azul claro
    "Ford": "#e8eaf6",      // azul claro
    "Honda": "#e8f5e9",     // verde claro
    "Hyundai": "#f3e5f5",   // roxo claro
    "Lamborghini": "#fff3e0", // laranja claro
    "Mercedes": "#fafafa",   // cinza muito claro
    "Porsche": "#eceff1",    // azul acinzentado
    "Toyota": "#e0f7fa",    // azul claro
    "Volkswagen": "#e8eaf6" // azul claro
};
  
  // Função para criar o menu de marcas
  function populateBrandMenu() {
    const menu = document.getElementById("brand-menu");
    carCatalog.forEach(brandItem => {
      const link = document.createElement("a");
      link.textContent = brandItem.brand;
      link.href = "#";
      link.addEventListener("click", (event) => {
        event.preventDefault();
        displayVehicles(brandItem.vehicles, brandItem.brand);
      });
      menu.appendChild(link);
    });
  }
  
  // Função para exibir os veículos da marca selecionada
  function displayVehicles(vehicles, brand) {
    const mainContent = document.querySelector('main');
    mainContent.innerHTML = '';
    
    const brandSection = document.createElement('section');
    brandSection.className = 'brand-vehicles';
    
    const brandTitle = document.createElement('h2');
    brandTitle.textContent = `Veículos ${brand}`;
    brandSection.appendChild(brandTitle);
    
    const vehiclesGrid = document.createElement('div');
    vehiclesGrid.className = 'vehicle-gallery';
    
    vehicles.forEach(vehicle => {
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        
        card.innerHTML = `
            <div class="image-container">
                <img src="${vehicle.image}" alt="${vehicle.model}" 
                     onerror="this.src='placeholder.png'">
            </div>
            <div class="text-container">
                <h3>${vehicle.model}</h3>
                <p class="brand-name">${brand}</p>
            </div>
        `;
        
        vehiclesGrid.appendChild(card);
    });
    
    brandSection.appendChild(vehiclesGrid);
    mainContent.appendChild(brandSection);
    
    mainContent.style.backgroundColor = brandBackgrounds[brand] || '#f5f5f5';
  }
  
  // Inicialização do sistema
  function init() {
    populateBrandMenu();
    initializeContent();
  }
  
  // Executa a inicialização após o carregamento do DOM
  document.addEventListener("DOMContentLoaded", init);

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    const brandLogos = {
        'volkswagen': 'caminho/para/logo-vw.png',
        'fiat': 'caminho/para/logo-fiat.png',
        'chevrolet': 'caminho/para/logo-chevrolet.png',
    };

    // Função para carregar as marcas em destaque
    function loadFeaturedBrands() {
        const brandGrid = document.querySelector('.brand-grid');
        Object.entries(brandLogos).forEach(([brand, logoUrl]) => {
            const brandDiv = document.createElement('div');
            brandDiv.className = 'brand-item';
            brandDiv.innerHTML = `
                <img src="${logoUrl}" alt="${brand}" class="brand-logo">
                <h3>${brand}</h3>
            `;
            brandGrid.appendChild(brandDiv);
        });
    }

    // Função de busca
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredVehicles = carCatalog.flatMap(brand => 
            brand.vehicles.filter(vehicle => 
                vehicle.model.toLowerCase().includes(searchTerm) || 
                brand.brand.toLowerCase().includes(searchTerm)
            ).map(vehicle => ({...vehicle, brand: brand.brand}))
        );
        
        displayVehicles(filteredVehicles, 'Resultados da Busca');
    });

    // Carregar marcas ao iniciar a página
    loadFeaturedBrands();
});

function initializeContent() {
    const homeContent = `
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
            
            // Remove active class from all links
            menuLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            e.target.classList.add('active');
            
            const section = e.target.getAttribute('href').substring(1);
            console.log('Clicked section:', section); // Debug
            
            if (section === 'home') {
                mainContent.innerHTML = homeContent;
                loadFeaturedBrands();
                initializeSearchListeners();
            } else {
                const brandData = carCatalog.find(brand => 
                    brand.brand.toLowerCase() === section.toLowerCase()
                );
                console.log('Found brand data:', brandData); // Debug
                
                if (brandData) {
                    displayVehicles(brandData.vehicles, brandData.brand);
                }
            }
        });
    });

    // Show home by default
    const homeLink = document.querySelector('.nav-list a[href="#home"]');
    if (homeLink) {
        homeLink.click();
    }
}

// Adicione esta função para garantir que o código só execute após o DOM estar carregado
document.addEventListener('DOMContentLoaded', () => {
    initializeContent();
});