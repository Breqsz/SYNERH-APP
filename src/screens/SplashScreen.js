
/**
 * SYNERH Mobile - Splash Screen
 * Tela inicial com logo e animação de carregamento
 * 
 * Global Solution 2025 - FIAP
 * Disciplina: Mobile Development and IOT
 */

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simular carregamento inicial (verificar autenticação, etc)
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#6366F1', '#8B5CF6', '#A855F7']}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Logo SYNERH */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>SYNERH</Text>
          <Text style={styles.subLogoText}>MOBILE</Text>
        </View>

        {/* Tagline */}
        <Text style={styles.tagline}>
          Conectando profissionais ao futuro do trabalho
        </Text>

        {/* Ícone blockchain */}
        <Text style={styles.blockchainIcon}>⛓️</Text>

        {/* Loading indicator */}
        <ActivityIndicator 
          size="large" 
          color="#FFFFFF" 
          style={styles.loader}
        />

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Powered by Solana Blockchain
          </Text>
          <Text style={styles.footerSubtext}>
            Global Solution 2025 - FIAP
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subLogoText: {
    fontSize: 20,
    color: '#E0E7FF',
    letterSpacing: 8,
    marginTop: 5,
  },
  tagline: {
    fontSize: 16,
    color: '#E0E7FF',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 40,
  },
  blockchainIcon: {
    fontSize: 48,
    marginTop: 40,
  },
  loader: {
    marginTop: 40,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#E0E7FF',
    fontWeight: '600',
  },
  footerSubtext: {
    fontSize: 10,
    color: '#C7D2FE',
    marginTop: 5,
  },
});

export default SplashScreen;
