# 🚀 SYNERH Mobile - Quick Start Guide

## ⚡ Início Rápido (3 minutos)

### 1️⃣ Instalar Dependências
```bash
/synerh_mobile
npm install
```

### 2️⃣ Configurar Ambiente (Opcional para modo demo)
```bash
cp .env.example .env
# Editar .env com suas credenciais Firebase e OpenAI (ou deixar vazio para modo demo)
```

### 3️⃣ Iniciar o Aplicativo
```bash
npm start
```

### 4️⃣ Abrir no Dispositivo
- Instale **Expo Go** no seu smartphone (Android ou iOS)
- Escaneie o QR Code exibido no terminal
- O app será carregado automaticamente

---

## 🎮 Modo Demo (Sem Configuração)

Se você não quer configurar Firebase/OpenAI agora:

1. Execute `npm start`
2. Abra o app no Expo Go
3. Na tela de Login, clique em **"Testar modo demo"**
4. Todas as funcionalidades estarão disponíveis com dados mockados!

---

## 🔑 Configuração Completa (Produção)

### Firebase Setup:

1. Acesse [Firebase Console](https://console.firebase.google.com)
2. Crie um novo projeto
3. Ative **Authentication** → Email/Password
4. Ative **Realtime Database**
5. Copie as credenciais para `.env`:

```env
FIREBASE_API_KEY=sua_key_aqui
FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
FIREBASE_DATABASE_URL=https://seu_projeto.firebaseio.com
FIREBASE_PROJECT_ID=seu_projeto_id
FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
FIREBASE_APP_ID=seu_app_id
```

### OpenAI Setup:

1. Acesse [OpenAI Platform](https://platform.openai.com/api-keys)
2. Crie uma API Key
3. Adicione ao `.env`:

```env
OPENAI_API_KEY=sk-sua_key_aqui
```

---

## 📱 Comandos Úteis

```bash
# Iniciar development server
npm start

# Limpar cache (se houver problemas)
expo start -c

# Executar no Android (requer Android Studio)
npm run android

# Executar no iOS (requer Xcode - apenas Mac)
npm run ios

# Build para produção (futuro)
expo build:android
expo build:ios
```

---

## 🐛 Problemas Comuns

### Erro: "Metro bundler não inicia"
```bash
# Limpar cache
expo start -c
# ou
rm -rf node_modules
npm install
```

### Erro: "Firebase não conecta"
- Verifique se ativou Email/Password no Firebase Console
- Confirme que as credenciais no .env estão corretas

### Erro: "Picker não aparece"
```bash
npm install @react-native-picker/picker@latest
```

---

## 🎯 Testando as Funcionalidades

### 1. Autenticação:
- Registre um novo usuário
- Faça login com email/senha
- Teste o botão "Esqueceu a senha?"

### 2. Dashboard (Home):
- Veja seu saldo de tokens RSK
- Acompanhe sua reputação
- Verifique estatísticas de quests

### 3. Quests:
- Navegue pelas quests disponíveis
- Use os filtros (Categoria e Dificuldade)
- Aceite uma quest e veja o feedback

### 4. Recomendações de IA:
- Aguarde o carregamento das recomendações
- Veja sugestões personalizadas de quests e cursos
- Leia os insights da IA sobre seu perfil

---

## 📊 Estrutura do Código

```
synerh_mobile/
├── App.js                     → Componente principal
├── src/
│   ├── screens/              → 6 telas
│   │   ├── SplashScreen.js
│   │   ├── LoginScreen.js
│   │   ├── RegisterScreen.js
│   │   ├── HomeScreen.js
│   │   ├── QuestsScreen.js
│   │   └── AIRecommendationsScreen.js
│   ├── navigation/           → Navegadores
│   │   ├── AuthNavigator.js  (Stack)
│   │   └── MainNavigator.js  (Bottom Tabs)
│   ├── services/             → Integrações
│   │   ├── firebase.js
│   │   └── openai.js
│   └── data/
│       └── mockData.js       → Dados mockados
```

---

## ✅ Checklist de Teste

- [ ] App inicia sem erros
- [ ] Splash screen aparece por 3 segundos
- [ ] Tela de login carrega corretamente
- [ ] Registro de novo usuário funciona
- [ ] Login com credenciais funciona
- [ ] Dashboard mostra dados do usuário
- [ ] Lista de quests carrega
- [ ] Filtros de quests funcionam (Picker)
- [ ] Recomendações de IA carregam
- [ ] Navegação entre tabs funciona
- [ ] Logout funciona

---


## 🎓 Informações do Projeto

**Global Solution 2025 - FIAP**
- Disciplina: Mobile Development and IOT
- Projeto: SYNERH Mobile
- Tema: Profissões do Futuro

---



*SYNERH - Conectando profissionais ao futuro do trabalho* 🚀
