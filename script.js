// Funcionalidad de carrusel
document.addEventListener('DOMContentLoaded', function () {
    // Funcionalidad de pestañas Tokens/NFTs del HEADER
    const tabButtons = document.querySelectorAll('.tab-btn');
    const nftsSection = document.getElementById('nfts-section');
    const tokensSection = document.getElementById('tokens-section');
    const sectionTitle = document.getElementById('section-title');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remover active de todos los botones
            tabButtons.forEach(b => b.classList.remove('active'));

            // Agregar active al botón clickeado
            this.classList.add('active');

            const tab = this.getAttribute('data-tab');

            // Mostrar/ocultar secciones según la pestaña
            if (tab === 'nfts') {
                nftsSection.style.display = 'block';
                tokensSection.style.display = 'none';
                sectionTitle.textContent = 'Encontrá tu proxima pieza';
            } else if (tab === 'tokens') {
                nftsSection.style.display = 'none';
                tokensSection.style.display = 'block';
                sectionTitle.textContent = 'Encontrá tu proxima inversión';
            }
        });
    });

    // Navegación del hero banner
    const heroLeftArrow = document.querySelector('.nav-arrow-left');
    const heroRightArrow = document.querySelector('.nav-arrow-right');

    heroLeftArrow.addEventListener('click', function () {
        console.log('Banner anterior');
        // Aquí puedes agregar la lógica para cambiar el banner
    });

    heroRightArrow.addEventListener('click', function () {
        console.log('Banner siguiente');
        // Aquí puedes agregar la lógica para cambiar el banner
    });

    // Navegación de carruseles de cards
    const carouselArrows = document.querySelectorAll('.carousel-arrow');

    carouselArrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
            const direction = this.classList.contains('carousel-arrow-left') ? 'left' : 'right';
            const container = this.parentElement.querySelector('.cards-grid');

            if (direction === 'left') {
                console.log('Carrusel: anterior');
                // Lógica para mostrar cards anteriores
            } else {
                console.log('Carrusel: siguiente');
                // Lógica para mostrar cards siguientes
            }
        });
    });

    // Referencias a las páginas
    const mainHome = document.querySelector('.main-content');
    const searchPage = document.getElementById('search-page');
    const divisaPage = document.getElementById('divisa-page');
    const uploadPage = document.getElementById('upload-page');
    const galleryPage = document.getElementById('gallery-page');

    // Funcionalidad del botón de búsqueda
    const btnBuscar = document.getElementById('btn-buscar');
    btnBuscar.addEventListener('click', function () {
        mainHome.style.display = 'none';
        divisaPage.style.display = 'none';
        uploadPage.style.display = 'none';
        galleryPage.style.display = 'none';
        searchPage.style.display = 'block';
    });

    // Funcionalidad de la página de búsqueda
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchPageHeader = document.getElementById('search-page-header');
    const searchBarContainer = document.getElementById('search-bar-container');

    searchInput.addEventListener('input', function () {
        if (this.value.length > 0) {
            searchResults.style.display = 'grid';
            searchPageHeader.classList.add('hidden');
            searchBarContainer.classList.add('active');
        } else {
            searchResults.style.display = 'none';
            searchPageHeader.classList.remove('hidden');
            searchBarContainer.classList.remove('active');
        }
    });

    // Click en logo para volver al home
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function () {
        searchPage.style.display = 'none';
        divisaPage.style.display = 'none';
        uploadPage.style.display = 'none';
        galleryPage.style.display = 'none';
        mainHome.style.display = 'block';
        searchInput.value = '';
    });

    // Funcionalidad del botón agregar (selección de divisa)
    const btnAgregar = document.getElementById('btn-agregar');
    btnAgregar.addEventListener('click', function () {
        mainHome.style.display = 'none';
        searchPage.style.display = 'none';
        uploadPage.style.display = 'none';
        galleryPage.style.display = 'none';
        divisaPage.style.display = 'block';
    });

    // Funcionalidad de selección de divisa
    const divisaCards = document.querySelectorAll('.divisa-card');
    const priceCurrency = document.getElementById('price-currency');
    let selectedCurrency = 'ETH';

    divisaCards.forEach(card => {
        card.addEventListener('click', function () {
            selectedCurrency = this.getAttribute('data-currency');
            priceCurrency.textContent = selectedCurrency;

            divisaPage.style.display = 'none';
            uploadPage.style.display = 'block';
        });
    });

    // Funcionalidad de la página de upload
    const dropZone = document.getElementById('upload-drop-zone');
    const fileInput = document.getElementById('file-input');
    const uploadBtn = document.getElementById('upload-btn');
    const uploadPreview = document.getElementById('upload-preview');
    const previewImage = document.getElementById('preview-image');
    const priceInput = document.getElementById('price-input');
    const submitBtn = document.getElementById('submit-btn');
    const backArrow = document.getElementById('upload-back-arrow');
    const fixedPriceBtn = document.getElementById('fixed-price-btn');
    const priceTitle = document.getElementById('price-title');

    // Drag and drop
    dropZone.addEventListener('dragenter', (e) => {
        e.preventDefault();
        dropZone.style.background = '#e0e0e0';
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.style.background = '#f5f5f5';
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.background = '#f5f5f5';

        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            displayImage(file);
        }
    });

    // Click en botón subir archivo
    uploadBtn.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            displayImage(file);
        }
    });

    function displayImage(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.src = e.target.result;
            uploadPreview.style.display = 'block';
            dropZone.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }

    // Botón de precio fijo
    fixedPriceBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            priceTitle.textContent = 'Precio fijo';
        } else {
            priceTitle.textContent = 'Precio mínimo de puja';
        }
    });

    // Flecha de volver
    backArrow.addEventListener('click', () => {
        uploadPage.style.display = 'none';
        divisaPage.style.display = 'block';

        uploadPreview.style.display = 'none';
        dropZone.style.display = 'flex';
        previewImage.src = '';
        priceInput.value = '';
        fileInput.value = '';
    });

    // Botón submit
    submitBtn.addEventListener('click', () => {
        const price = priceInput.value;
        const file = fileInput.files[0];

        if (!file || !price) {
            alert('Por favor completa todos los campos');
            return;
        }

        console.log('NFT subido:', {
            file: file.name,
            price: price,
            currency: selectedCurrency,
            isFixedPrice: fixedPriceBtn.classList.contains('active')
        });

        alert('NFT subido exitosamente!');

        uploadPage.style.display = 'none';
        mainHome.style.display = 'block';

        uploadPreview.style.display = 'none';
        dropZone.style.display = 'flex';
        previewImage.src = '';
        priceInput.value = '';
        fileInput.value = '';
        fixedPriceBtn.classList.remove('active');
        priceTitle.textContent = 'Precio mínimo de puja';
    });

    // Funcionalidad del botón galería
    const btnGaleria = document.getElementById('btn-galeria');
    btnGaleria.addEventListener('click', function () {
        mainHome.style.display = 'none';
        searchPage.style.display = 'none';
        uploadPage.style.display = 'none';
        divisaPage.style.display = 'none';
        galleryPage.style.display = 'block';
    });

    // Animación suave para las cards
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            const title = this.querySelector('.card-title').textContent;
            console.log(`Card seleccionada: ${title}`);
            // Aquí puedes abrir un modal o navegar a la página de detalles
        });
    });

    // Cambio de pestañas (Trendy, Tokens, NFTs)
    const categoryHeaders = document.querySelectorAll('.category-header h2');

    categoryHeaders.forEach(header => {
        header.addEventListener('click', function () {
            console.log(`Categoría: ${this.textContent}`);
            // Aquí puedes agregar lógica para filtrar contenido
        });
    });
});

// Función para agregar más cards dinámicamente (placeholder)
function addCard(category, title, imageUrl) {
    const section = document.querySelector(`[data-category="${category}"] .cards-grid`);
    if (section) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image" style="background-image: url('${imageUrl}')"></div>
            <h3 class="card-title">${title}</h3>
        `;
        section.appendChild(card);
    }
}

// Función para cambiar el banner del hero
function changeHeroBanner(title, subtitle) {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    heroTitle.textContent = title;
    heroSubtitle.textContent = subtitle;
}

// Funcionalidad del modal de detalle NFT
const nftModal = document.getElementById('nft-modal');
const nftModalClose = document.getElementById('nft-modal-close');

// Función para abrir el modal con la información del NFT
function openNFTModal(nftData) {
    // Actualizar la información del modal
    document.getElementById('nft-modal-img').src = nftData.image;
    document.getElementById('nft-modal-title').textContent = nftData.title;
    document.getElementById('nft-modal-author').textContent = nftData.author;

    // Mostrar el modal
    nftModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
}

// Función para cerrar el modal
function closeNFTModal() {
    nftModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll del body
}

// Event listener para el botón de cerrar
nftModalClose.addEventListener('click', closeNFTModal);

// Event listener para cerrar al hacer clic fuera del modal
nftModal.addEventListener('click', function (e) {
    if (e.target === nftModal) {
        closeNFTModal();
    }
});

// Agregar event listeners a todas las tarjetas NFT
function addNFTCardListeners() {
    // Tarjetas de la página principal
    const allCards = document.querySelectorAll('.card, .search-card');
    allCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function () {
            // Obtener imagen
            let imageElement = this.querySelector('.card-image, .search-card-image');
            let image = '';
            if (imageElement) {
                image = imageElement.src || imageElement.style.backgroundImage.slice(5, -2);
            }

            // Obtener título
            let titleElement = this.querySelector('.card-title, .search-card-title');
            let title = titleElement ? titleElement.textContent : 'NFT';

            // Obtener autor
            let authorElement = this.querySelector('.card-author, .search-card-author');
            let author = authorElement ? authorElement.textContent : 'Alf4756';

            openNFTModal({
                image: image,
                title: title,
                author: author
            });
        });
    });
}

// Llamar a la función para agregar event listeners cuando el DOM esté listo
addNFTCardListeners();

// ==================== SISTEMA DE TUTORIAL ====================

const tutorialSteps = [
    {
        element: '.sidebar',
        title: 'Barra de Navegación',
        text: 'La barra de tareas será tu mejor aliado, a la hora de interactuar con la plataforma. Con ella podrás buscar y subir tus obras cuando y donde quieras. Además, siempre podrás volver a consultar estas herramientas y repetir el tutorial haciendo click en "?".',
        position: 'right'
    },
    {
        element: '.hero-banner',
        title: 'Banner Principal',
        text: 'Aquí encontrarás los NFTs destacados y colecciones especiales. Usa las flechas para navegar entre diferentes obras destacadas.',
        position: 'bottom'
    },
    {
        element: '.marketplace-tabs',
        title: 'Pestañas de Navegación',
        text: 'Cambia entre Tokens y NFTs para explorar diferentes tipos de activos digitales. Los signos de admiración te darán información adicional sobre cada categoría.',
        position: 'bottom'
    },
    {
        element: '.category-section',
        title: 'Sección Trendy',
        text: 'Descubre las obras más populares y tendencias del momento. Las flechas te permiten navegar por el carrusel de obras destacadas.',
        position: 'bottom'
    },
    {
        element: '.filters-container',
        title: 'Filtros de Búsqueda',
        text: 'Filtra los NFTs por divisa, género, fecha de actividad y precio. Usa estos filtros para encontrar exactamente lo que buscas.',
        position: 'bottom'
    },
    {
        element: '#btn-agregar',
        title: 'Subir tus Obras',
        text: 'Haz clic aquí para subir tus propios NFTs a la plataforma. Podrás configurar el precio, descripción y toda la información de tu obra.',
        position: 'right'
    },
    {
        element: '#btn-buscar',
        title: 'Búsqueda Avanzada',
        text: 'Accede a la búsqueda avanzada para encontrar NFTs específicos con más opciones de filtrado.',
        position: 'right'
    },
    {
        element: '#btn-galeria',
        title: 'Tu Galería Personal',
        text: 'Aquí podrás ver todos los NFTs que has comprado o creado. Tu colección personal en un solo lugar.',
        position: 'right'
    }
];

class Tutorial {
    constructor(steps) {
        this.steps = steps;
        this.currentStep = 0;
        this.overlay = document.getElementById('tutorial-overlay');
        this.spotlight = document.getElementById('tutorial-spotlight');
        this.tooltip = document.getElementById('tutorial-tooltip');
        this.tooltipTitle = document.querySelector('.tutorial-tooltip-title');
        this.tooltipText = document.querySelector('.tutorial-tooltip-text');
        this.nextBtn = document.getElementById('tutorial-next');
        this.closeBtn = document.getElementById('tutorial-close');
        this.skipBtn = document.getElementById('tutorial-skip');

        this.init();
    }

    init() {
        // Event listeners
        this.nextBtn.addEventListener('click', () => this.nextStep());
        this.closeBtn.addEventListener('click', () => this.end());
        this.skipBtn.addEventListener('click', () => this.end());

        // Permitir cerrar con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.overlay.classList.contains('hidden')) {
                this.end();
            }
        });
    }

    start() {
        this.currentStep = 0;
        this.overlay.classList.remove('hidden');
        document.body.classList.add('tutorial-active');
        setTimeout(() => {
            this.showStep(0);
        }, 100);
    }

    showStep(index) {
        if (index >= this.steps.length) {
            this.end();
            return;
        }

        const step = this.steps[index];
        const element = document.querySelector(step.element);

        if (!element) {
            console.warn(`Elemento ${step.element} no encontrado`);
            this.nextStep();
            return;
        }

        // Hacer scroll automático al elemento
        this.scrollToElement(element);

        // Esperar a que termine el scroll para actualizar posiciones
        setTimeout(() => {
            // Actualizar contenido del tooltip
            this.tooltipTitle.textContent = step.title;
            this.tooltipText.textContent = step.text;

            // Obtener posición del elemento después del scroll
            const rect = element.getBoundingClientRect();

            // Posicionar spotlight
            this.spotlight.style.left = rect.left + 'px';
            this.spotlight.style.top = rect.top + 'px';
            this.spotlight.style.width = rect.width + 'px';
            this.spotlight.style.height = rect.height + 'px';

            // Posicionar tooltip según la posición especificada
            this.positionTooltip(rect, step.position);

            // Resaltar elemento
            element.classList.add('tutorial-highlight');

            // Si el elemento es un botón de la sidebar, también resaltar la sidebar
            const sidebar = document.querySelector('.sidebar');
            if (element.matches('#btn-buscar, #btn-agregar, #btn-galeria, #btn-ayuda') ||
                element.classList.contains('sidebar')) {
                if (sidebar && !element.classList.contains('sidebar')) {
                    sidebar.classList.add('tutorial-sidebar-active');
                }
            }

            // Remover highlight del elemento anterior
            if (index > 0) {
                const prevStep = this.steps[index - 1];
                const prevElement = document.querySelector(prevStep.element);
                if (prevElement) {
                    prevElement.classList.remove('tutorial-highlight');
                }
                // Remover clase de sidebar si ya no se necesita
                if (sidebar && !element.matches('#btn-buscar, #btn-agregar, #btn-galeria, #btn-ayuda') &&
                    !element.classList.contains('sidebar')) {
                    sidebar.classList.remove('tutorial-sidebar-active');
                }
            }
        }, 600);
    }

    scrollToElement(element) {
        const rect = element.getBoundingClientRect();
        const absoluteTop = rect.top + window.pageYOffset;
        const middle = absoluteTop - (window.innerHeight / 2) + (rect.height / 2);

        window.scrollTo({
            top: middle,
            behavior: 'smooth'
        });
    }

    positionTooltip(rect, position) {
        const tooltipRect = this.tooltip.getBoundingClientRect();
        const margin = 20;

        switch (position) {
            case 'right':
                this.tooltip.style.left = (rect.right + margin) + 'px';
                this.tooltip.style.top = (rect.top + (rect.height / 2) - (tooltipRect.height / 2)) + 'px';
                break;
            case 'left':
                this.tooltip.style.left = (rect.left - tooltipRect.width - margin) + 'px';
                this.tooltip.style.top = (rect.top + (rect.height / 2) - (tooltipRect.height / 2)) + 'px';
                break;
            case 'bottom':
                this.tooltip.style.left = (rect.left + (rect.width / 2) - (tooltipRect.width / 2)) + 'px';
                this.tooltip.style.top = (rect.bottom + margin) + 'px';
                break;
            case 'top':
                this.tooltip.style.left = (rect.left + (rect.width / 2) - (tooltipRect.width / 2)) + 'px';
                this.tooltip.style.top = (rect.top - tooltipRect.height - margin) + 'px';
                break;
            default:
                this.tooltip.style.left = (rect.right + margin) + 'px';
                this.tooltip.style.top = (rect.top + (rect.height / 2) - (tooltipRect.height / 2)) + 'px';
        }

        // Asegurarse de que el tooltip esté dentro de la pantalla
        const finalRect = this.tooltip.getBoundingClientRect();
        if (finalRect.right > window.innerWidth) {
            this.tooltip.style.left = (window.innerWidth - finalRect.width - 20) + 'px';
        }
        if (finalRect.left < 0) {
            this.tooltip.style.left = '20px';
        }
        if (finalRect.bottom > window.innerHeight) {
            this.tooltip.style.top = (window.innerHeight - finalRect.height - 20) + 'px';
        }
        if (finalRect.top < 0) {
            this.tooltip.style.top = '20px';
        }
    }

    nextStep() {
        this.currentStep++;
        if (this.currentStep < this.steps.length) {
            this.showStep(this.currentStep);
        } else {
            this.end();
        }
    }

    end() {
        // Remover highlight del último elemento
        if (this.currentStep < this.steps.length) {
            const step = this.steps[this.currentStep];
            const element = document.querySelector(step.element);
            if (element) {
                element.classList.remove('tutorial-highlight');
            }
        }

        // Remover clase de sidebar activa
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.classList.remove('tutorial-sidebar-active');
        }

        this.overlay.classList.add('hidden');
        document.body.classList.remove('tutorial-active');
        this.currentStep = 0;
    }
}

// Inicializar tutorial
const tutorial = new Tutorial(tutorialSteps);

// Event listener para el botón de ayuda
const btnAyuda = document.getElementById('btn-ayuda');
if (btnAyuda) {
    btnAyuda.addEventListener('click', () => {
        tutorial.start();
    });
}

// ==================== MODAL DE TOKEN ====================

function openTokenModal(tokenData) {
    const modal = document.getElementById('token-modal');

    // Actualizar información del token
    document.getElementById('token-modal-title').textContent = tokenData.name || 'Token';
    document.getElementById('token-modal-chain').textContent = tokenData.chain || 'Ethereum';
    document.getElementById('token-chain').textContent = (tokenData.chain || 'ETHEREUM').toUpperCase();
    document.getElementById('token-volume').textContent = tokenData.volume || '76,1 MIL $';
    document.getElementById('token-price-change').textContent = tokenData.priceChange || '+70,7 %';

    // Actualizar logo
    const logoContainer = document.getElementById('token-logo-container');
    logoContainer.innerHTML = tokenData.logo || '';
    if (tokenData.background) {
        logoContainer.style.background = tokenData.background;
    }

    // Mostrar modal
    modal.style.display = 'flex';
}

function closeTokenModal() {
    const modal = document.getElementById('token-modal');
    modal.style.display = 'none';
}

// Event listeners para el modal de tokens
document.getElementById('token-modal-close').addEventListener('click', closeTokenModal);

document.getElementById('token-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeTokenModal();
    }
});

// Agregar event listeners a todas las tarjetas de tokens
function addTokenCardListeners() {
    const tokenCards = document.querySelectorAll('.token-card');

    tokenCards.forEach(card => {
        card.addEventListener('click', function () {
            // Obtener información del token desde la tarjeta
            const tokenName = this.querySelector('.token-name')?.textContent || 'Token';
            const tokenSymbol = this.querySelector('.token-symbol')?.textContent || '';
            const tokenIcon = this.querySelector('.token-icon');
            const tokenIconBg = tokenIcon ? window.getComputedStyle(tokenIcon).background : '';
            const tokenIconHTML = tokenIcon ? tokenIcon.innerHTML : '';

            // Abrir modal con los datos del token
            openTokenModal({
                name: tokenName,
                symbol: tokenSymbol,
                chain: 'Ethereum',
                volume: '76,1 MIL $',
                priceChange: '+70,7 %',
                logo: tokenIconHTML,
                background: tokenIconBg
            });
        });
    });
}

// Llamar la función cuando el DOM esté listo
addTokenCardListeners();

// ===== DARK MODE =====
const btnDarkMode = document.getElementById('btn-darkmode');

// Mapeo de iconos: modo normal -> modo dark
const iconMap = {
    'icono buscar.png': 'icono buscador darkverde.png',
    'icono mas.png': 'icono crear darkverde.png',
    'icono galeria.png': 'icono galeria dark verde.png',
    'icono pregunta.png': 'icono tutorial darkverde.png',
    'icono darkwhite.png': 'icono darkverde.png',
    'icono persona.png': 'icono cuenta darkgreen.png',
    'logo disminuido.png': 'logo en blanco.png',
    'signo admiracion violeta.png': 'icono admiracion verde.png'
};

// Función para cambiar los iconos
function toggleIcons(isDarkMode) {
    // Cambiar iconos de la sidebar (incluyendo el logo)
    const iconElements = document.querySelectorAll('.sidebar .icon-img, .sidebar .logo-icon');

    console.log('Cambiando iconos de sidebar, dark mode:', isDarkMode);
    console.log('Iconos de sidebar encontrados:', iconElements.length);

    iconElements.forEach(icon => {
        // Obtener solo el nombre del archivo del src actual
        const currentSrc = icon.getAttribute('src');
        console.log('Src actual:', currentSrc);

        if (isDarkMode) {
            // Cambiar a iconos dark
            if (iconMap[currentSrc]) {
                icon.setAttribute('src', iconMap[currentSrc]);
                console.log('Cambiado a:', iconMap[currentSrc]);
            }
        } else {
            // Cambiar a iconos normales
            const normalIcon = Object.keys(iconMap).find(key => iconMap[key] === currentSrc);
            if (normalIcon) {
                icon.setAttribute('src', normalIcon);
                console.log('Cambiado a:', normalIcon);
            }
        }
    });

    // Cambiar signos de admiración
    const admiracionIcons = document.querySelectorAll('.tab-info-icon, .info-icon');

    console.log('Cambiando iconos de admiración, dark mode:', isDarkMode);
    console.log('Iconos de admiración encontrados:', admiracionIcons.length);

    admiracionIcons.forEach(icon => {
        const currentSrc = icon.getAttribute('src');
        console.log('Src actual admiración:', currentSrc);

        if (isDarkMode) {
            if (iconMap[currentSrc]) {
                icon.setAttribute('src', iconMap[currentSrc]);
                console.log('Cambiado a:', iconMap[currentSrc]);
            }
        } else {
            const normalIcon = Object.keys(iconMap).find(key => iconMap[key] === currentSrc);
            if (normalIcon) {
                icon.setAttribute('src', normalIcon);
                console.log('Cambiado a:', normalIcon);
            }
        }
    });
}

// Verificar si hay preferencia guardada
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleIcons(true);
}

btnDarkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Cambiar iconos
    toggleIcons(isDarkMode);

    // Guardar preferencia en localStorage
    if (isDarkMode) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// ===== MODAL DE COMPRA DE NFT =====
const purchaseModal = document.getElementById('purchase-modal');
const purchaseModalClose = document.getElementById('purchase-modal-close');

function openPurchaseModal(nftData) {
    // Actualizar información del NFT
    document.getElementById('purchase-nft-img').src = nftData.image || 'imagen para trendy 3.png';
    document.getElementById('purchase-nft-title').textContent = nftData.title || 'Memory un disguise';
    document.getElementById('purchase-nft-author').textContent = nftData.author || 'Aif4756';
    document.getElementById('purchase-nft-offer').textContent = nftData.price || '1300 USD';

    // Calcular total (precio + comisión del 0.3%)
    const priceValue = parseFloat(nftData.price) || 1300;
    const total = (priceValue * 1.003).toFixed(2);
    document.getElementById('purchase-total').textContent = total + ' USD';

    // Mostrar modal
    purchaseModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePurchaseModal() {
    purchaseModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners para cerrar el modal
purchaseModalClose.addEventListener('click', closePurchaseModal);

purchaseModal.addEventListener('click', function (e) {
    if (e.target === purchaseModal) {
        closePurchaseModal();
    }
});

// Agregar listener al botón de "Hacer una puja" en el modal de NFT
document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('nft-bid-btn')) {
        // Obtener información del NFT del modal actual
        const nftTitle = document.getElementById('nft-modal-title').textContent;
        const nftAuthor = document.getElementById('nft-modal-author').textContent;
        const nftImage = document.getElementById('nft-modal-img').src;
        const priceElement = document.querySelector('.nft-current-price .price-usd');
        const price = priceElement ? priceElement.textContent.replace('$', '').replace('USD', '').trim() : '1300';

        // Cerrar modal de NFT
        closeNFTModal();

        // Abrir modal de compra
        setTimeout(() => {
            openPurchaseModal({
                title: nftTitle,
                author: nftAuthor,
                image: nftImage,
                price: price
            });
        }, 300);
    }
});

