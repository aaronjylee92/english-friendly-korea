import React from 'react';
import { CheckCircle2, AlertTriangle, Megaphone } from 'lucide-react';

const steps = [
  {
    icon: <CheckCircle2 size={32} className="text-white" />,
    title: "SET YOUR GOALS",
    description: "Tell YELLR what you're trying to accomplish and when you need to do it."
  },
  {
    icon: <AlertTriangle size={32} className="text-white" />,
    title: "MISS YOUR TARGETS",
    description: "Go ahead, try to slack off. We dare you. YELLR is watching."
  },
  {
    icon: <Megaphone size={32} className="text-white" />,
    title: "GET YELLED AT",
    description: "Enjoy a personalized verbal beatdown that will motivate you like nothing else."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-yellow-400 px-4 py-2 inline-block transform -rotate-1">
            HOW IT WORKS
          </span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col relative">
              {/* Step number */}
              <div className="absolute -top-6 -left-2 w-12 h-12 bg-white border-4 border-black rounded-full flex items-center justify-center font-bold text-xl">
                {index + 1}
              </div>
              
              {/* Step card */}
              <div className={`flex-1 border-4 border-black p-6 bg-white transform ${
                index % 2 === 0 ? 'rotate-1' : '-rotate-1'
              } shadow-brutal flex flex-col h-full`}>
                <div className="mb-4 w-16 h-16 rounded-full bg-black flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-800">{step.description}</p>
              </div>
              
              {/* Connector (not for the last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 border-t-4 border-r-4 border-black transform rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom quote */}
        <div className="mt-16 max-w-2xl mx-auto bg-pink-400 border-4 border-black p-6 transform -rotate-1 shadow-brutal">
          <p className="text-xl font-bold italic text-center">
            "I've never been so productively insulted in my life. 5 stars!"
          </p>
          <p className="text-right mt-2 font-medium">— Satisfied User</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;