import React from 'react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: "FREE TRIAL",
    price: "$0",
    period: "7 days",
    description: "Try getting yelled at for free",
    features: [
      { text: "Basic AI yelling", included: true },
      { text: "3 goal reminders daily", included: true },
      { text: "Standard voice only", included: true },
      { text: "Limited insult variety", included: true },
      { text: "Custom insult themes", included: false },
      { text: "Progressive intensity", included: false },
    ],
    buttonText: "Start Free Trial",
    highlighted: false
  },
  {
    name: "FULL YELLR",
    price: "$9.99",
    period: "per month",
    description: "The complete verbal beatdown",
    features: [
      { text: "Advanced AI yelling", included: true },
      { text: "Unlimited reminders", included: true },
      { text: "5 voice options", included: true },
      { text: "Vast insult library", included: true },
      { text: "Custom insult themes", included: true },
      { text: "Progressive intensity", included: true },
    ],
    buttonText: "Get Started",
    highlighted: true
  }
];

const PricingCard = ({ plan }) => {
  return (
    <div className={`border-4 border-black p-6 ${
      plan.highlighted ? 'bg-yellow-400 transform -rotate-1' : 'bg-white transform rotate-1'
    } shadow-brutal flex flex-col h-full`}>
      <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{plan.price}</span>
        <span className="text-sm ml-1">{plan.period}</span>
      </div>
      <p className="mb-6 text-sm">{plan.description}</p>
      
      <ul className="mb-8 flex-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="mb-3 flex items-start">
            {feature.included ? (
              <Check size={20} className="text-green-600 mr-2 flex-shrink-0" />
            ) : (
              <X size={20} className="text-red-600 mr-2 flex-shrink-0" />
            )}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <button className={`${
        plan.highlighted 
          ? 'bg-black text-white hover:bg-white hover:text-black' 
          : 'bg-white text-black border-2 border-black hover:bg-gray-100'
      } py-3 px-6 font-bold text-center transition-colors duration-300`}>
        {plan.buttonText}
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-100 relative">
      <div className="absolute top-0 left-0 w-full h-4 bg-black"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-black text-white px-4 py-2 inline-block">PRICING</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="flex-1">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="max-w-2xl mx-auto text-lg">
            Not sure if you want to be yelled at? Testimonials show that our users are 87% more likely to complete tasks with YELLR than with traditional reminder apps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;