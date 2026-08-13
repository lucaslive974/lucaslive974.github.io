# Lucas Ribeiro - Software Engineer Portfolio

![Portfolio Preview](./public/my_photo.jpg)

Welcome to the source code of my personal portfolio website! This project is a highly optimized, responsive Single Page Application (SPA) designed to showcase my skills, experience, and flagship open-source projects.

## 🚀 Live Demo
Visit the live site: [https://lucaslive974.github.io](https://lucaslive974.github.io) *(Replace with actual URL if different)*

## ✨ Features

- **Clean Architecture & SOLID Principles**: The codebase is strictly organized into Domain, Infrastructure, and Presentation layers, ensuring modularity, scalability, and strict separation of concerns.
- **Dynamic GitHub Repositories**: Fetches, filters (excluding forks), and sorts my GitHub repositories in real-time, displayed in a native CSS horizontal snap carousel.
- **Internationalization (i18n)**: Fully supported English (EN) and Portuguese (PT) context-driven translation system with zero external i18n dependencies.
- **Exclusive Dark Mode**: Carefully crafted color palettes, CSS filters, and modern typography (Fira Code) tailored specifically for a premium dark mode experience.
- **Responsive & Accessible**: Native CSS `snap-x` mechanics, semantic HTML, and fluid layouts built with Tailwind CSS.

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript (Strict Mode)
- **Build Tool**: Vite (Lightning fast HMR & optimizations)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Hosting**: GitHub Pages

## 📐 Architecture Overview

```text
src/
├── core/
│   ├── domain/           # Interfaces and Types (e.g., IGithubService, IHttpClient)
│   └── infrastructure/   # Concrete Implementations (e.g., GithubService, FetchHttpClient)
├── presentation/
│   ├── components/       # UI Components (Common, Layout, Sections)
│   ├── context/          # React Contexts (I18nContext)
│   ├── hooks/            # Custom Hooks (useGithubRepos, useActiveSection)
│   ├── i18n/             # Translation Dictionaries (EN, PT)
│   ├── styles/           # Tailwind Entry & Base CSS
│   └── App.tsx           # Application Root
└── main.tsx
```

## ⚙️ Getting Started

To run this project locally, follow these steps:

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lucaslive974/lucaslive974.github.io.git
   ```

2. Navigate to the project directory:
   ```bash
   cd lucaslive974.github.io
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`.

### Build for Production
To generate a production-ready build:
```bash
npm run build
```
The optimized files will be output to the `dist/` directory.

## 🤝 Contact

- GitHub: [@lucaslive974](https://github.com/lucaslive974)
- LinkedIn: [lucas-ribeiro-lima40](https://linkedin.com/in/lucas-ribeiro-lima40)
- Discord: @lucasrl7

