/* script.js */

// Dados do catálogo de carros
const carCatalog = [
    {
      brand: "Toyota",
      vehicles: [
        { model: "Corolla", image: "images/toyota/toyota-corolla.png" },
        { model: "Supra Original", image: "images/toyota/toyota-supra.png" },
        { model: "Supra", image: "images/toyota/toyota-supra-film.png" }
      ]
    },
    {
      brand: "Honda",
      vehicles: [
        { model: "Civic", image: "images/honda/honda-civic-red.png" },
        { model: "Civic", image: "images/honda/honda-civic-black.png" },
        { model: "Accord", image: "images/honda/honda-accord.png" },
        { model: "Accord Gray", image: "images/honda/honda-accord-gray.png" }
      ]
    },
    {
      brand: "Ford",
      vehicles: [
        { model: "Mustang", image: "images/ford/ford-mustang.png" },
        { model: "Mustang GT500", image: "images/ford/ford-eleanor-mustang.png" },
        { model: "Raptor", image: "images/ford/ford-Raptor.avif" },
        { model: "F-150", image: "images/ford/ford-f150-2.png" },
        { model: "F-150 Red", image: "images/ford/ford-f150.png" }
      ]
    }
  ];

// Define fundos diferentes para cada marca
const brandBackgrounds = {
  "Toyota": "#e0f7fa",  // tom de azul claro
  "Honda": "#e8f5e9",   // tom de verde claro
  "Ford": "#fff3e0"     // tom de laranja claro
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
    const gallery = document.getElementById("vehicle-gallery");
    // Limpa a galeria
    gallery.innerHTML = "";
    
    // Define o fundo do main com base na marca selecionada
    const mainElem = document.querySelector("main");
    mainElem.style.backgroundColor = brandBackgrounds[brand] || "#f5f5f5";
  
    vehicles.forEach(vehicle => {
      const card = document.createElement("div");
      card.className = "vehicle-card";
      
      const img = document.createElement("img");
      img.src = vehicle.image;
      img.alt = vehicle.model;
      
      const title = document.createElement("h3");
      title.textContent = vehicle.model;
      
      card.appendChild(img);
      card.appendChild(title);
      gallery.appendChild(card);
    });
  }
  
  // Inicialização do sistema
  function init() {
    populateBrandMenu();
  }
  
  // Executa a inicialização após o carregamento do DOM
  document.addEventListener("DOMContentLoaded", init);