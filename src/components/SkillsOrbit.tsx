
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const SkillsOrbit = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillCategories = {
    "Frontend": {
      skills: ["React", "Angular", "TypeScript", "HTML5", "CSS3", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
      icon: "⚛️"
    },
    "State Management": {
      skills: ["Redux", "NgRx", "RxJS"],
      color: "from-purple-500 to-pink-500",
      icon: "🔄"
    },
    "Build Tools": {
      skills: ["Vite", "Webpack", "Babel", "npm", "Yarn"],
      color: "from-green-500 to-emerald-500",
      icon: "⚡"
    },
    "Testing": {
      skills: ["Jest", "React Testing Library", "Karma", "Jasmine"],
      color: "from-yellow-500 to-orange-500",
      icon: "🧪"
    },
    "DevOps": {
      skills: ["Jenkins", "GitLab CI/CD", "GitHub", "Git"],
      color: "from-red-500 to-rose-500",
      icon: "🚀"
    },
    "Cloud & Backend": {
      skills: ["Firebase", "AWS", "Node.js", "REST APIs"],
      color: "from-indigo-500 to-purple-500",
      icon: "☁️"
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills Constellation
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, data], index) => (
            <Card 
              key={category}
              className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-300 cursor-pointer"
              onClick={() => setSelectedSkill(selectedSkill === category ? null : category)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {data.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  {category}
                </h3>
                
                <div className={`w-full h-2 bg-gradient-to-r ${data.color} rounded-full mb-4 transform group-hover:scale-105 transition-transform duration-300`}></div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {data.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className={`text-xs transform hover:scale-110 transition-all duration-200 ${
                        selectedSkill === category 
                          ? `bg-gradient-to-r ${data.color} text-white` 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {selectedSkill === category && (
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg animate-fade-in">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      🎯 Proficiency Level: Advanced
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      4+ years of production experience
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Spotlight */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
            Performance Spotlight ⚡
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">50%+</div>
              <div className="text-sm text-green-800 dark:text-green-300">Faster Cold Starts with Vite</div>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-sm text-blue-800 dark:text-blue-300">Lighthouse Score Improvement</div>
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
              <div className="text-sm text-purple-800 dark:text-purple-300">Reduced Registration Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsOrbit;
