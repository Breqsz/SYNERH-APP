
/**
 * SYNERH Mobile - Quests Screen
 * Lista de contratos/trabalhos disponíveis na plataforma
 * 
 * Global Solution 2025 - FIAP
 * Disciplina: Mobile Development and IOT
 * Componentes usados: View, Text, ScrollView, TouchableOpacity, StyleSheet, Picker
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  RefreshControl
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { mockQuests, questCategories, difficultyLevels } from '../data/mockData';
import { acceptQuest } from '../services/firebase';

const QuestsScreen = () => {
  const [quests, setQuests] = useState(mockQuests);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Todos');
  const [refreshing, setRefreshing] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  /**
   * Filtrar quests
   */
  const getFilteredQuests = () => {
    return mockQuests.filter(quest => {
      const categoryMatch = selectedCategory === 'Todas' || quest.category === selectedCategory;
      const difficultyMatch = selectedDifficulty === 'Todos' || quest.difficulty === selectedDifficulty;
      return categoryMatch && difficultyMatch;
    });
  };

  /**
   * Atualizar lista de quests
   */
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setQuests(mockQuests);
      setRefreshing(false);
      Alert.alert('✅ Atualizado', 'Lista de quests atualizada!');
    }, 1500);
  };

  /**
   * Aceitar uma quest
   */
  const handleAcceptQuest = (quest) => {
    Alert.alert(
      'Aceitar Quest',
      `Deseja aceitar a quest "${quest.title}"?\n\nRecompensa: ${quest.rewardRSK} RSK tokens`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Aceitar',
          onPress: async () => {
            try {
              // Em produção, usar acceptQuest(userId, quest)
              Alert.alert(
                '🎉 Sucesso!',
                `Quest "${quest.title}" aceita com sucesso!\n\nVocê pode acompanhar o progresso na aba Home.`
              );
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível aceitar a quest');
            }
          }
        }
      ]
    );
  };

  /**
   * Ver detalhes da quest
   */
  const handleViewDetails = (quest) => {
    Alert.alert(
      quest.title,
      `📝 ${quest.description}\n\n` +
      `💰 Recompensa: ${quest.rewardRSK} RSK\n` +
      `⏱️ Duração: ${quest.duration}\n` +
      `📊 Dificuldade: ${quest.difficulty}\n` +
      `🏢 Cliente: ${quest.client}\n` +
      `👥 Candidatos: ${quest.applicants}\n\n` +
      `🔧 Skills necessárias:\n${quest.skills.join(', ')}`,
      [
        { text: 'Fechar', style: 'cancel' },
        { text: 'Aceitar Quest', onPress: () => handleAcceptQuest(quest) }
      ]
    );
  };

  /**
   * Renderizar cor da dificuldade
   */
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Iniciante':
        return '#10B981';
      case 'Intermediário':
        return '#F59E0B';
      case 'Avançado':
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };

  const filteredQuests = getFilteredQuests();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Quests Disponíveis</Text>
        <Text style={styles.headerSubtitle}>
          {filteredQuests.length} quests encontradas
        </Text>
      </View>

      {/* Filters Toggle */}
      <TouchableOpacity
        style={styles.filterToggle}
        onPress={() => setShowFilters(!showFilters)}
      >
        <Text style={styles.filterToggleText}>
          {showFilters ? '🔼 Ocultar Filtros' : '🔽 Mostrar Filtros'}
        </Text>
      </TouchableOpacity>

      {/* Filters Section (usando Picker conforme requisito) */}
      {showFilters && (
        <View style={styles.filtersContainer}>
          <View style={styles.filterItem}>
            <Text style={styles.filterLabel}>Categoria:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedCategory}
                onValueChange={(value) => setSelectedCategory(value)}
                style={styles.picker}
              >
                {questCategories.map((category) => (
                  <Picker.Item 
                    key={category} 
                    label={category} 
                    value={category} 
                  />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.filterItem}>
            <Text style={styles.filterLabel}>Dificuldade:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedDifficulty}
                onValueChange={(value) => setSelectedDifficulty(value)}
                style={styles.picker}
              >
                {difficultyLevels.map((level) => (
                  <Picker.Item 
                    key={level} 
                    label={level} 
                    value={level} 
                  />
                ))}
              </Picker>
            </View>
          </View>

          <TouchableOpacity
            style={styles.clearFiltersButton}
            onPress={() => {
              setSelectedCategory('Todas');
              setSelectedDifficulty('Todos');
            }}
          >
            <Text style={styles.clearFiltersText}>Limpar Filtros</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Quests List */}
      <ScrollView
        style={styles.questsList}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {filteredQuests.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateIcon}>🔍</Text>
            <Text style={styles.emptyStateText}>
              Nenhuma quest encontrada com esses filtros
            </Text>
            <TouchableOpacity
              style={styles.emptyStateButton}
              onPress={() => {
                setSelectedCategory('Todas');
                setSelectedDifficulty('Todos');
              }}
            >
              <Text style={styles.emptyStateButtonText}>
                Limpar Filtros
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          filteredQuests.map((quest) => (
            <TouchableOpacity
              key={quest.id}
              style={styles.questCard}
              onPress={() => handleViewDetails(quest)}
            >
              {/* Quest Header */}
              <View style={styles.questHeader}>
                <View style={styles.questCategory}>
                  <Text style={styles.questCategoryText}>
                    {quest.category}
                  </Text>
                </View>
                <View
                  style={[
                    styles.questDifficulty,
                    { backgroundColor: getDifficultyColor(quest.difficulty) }
                  ]}
                >
                  <Text style={styles.questDifficultyText}>
                    {quest.difficulty}
                  </Text>
                </View>
              </View>

              {/* Quest Title */}
              <Text style={styles.questTitle}>{quest.title}</Text>

              {/* Quest Description */}
              <Text style={styles.questDescription} numberOfLines={2}>
                {quest.description}
              </Text>

              {/* Quest Info */}
              <View style={styles.questInfo}>
                <View style={styles.questInfoItem}>
                  <Text style={styles.questInfoIcon}>💰</Text>
                  <Text style={styles.questInfoText}>
                    {quest.rewardRSK} RSK
                  </Text>
                </View>
                <View style={styles.questInfoItem}>
                  <Text style={styles.questInfoIcon}>⏱️</Text>
                  <Text style={styles.questInfoText}>
                    {quest.duration}
                  </Text>
                </View>
                <View style={styles.questInfoItem}>
                  <Text style={styles.questInfoIcon}>👥</Text>
                  <Text style={styles.questInfoText}>
                    {quest.applicants} candidatos
                  </Text>
                </View>
              </View>

              {/* Skills Tags */}
              <View style={styles.skillsContainer}>
                {quest.skills.slice(0, 3).map((skill, index) => (
                  <View key={index} style={styles.skillTag}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
                {quest.skills.length > 3 && (
                  <View style={styles.skillTag}>
                    <Text style={styles.skillText}>
                      +{quest.skills.length - 3}
                    </Text>
                  </View>
                )}
              </View>

              {/* Action Button */}
              <TouchableOpacity
                style={styles.acceptButton}
                onPress={() => handleAcceptQuest(quest)}
              >
                <Text style={styles.acceptButtonText}>
                  Aceitar Quest →
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))
        )}

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
    backgroundColor: '#6366F1',
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
    color: '#E0E7FF',
  },
  filterToggle: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 8,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  filterToggleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6366F1',
  },
  filtersContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  filterItem: {
    marginBottom: 16,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  pickerContainer: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    color: '#1F2937',
  },
  clearFiltersButton: {
    backgroundColor: '#EF4444',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  clearFiltersText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  questsList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  questCard: {
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
  questHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  questCategory: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  questCategoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6366F1',
  },
  questDifficulty: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  questDifficultyText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  questTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  questDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    lineHeight: 20,
  },
  questInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  questInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questInfoIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  questInfoText: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  skillTag: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    fontSize: 12,
    color: '#4B5563',
  },
  acceptButton: {
    backgroundColor: '#6366F1',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 40,
  },
  emptyStateButton: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  emptyStateButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default QuestsScreen;
