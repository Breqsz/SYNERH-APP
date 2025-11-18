/**
 * Script de verificação de componentes obrigatórios
 * Verifica se todos os componentes requisitados pela disciplina foram utilizados
 */

const fs = require('fs');
const path = require('path');

// Componentes obrigatórios
const requiredComponents = [
  'View',
  'ScrollView',
  'TextInput',
  'Text',
  'Button',
  'Image',
  'StyleSheet',
  'TouchableOpacity',
  'Alert',
  'Picker'
];

// Arquivos para verificar
const screenFiles = [
  'src/screens/SplashScreen.js',
  'src/screens/LoginScreen.js',
  'src/screens/RegisterScreen.js',
  'src/screens/HomeScreen.js',
  'src/screens/QuestsScreen.js',
  'src/screens/AIRecommendationsScreen.js'
];

console.log('🔍 Verificando componentes obrigatórios...\n');

const componentsFound = {};
requiredComponents.forEach(comp => {
  componentsFound[comp] = { used: false, files: [] };
});

// Verificar cada arquivo
screenFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    requiredComponents.forEach(component => {
      // Verifica import ou uso do componente
      const regex = new RegExp(`\\b${component}\\b`, 'g');
      if (regex.test(content)) {
        componentsFound[component].used = true;
        componentsFound[component].files.push(file);
      }
    });
  }
});

// Mostrar resultados
console.log('📊 RESULTADO DA VERIFICAÇÃO:\n');
let allFound = true;

requiredComponents.forEach(component => {
  const status = componentsFound[component].used ? '✅' : '❌';
  const files = componentsFound[component].files.join(', ');
  
  console.log(`${status} ${component}`);
  if (componentsFound[component].used) {
    console.log(`   Usado em: ${files}\n`);
  } else {
    console.log(`   ⚠️  ATENÇÃO: Componente não encontrado!\n`);
    allFound = false;
  }
});

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

if (allFound) {
  console.log('✅ TODOS OS COMPONENTES OBRIGATÓRIOS FORAM IMPLEMENTADOS!');
} else {
  console.log('❌ ATENÇÃO: Alguns componentes obrigatórios estão faltando!');
}

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
