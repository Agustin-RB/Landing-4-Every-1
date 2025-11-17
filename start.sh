#!/bin/bash

# Script de inicio para The Momentum NFT Marketplace
# Este script inicia un servidor local para desarrollo

echo "🎨 Iniciando The Momentum - NFT Marketplace..."
echo ""

# Verificar si Python está instalado
if command -v python3 &> /dev/null; then
    echo "✅ Python3 encontrado"
    echo "🚀 Iniciando servidor en http://localhost:8000"
    echo "⚡ Presiona Ctrl+C para detener el servidor"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Python encontrado"
    echo "🚀 Iniciando servidor en http://localhost:8000"
    echo "⚡ Presiona Ctrl+C para detener el servidor"
    echo ""
    python -m SimpleHTTPServer 8000
else
    echo "❌ Python no está instalado"
    echo "Por favor instala Python o abre index.html directamente en tu navegador"
    echo ""
    echo "Alternativamente, puedes usar:"
    echo "  - npx http-server -p 8000"
    echo "  - npx live-server"
fi


