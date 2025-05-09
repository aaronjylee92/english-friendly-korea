import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t-4 border-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-3xl tracking-tighter mb-2">
              <span className="bg-black text-white px-2 py-1 -rotate-1 inline-block">YELLR</span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              The accountability app that doesn't let you off the hook. Ever.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="font-bold mb-3 text-sm uppercase">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-600 hover:text-black">Features</a></li>
                <li><a href="#pricing" className="text-gray-600 hover:text-black">Pricing</a></li>
                <li><a href="#download" className="text-gray-600 hover:text-black">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 text-sm uppercase">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Terms</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 text-sm uppercase">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 sm:mb-0">
            © {new Date().getFullYear()} YELLR Inc. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-black">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;