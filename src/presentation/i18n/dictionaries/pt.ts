import type { ITranslationDictionary } from '../../../core/domain/interfaces/ITranslationDictionary';

export const pt: ITranslationDictionary = {
  nav: {
    experience: 'Experiência',
    skills: 'Habilidades',
    projects: 'Projetos',
    repos: 'Repositórios',
    about: 'Sobre',
  },
  hero: {
    greeting: 'Olá, eu sou',
    title: 'Lucas Ribeiro',
    subtitle: 'Engenheiro de Software. Focado em desenvolvimento orientado a sistemas, engines de renderização e soluções full-stack.',
  },
  experience: {
    title: 'Experiência & Open Source',
    oss: {
      title: 'LLVM-Project / Clang',
      role: 'Contribuidor Open Source',
      period: '2026 - Presente',
      description: 'Contribuí para o ClangIR (MLIR) e implementei instruções builtin X86 (movnti, vperm2f128, pslldqi).',
    },
    work: {
      title: 'Viação Anchieta',
      role: 'Analista de TI',
      period: 'Anterior',
      description: 'Projetei dashboards de BI multissetoriais e desenvolvi fluxos de integração full-stack.',
    },
  },
  skills: {
    title: 'Stack & Habilidades',
    proficient: 'Proficiente: C++, Git, JavaScript, TypeScript, Node, C.',
    familiar: 'Familiar: Python, React, Docker.',
    advancedGitTitle: 'Git Avançado & CI/CD',
    advancedGitDesc: 'Domínio avançado de Git, gerenciamento seguro de repositórios, chaves SSH e integrações contínuas de pipeline CI/CD.',
    dockerTitle: 'Docker & Conteinerização',
    dockerDesc: 'Forte expertise em Docker, criação de Dockerfiles otimizados, multi-stage builds e orquestração de ambientes conteinerizados.',
  },
  projects: {
    title: 'Projetos Titã',
    items: {
      orionGl: {
        name: 'OrionGL',
        description: 'Motor C++ escrito do zero para estudos de OpenGL e computação gráfica. Os blocos básicos do motor são construídos sobre OOP (vértices, índices, texturas, modelos e programas). A parte de janela e carregamento de modelos possui uma interface de abstração que utiliza o idioma Pimpl para esconder detalhes de implementação de bibliotecas de terceiros.',
        features: [
          'Iluminação dinâmica em tempo real',
          'Carregamento de modelos complexos',
          'Arquitetura Pimpl para abstração de dependências',
        ],
        todo: 'Planejado: Animações, cenas completas e simulação física.',
        url: 'https://github.com/lucaslive974/OrionGL',
        tags: ['C++', 'OpenGL', 'GLFW', 'Assimp'],
      },
      bonfire: {
        name: 'Bonfire',
        description: 'A aplicação mais "web" do meu portfólio. Nela, implementei uma API REST no backend utilizando Flask, consumida no frontend com Next.js. É uma aplicação conteinerizada (Docker), com logging server-side, migrações com Alembic e autenticação externa via Keycloak. A camada de auth é abstraída por uma interface para permitir futuras implementações de novas formas de autenticação.',
        features: [
          'Frontend em Next.js com testes E2E via Playwright',
          'Backend REST API em Flask (iniciado com SQL puro, agora com Alembic)',
          'Autenticação externa robusta via Keycloak',
          'Interface de Auth abstraída visando extensibilidade',
        ],
        todo: 'Planejado: Autenticação RBAC, expansão do CRUD e tratamento extra de arquivos importados.',
        tags: ['Next.js', 'Flask', 'Keycloak', 'Docker', 'Playwright'],
      },
      gaia: {
        name: 'Gaia (PyIngestion)',
        description: 'Um sistema versátil e robusto de extração de dados de documentos, projetado para recuperar registros estruturados (chave-valor) de textos e arquivos. A ideia central é estruturar qualquer tipo de documento, permitindo até transformá-los em pipelines de RAG.',
        features: [
          'Arquitetura modular com interfaces de parser extensíveis',
          'Extração nativa super rápida de textos',
          'Suporte extensível a múltiplos tipos de input e output',
          'Empacotado como biblioteca Python e ferramenta CLI',
        ],
        todo: 'Planejado: Expansão para novos formatos de documentos, transforms e adaptadores de output.',
        url: 'https://github.com/lucaslive974/Gaia',
        tags: ['Python', 'Data Extraction', 'CLI', 'RAG'],
      },
      codeX: {
        name: 'CodeX',
        description: 'Ferramenta CLI e biblioteca para codificação/decodificação Base64 e HEX (entrada de arquivo, recursão de diretório, detecção de tipo MIME).',
        tags: ['C++', 'CLI', 'Cryptography'],
      },
    },
  },
  contact: {
    title: 'Contato',
    cta: 'Vamos construir algo juntos.',
    emailLabel: 'Email',
    phoneLabel: 'Telefone / WhatsApp',
    locationLabel: 'Localização',
    locationValue: 'Belo Horizonte, Minas Gerais',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
  repos: {
    title: 'Repositórios Dinâmicos',
    viewOnGithub: 'Ver no GitHub',
  },
  about: {
    title: 'Sobre Mim',
    education: { title: 'Formação', desc: 'Bacharelado em Engenharia de Software pela Unicesumar (2024) e CS50x pela HarvardX (2026).' },
    personal: { title: 'Além do código', desc: 'Longe do teclado, gosto de me desafiar com o xadrez e me perder em séries de fantasia.' },
  },
};
