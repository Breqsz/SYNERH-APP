import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

// Importar navegadores
import AuthNavigator from './src/navigation/AuthNavigator';
import MainNavigator from './src/navigation/MainNavigator';

// Importar serviços Firebase
import { authStateObserver } from './src/services/firebase';

/**
 * Componente Principal do App
 */
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  /**
   * Monitorar estado de autenticação
   */
  useEffect(() => {
    // Observar mudanças no estado de autenticação
    const unsubscribe = authStateObserver((currentUser) => {
      setUser(currentUser);
      setIsAuthenticated(!!currentUser);
      setIsLoading(false);
    });

    // Cleanup
    return () => unsubscribe();
  }, []);

  /**
   * Mostrar loading enquanto verifica autenticação
   */
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366F1" />
      </View>
    );
  }

  return (
    <>
      {/* Status Bar Configuration */}
      <StatusBar style="light" backgroundColor="#6366F1" />

      {/* Navigation Container */}
      <NavigationContainer>
        {/* 
          Navegação Condicional:
          - Se não autenticado: AuthNavigator (Stack)
          - Se autenticado: MainNavigator (Bottom Tabs)
        */}
        {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
}

/**
 * Estilos
 */
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
