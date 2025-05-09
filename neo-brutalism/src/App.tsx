import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Download from './components/Download';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="font-sans min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;