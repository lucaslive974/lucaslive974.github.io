import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { GithubRepoCarousel } from './components/sections/GithubRepoCarousel';
import { About } from './components/sections/About';
import { ContactSection } from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <GithubRepoCarousel />
        <About />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
