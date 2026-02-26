import phoneImage from "figma:asset/82f1fb08a75c6f14d148ddee4921d8b33f2e2c9d.png";
import popularProgramsImage from "figma:asset/193bf8295adcdc4badcdfc9c7401bdde90eda26b.png";
import followProgramImage from "figma:asset/11b9e55c64bb1420931c5c9aedd845d1a6c44a20.png";
import trackProgressImage from "figma:asset/a18c5ae4fdaaf4f9810339629c5893dd755bec52.png";
import { useState } from "react";

const steps = [
  {
    title: "Find the Right Program",
    description: "Get matched instantly—or browse and choose a program yourself."
  },
  {
    title: "Track Your Progress",
    description: "See your week, day, and progress at a glance."
  },
  {
    title: "Follow Your Program",
    description: "Each day is made up of short, swipeable videos that are easy to follow anywhere."
  }
];

export function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState(0);

  const getStepImage = () => {
    switch (selectedStep) {
      case 0:
        return popularProgramsImage;
      case 1:
        return trackProgressImage;
      case 2:
        return followProgramImage;
      default:
        return phoneImage;
    }
  };

  return (
    <div id="how-it-works" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl lg:text-5xl mb-16 text-gray-900">
          How It Works
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-sm">
              <img 
                src={getStepImage()} 
                alt="How Instacoach Works" 
                className="w-full h-auto drop-shadow-xl transition-opacity duration-300"
              />
            </div>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="space-y-3 cursor-pointer"
                onClick={() => setSelectedStep(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full ${selectedStep === index ? 'bg-blue-600' : 'bg-gray-300'} text-white flex items-center justify-center transition-colors`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className={`text-xl mb-2 ${selectedStep === index ? 'text-gray-900' : 'text-gray-500'} transition-colors`}>{step.title}</h3>
                    <p className={`leading-relaxed ${selectedStep === index ? 'text-gray-600' : 'text-gray-400'} transition-colors`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}