
/**
 * SYNERH Mobile - Firebase Service
 * Configuração e funções para autenticação e banco de dados Firebase
 * 
 * Global Solution 2025 - FIAP
 * Disciplina: Mobile Development and IOT
 */

import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getDatabase, 
  ref, 
  set, 
  get, 
  update,
  child 
} from 'firebase/database';

// Configuração do Firebase (usar variáveis de ambiente em produção)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "demo-api-key",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "synerh-demo.firebaseapp.com",
  databaseURL: process.env.FIREBASE_DATABASE_URL || "https://synerh-demo.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "synerh-demo",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "synerh-demo.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.FIREBASE_APP_ID || "1:123456789:web:abcdef"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

/**
 * Registrar novo usuário
 * @param {string} email - Email do usuário
 * @param {string} password - Senha do usuário
 * @param {string} name - Nome completo do usuário
 * @returns {Promise} - Retorna dados do usuário criado
 */
export const registerUser = async (email, password, name) => {
  try {
    // Criar usuário no Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Criar perfil inicial no Realtime Database
    await set(ref(database, 'users/' + user.uid), {
      name: name,
      email: email,
      rskBalance: 100, // Saldo inicial de tokens RSK
      reputation: 4.5, // Reputação inicial
      acceptedQuests: [],
      completedQuests: [],
      createdAt: new Date().toISOString(),
      profile: {
        skills: [],
        interests: [],
        experienceLevel: 'beginner'
      }
    });

    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        name: name
      }
    };
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;
  }
};

/**
 * Login de usuário
 * @param {string} email - Email do usuário
 * @param {string} password - Senha do usuário
 * @returns {Promise} - Retorna dados do usuário
 */
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Buscar dados do usuário no database
    const userDataSnapshot = await get(child(ref(database), `users/${user.uid}`));
    
    if (userDataSnapshot.exists()) {
      return {
        success: true,
        user: {
          uid: user.uid,
          email: user.email,
          ...userDataSnapshot.val()
        }
      };
    } else {
      throw new Error('Dados do usuário não encontrados');
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

/**
 * Logout de usuário
 * @returns {Promise}
 */
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    throw error;
  }
};

/**
 * Obter dados do usuário atual
 * @param {string} userId - ID do usuário
 * @returns {Promise} - Retorna dados do usuário
 */
export const getUserData = async (userId) => {
  try {
    const userDataSnapshot = await get(child(ref(database), `users/${userId}`));
    
    if (userDataSnapshot.exists()) {
      return userDataSnapshot.val();
    } else {
      throw new Error('Usuário não encontrado');
    }
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    throw error;
  }
};

/**
 * Atualizar dados do usuário
 * @param {string} userId - ID do usuário
 * @param {object} data - Dados a serem atualizados
 * @returns {Promise}
 */
export const updateUserData = async (userId, data) => {
  try {
    await update(ref(database, 'users/' + userId), data);
    return { success: true };
  } catch (error) {
    console.error('Erro ao atualizar dados do usuário:', error);
    throw error;
  }
};

/**
 * Aceitar uma quest
 * @param {string} userId - ID do usuário
 * @param {object} quest - Dados da quest
 * @returns {Promise}
 */
export const acceptQuest = async (userId, quest) => {
  try {
    const userData = await getUserData(userId);
    const acceptedQuests = userData.acceptedQuests || [];
    
    acceptedQuests.push({
      ...quest,
      acceptedAt: new Date().toISOString(),
      status: 'in_progress'
    });

    await updateUserData(userId, { acceptedQuests });
    return { success: true };
  } catch (error) {
    console.error('Erro ao aceitar quest:', error);
    throw error;
  }
};

/**
 * Observador de estado de autenticação
 * @param {function} callback - Função callback
 */
export const authStateObserver = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export { auth, database };
