# SYNERH MOBILE – Futuro do Trabalho (MVP)
**Global Solution FIAP 2025.2**  
Engenharia de Software • Mobile Development & IoT

Aplicativo mobile multiplataforma feito em **React Native + Expo (SDK 51)** com **Firebase** e integração com **IA (Gemini/OpenAI)**.  
O SYNERH propõe uma rede profissional voltada ao futuro do trabalho, requalificação digital e cooperação humano-IA, usando gamificação e conceito de tokenização (Solana/RSK).

---

## ⚠️ IMPORTANTE (ANTES DE RODAR)
✅ **Use o Expo Go compatível com SDK 51 (Expo Go 51).**  
Se usar outra versão, pode dar erro de compatibilidade.

---

## 🌍 Projeto Web Integrado
Temos também a versão WEB completa, integrada ao Firebase e com IA gratuita do Gemini:

- **Web App:** https://synerh.netlify.app  
- **Repositório Web:** https://github.com/Breqsz/SYNERH-WEB

---

## 📱 Funcionalidades do App
- **Autenticação completa**
  - Cadastro, login e logout via Firebase Authentication.
- **Perfil do usuário**
  - Registro de bio, skills, objetivos e progresso.
- **Dashboard Home**
  - Saldo do token **RSK**, reputação, conquistas e resumo da jornada.
- **Marketplace de Quests**
  - Lista de trabalhos/desafios com filtros, detalhes e sistema de evolução.
- **Recomendações com IA**
  - Sugestões personalizadas de trilhas e quests com base no perfil do usuário.
- **Persistência em tempo real**
  - Dados salvos e sincronizados via Firebase Realtime Database.

---

## 🧭 Navegação
**Navegação híbrida (Stack + Tabs):**
- **Auth Stack**
  - Splash → Login → Register
- **Main Tabs**
  - Home (🏠)
  - Quests (🎯)
  - IA Recommendations (🤖)

---

## 🛠️ Tecnologias Utilizadas
- React Native + Expo SDK 51
- TypeScript / JavaScript
- Firebase Authentication
- Firebase Realtime Database
- IA (Gemini/OpenAI)
- UI moderna + gamificação

---

## 🚀 Como Rodar o Projeto

### 1) Clone o repositório
\`\`\`bash
git clone https://github.com/Breqsz/SYNERH-APP.git
cd synerh_mobile
\`\`\`

### 2) Instale dependências
\`\`\`bash
npm install
\`\`\`

### 3) Configure o Firebase
Crie o arquivo `.env` com:

\`\`\`env
EXPO_PUBLIC_FIREBASE_API_KEY=xxxxxxxxxxxx
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=xxxxxxxxxxxx
EXPO_PUBLIC_FIREBASE_DATABASE_URL=xxxxxxxxxxxx
EXPO_PUBLIC_FIREBASE_PROJECT_ID=xxxxxxxxxxxx
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=xxxxxxxxxxxx
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxxxx
EXPO_PUBLIC_FIREBASE_APP_ID=xxxxxxxxxxxx
\`\`\`

### 4) Rode o app
\`\`\`bash
npx expo start
\`\`\`

---

## 📂 Estrutura Base do Projeto
\`\`\`
synerh_mobile/
├── src/
│   ├── components/
│   ├── contexts/
│   ├── screens/
│   ├── services/
│   ├── utils/
│   └── routes/
├── assets/
├── docs/
├── App.tsx
├── app.json
├── package.json
└── .env.example
\`\`\`

---

## 🌱 ODS da ONU
- ODS 4 – Educação de Qualidade
- ODS 8 – Trabalho Decente
- ODS 9 – Inovação
- ODS 10 – Redução das Desigualdades
- ODS 17 – Parcerias

---

## 👥 Integrantes
- **Guilherme Rocha** – RM97974  
- **Ian Kuraoka** – RM98869  
- **Pedro Henrique** – RM97877  

---

## 📄 Documentação Completa
A pasta **/docs** contém:
- Documentação Técnica
- Screenshots

---

**© 2025 — SYNERH Mobile MVP**
