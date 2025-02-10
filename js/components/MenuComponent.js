export class MenuComponent {
    init() {
        this.createHamburgerMenu();
        this.createSideMenu();
        this.setupStyles();
        this.setupMenuListeners();
    }

    createHamburgerMenu() {
        const navList = document.querySelector('.nav-list');
        if (!navList) return;

        const hamburgerButton = document.createElement('button');
        hamburgerButton.id = 'hamburger-menu';
        hamburgerButton.innerHTML = `
            <img src="./icons/menu.png" alt="Menu">
        `;

        navList.parentNode.insertBefore(hamburgerButton, navList);
    }

    createSideMenu() {
        const sideMenuHTML = `
            <div id="side-menu" class="fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out z-[60] overflow-y-auto">
                <div class="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <h2 class="text-lg font-bold">Menu</h2>
                </div>
                <nav class="p-4">
                    <ul class="space-y-4">
                    <!-- Seção Comprar -->
                    <li>
                    <h4 class="text-gray-700 dark:text-gray-300 font-semibold">COMPRAR:</h4>
                    <ul class="pl-4 mt-2 space-y-2">
                        <li>
                        <a href="#novos" class="block text-gray-700 dark:text-gray-300 hover:text-gray-900">
                            Carros Novos
                        </a>
                        </li>
                        <li>
                        <a href="#usados" class="block text-gray-700 dark:text-gray-300 hover:text-gray-900">
                            Carros Usados
                        </a>
                        </li>
                        <li>
                        <a href="#semi-novos" class="block text-gray-700 dark:text-gray-300 hover:text-gray-900">
                            Carros Semi-Novos
                        </a>
                        </li>
                    </ul>
                    </li>
                    <!-- Seção Vender -->
                    <li>
                    <h4 class="text-gray-700 dark:text-gray-300 font-semibold">VENDER:</h4>
                    <ul class="pl-4 mt-2 space-y-2">
                        <li>
                        <a href="#anunciar" class="block text-gray-700 dark:text-gray-300 hover:text-gray-900">
                            Anunciar Meu Carro
                        </a>
                        </li>
                        <li>
                        <a href="#gerenciar-anuncios" class="block text-gray-700 dark:text-gray-300 hover:text-gray-900">
                            Gerenciar Anúncios
                        </a>
                        </li>
                        <li>
                        <a href="#agendar-avaliacao" class="block text-gray-700 dark:text-gray-300 hover:text-gray-900">
                            Agendar Avaliação
                        </a>
                        </li>
                    </ul>
                    </li>
                    <!-- Seção Financiamento e Auto-Serviço -->
                    <li>
                    <a href="#financiamento" class="block text-gray-700 dark:text-gray-300 hover:text-gray-900">
                        FINANCIAMENTO
                    </a>
                    </li>
                    <li>
                    <a href="#auto-servico" class="block text-gray-700 dark:text-gray-300 hover:text-gray-900">
                        AUTO-SERVIÇO
                    </a>
                    </li>
                    <!-- Seção Extras -->
                    <li>
                    <h4 class="text-gray-700 dark:text-gray-300 font-semibold">EXTRAS:</h4>
                    <ul class="pl-4 mt-2 space-y-2">
                        <li>
                        <a href="#favoritos" class="block text-gray-700 dark:text-gray-300 hover:text-gray-900">
                            Carros Favoritos
                        </a>
                        </li>
                        <li>
                        <a href="#comparar" class="block text-gray-700 dark:text-gray-300 hover:text-gray-900">
                            Comparar Carros
                        </a>
                        </li>
                        <li>
                        <a href="#historico" class="block text-gray-700 dark:text-gray-300 hover:text-gray-900">
                            Histórico de Preços
                        </a>
                        </li>
                        <li>
                        <a href="#noticias" class="block text-gray-700 dark:text-gray-300 hover:text-gray-900">
                            Notícias do Setor
                        </a>
                        </li>
                    </ul>
                    </li>
                    <!-- Seção Suporte -->
                    <li>
                    <a href="#suporte" class="block text-gray-700 dark:text-gray-300 hover:text-gray-900">
                        SUPORTE
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', sideMenuHTML);
    }

    setupStyles() {
        const style = document.createElement('style');
        style.textContent = `
            #hamburger-menu {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
                margin-right: 8px;
                padding: 0;
                border: none;
                background: none;
                cursor: pointer;
            }
            
            #hamburger-menu img {
                width: 24px;
                height: 24px;
                object-fit: contain;
            }
            
            .nav-list {
                display: flex;
                align-items: center;
            }

            #side-menu {
                transform: translateX(-100%);
                transition: transform 0.3s ease-in-out;
            }

            #side-menu.active {
                transform: translateX(0);
            }
        `;
        document.head.appendChild(style);
    }

    setupMenuListeners() {
        const hamburgerButton = document.getElementById('hamburger-menu');
        const closeButton = document.getElementById('close-menu');
        const sideMenu = document.getElementById('side-menu');
        
        hamburgerButton?.addEventListener('click', (e) => {
            e.stopPropagation();
            sideMenu?.classList.toggle('active');
        });
        
        closeButton?.addEventListener('click', () => {
            sideMenu?.classList.remove('active');
        });
        
        document.addEventListener('click', (e) => {
            if (sideMenu && 
                !sideMenu.contains(e.target) && 
                !hamburgerButton?.contains(e.target) && 
                sideMenu.classList.contains('active')) {
                sideMenu.classList.remove('active');
            }
        });
    }
} 