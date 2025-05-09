import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-bold text-2xl tracking-tighter">
          <span className="bg-black text-white px-2 py-1 -rotate-1 inline-block">YELLR</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="font-medium hover:underline decoration-4 decoration-yellow-400 underline-offset-4">Features</a>
          <a href="#how-it-works" className="font-medium hover:underline decoration-4 decoration-yellow-400 underline-offset-4">How it Works</a>
          <a href="#pricing" className="font-medium hover:underline decoration-4 decoration-yellow-400 underline-offset-4">Pricing</a>
          <a 
            href="#download" 
            className="bg-black text-white px-4 py-2 font-bold transform rotate-1 hover:rotate-0 transition-transform border-2 border-black hover:bg-yellow-400 hover:text-black"
          >
            Download
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b-4 border-black">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="font-medium py-2 border-b-2 border-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="font-medium py-2 border-b-2 border-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#pricing" 
              className="font-medium py-2 border-b-2 border-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#download" 
              className="bg-black text-white px-4 py-2 font-bold inline-block w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;