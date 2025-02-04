/* script.js */

// Dados do catálogo de carros
const carCatalog = [
    {
      brand: "Toyota",
      vehicles: [
        { model: "Corolla", image: "images/toyota_corolla.png" },
        { model: "Supra", image: "images/toyota_supra.png" }
      ]
    },
    {
      brand: "Honda",
      vehicles: [
        { model: "Civic", image: "images/honda_civic.png" },
        { model: "Accord", image: "images/honda_accord.png" }
      ]
    },
    {
      brand: "Ford",
      vehicles: [
        { model: "Mustang", image: "images/ford_mustang.png" },
        { model: "F-150", image: "images/ford_f150.png" }
      ]
    }
  ];
  
  // Função para criar o menu de marcas
  function populateBrandMenu() {
    const menu = document.getElementById("brand-menu");
    carCatalog.forEach(brandItem => {
      const link = document.createElement("a");
      link.textContent = brandItem.brand;
      link.href = "#";
      link.addEventListener("click", (event) => {
        event.preventDefault();
        displayVehicles(brandItem.vehicles);
      });
      menu.appendChild(link);
    });
  }
  
  // Função para exibir os veículos da marca selecionada
  function displayVehicles(vehicles) {
    const gallery = document.getElementById("vehicle-gallery");
    // Limpa a galeria
    gallery.innerHTML = "";
  
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
  