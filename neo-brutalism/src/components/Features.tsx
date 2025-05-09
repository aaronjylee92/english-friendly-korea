import React from 'react';
import { Volume2, Bell, Target, UserCheck } from 'lucide-react';

const featureData = [
  {
    icon: <Volume2 size={36} />,
    title: "LOUD & CLEAR",
    description: "Notifications that cut through the noise with brutal honesty and zero sugar-coating."
  },
  {
    icon: <Bell size={36} />,
    title: "NO SNOOZING",
    description: "Try to ignore us. We dare you. YELLR gets more persistent the longer you procrastinate."
  },
  {
    icon: <Target size={36} />,
    title: "CUSTOM INTENSITY",
    description: "Choose your verbal punishment level, from 'Slightly Annoyed Friend' to 'Full Drill Sergeant'."
  },
  {
    icon: <UserCheck size={36} />,
    title: "IT WORKS",
    description: "91% of users report completing more tasks after getting yelled at by our AI."
  }
];

const FeatureCard = ({ feature, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className={`bg-white border-4 border-black p-6 shadow-brutal flex flex-col h-full
        ${isEven ? 'transform -rotate-1' : 'transform rotate-1'}`}
    >
      <div className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4
        ${isEven ? 'bg-yellow-400' : 'bg-pink-400'}`}
      >
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-800">{feature.description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-100 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-4 bg-black"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-black text-white px-4 py-2 inline-block">WHY USE YELLR?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;