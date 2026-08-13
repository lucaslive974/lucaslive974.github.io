import type { ITranslationDictionary } from '../../../core/domain/interfaces/ITranslationDictionary';

export const en: ITranslationDictionary = {
  nav: {
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    repos: 'Repositories',
    about: 'About',
  },
  hero: {
    greeting: 'Hi, I am',
    title: 'Lucas Ribeiro',
    subtitle: 'Software Engineer. Focused on systems-oriented development, rendering engines, and full-stack solutions.',
  },
  experience: {
    title: 'Experience & Open Source',
    oss: {
      title: 'LLVM-Project / Clang',
      role: 'Open Source Contributor',
      period: '2026 - Present',
      description: 'Contributed to ClangIR (MLIR) and implemented X86 builtin instructions (movnti, vperm2f128, pslldqi).',
    },
    work: {
      title: 'Viação Anchieta',
      role: 'IT Analyst',
      period: 'Past',
      description: 'Designed multi-sector BI dashboards and developed full-stack integration workflows.',
    },
  },
  skills: {
    title: 'Stack & Skills',
    proficient: 'Proficient: C++, Git, JavaScript, TypeScript, Node, C.',
    familiar: 'Familiar: Python, React, Docker.',
    advancedGitTitle: 'Advanced Git & CI/CD',
    advancedGitDesc: 'Advanced Git mastery, secure repository management, SSH keys, and seamless CI/CD pipeline integrations.',
    dockerTitle: 'Docker & Containerization',
    dockerDesc: 'Strong expertise in Docker, writing optimized Dockerfiles, multi-stage builds, and orchestrating containerized environments.',
  },
  projects: {
    title: 'Titan Projects',
    items: {
      orionGl: {
        name: 'OrionGL',
        description: 'C++ graphics engine written from scratch for OpenGL and computer graphics studies. The engine\'s building blocks are built on OOP (vertices, indices, textures, models, and programs). The windowing and model loading systems feature an abstraction interface that uses the Pimpl idiom to hide third-party implementation details.',
        features: [
          'Real-time dynamic lighting',
          'Complex 3D model loading',
          'Pimpl architecture for dependency abstraction',
        ],
        todo: 'Planned: Animations, full scenes, and physics simulation.',
        url: 'https://github.com/lucaslive974/OrionGL',
        tags: ['C++', 'OpenGL', 'GLFW', 'Assimp'],
      },
      bonfire: {
        name: 'Bonfire',
        description: 'The most web-focused application in my portfolio. It features a REST API backend built with Flask and consumed by a Next.js frontend. The application is fully containerized (Docker) and includes server-side logging, database migrations with Alembic, and an auth system abstracted behind an interface to allow for future alternative authentication methods.',
        features: [
          'Next.js Frontend with Playwright E2E testing',
          'Flask REST API Backend (originally raw SQL, now using Alembic)',
          'External Authentication via Keycloak',
          'Abstracted Auth Interface for extensibility',
        ],
        todo: 'Planned: RBAC Authentication, CRUD expansion, and extra file handling features.',
        tags: ['Next.js', 'Flask', 'Keycloak', 'Docker', 'Playwright'],
      },
      gaia: {
        name: 'Gaia (PyIngestion)',
        description: 'A versatile and robust document data extraction system designed to retrieve structured key-value pair records from text and files. It structures any document type and allows transforming them into RAG pipelines.',
        features: [
          'Modular architecture with extensible parser interfaces',
          'Fast native text extraction',
          'Support for multiple input types and outputs',
          'Packaged as a Python library and CLI tool',
        ],
        todo: 'Planned: Expansion to new document types, transforms, and new output adapters.',
        url: 'https://github.com/lucaslive974/Gaia',
        tags: ['Python', 'Data Extraction', 'CLI', 'RAG'],
      },
      codeX: {
        name: 'CodeX',
        description: 'CLI tool and library for Base64 and HEX encoding/decoding (file input, directory recursion, MIME type detection).',
        tags: ['C++', 'CLI', 'Cryptography'],
      },
    },
  },
  repos: {
    title: 'Dynamic Repositories',
    viewOnGithub: 'View on GitHub',
  },
  about: {
    title: 'About Me',
    education: 'B.Eng. in Software Engineering from Unicesumar (2024) and CS50x from HarvardX (2026).',
    personal: 'Away from the keyboard, I enjoy challenging myself with things like chess and getting lost in fantasy shows.',
  },
};
