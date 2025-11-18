
/**
 * SYNERH Mobile - Main Navigator
 * Bottom Tabs Navigator para navegação principal
 * 
 * Global Solution 2025 - FIAP
 * Disciplina: Mobile Development and IOT
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importar telas principais
import HomeScreen from '../screens/HomeScreen';
import QuestsScreen from '../screens/QuestsScreen';
import AIRecommendationsScreen from '../screens/AIRecommendationsScreen';

const Tab = createBottomTabNavigator();

/**
 * Navegador Principal com Bottom Tabs
 * 3 abas: Home, Quests, AI Recommendations
 */
const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6366F1',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIconStyle: {
          marginBottom: -4,
        },
      }}
    >
      {/* Home Tab */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />

      {/* Quests Tab */}
      <Tab.Screen
        name="Quests"
        component={QuestsScreen}
        options={{
          title: 'Quests',
          tabBarIcon: ({ color, size }) => (
            <QuestsIcon color={color} size={size} />
          ),
        }}
      />

      {/* AI Recommendations Tab */}
      <Tab.Screen
        name="AI"
        component={AIRecommendationsScreen}
        options={{
          title: 'IA',
          tabBarIcon: ({ color, size }) => (
            <AIIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

/**
 * Ícones customizados para as tabs
 * (Usando emoji como ícones simples - pode ser substituído por react-native-vector-icons)
 */

const HomeIcon = ({ color, size }) => {
  const { Text } = require('react-native');
  return (
    <Text style={{ fontSize: size || 24 }}>
      🏠
    </Text>
  );
};

const QuestsIcon = ({ color, size }) => {
  const { Text } = require('react-native');
  return (
    <Text style={{ fontSize: size || 24 }}>
      🎯
    </Text>
  );
};

const AIIcon = ({ color, size }) => {
  const { Text } = require('react-native');
  return (
    <Text style={{ fontSize: size || 24 }}>
      🤖
    </Text>
  );
};

export default MainNavigator;
