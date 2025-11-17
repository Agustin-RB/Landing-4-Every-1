# 🎨 The Momentum - NFT Marketplace

Plataforma moderna de venta y gestión de NFTs y tokens cripto desarrollada como proyecto de tesis. Interfaz elegante y profesional con navegación fluida y animaciones suaves.

## 🚀 Características Principales

### 🏠 Página Principal
- **Hero Banner Animado**: Banner principal con efecto de flotación
- **Navegación por Pestañas**: Alterna entre NFTs y Tokens
- **Sección Trendy**: Carrusel de NFTs más populares
- **Catálogo Completo**: Grid de 5 columnas con todas las obras disponibles
- **Filtros Avanzados**: Por divisa, género, precio y tiempo de actividad

### 🔍 Búsqueda
- Página dedicada de búsqueda
- Animación de transición al escribir
- Filtros dinámicos que aparecen con el texto
- Resultados en tiempo real

### 📤 Subida de NFTs
- **Selección de Divisa**: ETH, BTC, USDT, SOL
- **Drag & Drop**: Arrastra archivos para subirlos
- **Vista Previa**: Visualiza la imagen antes de publicar
- **Precio Flexible**: Elige entre puja o precio fijo

### 🖼️ Galería Personal
- Grid de 2 columnas para tus NFTs
- Tarjetas con diseño moderno y hover effects
- Navegación rápida a detalles

### 📊 Vista Detallada de NFT
- **Modal Completo** con toda la información
- Imagen principal + gráfico de precios históricos
- **Características**: 6 atributos únicos
- **Detalles Blockchain**: Contrato, ID, standard, cadena
- Información de puja actual y histórico

### 💰 Sección de Tokens
- Lista detallada de criptomonedas
- Precios en tiempo real
- Cambios de 1D y 30D
- Mini gráficos de tendencia
- Código de colores (verde/rojo/gris)

## 📁 Estructura del Proyecto

```
nft-marketplace/
├── index.html              # Estructura HTML principal
├── styles.css              # Estilos CSS (1475 líneas)
├── script.js               # Funcionalidad JavaScript
├── README.md               # Este archivo
├── logo disminuido.png     # Logo del marketplace
├── foto de home.png        # Banner principal
├── esquemaa.png            # Gráfico de precios
│
├── Iconos de navegación:
│   ├── icono mas.png
│   ├── icono pregunta.png
│   ├── icono buscar.png
│   ├── icono galeria.png
│   ├── icono darkwhite.png
│   └── icono persona.png
│
├── Imágenes NFTs:
│   ├── imagen para trendy1.png
│   ├── imagen para trendy 2.png
│   ├── imagen para trendy 3.png
│   ├── card encontra1.jpg
│   ├── card encontra2.jpg
│   ├── card encontra3.jpg
│   ├── card encontra4.jpg
│   └── card encontra5.jpg
│
└── Recursos UI:
    ├── flecha de banner home.png
    ├── flecha morada.png
    ├── flecha gris.png
    └── signo admiracion violeta.png
```

## 🎯 Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **CSS3**: 
  - Flexbox y Grid Layout
  - Animaciones CSS
  - Variables personalizadas
  - Media queries para responsive
- **JavaScript Vanilla**: 
  - Event listeners
  - Manipulación del DOM
  - FileReader API para upload
  - Drag & Drop API

## 🖥️ Cómo Usar

### Inicio Rápido
```bash
# Simplemente abre el archivo index.html en tu navegador
open index.html
```

O usa un servidor local:
```bash
# Con Python 3
python3 -m http.server 8000

# Con Node.js (http-server)
npx http-server
```

### Navegación

1. **Home** - Click en el logo en cualquier momento
2. **Búsqueda** - Icono de lupa en la sidebar
3. **Subir NFT** - Icono de más (+)
4. **Galería** - Icono de galería
5. **Ayuda** - Icono de interrogación
6. **Perfil** - Icono de persona al final

## ⚙️ Funcionalidades Implementadas

### ✅ Navegación
- [x] Sistema de routing entre páginas
- [x] Transiciones suaves
- [x] Estado activo de pestañas
- [x] Navegación por sidebar

### ✅ Interactividad
- [x] Carruseles funcionales
- [x] Pestañas NFTs/Tokens
- [x] Sistema de búsqueda
- [x] Filtros avanzados
- [x] Modal de detalles

### ✅ Upload de NFTs
- [x] Selección de divisa
- [x] Drag & Drop
- [x] Vista previa de imagen
- [x] Toggle precio fijo/puja
- [x] Validación de campos

### ✅ Diseño
- [x] Responsive design
- [x] Animaciones CSS
- [x] Hover effects
- [x] Gradientes modernos
- [x] Tipografía: Poppins + Inter

## 🎨 Personalización

### Cambiar Colores
```css
/* En styles.css */
/* Color principal púrpura */
background-color: #5a3e8c;

/* Degradado del hero */
background: linear-gradient(135deg, #0c3d5c 0%, #1a5a7e 100%);
```

### Agregar Nuevas Cards Dinámicamente
```javascript
// En script.js o en la consola
addCard('trendy', 'Nombre del NFT', 'url-imagen.jpg');
```

### Cambiar el Hero Banner
```javascript
changeHeroBanner('NUEVO TITULO', 'BY ARTISTA');
```

## 📱 Responsive

El diseño se adapta a múltiples tamaños de pantalla:

- **Desktop** (>1200px): Grid de 3 y 5 columnas
- **Tablet** (768px - 1200px): Grid de 2 y 3 columnas
- **Mobile** (<768px): Grid de 1 y 2 columnas

## 🔮 Mejoras Futuras

- [ ] Integración con blockchain real (Web3.js)
- [ ] Sistema de autenticación con wallet
- [ ] Base de datos para persistencia
- [ ] Transacciones reales con smart contracts
- [ ] Sistema de comentarios y ratings
- [ ] Notificaciones en tiempo real
- [ ] Chat entre usuarios
- [ ] Historial de transacciones
- [ ] Dashboard de analytics
- [ ] Multi-idioma (i18n)

## 🐛 Debugging

Para ver logs de desarrollo, abre la consola del navegador (F12):
- Los clicks en carruseles muestran mensajes
- El upload de NFTs muestra el objeto completo
- Las transiciones de página se registran

## 📄 Licencia

Proyecto académico - Tesis 2025

## 👤 Autor

Proyecto desarrollado para tesis universitaria

---

**Nota**: Este es un mockup funcional. Para producción, se requiere integración con blockchain real, backend seguro y sistema de autenticación robusto.
