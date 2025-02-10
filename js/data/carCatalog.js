// Arquivo para os dados do catálogo
export const carCatalog = [
    {
        brand: "Audi",
        vehicles: [
            { model: "A3", image: "./images/audi/audi-a3.png" },
            { model: "A4", image: "./images/audi/audi-a4.png" },
            { model: "A5", image: "./images/audi/audi-a5.png" },
            { model: "A6", image: "./images/audi/audi-a6.png" },
            { model: "R8", image: "./images/audi/audi-r8.png" }
        ]
    },
    {
        brand: "BMW",
        vehicles: [
            { model: "M3", image: "./images/bmw/bmw-m3.png" },
            { model: "M4", image: "./images/bmw/bmw-m4.png" },
            { model: "X1", image: "./images/bmw/bmw-x1.png" },
            { model: "X6", image: "./images/bmw/bmw-x6.png" },
            { model: "iX", image: "./images/bmw/bmw-ix.png" },
            { model: "I7", image: "./images/bmw/bmw-i7.png" }
        ]
    },
    {
        brand: "Ferrari",
        vehicles: [
            { model: "F8 Tributo", image: "./images/ferrari/ferrari-f8.png" },
            { model: "SF90", image: "./images/ferrari/ferrari-sf90.png" },
            { model: "296 GTB", image: "./images/ferrari/ferrari-296.png" },
            { model: "812 Superfast", image: "./images/ferrari/ferrari-812.png" },
            { model: "488 Pista", image: "./images/ferrari/ferrari-488.png" },
            { model: "Purosangue", image: "./images/ferrari/ferrari-purosangue.png" }
        ]
    },
    {
        brand: "Fiat",
        vehicles: [
            { model: "Pulse", image: "./images/fiat/fiat-pulse.png" },
            { 
                model: "Uno", 
                images: [
                    "./images/fiat/fiat-uno-25.png",
                    "./images/fiat/fiat-uno-25-1.png"
                ],
                currentImageIndex: 0
            },
            { 
                model: "Argo", 
                images: [
                    "./images/fiat/fiat-argo.png",
                    "./images/fiat/fiat-argo-1.png"
                ],
                currentImageIndex: 0
            },
            { model: "Fastback", image: "./images/fiat/fiat-fastback.png" },
            { model: "500", image: "./images/fiat/fiat-500.png" },
            { model: "Punto", image: "./images/fiat/fiat-punto.png" },
            { model: "Toro", image: "./images/fiat/fiat-toro.png" }
        ]
    },
    {
        brand: "Ford",
        vehicles: [
            { model: "Mustang", image: "./images/ford/ford-Mustang.png" },
            { model: "Mustang GT500", image: "./images/ford/ford-eleanor-mustang.png" },
            { model: "Raptor", image: "./images/ford/ford-Raptor.avif" },
            { 
              model: "F-150", 
              images: [
                  "./images/ford/ford-f150.png",
                  "./images/ford/ford-f150-2.png"
              ],
              currentImageIndex: 0
            }
        ]
    },
    {
        brand: "Honda",
        vehicles: [
            { 
              model: "Accord", 
              images: [
                  "./images/honda/honda-accord.png",
                  "./images/honda/honda-accord-gray.png"
              ],
              currentImageIndex: 0
            },
            { 
              model: "Civic", 
              images: [
                  "./images/honda/honda-civic-red.png",
                  "./images/honda/honda-civic-black.png"
              ],
              currentImageIndex: 0
            },
            { 
              model: "Civic Si", 
              images: [
                  "./images/honda/honda-civic-si.png",
                  "./images/honda/honda-civic.png"
              ],
              currentImageIndex: 0
            },
            { 
              model: "Civic Type R", 
              images: [
                  "./images/honda/honda-civic-type-r.png",
                  "./images/honda/honda-civic-type-r-1.png"
              ],
              currentImageIndex: 0
            },
            { model: "CR-V", image: "./images/honda/honda-crv.png" }
        ]
    },
    {
        brand: "Hyundai",
        vehicles: [
            { model: "HB20", image: "./images/hyundai/hyundai-hb20.png" },
            { model: "Creta", image: "./images/hyundai/hyundai-creta.png" },
            { model: "Santa Fe", image: "./images/hyundai/hyundai-santafe.png" }
        ]
    },
    {
        brand: "Lamborghini",
        vehicles: [
            { model: "Huracán", image: "./images/lambo/lamborghini-huracan.png" },
            { model: "Aventador", image: "./images/lambo/lamborghini-aventador.png" },
            { model: "Urus", image: "./images/lambo/lamborghini-urus.png" }
        ]
    },
    {
        brand: "Mercedes",
        vehicles: [
            { model: "AMG GT", image: "./images/mercedes/mercedes-amg.png" },
            { model: "Classe C", image: "./images/mercedes/mercedes-c-class.png" },
            { model: "GLA", image: "./images/mercedes/mercedes-gla.png" }
        ]
    },
    {
        brand: "Porsche",
        vehicles: [
            { model: "911", image: "./images/porsche/porsche-911.png" },
            { model: "918", image: "./images/porsche/porsche-918.png" },
            { model: "Panamera", image: "./images/porsche/porsche-panamera.png" },
            { model: "Taycan", image: "./images/porsche/porsche-taycan.png" }
        ]
    },
    {
        brand: "Toyota",
        vehicles: [
            { model: "Corolla", image: "./images/toyota/toyota-corolla.png" },
            { model: "GR Corolla", image: "./images/toyota/toyota-gr-corolla.png" },
            { model: "Hilux GR Sport 2024", image: "./images/toyota/toyota-gr-hilux.png" },
            { model: "Hilux", image: "./images/toyota/toyota-hilux.png" },
            { model: "Supra", image: "./images/toyota/toyota-supra.png" },
            { model: "Supra Film", image: "./images/toyota/toyota-supra-film.png" }
        ]
    },
    {
        brand: "Volkswagen",
        vehicles: [
            { 
                model: "Golf GTI", 
                images: [
                    "./images/volkswagen/vw-golf-gti.png",
                    "./images/volkswagen/vw-golf-gti-1.png"
                ],
                currentImageIndex: 0
            },
            { model: "Jetta", image: "./images/volkswagen/vw-jetta.png" },
            { model: "Tiguan", image: "./images/volkswagen/vw-tiguan.png" }
        ]
    }
];

export const brandBackgrounds = {
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