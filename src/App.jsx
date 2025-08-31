import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;