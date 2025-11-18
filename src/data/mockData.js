/**
 * SYNERH Mobile - Mock Data
 * Dados mockados para simular integração futura com backend SOA
 * 
 * Global Solution 2025 - FIAP
 * Disciplina: Mobile Development and IOT
 */

/**
 * Quests/Trabalhos disponíveis na plataforma
 * Simulam contratos inteligentes na blockchain Solana
 */
export const mockQuests = [
  {
    id: 'quest-001',
    title: 'Desenvolvimento de Smart Contract DeFi',
    description: 'Criar smart contract para protocolo de empréstimos descentralizados usando Solana/Rust. Experiência com Web3 necessária.',
    rewardRSK: 250,
    difficulty: 'Avançado',
    category: 'Blockchain',
    duration: '2-3 semanas',
    skills: ['Rust', 'Solana', 'Smart Contracts', 'DeFi'],
    client: 'DeFi Protocol Inc.',
    applicants: 12,
    status: 'open',
    postedDate: '2025-11-10'
  },
  {
    id: 'quest-002',
    title: 'Design de Interface Web3',
    description: 'Criar UI/UX moderna para aplicativo de carteira cripto. Foco em usabilidade e acessibilidade para usuários iniciantes.',
    rewardRSK: 180,
    difficulty: 'Intermediário',
    category: 'Design',
    duration: '1-2 semanas',
    skills: ['UI/UX', 'Figma', 'Web3', 'Design Thinking'],
    client: 'CryptoWallet Solutions',
    applicants: 8,
    status: 'open',
    postedDate: '2025-11-11'
  },
  {
    id: 'quest-003',
    title: 'Consultoria em Cibersegurança IoT',
    description: 'Auditar sistema IoT de empresa smart home. Identificar vulnerabilidades e propor soluções de segurança.',
    rewardRSK: 320,
    difficulty: 'Avançado',
    category: 'Cybersecurity',
    duration: '3-4 semanas',
    skills: ['Cibersegurança', 'IoT', 'Pentesting', 'Network Security'],
    client: 'SmartHome Tech',
    applicants: 5,
    status: 'open',
    postedDate: '2025-11-09'
  },
  {
    id: 'quest-004',
    title: 'Criação de Conteúdo: Guia Web3 para Iniciantes',
    description: 'Escrever série de artigos educativos sobre blockchain, NFTs e metaverso. 5 artigos de 1500 palavras cada.',
    rewardRSK: 120,
    difficulty: 'Iniciante',
    category: 'Conteúdo',
    duration: '2 semanas',
    skills: ['Redação', 'Web3', 'Pesquisa', 'SEO'],
    client: 'Web3 Education Hub',
    applicants: 15,
    status: 'open',
    postedDate: '2025-11-12'
  },
  {
    id: 'quest-005',
    title: 'Desenvolvimento de API REST para Metaverso',
    description: 'Construir API backend para gerenciar assets e transações em plataforma de metaverso. Integração com blockchain.',
    rewardRSK: 280,
    difficulty: 'Intermediário',
    category: 'Backend',
    duration: '3 semanas',
    skills: ['Node.js', 'REST API', 'MongoDB', 'Web3.js'],
    client: 'Metaverse Builders',
    applicants: 10,
    status: 'open',
    postedDate: '2025-11-08'
  },
  {
    id: 'quest-006',
    title: 'Análise de Dados: Tendências NFT 2025',
    description: 'Analisar dados do mercado NFT e criar relatório com insights e previsões. Uso de Python e ferramentas de data science.',
    rewardRSK: 200,
    difficulty: 'Intermediário',
    category: 'Data Science',
    duration: '2 semanas',
    skills: ['Python', 'Data Analysis', 'Pandas', 'Visualização'],
    client: 'NFT Analytics Co.',
    applicants: 7,
    status: 'open',
    postedDate: '2025-11-11'
  },
  {
    id: 'quest-007',
    title: 'Tradução Técnica: Whitepaper Blockchain',
    description: 'Traduzir whitepaper técnico de projeto blockchain do inglês para português. Conhecimento técnico de cripto necessário.',
    rewardRSK: 90,
    difficulty: 'Iniciante',
    category: 'Tradução',
    duration: '1 semana',
    skills: ['Inglês', 'Português', 'Blockchain', 'Tradução Técnica'],
    client: 'Global Crypto Project',
    applicants: 20,
    status: 'open',
    postedDate: '2025-11-13'
  },
  {
    id: 'quest-008',
    title: 'Mentoria: Transição de Carreira para Web3',
    description: 'Mentorar 5 profissionais em transição de carreira para área Web3. Sessões semanais de 1h por 4 semanas.',
    rewardRSK: 150,
    difficulty: 'Intermediário',
    category: 'Educação',
    duration: '4 semanas',
    skills: ['Mentoria', 'Web3', 'Comunicação', 'Carreira'],
    client: 'SYNERH Learning Pool',
    applicants: 6,
    status: 'open',
    postedDate: '2025-11-10'
  }
];

/**
 * Cursos de requalificação profissional (Learning Pool)
 * Preparação para as profissões do futuro
 */
export const mockCourses = [
  {
    id: 'course-001',
    title: 'Fundamentos de Blockchain e Criptomoedas',
    description: 'Aprenda os conceitos essenciais de blockchain, Bitcoin, Ethereum e outras criptomoedas. Curso completo para iniciantes.',
    area: 'Blockchain',
    duration: '6 semanas',
    level: 'Iniciante',
    instructor: 'Prof. Ana Silva',
    modules: 12,
    enrolledStudents: 1250,
    rating: 4.8,
    costRSK: 50,
    skills: ['Blockchain', 'Bitcoin', 'Ethereum', 'Criptografia'],
    certificate: true
  },
  {
    id: 'course-002',
    title: 'Desenvolvimento de Smart Contracts com Solidity',
    description: 'Domine a linguagem Solidity e crie seus próprios smart contracts na blockchain Ethereum. Projetos práticos inclusos.',
    area: 'Desenvolvimento',
    duration: '8 semanas',
    level: 'Intermediário',
    instructor: 'Prof. Carlos Mendes',
    modules: 16,
    enrolledStudents: 850,
    rating: 4.9,
    costRSK: 120,
    skills: ['Solidity', 'Smart Contracts', 'Ethereum', 'Web3'],
    certificate: true
  },
  {
    id: 'course-003',
    title: 'Cibersegurança para Internet das Coisas (IoT)',
    description: 'Proteja dispositivos IoT contra ameaças. Aprenda técnicas de pentesting e segurança de redes IoT.',
    area: 'Cibersegurança',
    duration: '10 semanas',
    level: 'Avançado',
    instructor: 'Prof. Roberto Ferreira',
    modules: 20,
    enrolledStudents: 620,
    rating: 4.7,
    costRSK: 150,
    skills: ['IoT', 'Cibersegurança', 'Pentesting', 'Network Security'],
    certificate: true
  },
  {
    id: 'course-004',
    title: 'Design de Experiências para Metaverso',
    description: 'Crie experiências imersivas para metaverso. UX/UI, realidade virtual e design 3D para mundos virtuais.',
    area: 'Design',
    duration: '7 semanas',
    level: 'Intermediário',
    instructor: 'Profa. Mariana Costa',
    modules: 14,
    enrolledStudents: 940,
    rating: 4.6,
    costRSK: 100,
    skills: ['UX/UI', 'Metaverso', '3D Design', 'VR'],
    certificate: true
  },
  {
    id: 'course-005',
    title: 'Inteligência Artificial e Machine Learning',
    description: 'Introdução prática a IA e ML. Python, TensorFlow, redes neurais e projetos reais de machine learning.',
    area: 'Inteligência Artificial',
    duration: '12 semanas',
    level: 'Intermediário',
    instructor: 'Prof. Lucas Oliveira',
    modules: 24,
    enrolledStudents: 1500,
    rating: 4.9,
    costRSK: 180,
    skills: ['Python', 'TensorFlow', 'Machine Learning', 'IA'],
    certificate: true
  },
  {
    id: 'course-006',
    title: 'Tokenização de Ativos e DeFi',
    description: 'Aprenda sobre finanças descentralizadas, tokenização de ativos reais e criação de protocolos DeFi.',
    area: 'Finanças',
    duration: '6 semanas',
    level: 'Intermediário',
    instructor: 'Profa. Patricia Rocha',
    modules: 12,
    enrolledStudents: 780,
    rating: 4.5,
    costRSK: 90,
    skills: ['DeFi', 'Tokenização', 'Finanças', 'Smart Contracts'],
    certificate: true
  },
  {
    id: 'course-007',
    title: 'Computação Quântica: Introdução',
    description: 'Explore os fundamentos da computação quântica e suas aplicações futuras. Teoria e prática com simuladores.',
    area: 'Tecnologia',
    duration: '8 semanas',
    level: 'Avançado',
    instructor: 'Prof. André Quantum',
    modules: 16,
    enrolledStudents: 420,
    rating: 4.8,
    costRSK: 200,
    skills: ['Computação Quântica', 'Física', 'Algoritmos'],
    certificate: true
  },
  {
    id: 'course-008',
    title: 'Soft Skills para o Futuro do Trabalho',
    description: 'Desenvolva habilidades essenciais: comunicação, liderança, pensamento crítico e adaptabilidade para trabalho remoto.',
    area: 'Desenvolvimento Pessoal',
    duration: '4 semanas',
    level: 'Iniciante',
    instructor: 'Profa. Juliana Campos',
    modules: 8,
    enrolledStudents: 2100,
    rating: 4.7,
    costRSK: 40,
    skills: ['Comunicação', 'Liderança', 'Adaptabilidade', 'Trabalho Remoto'],
    certificate: true
  }
];

/**
 * Categorias de quests
 */
export const questCategories = [
  'Todas',
  'Blockchain',
  'Design',
  'Cybersecurity',
  'Conteúdo',
  'Backend',
  'Data Science',
  'Tradução',
  'Educação'
];

/**
 * Níveis de dificuldade
 */
export const difficultyLevels = [
  'Todos',
  'Iniciante',
  'Intermediário',
  'Avançado'
];

/**
 * Estatísticas do usuário (mockado)
 */
export const mockUserStats = {
  totalQuests: 15,
  completedQuests: 12,
  activeQuests: 3,
  totalEarned: 1840,
  averageRating: 4.8,
  completionRate: 80,
  rank: 'Gold',
  badges: [
    { name: 'Early Adopter', icon: '🌟' },
    { name: 'Quick Learner', icon: '⚡' },
    { name: 'Team Player', icon: '🤝' }
  ]
};

/**
 * Notificações mockadas
 */
export const mockNotifications = [
  {
    id: 'notif-001',
    type: 'quest_accepted',
    message: 'Sua proposta para "Design de Interface Web3" foi aceita!',
    timestamp: '2025-11-13T10:30:00',
    read: false
  },
  {
    id: 'notif-002',
    type: 'payment',
    message: 'Você recebeu 180 RSK tokens pela conclusão da quest',
    timestamp: '2025-11-12T15:45:00',
    read: false
  },
  {
    id: 'notif-003',
    type: 'course',
    message: 'Novo curso disponível: "IA Generativa para Desenvolvedores"',
    timestamp: '2025-11-11T09:00:00',
    read: true
  }
];

export default {
  mockQuests,
  mockCourses,
  questCategories,
  difficultyLevels,
  mockUserStats,
  mockNotifications
};
