
/**
 * SYNERH Mobile - Home Screen
 * Dashboard principal com informações do usuário
 * 
 * Global Solution 2025 - FIAP
 * Disciplina: Mobile Development and IOT
 * Componentes usados: View, Text, ScrollView, TouchableOpacity, StyleSheet, Image
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { mockUserStats, mockNotifications } from '../data/mockData';
import { logoutUser } from '../services/firebase';

const HomeScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({
    name: 'Usuário SYNERH',
    rskBalance: 100,
    reputation: 4.5,
    acceptedQuests: []
  });
  const [stats, setStats] = useState(mockUserStats);
  const [notifications, setNotifications] = useState(mockNotifications.slice(0, 3));
  const [refreshing, setRefreshing] = useState(false);

  /**
   * Atualizar dados (Pull to refresh)
   */
  const onRefresh = () => {
    setRefreshing(true);
    // Simular atualização de dados
    setTimeout(() => {
      setRefreshing(false);
      Alert.alert('✅ Atualizado', 'Dados sincronizados com sucesso!');
    }, 1500);
  };

  /**
   * Realizar logout
   */
  const handleLogout = async () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: async () => {
            try {
              await logoutUser();
              // Navegação será tratada pelo App.js
            } catch (error) {
              Alert.alert('Erro', 'Erro ao fazer logout');
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header com Gradient */}
      <LinearGradient
        colors={['#6366F1', '#8B5CF6']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Olá,</Text>
            <Text style={styles.userName}>{userData.name}! 👋</Text>
          </View>
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Saldo de Tokens RSK */}
        <View style={styles.balanceCard}>
          <LinearGradient
            colors={['#3B82F6', '#2563EB']}
            style={styles.balanceGradient}
          >
            <Text style={styles.balanceLabel}>Saldo de Tokens RSK</Text>
            <Text style={styles.balanceAmount}>⛓️ {userData.rskBalance}</Text>
            <Text style={styles.balanceSubtext}>
              ≈ R$ {(userData.rskBalance * 5).toFixed(2)}
            </Text>
          </LinearGradient>
        </View>

        {/* Reputação */}
        <View style={styles.reputationCard}>
          <View style={styles.reputationHeader}>
            <Text style={styles.cardTitle}>Reputação</Text>
            <Text style={styles.badge}>{stats.rank}</Text>
          </View>
          <View style={styles.reputationContent}>
            <Text style={styles.reputationScore}>
              ⭐ {userData.reputation.toFixed(1)}
            </Text>
            <Text style={styles.reputationMax}>/5.0</Text>
          </View>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${(userData.reputation / 5) * 100}%` }
              ]} 
            />
          </View>
          <Text style={styles.reputationText}>
            Excelente! Continue aceitando quests para manter sua reputação alta.
          </Text>
        </View>

        {/* Estatísticas Rápidas */}
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Suas Estatísticas</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{stats.totalQuests}</Text>
              <Text style={styles.statLabel}>Total Quests</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{stats.completedQuests}</Text>
              <Text style={styles.statLabel}>Concluídas</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{stats.activeQuests}</Text>
              <Text style={styles.statLabel}>Ativas</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{stats.totalEarned}</Text>
              <Text style={styles.statLabel}>RSK Ganhos</Text>
            </View>
          </View>
        </View>

        {/* Badges */}
        <View style={styles.badgesContainer}>
          <Text style={styles.sectionTitle}>Suas Conquistas</Text>
          <View style={styles.badgesGrid}>
            {stats.badges.map((badge, index) => (
              <View key={index} style={styles.badgeItem}>
                <Text style={styles.badgeIcon}>{badge.icon}</Text>
                <Text style={styles.badgeName}>{badge.name}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Notificações Recentes */}
        <View style={styles.notificationsContainer}>
          <View style={styles.notificationsHeader}>
            <Text style={styles.sectionTitle}>Notificações</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Ver todas</Text>
            </TouchableOpacity>
          </View>
          {notifications.map((notif) => (
            <View key={notif.id} style={styles.notificationItem}>
              <View style={[
                styles.notificationDot,
                !notif.read && styles.notificationDotUnread
              ]} />
              <View style={styles.notificationContent}>
                <Text style={styles.notificationMessage}>
                  {notif.message}
                </Text>
                <Text style={styles.notificationTime}>
                  {new Date(notif.timestamp).toLocaleDateString('pt-BR')}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <Text style={styles.sectionTitle}>Ações Rápidas</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity 
              style={styles.quickActionButton}
              onPress={() => navigation.navigate('Quests')}
            >
              <Text style={styles.quickActionIcon}>🎯</Text>
              <Text style={styles.quickActionText}>Ver Quests</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.quickActionButton}
              onPress={() => navigation.navigate('AI')}
            >
              <Text style={styles.quickActionIcon}>🤖</Text>
              <Text style={styles.quickActionText}>Recomendações IA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton}>
              <Text style={styles.quickActionIcon}>📚</Text>
              <Text style={styles.quickActionText}>Cursos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton}>
              <Text style={styles.quickActionIcon}>👥</Text>
              <Text style={styles.quickActionText}>Comunidade</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer Spacer */}
        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    color: '#E0E7FF',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  logoutButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  logoutText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  balanceCard: {
    marginTop: -40,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  balanceGradient: {
    padding: 24,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#BFDBFE',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  balanceSubtext: {
    fontSize: 14,
    color: '#DBEAFE',
  },
  reputationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reputationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  badge: {
    backgroundColor: '#FCD34D',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#92400E',
  },
  reputationContent: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 12,
  },
  reputationScore: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6366F1',
  },
  reputationMax: {
    fontSize: 18,
    color: '#9CA3AF',
    marginLeft: 4,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#6366F1',
    borderRadius: 4,
  },
  reputationText: {
    fontSize: 13,
    color: '#6B7280',
  },
  statsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6366F1',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  badgesContainer: {
    marginBottom: 20,
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  badgeItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: '31%',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  badgeIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  badgeName: {
    fontSize: 10,
    color: '#6B7280',
    textAlign: 'center',
  },
  notificationsContainer: {
    marginBottom: 20,
  },
  notificationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  seeAllText: {
    fontSize: 14,
    color: '#6366F1',
    fontWeight: '600',
  },
  notificationItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
    marginRight: 12,
  },
  notificationDotUnread: {
    backgroundColor: '#6366F1',
  },
  notificationContent: {
    flex: 1,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  quickActionsContainer: {
    marginBottom: 20,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickActionIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 13,
    color: '#1F2937',
    fontWeight: '600',
  },
});

export default HomeScreen;
