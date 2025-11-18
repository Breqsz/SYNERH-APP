# SYNERH Mobile - MVP Fase 1

![SYNERH Logo](https://img.shields.io/badge/SYNERH-Mobile-6366F1?style=for-the-badge)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

## 📱 Sobre o Projeto

**SYNERH Mobile** é o aplicativo mobile da rede profissional descentralizada SYNERH, desenvolvido como parte da **Global Solution 2025 - FIAP** com o tema "Repensando hoje as profissões do amanhã".

O aplicativo conecta profissionais a oportunidades de trabalho (quests) usando blockchain Solana, tokens RSK e inteligência artificial para recomendações personalizadas.

### 🎓 Disciplina
**Mobile Development and IOT** - Global Solution 2025 (2º Semestre)

### 🏆 Funcionalidades Principais

- ✅ **Autenticação Firebase**: Login e registro seguro com email/senha
- ✅ **Dashboard Personalizado**: Saldo RSK, reputação, estatísticas do usuário
- ✅ **Marketplace de Quests**: Browse e aceite contratos de trabalho descentralizados
- ✅ **Recomendações de IA**: OpenAI GPT gerando sugestões personalizadas
- ✅ **Navegação Híbrida**: Stack Navigator + Bottom Tabs Navigator
- ✅ **Dados Mockados**: Simulação de integração futura com backend SOA
- ✅ **Learning Pool**: Cursos de requalificação profissional

---

## 🚀 Tecnologias Utilizadas

- **React Native** + **Expo SDK 51**
- **React Navigation** (Stack + Bottom Tabs)
- **Firebase Authentication**
- **Firebase Realtime Database**
- **OpenAI API** (GPT-3.5-turbo)
- **Expo Linear Gradient**
- **React Native Picker**

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Expo CLI**: `npm install -g expo-cli`
- **Expo Go** (app móvel) para testar no dispositivo físico

### Contas necessárias:

1. **Conta Firebase** (gratuita): [firebase.google.com](https://firebase.google.com)
2. **Conta OpenAI** (com API key): [platform.openai.com](https://platform.openai.com)

---

## 📦 Instalação

### 1. Clone ou navegue até o projeto

```bash
cd /home/ubuntu/synerh_mobile
```

### 2. Instale as dependências

```bash
npm install
```

ou

```bash
yarn install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

### 4. Configure o Firebase

1. Acesse o [Firebase Console](https://console.firebase.google.com)
2. Crie um novo projeto
3. Ative **Authentication** (método Email/Password)
4. Ative **Realtime Database**
5. Copie as credenciais do Firebase para o arquivo `.env`:

```env
# Firebase Configuration
FIREBASE_API_KEY=sua_api_key_aqui
FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
FIREBASE_DATABASE_URL=https://seu_projeto.firebaseio.com
FIREBASE_PROJECT_ID=seu_projeto_id
FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
FIREBASE_APP_ID=seu_app_id
```

### 5. Configure a OpenAI API

1. Acesse [OpenAI Platform](https://platform.openai.com/api-keys)
2. Crie uma nova API key
3. Adicione a key no arquivo `.env`:

```env
# OpenAI Configuration
OPENAI_API_KEY=sk-sua_openai_key_aqui
```

⚠️ **IMPORTANTE**: Adicione créditos na sua conta OpenAI ou use o modo demo sem configurar a API key.

---

## ▶️ Executando o Projeto

### Modo Development

```bash
npm start
```

ou

```bash
expo start
```

### Executar no Android

```bash
npm run android
```

### Executar no iOS

```bash
npm run ios
```

### Executar no Web (preview)

```bash
npm run web
```

### Escanear QR Code

1. Execute `npm start`
2. Instale o app **Expo Go** no seu smartphone
3. Escaneie o QR Code exibido no terminal
4. O app será carregado no seu dispositivo

---

## 📱 Estrutura do Projeto

```
synerh_mobile/
├── App.js                          # Componente principal
├── app.json                        # Configurações Expo
├── package.json                    # Dependências
├── babel.config.js                 # Configuração Babel
├── .env.example                    # Template de variáveis de ambiente
├── .gitignore                      # Arquivos ignorados pelo Git
├── README.md                       # Este arquivo
│
└── src/
    ├── screens/                    # Telas do aplicativo
    │   ├── SplashScreen.js        # Tela inicial com logo
    │   ├── LoginScreen.js         # Login com Firebase
    │   ├── RegisterScreen.js      # Cadastro de usuário
    │   ├── HomeScreen.js          # Dashboard principal
    │   ├── QuestsScreen.js        # Lista de quests/trabalhos
    │   └── AIRecommendationsScreen.js  # Recomendações de IA
    │
    ├── navigation/                 # Configuração de navegação
    │   ├── AuthNavigator.js       # Stack Navigator (autenticação)
    │   └── MainNavigator.js       # Bottom Tabs (app principal)
    │
    ├── services/                   # Integrações externas
    │   ├── firebase.js            # Funções Firebase
    │   └── openai.js              # Integração OpenAI
    │
    ├── data/                       # Dados mockados
    │   └── mockData.js            # Quests, cursos, estatísticas
    │
    ├── components/                 # Componentes reutilizáveis (futuro)
    │
    └── assets/                     # Imagens e recursos
        └── images/
```

---

## 🎯 Fluxo de Navegação

### Navegação de Autenticação (Stack Navigator)

```
SplashScreen → LoginScreen ⇄ RegisterScreen
```

### Navegação Principal (Bottom Tabs Navigator)

```
┌─────────────────────────────┐
│  Home  │  Quests  │  IA     │  ← Bottom Tabs
└─────────────────────────────┘
```

---

## 🧪 Testando o App (Modo Demo)

Se você não configurou Firebase ou OpenAI, o app possui um **modo demo**:

1. Na tela de login, clique em **"Testar modo demo"**
2. Os dados mockados serão utilizados
3. Todas as funcionalidades estarão disponíveis (exceto persistência real)

---

## 📊 Componentes Obrigatórios Implementados

Conforme requisitos da disciplina:

- ✅ **View** - Usado em todas as telas
- ✅ **ScrollView** - HomeScreen, QuestsScreen, AIRecommendationsScreen
- ✅ **TextInput** - LoginScreen, RegisterScreen
- ✅ **Text** - Todas as telas
- ✅ **Button** - AIRecommendationsScreen
- ✅ **Image** - (Estrutura preparada em assets/)
- ✅ **StyleSheet** - Todas as telas com estilos profissionais
- ✅ **TouchableOpacity** - Todas as telas interativas
- ✅ **Alert** - Feedback de ações do usuário
- ✅ **Picker** - QuestsScreen (filtros de categoria e dificuldade)

---

## 🔥 Firebase - Regras de Segurança

Configure as regras do Realtime Database:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

---

## 🤖 OpenAI - Uso Responsável

- O app usa **GPT-3.5-turbo** (mais econômico)
- Recomendações mockadas como fallback
- Configure limites de uso na sua conta OpenAI
- Custo estimado: ~$0.002 por recomendação gerada

---

## 🐛 Troubleshooting

### Erro: "Unable to resolve module @env"

```bash
# Limpar cache do Metro bundler
expo start -c
```

### Erro: Firebase Authentication

- Verifique se ativou o método Email/Password no Firebase Console
- Confirme que as credenciais no `.env` estão corretas

### Erro: OpenAI API

- Verifique se sua API key é válida
- Confirme que tem créditos na conta OpenAI
- O app funcionará com dados mockados se a API falhar

### Erro: Picker não aparece no Android

- Atualize: `npm install @react-native-picker/picker@latest`

---

## 📸 Screenshots

### Telas Implementadas

1. **SplashScreen** - Logo animado e loading
2. **LoginScreen** - Autenticação com Firebase
3. **RegisterScreen** - Cadastro de novos usuários
4. **HomeScreen** - Dashboard com saldo RSK e estatísticas
5. **QuestsScreen** - Marketplace de trabalhos com filtros
6. **AIRecommendationsScreen** - Sugestões personalizadas de IA

---

## 🔮 Roadmap - Próximas Fases

### Fase 2 (Futuro)
- [ ] Integração real com blockchain Solana
- [ ] Carteira cripto integrada
- [ ] Chat entre usuários
- [ ] Sistema de review e feedback
- [ ] Notificações push

### Fase 3 (Futuro)
- [ ] NFTs de certificados
- [ ] Governança descentralizada
- [ ] DAO para decisões da plataforma
- [ ] Integração com metaverso

---

## 👥 Autores

**Desenvolvido para Global Solution 2025 - FIAP**

Disciplina: Mobile Development and IOT

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos como parte da Global Solution 2025 da FIAP.

---

## 🆘 Suporte

Para dúvidas sobre o projeto:

1. Consulte a documentação do Expo: https://docs.expo.dev
2. Documentação Firebase: https://firebase.google.com/docs
3. Documentação OpenAI: https://platform.openai.com/docs

---

## ⚡ Quick Start (Resumo)

```bash
# 1. Instalar dependências
npm install

# 2. Configurar .env (copiar de .env.example)
cp .env.example .env

# 3. Adicionar credenciais Firebase e OpenAI no .env

# 4. Iniciar o app
npm start

# 5. Escanear QR Code com Expo Go
```

---

**SYNERH Mobile** - Conectando profissionais ao futuro do trabalho 🚀

*Powered by Solana Blockchain, Firebase & OpenAI*
