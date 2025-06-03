
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
      </div>
    </section>
  );
};

export default SkillsOrbit;
