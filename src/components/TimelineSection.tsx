
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TimelineSection = () => {
  const experiences = [
    {
      role: "Contract Full Stack Developer",
      company: "Greater Fredericton Social Innovation",
      period: "May 2025 – Present",
      location: "NB, Canada",
      achievements: [
        "Integrated Google OAuth sign-ins to streamline secure user access",
        "Migrated build system to Vite, boosting cold start and HMR speeds by over 50%",
        "Developed scalable React dashboard components using Material-UI",
        "Improved Lighthouse performance scores by 30+ points"
      ],
      skills: ["React", "Vite", "Material-UI", "Google OAuth", "Performance Optimization"],
      emoji: "🚀"
    },
    {
      role: "Business and Technical Analyst",
      company: "CGI",
      period: "May 2023 – Jan 2024",
      location: "Fredericton, NB",
      achievements: [
        "Provided Level 1 support for nine Capital Markets applications",
        "Collaborated with cross-functional teams to analyze business requirements",
        "Conducted comprehensive data and gap analysis with SQL, Power BI, and Excel",
        "Facilitated stakeholder workshops and led UAT efforts"
      ],
      skills: ["SQL", "Power BI", "Excel", "Business Analysis", "UAT"],
      emoji: "📊"
    },
    {
      role: "Software Developer",
      company: "HCL",
      period: "Oct 2020 – Dec 2022",
      location: "India",
      achievements: [
        "Delivered fully functional Angular UI prototype for core banking apps",
        "Created reusable Storybook components",
        "Streamlined development using Jenkins and GitLab CI/CD",
        "Established automated unit testing standards with Karma and Jasmine"
      ],
      skills: ["Angular", "Storybook", "Jenkins", "GitLab CI/CD", "Karma", "Jasmine"],
      emoji: "💼"
    },
    {
      role: "Junior Software Developer",
      company: "HCL",
      period: "Oct 2019 - Sep 2020",
      location: "Remote",
      achievements: [
        "Developed responsive Angular UIs for banking applications",
        "Built Vikalp PWA's Health Card and registration pages",
        "Integrated NgRx, HttpClientModule with Firestore",
        "Built scalable Firebase Cloud Functions in Node.js"
      ],
      skills: ["Angular", "PWA", "NgRx", "Firebase", "Node.js"],
      emoji: "🌱"
    }
  ];

  return (
    <section id="timeline" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Career Journey
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{exp.emoji}</span>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                    </div>
                    <p className="text-lg font-semibold text-blue-600 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.period} • {exp.location}</p>
                    
                    <div className="space-y-2 mb-4">
                      {exp.achievements.slice(0, 2).map((achievement, idx) => (
                        <p key={idx} className="text-sm text-gray-700 dark:text-gray-300">• {achievement}</p>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIdx) => (
                        <Badge key={skillIdx} variant="secondary" className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Timeline dot */}
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
