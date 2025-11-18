# GUIA DE CONFIGURAÇÃO DO FIREBASE
# SYNERH MOBILE MVP

---

## 🔥 Configuração Passo a Passo do Firebase para o Projeto

Este guia detalha **exatamente** como configurar o Firebase para que o aplicativo SYNERH MOBILE funcione corretamente.

---

## ÍNDICE

1. [O que é Firebase?](#1-o-que-é-firebase)
2. [Criar Conta Google](#2-criar-conta-google)
3. [Acessar Firebase Console](#3-acessar-firebase-console)
4. [Criar Novo Projeto](#4-criar-novo-projeto)
5. [Adicionar App Web ao Projeto](#5-adicionar-app-web-ao-projeto)
6. [Obter Credenciais](#6-obter-credenciais)
7. [Habilitar Authentication](#7-habilitar-authentication)
8. [Configurar Realtime Database](#8-configurar-realtime-database)
9. [Configurar Regras de Segurança](#9-configurar-regras-de-segurança)
10. [Adicionar Credenciais ao Projeto](#10-adicionar-credenciais-ao-projeto)
11. [Testar Conexão](#11-testar-conexão)
12. [Monitorar Uso](#12-monitorar-uso)
13. [Troubleshooting](#13-troubleshooting)

---

## 1. O QUE É FIREBASE?

### 1.1. Visão Geral

**Firebase** é uma plataforma de desenvolvimento de aplicativos do Google que fornece:

- **Backend as a Service (BaaS)**: Servidor pronto, sem necessidade de configurar infraestrutura
- **Authentication**: Sistema de login completo
- **Realtime Database**: Banco de dados NoSQL em tempo real
- **Hosting, Storage, Functions**: Outros serviços (não usados no MVP)

### 1.2. Por que Firebase?

✅ **Gratuito** (plano Spark é suficiente para desenvolvimento)  
✅ **Fácil integração** com React Native  
✅ **Sincronização em tempo real**  
✅ **Autenticação pronta** (e-mail, Google, Facebook, etc.)  
✅ **Escalável** (migrar para plano pago quando necessário)

### 1.3. Serviços Usados no SYNERH MOBILE

| Serviço | Uso no App |
|---------|-----------|
| **Firebase Authentication** | Login e cadastro com e-mail/senha |
| **Firebase Realtime Database** | Armazenar perfil do usuário, saldo de tokens RSK, quests aceitas |

---

## 2. CRIAR CONTA GOOGLE

Se você já tem uma conta Gmail, **pule para a seção 3**.

### 2.1. Passo a Passo

1. Acesse: https://accounts.google.com/signup
2. Preencha:
   - Nome
   - Endereço de e-mail desejado (ex: `seunome@gmail.com`)
   - Senha forte
3. Verifique seu e-mail
4. Complete o perfil

**Dica:** Use um e-mail específico para desenvolvimento (ex: `seunome.dev@gmail.com`)

---

## 3. ACESSAR FIREBASE CONSOLE

### 3.1. Acessar o Console

1. Abra o navegador (Chrome, Firefox, Safari, etc.)
2. Acesse: **https://console.firebase.google.com/**
3. Faça login com sua conta Google
4. Aceite os termos de serviço

### 3.2. Tela Inicial

Você verá:
- Mensagem de boas-vindas
- Botão: **"Criar um projeto"** ou **"Add project"**
- Lista de projetos (vazia se for primeira vez)

---

## 4. CRIAR NOVO PROJETO

### 4.1. Iniciar Criação

1. Clique no botão **"Criar um projeto"** (ou "+ Add project")
2. Aguarde o carregamento (pode demorar alguns segundos)

### 4.2. Passo 1 - Nome do Projeto

**Tela:** "Digite um nome para seu projeto"

1. **Nome do projeto:** `synerh-mobile-app`
   - Pode usar qualquer nome, mas recomendamos este para manter consistência
   - Exemplo alternativo: `synerh-mobile-seunome`

2. **ID do projeto** (gerado automaticamente):
   - Algo como: `synerh-mobile-app-a1b2c`
   - Este ID é único globalmente
   - **Anote este ID**, você vai precisar dele!

3. Clique em **"Continuar"**

### 4.3. Passo 2 - Google Analytics (Opcional)

**Tela:** "Google Analytics para seu projeto Firebase"

**Recomendação:** **Desabilite** o Google Analytics para simplificar.

1. **Desmarque** a opção: "Ativar o Google Analytics para este projeto"
2. Clique em **"Criar projeto"**

**Nota:** Analytics não é necessário para o MVP e pode ser adicionado depois.

### 4.4. Aguardar Criação

**Tela:** "Seu novo projeto está sendo criado"

- Progresso com barra de loading
- Pode demorar **30 segundos a 2 minutos**
- Mensagens:
  - "Provisionando recursos..."
  - "Preparando seu projeto..."
  - "Pronto!"

### 4.5. Finalizar

Quando aparecer **"Seu novo projeto está pronto"**:

1. Clique em **"Continuar"**
2. Você será direcionado para o **Dashboard do Projeto**

---

## 5. ADICIONAR APP WEB AO PROJETO

Agora vamos registrar nosso app React Native como um "Web App" no Firebase.

### 5.1. Acessar Configurações

No Dashboard do Firebase:

1. Procure por um ícone de **engrenagem ⚙️** ao lado de "Visão geral do projeto" (canto superior esquerdo)
2. **OU** localize a seção central com 3 ícones grandes:
   - **iOS** (símbolo da Apple)
   - **Android** (robô verde)
   - **Web** (`</>`)

### 5.2. Clicar em Web

1. Clique no ícone **Web** (`</>`)
2. Tela: "Adicionar o Firebase ao seu app da Web"

### 5.3. Registrar o App

**Campo:** "Nome de identificação do app"

1. Digite: `SYNERH Mobile Web`
   - Este é apenas um nome amigável
   - Você pode usar qualquer nome

2. **Firebase Hosting:**
   - **Não marque** a opção "Configurar também o Firebase Hosting"
   - Não precisamos de hosting para o MVP

3. Clique em **"Registrar app"**

### 5.4. Aguardar

- O Firebase registra o app
- Demora cerca de **10-20 segundos**

---

## 6. OBTER CREDENCIAIS

Esta é a **etapa mais importante!** Vamos copiar as credenciais do Firebase.

### 6.1. Tela de Configuração

Após registrar o app, você verá uma tela com código JavaScript:

```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1xXxXxXxXxXxXxXxXxXxXxXxXx",
  authDomain: "synerh-mobile-app-a1b2c.firebaseapp.com",
  databaseURL: "https://synerh-mobile-app-a1b2c-default-rtdb.firebaseio.com",
  projectId: "synerh-mobile-app-a1b2c",
  storageBucket: "synerh-mobile-app-a1b2c.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:a1b2c3d4e5f6g7h8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

### 6.2. Copiar Credenciais

**⚠️ IMPORTANTE:** Copie **EXATAMENTE** os valores dentro de `firebaseConfig`.

**Anote ou copie para um arquivo temporário:**

```
apiKey: AIzaSyC1xXxXxXxXxXxXxXxXxXxXxXxXx
authDomain: synerh-mobile-app-a1b2c.firebaseapp.com
databaseURL: https://synerh-mobile-app-a1b2c-default-rtdb.firebaseio.com
projectId: synerh-mobile-app-a1b2c
storageBucket: synerh-mobile-app-a1b2c.appspot.com
messagingSenderId: 123456789012
appId: 1:123456789012:web:a1b2c3d4e5f6g7h8
```

### 6.3. Onde Encontrar Depois

Se você fechar a tela sem copiar, não se preocupe!

1. No Firebase Console, clique na **engrenagem ⚙️** → "Configurações do projeto"
2. Role para baixo até "Seus apps"
3. Encontre "SYNERH Mobile Web"
4. Role até "Configuração do SDK"
5. Selecione "Config" (ao invés de "CDN")
6. Copie o objeto `firebaseConfig`

### 6.4. Clicar em "Continuar no console"

Clique no botão **"Continuar no console"** para voltar ao Dashboard.

---

## 7. HABILITAR AUTHENTICATION

Agora vamos ativar o sistema de autenticação.

### 7.1. Acessar Authentication

No menu lateral esquerdo do Firebase Console:

1. Clique em **"Build"** (Criar)
2. Clique em **"Authentication"**

**OU**

1. No Dashboard, clique no card **"Authentication"**

### 7.2. Primeira Vez

Se for a primeira vez:

1. Tela: "Comece adicionando seu primeiro método de login"
2. Clique no botão **"Vamos começar"** (ou "Get started")

### 7.3. Escolher Método de Login

**Tela:** "Provedores de login"

Você verá uma lista de provedores:
- Email/Password
- Google
- Facebook
- Twitter
- etc.

### 7.4. Habilitar E-mail/Senha

1. Clique em **"Email/Password"** (primeiro da lista)
2. Tela popup aparece: "E-mail/senha"
3. **Ative** o switch: "Ativar"
   - Apenas o primeiro switch (E-mail/senha)
   - **NÃO ative** "Link de e-mail (login sem senha)"
4. Clique em **"Salvar"**

### 7.5. Verificar Ativação

Na lista de provedores, **"Email/Password"** deve mostrar:
- Status: **"Ativado"** (ou "Enabled")
- Ícone verde ✅

**Screenshot de Referência:**

![Firebase Authentication](firebase_screenshots/firebase_auth.png)

---

## 8. CONFIGURAR REALTIME DATABASE

### 8.1. Acessar Realtime Database

No menu lateral esquerdo:

1. Clique em **"Build"** (Criar)
2. Clique em **"Realtime Database"**

### 8.2. Primeira Vez

**Tela:** "Realtime Database do Cloud Firestore"

1. Clique no botão **"Criar banco de dados"** (ou "Create database")

### 8.3. Escolher Localização

**Tela:** "Configurar banco de dados"

1. **Localização do Realtime Database:**
   - **Estados Unidos:** `us-central1` (recomendado para testes)
   - **Outros:** Escolha a região mais próxima de você
   - Para SYNERH (Brasil): Pode usar `southamerica-east1` (São Paulo)

2. Clique em **"Avançar"**

### 8.4. Configurar Regras de Segurança

**Tela:** "Configurar regras de segurança"

**IMPORTANTE:** Escolha o modo certo!

**Para Desenvolvimento/Testes:**
- Selecione: **"Começar no modo de teste"** (Test mode)
- Isso permite leitura/escrita sem autenticação por 30 dias

**Para Produção (Recomendado para o projeto final):**
- Selecione: **"Começar no modo bloqueado"** (Locked mode)
- Vamos configurar regras personalizadas depois

**Recomendação:** Use **Modo de Teste** agora e configure regras depois.

3. Clique em **"Ativar"**

### 8.5. Aguardar Criação

- Mensagem: "Criando banco de dados..."
- Demora **20-40 segundos**

### 8.6. Database Criado!

Você verá a interface do Realtime Database:

```
synerh-mobile-app-a1b2c-default-rtdb
  └── (null)
```

- O banco está vazio inicialmente (normal!)
- Estrutura será criada quando o app rodar

**Screenshot de Referência:**

![Firebase Realtime Database](firebase_screenshots/firebase_database.png)

---

## 9. CONFIGURAR REGRAS DE SEGURANÇA

### 9.1. Por que Configurar Regras?

**Sem regras adequadas:**
- Qualquer pessoa pode ler/escrever seus dados
- Risco de segurança
- Dados podem ser deletados ou alterados

**Com regras:**
- Apenas usuários autenticados acessam seus próprios dados
- Proteção contra ataques
- Conformidade com boas práticas

### 9.2. Acessar Regras

No Realtime Database:

1. Clique na aba **"Regras"** (ou "Rules")
2. Você verá o editor de regras JSON

### 9.3. Regras Padrão (Modo de Teste)

Se escolheu "Modo de Teste":

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

**Problema:** Qualquer pessoa pode ler/escrever! ⚠️

### 9.4. Regras Recomendadas (Produção)

**Cole as regras abaixo:**

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    },
    "quests": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```

**O que estas regras fazem:**

1. **`users/$uid`**:
   - Cada usuário só pode ler/escrever seus próprios dados
   - `$uid` é o ID único do usuário
   - `auth.uid` é o ID do usuário autenticado

2. **`quests`**:
   - Qualquer usuário **autenticado** pode ler quests
   - Apenas usuários **autenticados** podem escrever (candidatar-se)

### 9.5. Publicar Regras

1. **Cole as regras** no editor
2. Clique no botão **"Publicar"** (Publish)
3. Confirmação: "Regras publicadas com sucesso"

### 9.6. Validar Regras

O Firebase valida automaticamente a sintaxe JSON.

**Erros comuns:**
- Vírgula faltando
- Chaves `{}` não fechadas
- Aspas `"` incorretas

Se houver erro, o botão "Publicar" ficará desabilitado e uma mensagem de erro aparecerá.

---

## 10. ADICIONAR CREDENCIAIS AO PROJETO

Agora vamos adicionar as credenciais do Firebase ao aplicativo React Native.

### 10.1. Localizar o Arquivo .env.example

1. Abra a pasta do projeto `synerh_mobile/`
2. Localize o arquivo: `.env.example`
   - **Nota:** Arquivos que começam com `.` podem estar ocultos
   - No Windows: Ative "Mostrar arquivos ocultos"
   - No macOS: Pressione `Cmd + Shift + .` no Finder

### 10.2. Criar Arquivo .env

**No terminal/prompt:**

```bash
# Windows
copy .env.example .env

# macOS/Linux
cp .env.example .env
```

**Ou manualmente:**
- Crie um novo arquivo chamado `.env` (sem extensão!)
- Copie o conteúdo de `.env.example` para `.env`

### 10.3. Editar o Arquivo .env

Abra o arquivo `.env` com um editor de texto:

- **Windows:** Notepad++, VS Code, Sublime Text
- **macOS:** TextEdit, VS Code, Sublime Text
- **Linux:** nano, vim, VS Code

**Conteúdo original (.env.example):**

```env
# Firebase Configuration
FIREBASE_API_KEY=your-api-key-here
FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
FIREBASE_DATABASE_URL=https://your-project-id-default-rtdb.firebaseio.com
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your-sender-id
FIREBASE_APP_ID=your-app-id

# OpenAI Configuration
OPENAI_API_KEY=your-openai-api-key-here
```

### 10.4. Substituir com Suas Credenciais

**Cole os valores que você copiou na seção 6:**

```env
# Firebase Configuration
FIREBASE_API_KEY=AIzaSyC1xXxXxXxXxXxXxXxXxXxXxXxXx
FIREBASE_AUTH_DOMAIN=synerh-mobile-app-a1b2c.firebaseapp.com
FIREBASE_DATABASE_URL=https://synerh-mobile-app-a1b2c-default-rtdb.firebaseio.com
FIREBASE_PROJECT_ID=synerh-mobile-app-a1b2c
FIREBASE_STORAGE_BUCKET=synerh-mobile-app-a1b2c.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789012
FIREBASE_APP_ID=1:123456789012:web:a1b2c3d4e5f6g7h8

# OpenAI Configuration
OPENAI_API_KEY=sk-proj-your-openai-key-here
```

**⚠️ ATENÇÃO:**
- **NÃO use aspas** `"` ao redor dos valores
- **NÃO use espaços** antes ou depois do `=`
- **NÃO compartilhe este arquivo** publicamente
- **NÃO faça commit** do `.env` no Git

### 10.5. Formato Correto

✅ **CORRETO:**
```env
FIREBASE_API_KEY=AIzaSyC1xXxXxXxXxXxXxXxXxXxXxXxXx
```

❌ **ERRADO:**
```env
FIREBASE_API_KEY = "AIzaSyC1xXxXxXxXxXxXxXxXxXxXxXxXx"
FIREBASE_API_KEY= AIzaSyC1xXxXxXxXxXxXxXxXxXxXxXxXx  (espaço)
```

### 10.6. Salvar o Arquivo

1. Salve o arquivo `.env`
2. Certifique-se de que está na **raiz do projeto** (mesma pasta que `package.json`)

### 10.7. Verificar Estrutura

```
synerh_mobile/
├── .env                  ← Suas credenciais (NÃO compartilhar!)
├── .env.example          ← Exemplo (pode compartilhar)
├── package.json
├── App.js
└── src/
```

---

## 11. TESTAR CONEXÃO

### 11.1. Reiniciar o Metro Bundler

Se o app já estiver rodando:

1. No terminal, pressione **Ctrl + C** para parar
2. Reinicie:
   ```bash
   npm start
   ```

**Por quê?** O arquivo `.env` só é lido na inicialização.

### 11.2. Testar Cadastro de Usuário

1. Abra o app no dispositivo/emulador
2. Navegue para a tela de **"Criar Conta"**
3. Preencha os campos:
   - Nome: `Teste Usuário`
   - E-mail: `teste@exemplo.com`
   - Senha: `123456`
   - Confirmar Senha: `123456`
4. Clique em **"Criar Conta"**

**Resultado esperado:**
- Mensagem: "Conta criada com sucesso!"
- App redireciona para a HomeScreen

### 11.3. Verificar no Firebase Console

**Authentication:**
1. Acesse: Firebase Console → Authentication → Users
2. Você deve ver o usuário `teste@exemplo.com` na lista

**Realtime Database:**
1. Acesse: Firebase Console → Realtime Database → Data
2. Estrutura:
   ```
   synerh-mobile-app-a1b2c-default-rtdb
   └── users
       └── uid123abc...
           ├── name: "Teste Usuário"
           ├── email: "teste@exemplo.com"
           ├── rskBalance: 100
           ├── reputation: 5.0
           └── acceptedQuests: []
   ```

### 11.4. Testar Login

1. Faça logout do app (se estiver logado)
2. Na tela de Login, use:
   - E-mail: `teste@exemplo.com`
   - Senha: `123456`
3. Clique em **"Entrar"**

**Resultado esperado:**
- Login bem-sucedido
- Redirecionamento para HomeScreen
- Dados do usuário carregados (nome, saldo, reputação)

---

## 12. MONITORAR USO

### 12.1. Dashboard do Firebase

No Firebase Console, você pode monitorar:

**Visão Geral do Projeto:**
- Usuários ativos
- Requisições ao banco de dados
- Uso de storage

**Authentication → Users:**
- Lista de usuários cadastrados
- Data de criação
- Último login
- UID (ID único)

**Realtime Database → Data:**
- Visualizar dados em tempo real
- Estrutura JSON
- Adicionar/editar/deletar dados manualmente

**Realtime Database → Uso:**
- Gráficos de requisições
- Limite de dados (plano gratuito: 1 GB armazenado, 10 GB transferido/mês)

### 12.2. Limites do Plano Gratuito (Spark)

| Recurso | Limite Gratuito |
|---------|-----------------|
| **Authentication** | 50.000 usuários ativos/mês (mais que suficiente!) |
| **Realtime Database - Armazenamento** | 1 GB |
| **Realtime Database - Download** | 10 GB/mês |
| **Conexões Simultâneas** | 100 |

**Para o MVP:** Limites são **mais que suficientes**.

### 12.3. Quando Escalar?

Se o app crescer:

1. **Plano Blaze (pague conforme usar):**
   - Custos baixos para projetos pequenos/médios
   - Escalabilidade ilimitada
   - Exemplo: 10.000 usuários ativos custam ~$5-10 USD/mês

2. **Firebase Extensions:**
   - Adicionar funcionalidades (notificações push, processamento de imagens, etc.)

---

## 13. TROUBLESHOOTING

### 13.1. Erro: "Firebase: Error (auth/invalid-api-key)"

**Problema:** API Key incorreta ou não configurada.

**Solução:**
1. Verifique se copiou a chave corretamente (seção 6)
2. Certifique-se de que não há espaços extras
3. Formato correto no `.env`:
   ```env
   FIREBASE_API_KEY=AIzaSy...  (SEM aspas, SEM espaços)
   ```
4. Reinicie o Metro Bundler (`npm start`)

### 13.2. Erro: "Firebase: Error (auth/network-request-failed)"

**Problema:** Sem conexão com internet ou firewall bloqueando.

**Solução:**
- Verifique sua conexão com a internet
- Desative VPN temporariamente
- Desative firewall/antivírus temporariamente
- Tente novamente

### 13.3. Erro: "Permission denied" no Realtime Database

**Problema:** Regras de segurança muito restritivas ou modo bloqueado.

**Solução:**
1. Acesse: Firebase Console → Realtime Database → Regras
2. **Temporariamente**, use regras de teste:
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```
3. Publique as regras
4. Teste o app
5. **Depois de confirmar que funciona**, volte para as regras seguras (seção 9.4)

### 13.4. Erro: "Auth domain is not configured"

**Problema:** `FIREBASE_AUTH_DOMAIN` incorreto.

**Solução:**
1. Verifique o valor no `.env`
2. Deve ser: `seu-projeto-id.firebaseapp.com`
3. Copie exatamente do Firebase Console (seção 6)

### 13.5. Erro: "Database URL not configured"

**Problema:** `FIREBASE_DATABASE_URL` está incorreto ou vazio.

**Solução:**
1. Certifique-se de que criou o Realtime Database (seção 8)
2. Formato correto:
   ```env
   FIREBASE_DATABASE_URL=https://seu-projeto-id-default-rtdb.firebaseio.com
   ```
3. Encontre a URL:
   - Firebase Console → Realtime Database
   - Copie o link que aparece no topo da página

### 13.6. Usuário não aparece na lista (Authentication)

**Problema:** Cadastro não funcionou ou erro silencioso.

**Solução:**
1. Verifique os logs no terminal do Metro Bundler
2. Procure por erros em vermelho
3. Teste cadastro novamente
4. Verifique regras de Authentication:
   - Firebase Console → Authentication → Sign-in method
   - E-mail/Senha deve estar **Ativado**

### 13.7. Dados não aparecem no Realtime Database

**Problema:** Escrita bloqueada pelas regras ou erro no código.

**Solução:**
1. Verifique regras (seção 9)
2. Use regras de teste temporariamente
3. Verifique logs no terminal
4. Inspecione o código em `src/services/firebase.js`:
   ```javascript
   // Deve ter funções como:
   export const createUserProfile = async (userId, userData) => { ... }
   ```

### 13.8. Firebase Console não carrega

**Problema:** Problemas no navegador ou extensões.

**Solução:**
- Tente outro navegador (Chrome recomendado)
- Desative extensões do navegador (ad blockers)
- Limpe cache e cookies
- Tente em modo anônimo/privado

---

## 14. SEGURANÇA - MELHORES PRÁTICAS

### 14.1. Proteger Credenciais

✅ **NUNCA:**
- Compartilhe o arquivo `.env`
- Faça commit do `.env` no Git/GitHub
- Exponha credenciais em código público

✅ **SEMPRE:**
- Adicione `.env` ao `.gitignore`
- Use variáveis de ambiente em produção
- Revogue chaves comprometidas

### 14.2. .gitignore

Certifique-se de que o arquivo `.gitignore` contém:

```gitignore
# Variáveis de ambiente
.env
.env.local

# Node modules
node_modules/

# Expo
.expo/
dist/
```

### 14.3. Revogar Chaves Comprometidas

Se você acidentalmente compartilhou suas credenciais:

**Firebase:**
1. Firebase Console → Configurações do projeto
2. Role até "Seus apps"
3. Clique nos 3 pontos ⋮ → "Remover app"
4. Crie um novo app e obtenha novas credenciais

**OpenAI:**
1. https://platform.openai.com/account/api-keys
2. Localize a chave comprometida
3. Clique em "Revoke"
4. Crie uma nova chave

---

## 15. RECURSOS ADICIONAIS

### 15.1. Documentação Oficial

- **Firebase Docs:** https://firebase.google.com/docs/web/setup
- **Authentication Guide:** https://firebase.google.com/docs/auth/web/start
- **Realtime Database Guide:** https://firebase.google.com/docs/database/web/start

### 15.2. Vídeos Tutoriais

- **Firebase para Iniciantes:** https://www.youtube.com/results?search_query=firebase+tutorial+react+native
- **React Native + Firebase:** https://www.youtube.com/results?search_query=react+native+firebase+authentication

### 15.3. Comunidades

- **Stack Overflow:** https://stackoverflow.com/questions/tagged/firebase
- **Reddit:** https://reddit.com/r/Firebase
- **Discord Firebase:** https://discord.gg/firebase

---

## 16. CHECKLIST FINAL

Antes de considerar a configuração completa:

- [ ] Conta Google criada
- [ ] Projeto Firebase criado
- [ ] App Web registrado no projeto
- [ ] Credenciais copiadas (apiKey, authDomain, etc.)
- [ ] Firebase Authentication habilitado (E-mail/Senha)
- [ ] Realtime Database criado
- [ ] Regras de segurança configuradas
- [ ] Arquivo `.env` criado na raiz do projeto
- [ ] Credenciais adicionadas ao `.env` (sem erros de formatação)
- [ ] Metro Bundler reiniciado após criar `.env`
- [ ] Cadastro de usuário testado com sucesso
- [ ] Usuário aparece no Firebase Console → Authentication
- [ ] Dados do usuário aparecem no Realtime Database
- [ ] Login testado e funcionando
- [ ] Dados carregados na HomeScreen
- [ ] `.env` adicionado ao `.gitignore`

---

**✅ FIREBASE CONFIGURADO COM SUCESSO!**

Seu aplicativo SYNERH MOBILE agora está conectado ao Firebase e pronto para:
- Cadastrar e autenticar usuários
- Armazenar dados em tempo real
- Sincronizar informações entre dispositivos

**Próximo passo:** Configure a OpenAI API (veja TUTORIAL_INSTALACAO.md, seção 10)

---

**© 2025 SYNERH MOBILE - Guia de Configuração Firebase**  
**Desenvolvido para Global Solution 2025 - FIAP**
