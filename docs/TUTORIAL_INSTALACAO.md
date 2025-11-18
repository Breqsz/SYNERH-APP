# TUTORIAL DE INSTALAÇÃO
# SYNERH MOBILE MVP

---

## 📱 Guia Passo a Passo para Instalar e Executar o Aplicativo

Este guia pressupõe que você **nunca usou React Native ou Expo** antes. Vamos instalar todas as ferramentas necessárias desde o início.

---

## ÍNDICE

1. [Requisitos do Sistema](#1-requisitos-do-sistema)
2. [Instalação do Node.js](#2-instalação-do-nodejs)
3. [Instalação do Git](#3-instalação-do-git)
4. [Instalação do Expo CLI](#4-instalação-do-expo-cli)
5. [Instalação do Expo Go (Smartphone)](#5-instalação-do-expo-go-smartphone)
6. [Instalação do Android Studio (Opcional)](#6-instalação-do-android-studio-opcional)
7. [Clone/Download do Projeto](#7-clonedownload-do-projeto)
8. [Instalação das Dependências](#8-instalação-das-dependências)
9. [Configuração do Firebase](#9-configuração-do-firebase)
10. [Configuração da OpenAI API](#10-configuração-da-openai-api)
11. [Executando o Projeto](#11-executando-o-projeto)
12. [Testando no Dispositivo Físico](#12-testando-no-dispositivo-físico)
13. [Testando no Emulador Android](#13-testando-no-emulador-android)
14. [Troubleshooting (Problemas Comuns)](#14-troubleshooting-problemas-comuns)

---

## 1. REQUISITOS DO SISTEMA

### 1.1. Hardware Mínimo

**Windows / Linux:**
- Processador: Intel Core i3 ou equivalente
- RAM: 4 GB (8 GB recomendado)
- Espaço em Disco: 10 GB livres

**macOS:**
- macOS 10.13 (High Sierra) ou superior
- RAM: 4 GB (8 GB recomendado)
- Espaço em Disco: 10 GB livres

### 1.2. Sistemas Operacionais Suportados

✅ **Windows 10/11**  
✅ **macOS 10.13+**  
✅ **Linux** (Ubuntu 18.04+, Debian, Fedora)

### 1.3. Conhecimentos Prévios

Não é necessário conhecimento prévio! Este tutorial assume que você:
- Sabe abrir o terminal/prompt de comando
- Consegue navegar entre pastas
- Tem conexão estável com a internet

---

## 2. INSTALAÇÃO DO NODE.JS

O Node.js é necessário para executar React Native e Expo.

### 2.1. Windows

1. **Acesse o site oficial:**  
   https://nodejs.org/

2. **Baixe a versão LTS (Long Term Support):**  
   No momento da escrita deste tutorial: **Node.js 20.x LTS**
   
   Clique no botão verde: **"20.x.x LTS - Recommended for Most Users"**

3. **Execute o instalador:**
   - Dê duplo clique no arquivo baixado (ex: `node-v20.10.0-x64.msi`)
   - Clique em "Next" em todas as telas
   - Aceite os termos de licença
   - Deixe o caminho de instalação padrão: `C:\Program Files\nodejs\`
   - **IMPORTANTE**: Marque a opção "Automatically install the necessary tools"
   - Clique em "Install"
   - Aguarde a instalação (pode demorar 5-10 minutos)

4. **Verificar instalação:**
   - Abra o **Prompt de Comando** (Win + R → digite `cmd` → Enter)
   - Digite:
     ```bash
     node --version
     ```
   - Deve aparecer algo como: `v20.10.0`
   
   - Digite:
     ```bash
     npm --version
     ```
   - Deve aparecer algo como: `10.2.3`

### 2.2. macOS

1. **Opção 1: Instalador Oficial**
   - Acesse: https://nodejs.org/
   - Baixe a versão LTS (ex: `node-v20.10.0.pkg`)
   - Dê duplo clique no arquivo baixado
   - Siga o assistente de instalação
   - Senha de administrador será solicitada

2. **Opção 2: Homebrew (Recomendado)**
   - Abra o **Terminal** (Finder → Aplicativos → Utilitários → Terminal)
   - Se não tiver Homebrew, instale:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
   - Instale o Node.js:
     ```bash
     brew install node
     ```

3. **Verificar instalação:**
   ```bash
   node --version
   npm --version
   ```

### 2.3. Linux (Ubuntu/Debian)

1. **Abra o Terminal** (Ctrl + Alt + T)

2. **Instale o Node.js 20.x:**
   ```bash
   # Adicionar repositório NodeSource
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   
   # Instalar Node.js
   sudo apt-get install -y nodejs
   ```

3. **Verificar instalação:**
   ```bash
   node --version
   npm --version
   ```

---

## 3. INSTALAÇÃO DO GIT

O Git é usado para clonar o projeto do repositório.

### 3.1. Windows

1. **Baixar Git:**  
   https://git-scm.com/download/win

2. **Executar instalador:**
   - Aceite todas as opções padrão
   - Importante: Selecione "Git from the command line and also from 3rd-party software"

3. **Verificar:**
   ```bash
   git --version
   ```

### 3.2. macOS

**Com Homebrew:**
```bash
brew install git
```

**Ou:** O Git já vem instalado no macOS. Verifique:
```bash
git --version
```

### 3.3. Linux

```bash
sudo apt-get install git
```

---

## 4. INSTALAÇÃO DO EXPO CLI

O Expo CLI é a ferramenta de linha de comando para gerenciar projetos React Native + Expo.

### 4.1. Instalação Global (Todos os sistemas)

Abra o terminal/prompt e execute:

```bash
npm install -g expo-cli
```

**Nota:** No macOS/Linux, pode ser necessário `sudo`:
```bash
sudo npm install -g expo-cli
```

### 4.2. Verificar Instalação

```bash
expo --version
```

Deve aparecer algo como: `6.3.10`

### 4.3. Criar Conta Expo (Opcional mas Recomendado)

1. Acesse: https://expo.dev/signup
2. Crie uma conta gratuita
3. No terminal, faça login:
   ```bash
   expo login
   ```
   Digite seu e-mail e senha.

**Por que criar conta?**
- Sincroniza projetos entre dispositivos
- Facilita compartilhamento de builds
- Acesso a serviços Expo (notificações push, etc.)

---

## 5. INSTALAÇÃO DO EXPO GO (SMARTPHONE)

A maneira mais fácil de testar o app é usando o Expo Go no seu smartphone.

### 5.1. Android

1. Abra a **Google Play Store**
2. Pesquise: **"Expo Go"**
3. Instale o aplicativo oficial da Expo
4. Abra o app e faça login (mesmo usuário do passo 4.3)

**Link direto:**  
https://play.google.com/store/apps/details?id=host.exp.exponent

### 5.2. iOS (iPhone)

1. Abra a **App Store**
2. Pesquise: **"Expo Go"**
3. Instale o aplicativo
4. Abra o app e faça login

**Link direto:**  
https://apps.apple.com/app/expo-go/id982107779

**Nota para iOS:** O iPhone e o computador devem estar na **mesma rede Wi-Fi**.

---

## 6. INSTALAÇÃO DO ANDROID STUDIO (OPCIONAL)

Se você quiser testar no emulador Android (sem usar smartphone físico), precisa do Android Studio.

### 6.1. Download

https://developer.android.com/studio

### 6.2. Instalação (Windows)

1. Baixe o instalador (ex: `android-studio-2023.x.x.exe`)
2. Execute o instalador
3. Aceite as configurações padrão
4. **Importante:** Na tela "Install Type", escolha **"Standard"**
5. Aguarde o download dos componentes (pode demorar 30-60 minutos)

### 6.3. Instalação (macOS)

1. Baixe o arquivo `.dmg`
2. Arraste "Android Studio" para a pasta "Aplicativos"
3. Abra o Android Studio
4. Siga o assistente de configuração inicial
5. Escolha "Standard" installation

### 6.4. Instalação (Linux)

```bash
# Baixar Android Studio
wget https://redirector.gvt1.com/edgedl/android/studio/ide-zips/2023.x.x.x/android-studio-2023.x.x.x-linux.tar.gz

# Extrair
tar -xvzf android-studio-*.tar.gz

# Mover para /opt
sudo mv android-studio /opt/

# Executar
/opt/android-studio/bin/studio.sh
```

### 6.5. Configurar Emulador

1. Abra o Android Studio
2. Clique em "More Actions" → "Virtual Device Manager"
3. Clique em "Create Device"
4. Escolha um dispositivo (recomendado: **Pixel 5**)
5. Baixe uma System Image (recomendado: **API 33 - Android 13**)
6. Clique em "Finish"
7. Para iniciar o emulador, clique no ícone ▶️ (Play) ao lado do dispositivo

### 6.6. Variáveis de Ambiente (Android Studio)

**Windows:**
1. Abra "Variáveis de Ambiente" (Win + Buscar "Variáveis de Ambiente")
2. Em "Variáveis do Sistema", clique em "Novo"
3. Nome: `ANDROID_HOME`
4. Valor: `C:\Users\SeuUsuario\AppData\Local\Android\Sdk`
5. Edite a variável `Path` e adicione:
   - `%ANDROID_HOME%\platform-tools`
   - `%ANDROID_HOME%\emulator`

**macOS/Linux:**
Adicione ao arquivo `~/.bashrc` ou `~/.zshrc`:
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Recarregue:
```bash
source ~/.bashrc  # ou ~/.zshrc
```

---

## 7. CLONE/DOWNLOAD DO PROJETO

### 7.1. Opção 1: Clonar com Git (Recomendado)

Se o projeto estiver em um repositório Git (GitHub, GitLab, etc.):

```bash
# Navegar até a pasta onde quer salvar o projeto
cd C:\Users\SeuUsuario\Documents  # Windows
cd ~/Documents  # macOS/Linux

# Clonar o repositório
git clone https://github.com/seu-usuario/synerh-mobile.git

# Entrar na pasta do projeto
cd synerh-mobile
```

### 7.2. Opção 2: Download ZIP

1. Baixe o arquivo ZIP do projeto
2. Extraia para uma pasta de fácil acesso (ex: `C:\Users\SeuUsuario\Documents\synerh-mobile`)
3. Abra o terminal/prompt e navegue até a pasta:
   ```bash
   cd C:\Users\SeuUsuario\Documents\synerh-mobile
   ```

### 7.3. Opção 3: Projeto Já Está no Computador

Se o projeto foi fornecido em um pen drive ou pasta compartilhada:

1. Copie a pasta `synerh_mobile` para `Documentos`
2. Abra o terminal e navegue:
   ```bash
   cd /caminho/para/synerh_mobile
   ```

---

## 8. INSTALAÇÃO DAS DEPENDÊNCIAS

Agora vamos instalar todas as bibliotecas que o projeto precisa.

### 8.1. Verificar se Está na Pasta Certa

No terminal, execute:

```bash
pwd  # macOS/Linux
cd  # Windows (sem argumentos)
```

Deve mostrar algo como: `C:\Users\SeuUsuario\Documents\synerh_mobile`

### 8.2. Listar Arquivos

```bash
ls  # macOS/Linux
dir  # Windows
```

Você deve ver arquivos como:
- `package.json`
- `App.js`
- `app.json`
- Pasta `src/`

### 8.3. Instalar Dependências

Execute:

```bash
npm install
```

**O que acontece:**
- O npm lê o arquivo `package.json`
- Baixa todas as bibliotecas listadas em `dependencies`
- Salva em uma pasta chamada `node_modules/`
- Pode demorar **5-10 minutos** dependendo da sua internet

**Saída esperada:**
```
added 1523 packages in 4m
```

### 8.4. Verificar Instalação

Execute:

```bash
ls node_modules  # macOS/Linux
dir node_modules  # Windows
```

Você deve ver centenas de pastas com nomes de bibliotecas (expo, react-native, firebase, etc.)

---

## 9. CONFIGURAÇÃO DO FIREBASE

O aplicativo precisa se conectar ao Firebase para autenticação e banco de dados.

### 9.1. Opção 1: Usar Firebase de Demonstração (Rápido)

Se você só quer testar o app sem configurar Firebase próprio:

1. **Renomeie o arquivo de exemplo:**
   ```bash
   # Windows
   copy .env.example .env
   
   # macOS/Linux
   cp .env.example .env
   ```

2. **Edite o arquivo `.env`** com um editor de texto (Notepad++, VS Code, etc.)

3. **Use as credenciais de demonstração fornecidas:**
   ```env
   # Firebase Configuration (Demo)
   FIREBASE_API_KEY=AIzaSyDemoKey123456789
   FIREBASE_AUTH_DOMAIN=synerh-demo.firebaseapp.com
   FIREBASE_DATABASE_URL=https://synerh-demo-default-rtdb.firebaseio.com
   FIREBASE_PROJECT_ID=synerh-demo
   FIREBASE_STORAGE_BUCKET=synerh-demo.appspot.com
   FIREBASE_MESSAGING_SENDER_ID=123456789012
   FIREBASE_APP_ID=1:123456789012:web:abcdef123456
   
   # OpenAI Configuration
   OPENAI_API_KEY=sk-demo-key-will-not-work
   ```

   **Nota:** A chave de demonstração tem funcionalidades limitadas.

### 9.2. Opção 2: Configurar Firebase Próprio (Recomendado)

**Siga o guia detalhado:** `FIREBASE_SETUP_GUIDE.md` (na mesma pasta desta documentação)

Resumo rápido:

1. Acesse: https://console.firebase.google.com/
2. Crie um novo projeto
3. Habilite **Authentication** (método E-mail/Senha)
4. Habilite **Realtime Database**
5. Copie as credenciais para o arquivo `.env`

**Veja o guia completo para instruções passo a passo com imagens.**

---

## 10. CONFIGURAÇÃO DA OPENAI API

A IA do app usa a API da OpenAI (GPT-4) para gerar recomendações.

### 10.1. Criar Conta OpenAI

1. Acesse: https://platform.openai.com/signup
2. Crie uma conta (pode usar Google/Microsoft)
3. Verifique seu e-mail

### 10.2. Obter API Key

1. Faça login em: https://platform.openai.com/
2. Clique no seu perfil (canto superior direito)
3. Clique em **"View API Keys"**
4. Clique em **"Create new secret key"**
5. Dê um nome: "SYNERH Mobile"
6. **COPIE A CHAVE IMEDIATAMENTE** (ela só aparece uma vez!)
   - Exemplo: `sk-proj-abc123...`

### 10.3. Adicionar Créditos (Necessário)

A API da OpenAI é **paga** (mas muito barata para testes):

1. Acesse: https://platform.openai.com/account/billing
2. Clique em "Add payment method"
3. Adicione um cartão de crédito
4. Adicione créditos: **$5 USD** é suficiente para centenas de testes

**Custo estimado por recomendação:** ~$0.01 USD (1 centavo)

### 10.4. Adicionar ao .env

Edite o arquivo `.env` e cole sua chave:

```env
OPENAI_API_KEY=sk-proj-sua-chave-aqui-123456789
```

**⚠️ IMPORTANTE:** NUNCA compartilhe sua chave OpenAI publicamente!

---

## 11. EXECUTANDO O PROJETO

Finalmente, vamos rodar o aplicativo!

### 11.1. Iniciar o Metro Bundler

No terminal, dentro da pasta do projeto, execute:

```bash
npm start
```

**Ou:**

```bash
expo start
```

**O que acontece:**
1. O Metro Bundler (servidor de desenvolvimento) inicia
2. Um QR code aparece no terminal
3. Opções aparecem para abrir no emulador ou dispositivo físico

**Saída esperada:**

```
Starting Metro Bundler
█████████████████████████████████
█                               █
█  ████  ████  ████  ████  ████ █
█  ████  ████  ████  ████  ████ █
█  ████  ████  ████  ████  ████ █
█                               █
█████████████████████████████████

› Metro waiting on exp://192.168.1.100:8081
› Scan the QR code above with Expo Go (Android) or Camera app (iOS)

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu
› Press ? │ show all commands
```

### 11.2. Abrir Interface Web do Expo

Automaticamente, deve abrir no navegador: `http://localhost:19002`

Se não abrir, acesse manualmente esse endereço.

Na interface web você verá:
- QR Code
- Logs do aplicativo
- Botões para abrir em diferentes plataformas

---

## 12. TESTANDO NO DISPOSITIVO FÍSICO

### 12.1. Android (Expo Go)

1. **Certifique-se de que o computador e o celular estão na mesma rede Wi-Fi**
2. Abra o app **Expo Go** no celular
3. Toque em **"Scan QR Code"**
4. Aponte a câmera para o QR code no terminal ou navegador
5. Aguarde o download do JavaScript bundle (primeira vez demora 1-2 minutos)
6. O app SYNERH MOBILE abrirá no seu celular!

### 12.2. iOS (Expo Go)

1. **Computador e iPhone na mesma rede Wi-Fi**
2. Abra o app **Câmera** (nativo do iOS)
3. Aponte para o QR code
4. Toque na notificação que aparece: "Abrir no Expo Go"
5. O app será carregado

### 12.3. Dicas

- **Shake (balançar) o dispositivo** para abrir o menu de desenvolvedor
- **Reload:** Balançar → "Reload"
- **Debug:** Balançar → "Debug Remote JS"

---

## 13. TESTANDO NO EMULADOR ANDROID

### 13.1. Iniciar Emulador Android Studio

1. Abra o Android Studio
2. Menu: **Tools → Device Manager**
3. Clique no ▶️ (Play) do emulador que você criou
4. Aguarde o emulador inicializar (pode demorar 2-3 minutos)

### 13.2. Executar App no Emulador

Com o emulador rodando e o Metro Bundler ativo (`npm start`):

**Opção 1: Pressionar 'a' no terminal**
```
› Press a │ open Android
```

Pressione a tecla **"a"** e Enter.

**Opção 2: Comando direto**
```bash
npm run android
```

**O que acontece:**
1. O Expo detecta o emulador Android
2. Instala o Expo Go no emulador (se ainda não tiver)
3. Abre o app SYNERH MOBILE automaticamente

### 13.3. Primeira Execução

Na primeira vez, o processo pode demorar **5-10 minutos** porque:
- Expo Go é instalado no emulador
- JavaScript bundle é compilado
- Assets são baixados

**Nas próximas vezes, será instantâneo!**

---

## 14. TROUBLESHOOTING (PROBLEMAS COMUNS)

### 14.1. Erro: "Command not found: expo"

**Problema:** Expo CLI não foi instalado corretamente.

**Solução:**
```bash
# Desinstalar e reinstalar
npm uninstall -g expo-cli
npm install -g expo-cli

# Verificar
expo --version
```

### 14.2. Erro: "Unable to resolve module"

**Problema:** Dependências não foram instaladas ou cache corrompido.

**Solução:**
```bash
# Limpar cache
npm cache clean --force

# Deletar node_modules e reinstalar
rm -rf node_modules  # macOS/Linux
rmdir /s node_modules  # Windows

npm install
```

### 14.3. Erro: "Network response timed out"

**Problema:** Computador e celular não estão na mesma rede ou firewall bloqueando.

**Solução:**
- Confirme que ambos estão na **mesma rede Wi-Fi**
- Desative temporariamente o firewall
- Tente usar modo "Tunnel":
  ```bash
  expo start --tunnel
  ```

### 14.4. Erro: "Android SDK not found"

**Problema:** Android Studio não está configurado corretamente.

**Solução:**
- Verifique as variáveis de ambiente (seção 6.6)
- Reinicie o terminal após configurar variáveis
- Execute:
  ```bash
  echo $ANDROID_HOME  # macOS/Linux
  echo %ANDROID_HOME%  # Windows
  ```
  Deve mostrar o caminho do SDK.

### 14.5. Erro Firebase: "auth/invalid-api-key"

**Problema:** Credenciais do Firebase incorretas ou não configuradas.

**Solução:**
- Verifique o arquivo `.env`
- Certifique-se de que **não há espaços** antes ou depois dos valores
- Formato correto:
  ```env
  FIREBASE_API_KEY=AIzaSy...  (SEM aspas, SEM espaços)
  ```
- Reinicie o Metro Bundler:
  ```bash
  # Parar: Ctrl + C
  # Reiniciar:
  npm start
  ```

### 14.6. Erro OpenAI: "Incorrect API key"

**Problema:** Chave OpenAI inválida ou sem créditos.

**Solução:**
- Verifique se a chave está correta no `.env`
- Acesse https://platform.openai.com/account/usage
- Confirme que há créditos disponíveis
- Gere uma nova chave se necessário

### 14.7. App "trava" na SplashScreen

**Problema:** Erro JavaScript não tratado ou Firebase não inicializou.

**Solução:**
- Shake (balançar) o dispositivo → "Reload"
- Verifique os logs no terminal (procure por erros em vermelho)
- Abra o navegador em: http://localhost:19002 → Aba "Logs"

### 14.8. Emulador Android muito lento

**Solução:**
- Feche outros programas para liberar RAM
- No Android Studio:
  - Menu: Tools → AVD Manager
  - Edite o emulador → Advanced Settings
  - Aumente RAM para 4096 MB
  - Habilite "Hardware Acceleration" (HAXM/KVM)

### 14.9. Erro: "Expo Go não instalado no emulador"

**Solução:**
```bash
# Instalar Expo Go manualmente no emulador
adb install /path/to/expo-go.apk

# Ou deixe o Expo instalar automaticamente:
expo start --android
```

### 14.10. Tela branca após fazer build

**Problema:** Assets não foram carregados.

**Solução:**
```bash
# Limpar cache do Expo
expo start -c

# Ou:
expo start --clear
```

---

## 15. COMANDOS ÚTEIS

### 15.1. Comandos Básicos

```bash
# Iniciar servidor de desenvolvimento
npm start
expo start

# Abrir no Android
npm run android
expo start --android

# Abrir no iOS (apenas macOS)
npm run ios
expo start --ios

# Abrir no navegador web
npm run web
expo start --web

# Limpar cache e reiniciar
expo start -c
expo start --clear
```

### 15.2. Comandos de Debug

```bash
# Ver logs detalhados
expo start --verbose

# Modo túnel (quando mesma rede Wi-Fi não funciona)
expo start --tunnel

# Modo LAN (padrão)
expo start --lan

# Modo localhost (apenas emulador)
expo start --localhost
```

### 15.3. Comandos de Manutenção

```bash
# Atualizar dependências
npm update

# Verificar dependências desatualizadas
npm outdated

# Auditar segurança
npm audit

# Corrigir vulnerabilidades
npm audit fix
```

---

## 16. PRÓXIMOS PASSOS

Agora que o app está funcionando:

1. **Teste todas as funcionalidades:**
   - Cadastre um usuário
   - Faça login
   - Navegue pelas 3 abas (Home, Quests, IA)
   - Gere recomendações de IA

2. **Explore o código:**
   - Abra a pasta `src/screens/` e veja as telas
   - Entenda o fluxo de navegação em `src/navigation/`
   - Veja as integrações em `src/services/`

3. **Modifique e experimente:**
   - Mude cores em `StyleSheet`
   - Adicione novos dados em `src/data/mockData.js`
   - Crie novos componentes

4. **Prepare para apresentação:**
   - Tire screenshots de todas as telas
   - Prepare demonstração ao vivo
   - Estude a documentação técnica para explicar decisões de arquitetura

---

## 17. SUPORTE

### 17.1. Documentação Oficial

- **React Native:** https://reactnative.dev/docs/getting-started
- **Expo:** https://docs.expo.dev/
- **React Navigation:** https://reactnavigation.org/docs/getting-started
- **Firebase:** https://firebase.google.com/docs/web/setup

### 17.2. Comunidades

- **Stack Overflow:** https://stackoverflow.com/questions/tagged/react-native
- **Reddit:** https://reddit.com/r/reactnative
- **Discord Expo:** https://discord.com/invite/4gtbPAdpaE

### 17.3. Erros Comuns - Links Úteis

- **Metro Bundler Issues:** https://reactnative.dev/docs/troubleshooting
- **Expo Troubleshooting:** https://docs.expo.dev/troubleshooting/
- **Firebase Setup:** https://firebase.google.com/docs/web/setup#add-sdks-initialize

---

## 18. CHECKLIST FINAL

Antes de apresentar o projeto, verifique:

- [ ] Node.js instalado (`node --version`)
- [ ] npm instalado (`npm --version`)
- [ ] Expo CLI instalado (`expo --version`)
- [ ] Projeto clonado/baixado
- [ ] Dependências instaladas (`node_modules/` existe)
- [ ] Arquivo `.env` configurado com Firebase e OpenAI
- [ ] App roda sem erros (`npm start`)
- [ ] Testado no dispositivo físico ou emulador
- [ ] Cadastro de usuário funciona
- [ ] Login funciona
- [ ] Navegação entre telas funciona
- [ ] Firebase salva dados
- [ ] IA gera recomendações (se OpenAI configurada)
- [ ] Screenshots documentados
- [ ] Código revisado e comentado

---

**✅ INSTALAÇÃO CONCLUÍDA COM SUCESSO!**

Se você chegou até aqui e o app está rodando, **parabéns!** 🎉

Você agora tem um aplicativo React Native + Expo totalmente funcional com Firebase e IA.

---

**© 2025 SYNERH MOBILE - Tutorial de Instalação**  
**Desenvolvido para Global Solution 2025 - FIAP**
