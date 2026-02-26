import { Button } from "./ui/button";
import { ChevronDown, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import instacoachLogo from "figma:asset/8b8909b5f66610bd49e1bb93b8d763aa56b66c7f.png";
import qrCode from "figma:asset/0a3568284c7578b566007296d123818896e9599b.png";
import heroImg1 from "figma:asset/f2b53ceff548d798bb3afc1ae0125ee3817ae016.png";
import heroImg2 from "figma:asset/9a2bf452dc508d6eb896d3fdc23934fe8c67331d.png";
import heroImg3 from "figma:asset/9324dbb2e2f1e26d13e15104682fee9e7f2e5683.png";

const videos = [
  {
    title: "Tommy's Arm Care Program",
    category: "Pitching",
    coach: "Tommy O'Rourke",
    image: heroImg1,
    live: true,
    viewers: "1.8K"
  },
  {
    title: "The Complete Catchers Program",
    category: "Catching",
    coach: "Trey Newman",
    image: heroImg2,
    live: false,
    viewers: "1.2K"
  },
  {
    title: "A’s Complete Speed Program",
    category: "Speed",
    coach: "Rodney Green Jr",
    image: heroImg3,
    live: true,
    viewers: "856"
  }
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToHowItWorks = () => {
    document.getElementById('explore-programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getVideoStyle = (index: number) => {
    const diff = index - currentIndex;
    const absDiff = Math.abs(diff);
    
    if (absDiff > 2) return { display: 'none' };
    
    // Tighter spacing and more compact layout
    let translateX = diff * 120; // Reduced from 180 to bring phones closer
    let scale = 1 - absDiff * 0.15; // Reduced scale difference for tighter look
    let opacity = 1 - absDiff * 0.5; // Increased opacity fade for side phones
    let zIndex = 10 - absDiff;
    
    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  return (
    <div className="relative overflow-hidden bg-blue-600 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="relative z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src={instacoachLogo} alt="Instacoach" className="h-8" />
          </div>
        </div>
      </nav>

      {/* Hero Content - Split Layout */}
      <div className="flex-1 relative z-10 flex items-center justify-center px-6 lg:px-12 py-12">
        {/* Mobile View */}
        <div className="lg:hidden flex flex-col items-center text-center w-full max-w-md mx-auto">
          {/* Mobile Carousel - Smaller */}
          <div className="relative h-[280px] w-full flex items-center justify-center mb-8 overflow-visible">
            <div className="relative w-full">
              {videos.map((video, index) => (
                <a 
                  key={index}
                  href="https://g6vd2.app.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={getVideoStyle(index)}
                >
                  <div className="relative w-[140px] aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-2xl">
                    <ImageWithFallback 
                      src={video.image}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                    
                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="text-white">
                          <p className="text-[8px]">{video.coach}</p>
                        </div>
                      </div>
                      {video.live && (
                        <div className="bg-red-600 text-white text-[8px] px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                          <div className="w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
                          LIVE
                        </div>
                      )}
                    </div>

                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[8px] px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                      <Eye className="w-2 h-2" />
                      {video.viewers}
                    </div>
                    
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <p className="text-[8px] opacity-90 mb-0.5">{video.category}</p>
                      <p className="text-[9px]">{video.title}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Content */}
          <div className="text-white">
            <h1 className="text-4xl mb-4 leading-tight">
              The Baseball Training App
            </h1>
            <p className="text-lg mb-8 opacity-90 hidden">
              Train, improve, and connect around the sport you love.
            </p>
            
            <a href="https://g6vd2.app.link" target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-white text-blue-600 hover:bg-white/90 rounded-full px-8 py-6 text-lg"
              >
                Continue to App
              </Button>
            </a>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid max-w-7xl w-full mx-auto grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Video Carousel */}
          <div className="relative h-[500px] flex items-center justify-center lg:justify-start overflow-visible">
            <div className="relative w-full max-w-md">
              {videos.map((video, index) => (
                <div 
                  key={index}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={getVideoStyle(index)}
                >
                  <div className="relative w-[200px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback 
                      src={video.image}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="text-white">
                          <p className="text-[10px]">{video.coach}</p>
                        </div>
                      </div>
                      {video.live && (
                        <div className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                          LIVE
                        </div>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Eye className="w-2.5 h-2.5" />
                      {video.viewers}
                    </div>
                    
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-[10px] opacity-90 mb-0.5">{video.category}</p>
                      <p className="text-xs">{video.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 mb-8">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-white w-8' 
                      : 'bg-white/40 w-2'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white lg:pl-8">
            <h1 className="text-5xl lg:text-7xl mb-6 leading-tight">
              The Baseball Training App
            </h1>
            <p className="text-xl lg:text-2xl mb-12 opacity-90">
              Train and actually improve with programs built by college & pro athletes.
            </p>
            
            <div className="mb-8">
              <p className="mb-4">Download Instacoach</p>
              <div className="bg-white p-3 rounded-xl inline-block shadow-lg border-4 border-black">
                <img src={qrCode} alt="QR Code" className="w-32 h-32" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Bottom Button */}
      <div className="hidden lg:flex absolute bottom-8 left-0 right-0 z-20 justify-center">
        <Button 
          variant="ghost" 
          className="text-white hover:bg-white/10 gap-2 rounded-full border border-white/30 px-6"
          onClick={scrollToHowItWorks}
        >
          <ChevronDown className="w-4 h-4" />
          Explore Programs
        </Button>
      </div>

      {/* Mobile Bottom Button */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-blue-600 via-blue-600 to-transparent flex justify-center">
        <Button 
          variant="ghost" 
          className="text-white hover:bg-white/10 gap-2 rounded-full border border-white/30 px-6"
          onClick={scrollToHowItWorks}
        >
          <ChevronDown className="w-4 h-4" />
          Explore Programs
        </Button>
      </div>
    </div>
  );
}