/**
 * SYNERH Mobile - AI Recommendations Screen
 * Tela com recomendações personalizadas geradas pela API OpenAI
 * 
 * Global Solution 2025 - FIAP
 * Disciplina: Mobile Development and IOT
 * Componentes usados: View, Text, ScrollView, TouchableOpacity, StyleSheet, Button, ActivityIndicator
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Button
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { generateRecommendations } from '../services/openai';

const AIRecommendationsScreen = () => {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState(null);
  const [userProfile, setUserProfile] = useState({
    name: 'Usuário SYNERH',
    skills: ['JavaScript', 'React', 'Node.js'],
    interests: ['Web3', 'Blockchain', 'IA'],
    experienceLevel: 'intermediário',
    rskBalance: 100,
    reputation: 4.5
  });

  /**
   * Carregar recomendações ao montar o componente
   */
  useEffect(() => {
    loadRecommendations();
  }, []);

  /**
   * Gerar recomendações personalizadas
   */
  const loadRecommendations = async () => {
    setLoading(true);
    try {
      const result = await generateRecommendations(userProfile);
      
      if (result.success) {
        setRecommendations(result.data);
      } else {
        Alert.alert('Aviso', 'Usando recomendações mockadas (configure OpenAI API para recomendações reais)');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar recomendações');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Atualizar recomendações
   */
  const handleRefresh = () => {
    Alert.alert(
      'Atualizar Recomendações',
      'Deseja gerar novas recomendações personalizadas?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sim', onPress: loadRecommendations }
      ]
    );
  };

  /**
   * Ver detalhes da recomendação
   */
  const handleViewQuestDetails = (quest) => {
    Alert.alert(
      quest.title,
      `${quest.description}\n\n` +
      `💡 Por que recomendamos:\n${quest.reason}\n\n` +
      `💰 Recompensa estimada: ${quest.estimatedReward} RSK\n\n` +
      `🔧 Skills necessárias:\n${quest.requiredSkills.join(', ')}`,
      [{ text: 'Fechar' }]
    );
  };

  const handleViewCourseDetails = (course) => {
    Alert.alert(
      course.title,
      `${course.description}\n\n` +
      `💡 Por que recomendamos:\n${course.reason}\n\n` +
      `⏱️ Duração: ${course.duration}\n` +
      `📚 Categoria: ${course.category}`,
      [{ text: 'Fechar' }]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={['#8B5CF6', '#A855F7']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>🤖 Recomendações de IA</Text>
        <Text style={styles.headerSubtitle}>
          Personalizadas para você com OpenAI
        </Text>
      </LinearGradient>

      {loading ? (
        /* Loading State */
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#8B5CF6" />
          <Text style={styles.loadingText}>
            Gerando recomendações personalizadas...
          </Text>
          <Text style={styles.loadingSubtext}>
            Analisando seu perfil com IA 🧠
          </Text>
        </View>
      ) : !recommendations ? (
        /* Error State */
        <View style={styles.errorContainer}>
          <Text style={styles.errorIcon}>⚠️</Text>
          <Text style={styles.errorText}>
            Não foi possível carregar recomendações
          </Text>
          <Button
            title="Tentar Novamente"
            onPress={loadRecommendations}
            color="#8B5CF6"
          />
        </View>
      ) : (
        /* Content */
        <ScrollView style={styles.content}>
          {/* Refresh Button */}
          <TouchableOpacity
            style={styles.refreshButton}
            onPress={handleRefresh}
          >
            <Text style={styles.refreshButtonText}>
              🔄 Gerar Novas Recomendações
            </Text>
          </TouchableOpacity>

          {/* Insights Section */}
          {recommendations.insights && (
            <View style={styles.insightsCard}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionIcon}>💡</Text>
                <Text style={styles.sectionTitle}>
                  Insights Personalizados
                </Text>
              </View>
              <Text style={styles.insightsText}>
                {recommendations.insights}
              </Text>
            </View>
          )}

          {/* Recommended Quests */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionIcon}>🎯</Text>
              <Text style={styles.sectionTitle}>
                Quests Recomendadas
              </Text>
            </View>
            <Text style={styles.sectionDescription}>
              Baseadas no seu perfil e habilidades
            </Text>

            {recommendations.quests?.map((quest, index) => (
              <TouchableOpacity
                key={index}
                style={styles.recommendationCard}
                onPress={() => handleViewQuestDetails(quest)}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>{quest.title}</Text>
                  <View style={styles.rewardBadge}>
                    <Text style={styles.rewardText}>
                      {quest.estimatedReward} RSK
                    </Text>
                  </View>
                </View>
                
                <Text style={styles.cardDescription} numberOfLines={2}>
                  {quest.description}
                </Text>

                <View style={styles.reasonContainer}>
                  <Text style={styles.reasonLabel}>Por que recomendamos:</Text>
                  <Text style={styles.reasonText}>{quest.reason}</Text>
                </View>

                <View style={styles.skillsContainer}>
                  {quest.requiredSkills?.slice(0, 3).map((skill, idx) => (
                    <View key={idx} style={styles.skillTag}>
                      <Text style={styles.skillText}>{skill}</Text>
                    </View>
                  ))}
                </View>

                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => handleViewQuestDetails(quest)}
                >
                  <Text style={styles.actionButtonText}>
                    Ver Detalhes →
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>

          {/* Recommended Courses */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionIcon}>📚</Text>
              <Text style={styles.sectionTitle}>
                Cursos Recomendados
              </Text>
            </View>
            <Text style={styles.sectionDescription}>
              Para desenvolver novas habilidades
            </Text>

            {recommendations.courses?.map((course, index) => (
              <TouchableOpacity
                key={index}
                style={styles.recommendationCard}
                onPress={() => handleViewCourseDetails(course)}
              >
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>{course.title}</Text>
                  <View style={styles.durationBadge}>
                    <Text style={styles.durationText}>
                      {course.duration}
                    </Text>
                  </View>
                </View>

                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryText}>
                    {course.category}
                  </Text>
                </View>
                
                <Text style={styles.cardDescription} numberOfLines={2}>
                  {course.description}
                </Text>

                <View style={styles.reasonContainer}>
                  <Text style={styles.reasonLabel}>Por que recomendamos:</Text>
                  <Text style={styles.reasonText}>{course.reason}</Text>
                </View>

                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => handleViewCourseDetails(course)}
                >
                  <Text style={styles.actionButtonText}>
                    Ver Detalhes →
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>

          {/* Footer Info */}
          <View style={styles.footerInfo}>
            <Text style={styles.footerIcon}>🤖</Text>
            <Text style={styles.footerTitle}>
              Powered by OpenAI GPT
            </Text>
            <Text style={styles.footerText}>
              Recomendações geradas por Inteligência Artificial baseadas no seu perfil, 
              habilidades e objetivos profissionais.
            </Text>
          </View>

          {/* Spacer */}
          <View style={{ height: 40 }} />
        </ScrollView>
      )}
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
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#F3E8FF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    fontSize: 16,
    color: '#1F2937',
    marginTop: 16,
    fontWeight: '600',
  },
  loadingSubtext: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  errorText: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 24,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  refreshButton: {
    backgroundColor: '#8B5CF6',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  refreshButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  insightsCard: {
    backgroundColor: '#FEF3C7',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  insightsText: {
    fontSize: 15,
    color: '#92400E',
    lineHeight: 22,
  },
  section: {
    marginBottom: 24,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  recommendationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1F2937',
    flex: 1,
    marginRight: 12,
  },
  rewardBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  rewardText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  durationBadge: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  durationText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  categoryBadge: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6366F1',
  },
  cardDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
    lineHeight: 20,
  },
  reasonContainer: {
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  reasonLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4B5563',
    marginBottom: 4,
  },
  reasonText: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  skillTag: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    fontSize: 12,
    color: '#6366F1',
    fontWeight: '500',
  },
  actionButton: {
    backgroundColor: '#8B5CF6',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  footerInfo: {
    backgroundColor: '#F3E8FF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginTop: 8,
  },
  footerIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6B21A8',
    marginBottom: 8,
  },
  footerText: {
    fontSize: 13,
    color: '#7C3AED',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default AIRecommendationsScreen;
