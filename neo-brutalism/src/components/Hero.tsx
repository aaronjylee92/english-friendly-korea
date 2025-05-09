import React from 'react';
import PhoneMockup from './PhoneMockup';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 -left-20 w-40 h-40 bg-pink-400 rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side (Text) */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="inline-block transform -rotate-2 bg-black text-white px-4 py-2 mb-2">AN AI THAT</span>
              <br />
              <span className="inline-block transform rotate-1 bg-yellow-400 px-4 py-2 text-black">YELLS AT YOU</span>
            </h1>
            
            <p className="text-xl mb-8 max-w-md">
              Finally, accountability that's impossible to ignore. Meet your new digital drill sergeant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#download" 
                className="bg-black text-white px-6 py-3 text-lg font-bold flex items-center justify-center border-4 border-black hover:bg-yellow-400 hover:text-black transition-colors duration-300"
              >
                Get YELLR 
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a 
                href="#how-it-works" 
                className="px-6 py-3 text-lg font-bold border-4 border-black bg-white hover:bg-pink-100 transition-colors duration-300 flex items-center justify-center"
              >
                See How It Works
              </a>
            </div>
          </div>
          
          {/* Right side (Phone Mockup) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <PhoneMockup />
            </div>
            
            {/* Price Tag */}
            <div className="absolute -bottom-4 -left-4 md:bottom-12 md:-left-8 bg-white border-4 border-black py-2 px-4 rotate-12 shadow-brutal z-10">
              <p className="font-bold text-lg">$9.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;