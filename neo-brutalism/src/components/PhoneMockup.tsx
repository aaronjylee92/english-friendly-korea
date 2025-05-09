import React from 'react';

const PhoneMockup = () => {
  return (
    <div className="relative">
      {/* iPhone Frame */}
      <div className="w-[280px] h-[580px] bg-gray-800 rounded-[45px] p-3 border-[8px] border-black shadow-brutal">
        {/* Screen */}
        <div className="w-full h-full bg-red-600 rounded-[36px] overflow-hidden relative flex flex-col">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-10"></div>
          
          {/* App Interface */}
          <div className="flex-1 flex flex-col p-4 pt-10">
            {/* App Header */}
            <div className="text-white text-center mb-4">
              <h3 className="font-bold text-xl mb-1">YELLR</h3>
              <p className="text-sm opacity-80">Your Personal Drill Sergeant</p>
            </div>
            
            {/* App Content */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Angry Message */}
              <div className="bg-white rounded-lg p-4 border-4 border-black transform -rotate-2">
                <p className="font-bold text-lg text-black">
                  YOU CALL THAT A WORKOUT?! MY GRANDMA LIFTS MORE THAN YOU!!
                </p>
                <p className="text-sm text-gray-600 mt-2">Today, 9:41 AM</p>
              </div>
              
              {/* Missed Goal */}
              <div className="bg-black text-white rounded-lg p-4 transform rotate-1">
                <p className="font-bold">MISSED GOAL!</p>
                <p className="text-sm mt-1">10,000 steps - you only did 3,421</p>
                <div className="mt-2 bg-red-800 h-3 rounded-full overflow-hidden">
                  <div className="bg-yellow-400 h-full" style={{ width: '34%' }}></div>
                </div>
              </div>
              
              {/* Angry Message */}
              <div className="bg-yellow-400 rounded-lg p-4 border-4 border-black transform rotate-1">
                <p className="font-bold text-lg">
                  IS THAT ALL YOU GOT?! GET BACK TO WORK, SLACKER!!
                </p>
                <p className="text-sm text-black opacity-70 mt-2">Today, 2:30 PM</p>
              </div>
            </div>
            
            {/* App Controls */}
            <div className="mt-4 flex justify-between">
              <button className="bg-white py-2 px-4 rounded-lg font-bold text-sm border-2 border-black">
                Reply
              </button>
              <button className="bg-yellow-400 py-2 px-4 rounded-lg font-bold text-sm border-2 border-black">
                Set Goals
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;