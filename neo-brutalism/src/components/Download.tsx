import React from 'react';
import { Apple, MessageSquare } from 'lucide-react';

const Download = () => {
  return (
    <section id="download" className="py-16 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-yellow-400 text-black px-4 py-2 inline-block transform rotate-1">
              READY TO GET YELLED AT?
            </span>
          </h2>
          
          <p className="text-xl mb-8">
            Download YELLR now and never miss another deadline.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="bg-white text-black border-4 border-white px-6 py-3 font-bold flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300"
            >
              <Apple size={24} className="mr-2" />
              App Store
            </a>
            <a 
              href="#" 
              className="bg-black text-white border-4 border-white px-6 py-3 font-bold flex items-center justify-center hover:bg-pink-400 hover:text-black hover:border-pink-400 transition-colors duration-300"
            >
              <MessageSquare size={24} className="mr-2" />
              Contact Us
            </a>
          </div>
          
          <div className="mt-12 bg-white text-black p-6 max-w-md mx-auto transform -rotate-1 border-4 border-white">
            <p className="font-bold text-center">
              "YELLR kept me accountable when nothing else worked. It's like having a drill sergeant in your pocket."
            </p>
            <p className="text-right mt-2">— App Store Review</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;