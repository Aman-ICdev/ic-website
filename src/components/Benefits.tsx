import { DollarSign, Users, MapPin, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Train For Free",
    description: "Start training without paying any upfront costs. Get instant feedback on your mechanics and form."
  },
  {
    icon: Users,
    title: "Your Plan Adapts With You",
    description: "Our AI-powered system creates a personalized training plan that evolves as you improve and reach new goals."
  },
  {
    icon: MapPin,
    title: "Train Anywhere, Anytime",
    description: "Whether you're at home, at the park, or traveling—your personalized training plan is always accessible."
  },
  {
    icon: MessageCircle,
    title: "Instant Feedback, Every Rep",
    description: "Never train alone again. Get instant feedback on every rep so you can make adjustments and improve faster."
  }
];

export function Benefits() {
  return (
    <div className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-white text-4xl lg:text-5xl mb-16">
          Why You Should Join
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white space-y-4 hover:bg-white/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl">{benefit.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
