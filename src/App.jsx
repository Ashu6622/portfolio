import React, { Suspense } from 'react';
import Hero from './components/Hero';
import './styles/App.css';

const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="app">
      <Hero />
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;