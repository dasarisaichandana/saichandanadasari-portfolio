import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hello, I'm Sai Chandana 👋";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="text-center z-10 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2">
            Software Developer & Emerging Business Analyst
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Bridging technical excellence with business insights through React, Angular & strategic analysis
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work ✨
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
            onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
          >
            My Journey 🚀
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/dasarisaichandana" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
          >
            <Github size={32} />
          </a>
          <a 
            href="https://www.linkedin.com/in/sai-chandana-dasari-a95433215/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
          >
            <Linkedin size={32} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-600" />
      </div>
    </section>
  );
};

export default HeroSection;
