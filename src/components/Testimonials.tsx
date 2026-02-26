import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    rating: 5,
    name: "Michael R.",
    date: "09/15/25",
    text: "This pitching program has completely transformed my mechanics. The daily drills are easy to follow and I've seen massive improvements in just 3 weeks!"
  },
  {
    rating: 5,
    name: "Jennifer S.",
    date: "10/02/25",
    text: "As a parent, I love the structured approach. The step-by-step plans keep my son motivated and the results speak for themselves. Best investment we've made!"
  },
  {
    rating: 5,
    name: "David K.",
    date: "11/10/25",
    text: "The Arm Care program is top notch. It's like having a professional strength coach available 24/7. My velocity has gone up significantly."
  },
  {
    rating: 5,
    name: "Sarah T.",
    date: "09/28/25",
    text: "I recommend the catching program to all my players. The progressive drills make coaching so much easier. Parents love seeing the structured development too!"
  },
  {
    rating: 5,
    name: "James P.",
    date: "11/15/25",
    text: "I've tried other apps, but none compare to Instacoach's programming. The plans adapt as I improve, and the routines are always challenging. Highly recommended!"
  },
  {
    rating: 5,
    name: "Emily C.",
    date: "10/12/25",
    text: "Amazing lifting program! The exercises are specific to baseball and help me see exactly what I need to work on. I've become stronger and more explosive."
  },
  {
    rating: 5,
    name: "Robert M.",
    date: "09/05/25",
    text: "Best hitting program I've used. The daily routines have helped me identify and fix bad habits I didn't even know I had. My contact rate has improved dramatically!"
  },
  {
    rating: 5,
    name: "Lisa K.",
    date: "11/01/25",
    text: "The fielding fundamentals program is incredible. Being able to track my consistency over time keeps me motivated. The drills are challenging but effective."
  },
  {
    rating: 5,
    name: "Chris B.",
    date: "10/20/25",
    text: "Game changer! The training programs are perfectly structured for in-season work. I've recommended this to my entire high school team."
  },
  {
    rating: 5,
    name: "Amanda T.",
    date: "11/18/25",
    text: "This app makes training fun and effective. The variety of drills in the hitting program keeps things interesting. Highly recommend to anyone serious about improvement!"
  },
  {
    rating: 5,
    name: "Marcus J.",
    date: "10/30/25",
    text: "The infield drills are next-level! I can finally see the proper footwork patterns and the program helped me master them in days."
  },
  {
    rating: 5,
    name: "Steve C.",
    date: "11/05/25",
    text: "As a high school coach, the team programs have been a game-changer. Players can follow the plans at home, and I can track everyone's progress in one place."
  },
  {
    rating: 5,
    name: "Tyler W.",
    date: "10/25/25",
    text: "I was skeptical at first but after one week of the throwing program, my arm felt great. The routines catch small details even my coach misses."
  },
  {
    rating: 5,
    name: "Rachel H.",
    date: "11/12/25",
    text: "The personalized training plans adapt to my schedule perfectly. Love that I can train anytime, anywhere and still get professional-level programming!"
  }
];

// Split testimonials into two rows
const row1 = testimonials.filter((_, index) => index % 2 === 0);
const row2 = testimonials.filter((_, index) => index % 2 === 1);

export function Testimonials() {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !scrollRef1.current || !scrollRef2.current) return;
      
      // Only apply on desktop
      if (window.innerWidth < 1024) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate when section enters and exits viewport
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const scrollRange = viewportHeight + sectionHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / scrollRange));
      
      // Apply horizontal scroll to both rows
      const maxScroll1 = scrollRef1.current.scrollWidth - scrollRef1.current.clientWidth;
      const maxScroll2 = scrollRef2.current.scrollWidth - scrollRef2.current.clientWidth;
      
      scrollRef1.current.scrollLeft = progress * maxScroll1;
      scrollRef2.current.scrollLeft = progress * maxScroll2;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderCard = (testimonial: typeof testimonials[0], index: number) => (
    <div 
      key={index}
      className="bg-gray-50 rounded-xl p-6 space-y-3 flex-shrink-0 w-[280px] lg:w-[320px]"
    >
      <div className="flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="text-sm text-gray-500">{testimonial.name}, {testimonial.date}</div>
      <p className="text-gray-700 leading-relaxed text-sm">
        {testimonial.text}
      </p>
    </div>
  );

  return (
    <div ref={containerRef} id="testimonials" className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Proven Results
          </h2>
          <div className="flex items-center justify-center gap-8 text-center">
            <div>
              <div className="text-4xl text-blue-600 mb-1">4.9</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-4xl text-blue-600 mb-1">1k+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop: Two rows with horizontal scroll triggered by vertical scroll */}
      <div className="hidden lg:block space-y-6">
        <div 
          ref={scrollRef1}
          className="flex gap-6 overflow-x-auto scrollbar-hide pl-6"
          style={{ scrollBehavior: 'auto' }}
        >
          {row1.map((testimonial, index) => renderCard(testimonial, index))}
        </div>
        <div 
          ref={scrollRef2}
          className="flex gap-6 overflow-x-auto scrollbar-hide pl-6"
          style={{ scrollBehavior: 'auto' }}
        >
          {row2.map((testimonial, index) => renderCard(testimonial, index))}
        </div>
      </div>

      {/* Mobile: Simple horizontal scroll with single row */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pl-6">
          {testimonials.map((testimonial, index) => renderCard(testimonial, index))}
        </div>
      </div>
    </div>
  );
}