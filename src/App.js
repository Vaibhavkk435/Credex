import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ResourceManagement from './components/ResourceManagement';
import Solutions from './components/Solutions';
import Scale from './components/Scale';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CTASection from './components/CTASection';

const App = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="relative bg-dark-gradient">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <ResourceManagement />
          <Solutions />
          <Scale />
          <CTASection />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App; 