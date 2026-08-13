import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { GithubRepoCarousel } from './components/sections/GithubRepoCarousel';
import { About } from './components/sections/About';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <GithubRepoCarousel />
        <About />
      </main>

      <Footer />
    </div>
  );
};

export default App;
