import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen selection:bg-gold-500 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Workflow />
      </main>
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
