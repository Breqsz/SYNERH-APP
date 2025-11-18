#!/bin/bash

echo "╔════════════════════════════════════════════════════════════╗"
echo "║     SYNERH MOBILE - Validação Completa do Projeto        ║"
echo "║     Global Solution 2025 - FIAP                           ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Contadores
total_checks=0
passed_checks=0

check_file() {
    total_checks=$((total_checks + 1))
    if [ -f "$1" ]; then
        echo -e "${GREEN}✅${NC} $2"
        passed_checks=$((passed_checks + 1))
    else
        echo -e "${RED}❌${NC} $2 - AUSENTE: $1"
    fi
}

check_dir() {
    total_checks=$((total_checks + 1))
    if [ -d "$1" ]; then
        echo -e "${GREEN}✅${NC} $2"
        passed_checks=$((passed_checks + 1))
    else
        echo -e "${RED}❌${NC} $2 - AUSENTE: $1"
    fi
}

echo -e "${BLUE}📁 1. Verificando Estrutura de Diretórios...${NC}"
echo ""
check_dir "src" "Diretório src/"
check_dir "src/screens" "Diretório src/screens/"
check_dir "src/navigation" "Diretório src/navigation/"
check_dir "src/services" "Diretório src/services/"
check_dir "src/data" "Diretório src/data/"
check_dir "src/components" "Diretório src/components/"
check_dir "src/assets" "Diretório src/assets/"
echo ""

echo -e "${BLUE}📱 2. Verificando Arquivos de Configuração...${NC}"
echo ""
check_file "package.json" "package.json"
check_file "app.json" "app.json"
check_file "babel.config.js" "babel.config.js"
check_file ".env.example" ".env.example"
check_file ".gitignore" ".gitignore"
check_file "App.js" "App.js"
echo ""

echo -e "${BLUE}🖥️  3. Verificando Telas (6 obrigatórias)...${NC}"
echo ""
check_file "src/screens/SplashScreen.js" "SplashScreen.js"
check_file "src/screens/LoginScreen.js" "LoginScreen.js"
check_file "src/screens/RegisterScreen.js" "RegisterScreen.js"
check_file "src/screens/HomeScreen.js" "HomeScreen.js"
check_file "src/screens/QuestsScreen.js" "QuestsScreen.js"
check_file "src/screens/AIRecommendationsScreen.js" "AIRecommendationsScreen.js"
echo ""

echo -e "${BLUE}🧭 4. Verificando Navegação...${NC}"
echo ""
check_file "src/navigation/AuthNavigator.js" "AuthNavigator.js (Stack)"
check_file "src/navigation/MainNavigator.js" "MainNavigator.js (Bottom Tabs)"
echo ""

echo -e "${BLUE}🔧 5. Verificando Serviços...${NC}"
echo ""
check_file "src/services/firebase.js" "firebase.js"
check_file "src/services/openai.js" "openai.js"
echo ""

echo -e "${BLUE}📊 6. Verificando Dados Mockados...${NC}"
echo ""
check_file "src/data/mockData.js" "mockData.js"
echo ""

echo -e "${BLUE}📖 7. Verificando Documentação...${NC}"
echo ""
check_file "README.md" "README.md"
check_file "QUICK_START.md" "QUICK_START.md (opcional)"
check_file "PROJECT_SUMMARY.md" "PROJECT_SUMMARY.md (opcional)"
check_file "FIAP_REFERENCIAS.md" "FIAP_REFERENCIAS.md (opcional)"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${BLUE}📊 RESULTADO DA VALIDAÇÃO:${NC}"
echo ""
echo -e "Total de verificações: ${BLUE}$total_checks${NC}"
echo -e "Verificações aprovadas: ${GREEN}$passed_checks${NC}"
echo -e "Verificações falhadas: ${RED}$((total_checks - passed_checks))${NC}"
echo ""

percentage=$((passed_checks * 100 / total_checks))
echo -e "Porcentagem de conclusão: ${YELLOW}$percentage%${NC}"
echo ""

if [ $passed_checks -eq $total_checks ]; then
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "${GREEN}✅ PROJETO 100% COMPLETO E PRONTO PARA USO!${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo -e "${BLUE}🚀 Próximos passos:${NC}"
    echo "1. npm install"
    echo "2. cp .env.example .env (e configure)"
    echo "3. npm start"
    echo "4. Escanear QR Code com Expo Go"
else
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "${YELLOW}⚠️  ATENÇÃO: Alguns arquivos podem estar faltando${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
fi

echo ""
echo -e "${BLUE}📞 Para mais informações, consulte:${NC}"
echo "   - README.md (documentação completa)"
echo "   - QUICK_START.md (guia rápido)"
echo ""
