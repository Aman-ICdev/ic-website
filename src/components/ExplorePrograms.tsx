import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";
import qrCode from "figma:asset/0a3568284c7578b566007296d123818896e9599b.png";

const programs = [
  {
    id: 1,
    title: "Intro to Pitching",
    author: "Wesley Jones",
    level: "Youth",
    duration: "3 Weeks",
    image: "https://storage.googleapis.com/instacoach-website/Wesley%20Jones_%20Intro%20to%20Pitching.webp"
  },
  {
    id: 2,
    title: "Tommy's Arm Care Program",
    author: "Tommy O'Rourke",
    level: "Middle School, High School, College",
    duration: "4 Weeks",
    image: "https://storage.googleapis.com/instacoach-website/Tommy_s%20Arm%20Care%20Program.webp"
  },
  {
    id: 3,
    title: "The Cardinal Lifting Program",
    author: "Cole Hinkelman",
    level: "High School, College",
    duration: "6 Weeks",
    image: "https://storage.googleapis.com/instacoach-website/The%20Cardinal%20Lifting%20Program.webp"
  },
  {
    id: 4,
    title: "The Cal Complete Catcher Program",
    author: "Trey Newman",
    level: "Middle School, High School, College",
    duration: "4 Weeks",
    image: "https://storage.googleapis.com/instacoach-website/The%20Cal%20Complete%20Catcher%20Program.webp"
  },
  {
    id: 5,
    title: "Stanford's Hitting Fundamentals",
    author: "Cole Hinkelman",
    level: "Middle School, High School, College",
    duration: "4 Weeks",
    image: "https://storage.googleapis.com/instacoach-website/Stanford_s%20Hitting%20Fundamentals.webp"
  },
  {
    id: 6,
    title: "Phase 1 of Throwing Program",
    author: "Drew Dowd",
    level: "High School, College",
    duration: "2 Weeks",
    image: "https://storage.googleapis.com/instacoach-website/Phase%201%20of%20Drew_s%20Throwing%20Program%20Thumbnail.webp"
  },
  {
    id: 7,
    title: "D1 INF Fundamentals",
    author: "Brandon Stahlman",
    level: "Middle School, High School, College",
    duration: "3 Weeks",
    image: "https://storage.googleapis.com/instacoach-website/Brandon_s%20D1%20INF%20Fundamentals.webp"
  },
  {
    id: 8,
    title: "4 Week Bat Path Program",
    author: "Brandon Stahlman",
    level: "Middle School, High School, College",
    duration: "4 Weeks",
    image: "https://storage.googleapis.com/instacoach-website/Brandon_s%204%20Week%20Bat%20Path%20Program.webp"
  },
];

export function ExplorePrograms() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? programs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === programs.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="explore-programs" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">
            Explore Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Train With Proven Programs. Expert-built plans using the same drills and routines that helped these athletes reach the highest levels.
          </p>
        </div>

        <div className="relative">
          {/* Desktop View - Show multiple cards */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

          {/* Mobile/Tablet View - Carousel */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {programs.map((program) => (
                  <div key={program.id} className="w-full flex-shrink-0 px-4">
                    <ProgramCard program={program} isMobile={true} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
              aria-label="Previous program"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
              aria-label="Next program"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to program ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgramCard({ program, isMobile = false }: { program: typeof programs[0], isMobile?: boolean }) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-blue-500";
      case "Intermediate":
        return "bg-blue-500";
      case "Advanced":
        return "bg-blue-500";
      case "All Levels":
        return "bg-blue-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
      <div className="relative aspect-[9/16]">
        <ImageWithFallback
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-gray-900 mb-1">{program.title}</h3>
        <p className="text-sm text-gray-500 mb-3">by {program.author}</p>
        
        <div className="flex items-center mb-4 text-sm">
          <span className="text-gray-500">{program.duration}</span>
        </div>
        
        <div className="mt-auto">
          {isMobile ? (
            <a 
              href="https://g6vd2.app.link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-5">
                Get Started
              </Button>
            </a>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-5">
                  Get Started
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-white">
                <DialogHeader>
                  <DialogTitle className="text-center text-lg font-normal text-gray-900">
                    Get Started with
                    <div className="text-blue-600 font-bold mt-1">{program.title}</div>
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center p-6">
                  <div className="bg-white p-3 rounded-xl inline-block shadow-lg border-4 border-blue-50 mb-6">
                    <div className="bg-black p-2 rounded-lg">
                      <img src={qrCode} alt="QR Code" className="w-40 h-40" />
                    </div>
                  </div>
                  <DialogDescription className="text-center text-gray-600 text-lg flex flex-col gap-1">
                    <span>Scan to download app</span>
                    <span>and start your program</span>
                  </DialogDescription>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
}