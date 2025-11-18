
/**
 * SYNERH Mobile - Auth Navigator
 * Stack Navigator para fluxo de autenticação
 * 
 * Global Solution 2025 - FIAP
 * Disciplina: Mobile Development and IOT
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importar telas de autenticação
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

/**
 * Navegador de Autenticação
 * Gerencia o fluxo: Splash → Login → Register
 */
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false, // Remover header padrão
        cardStyle: { backgroundColor: '#FFFFFF' },
        animationEnabled: true,
        gestureEnabled: true,
      }}
    >
      {/* Splash Screen - Tela inicial */}
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          animationTypeForReplace: 'push',
        }}
      />

      {/* Login Screen */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          animationTypeForReplace: 'pop',
        }}
      />

      {/* Register Screen */}
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          gestureDirection: 'horizontal',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
