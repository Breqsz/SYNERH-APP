
/**
 * SYNERH Mobile - OpenAI Service
 * Integração com API OpenAI para recomendações personalizadas de IA
 * 
 * Global Solution 2025 - FIAP
 * Disciplina: Mobile Development and IOT
 */

import OpenAI from 'openai';

// Configuração da API OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'sk-demo-key',
  dangerouslyAllowBrowser: true // Necessário para uso em React Native
});

/**
 * Gerar recomendações personalizadas de cursos e quests
 * @param {object} userProfile - Perfil do usuário
 * @returns {Promise} - Retorna recomendações da IA
 */
export const generateRecommendations = async (userProfile) => {
  try {
    const { name, skills, interests, experienceLevel, rskBalance, reputation } = userProfile;

    const prompt = `
Você é um consultor de carreira especializado em IA para a plataforma SYNERH, 
uma rede profissional descentralizada focada nas profissões do futuro.

Perfil do usuário:
- Nome: ${name}
- Habilidades: ${skills?.join(', ') || 'Não informadas'}
- Interesses: ${interests?.join(', ') || 'Não informados'}
- Nível de experiência: ${experienceLevel || 'iniciante'}
- Saldo de tokens RSK: ${rskBalance}
- Reputação: ${reputation}/5.0

Com base neste perfil, gere recomendações personalizadas:

1. **3 Quests/Trabalhos recomendados**: Projetos ou trabalhos freelance que se adequam ao perfil
2. **3 Cursos de requalificação**: Cursos para desenvolver novas habilidades para as profissões do futuro
3. **Insights de carreira**: Breve análise do perfil e sugestões de desenvolvimento

Formato da resposta: JSON estruturado
{
  "quests": [
    {
      "title": "Título da quest",
      "description": "Descrição breve",
      "reason": "Por que esta quest é recomendada",
      "requiredSkills": ["skill1", "skill2"],
      "estimatedReward": 50
    }
  ],
  "courses": [
    {
      "title": "Título do curso",
      "description": "Descrição breve",
      "reason": "Por que este curso é recomendado",
      "duration": "4 semanas",
      "category": "Categoria"
    }
  ],
  "insights": "Análise do perfil e sugestões"
}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Você é um consultor de carreira especializado em IA. Responda sempre em JSON válido."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1500
    });

    const responseText = completion.choices[0].message.content;
    
    // Tentar fazer parse da resposta JSON
    try {
      const recommendations = JSON.parse(responseText);
      return {
        success: true,
        data: recommendations
      };
    } catch (parseError) {
      // Se falhar o parse, retornar recomendações mockadas
      console.warn('Falha ao fazer parse da resposta da IA, usando dados mockados');
      return getMockRecommendations(userProfile);
    }

  } catch (error) {
    console.error('Erro ao gerar recomendações com OpenAI:', error);
    
    // Em caso de erro, retornar recomendações mockadas
    return getMockRecommendations(userProfile);
  }
};

/**
 * Recomendações mockadas (fallback)
 * @param {object} userProfile - Perfil do usuário
 * @returns {object} - Recomendações mockadas
 */
const getMockRecommendations = (userProfile) => {
  return {
    success: true,
    data: {
      quests: [
        {
          title: "Desenvolvimento de Dashboard Web3",
          description: "Criar interface para visualização de dados blockchain",
          reason: "Combina suas habilidades técnicas com tecnologias emergentes",
          requiredSkills: ["React", "Web3", "JavaScript"],
          estimatedReward: 150
        },
        {
          title: "Consultoria em Transformação Digital",
          description: "Auxiliar empresa na migração para sistemas cloud",
          reason: "Boa oportunidade para ganhar experiência e reputação",
          requiredSkills: ["Cloud Computing", "Gestão de Projetos"],
          estimatedReward: 200
        },
        {
          title: "Criação de Conteúdo sobre IA",
          description: "Produzir artigos e tutoriais sobre Inteligência Artificial",
          reason: "Área em alta demanda com baixa barreira de entrada",
          requiredSkills: ["Comunicação", "Pesquisa", "IA"],
          estimatedReward: 80
        }
      ],
      courses: [
        {
          title: "Fundamentos de Blockchain e Web3",
          description: "Aprenda os conceitos essenciais de tecnologia blockchain",
          reason: "Essencial para trabalhar na plataforma SYNERH e projetos Web3",
          duration: "6 semanas",
          category: "Tecnologia"
        },
        {
          title: "Inteligência Artificial Aplicada",
          description: "Como usar IA em projetos reais e automatização",
          reason: "IA é a habilidade mais demandada para profissões do futuro",
          duration: "8 semanas",
          category: "Inteligência Artificial"
        },
        {
          title: "Soft Skills para o Futuro do Trabalho",
          description: "Comunicação, liderança e adaptabilidade",
          reason: "Habilidades interpessoais são cruciais no trabalho remoto",
          duration: "4 semanas",
          category: "Desenvolvimento Pessoal"
        }
      ],
      insights: `Olá ${userProfile.name}! Seu perfil mostra grande potencial para as profissões do futuro. 
      Com uma reputação de ${userProfile.reputation}/5.0, você está no caminho certo. 
      Recomendo focar em: 1) Desenvolver habilidades em Web3 e blockchain, 2) Construir portfólio com projetos práticos, 
      3) Aumentar sua rede na plataforma SYNERH aceitando quests menores inicialmente.`
    }
  };
};

/**
 * Gerar dicas rápidas personalizadas
 * @param {string} context - Contexto da dica
 * @returns {Promise} - Retorna dica da IA
 */
export const generateQuickTip = async (context) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Dê uma dica rápida e motivacional sobre: ${context}. Máximo 2 frases.`
        }
      ],
      temperature: 0.8,
      max_tokens: 100
    });

    return {
      success: true,
      tip: completion.choices[0].message.content
    };
  } catch (error) {
    console.error('Erro ao gerar dica:', error);
    return {
      success: false,
      tip: "Continue aprendendo e se desenvolvendo para as profissões do futuro! 🚀"
    };
  }
};

export default { generateRecommendations, generateQuickTip };
