@echo off
REM Script de inicio para The Momentum NFT Marketplace (Windows)
REM Este script inicia un servidor local para desarrollo

echo.
echo 🎨 Iniciando The Momentum - NFT Marketplace...
echo.

REM Verificar si Python está instalado
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo ✅ Python encontrado
    echo 🚀 Iniciando servidor en http://localhost:8000
    echo ⚡ Presiona Ctrl+C para detener el servidor
    echo.
    python -m http.server 8000
) else (
    echo ❌ Python no está instalado
    echo Por favor instala Python o abre index.html directamente en tu navegador
    echo.
    echo Alternativamente, puedes usar:
    echo   - npx http-server -p 8000
    echo   - npx live-server
    pause
)


