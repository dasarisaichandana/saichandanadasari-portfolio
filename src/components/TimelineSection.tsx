
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TimelineSection = () => {
  const experiences = [{
    role: "Contract Full Stack Developer",
    company: "GFSI",
    period: "May 2025 – Present",
    location: "NB, Canada",
    achievements: ["Technical Excellence: Migrated to Vite, boosting cold start speeds by 50%+ and transforming developer experience", "Security Implementation: Integrated Google OAuth for seamless, secure user authentication across meal planning platform", "Performance Optimization: Improved Lighthouse scores by 30+ points through strategic lazy loading and code-splitting", "Component Architecture: Built scalable React dashboard components using Material-UI, creating modular and maintainable architecture"],
    skills: ["React", "Vite", "Material-UI", "Google OAuth", "Performance Optimization"],
    emoji: "🚀",
    impact: "Delivered high-performance web solutions while supporting social innovation initiatives"
  }, {
    role: "Business and Technical Analyst",
    company: "CGI",
    period: "May 2023 – Jan 2024",
    location: "Fredericton, NB",
    achievements: ["Operations Management: Managed Level 1 operations for 9 Capital Markets applications, ensuring 99.9% uptime", "Data Analysis & Insights: Led comprehensive analysis using SQL, Power BI, and Excel to identify business optimization opportunities", "Stakeholder Management: Facilitated workshops and UAT efforts, translating business requirements into technical specifications", "Process Improvement: Reduced system downtime through proactive monitoring and strategic gap analysis"],
    skills: ["Business Analysis", "SQL", "Power BI", "Excel", "UAT", "Stakeholder Management"],
    emoji: "📊",
    impact: "Bridged business needs with technical solutions for critical financial systems"
  }, {
    role: "Software Developer",
    company: "HCL",
    period: "Oct 2020 – Dec 2022",
    location: "India",
    achievements: ["Frontend Development: Delivered production-ready Angular UI prototypes for core banking applications under tight deadlines", "Documentation & Standards: Created comprehensive Storybook component library, standardizing development practices", "DevOps Implementation: Streamlined CI/CD pipelines using Jenkins and GitLab, reducing deployment time by 40%", "Quality Assurance: Established automated testing standards with Karma and Jasmine, ensuring 95%+ code coverage"],
    skills: ["Angular", "TypeScript", "Storybook", "Jenkins", "GitLab CI/CD", "Testing"],
    emoji: "💼",
    impact: "Delivered enterprise-grade banking solutions while establishing development best practices"
  }, {
    role: "Junior Software Developer",
    company: "HCL",
    period: "Oct 2019 - Sep 2020",
    location: "Remote",
    achievements: ["Progressive Web Apps: Built responsive Health Card and registration systems for Vikalp PWA, serving thousands of users", "Cloud Architecture: Architected scalable Cloud Functions in Node.js for authentication and business logic", "State Management: Mastered NgRx and RxJS for complex data flow in banking applications", "User Experience: Implemented Angular Material and Reactive Forms, reducing form errors by 60%"],
    skills: ["Angular", "PWA", "NgRx", "Firebase", "Node.js", "UX Design"],
    emoji: "🌱",
    impact: "Launched critical healthcare PWA while mastering modern web technologies"
  }];

  return (
    <section id="timeline" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Professional Journey
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg">
          4+ years combining technical expertise with business acumen ✨
        </p>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          
          {/* Mobile timeline line - visible only on mobile */}
          <div className="md:hidden absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Mobile layout - single column with left-aligned dots */}
              <div className="md:hidden w-full pl-16 relative">
                {/* Mobile timeline dot */}
                <div className="absolute -left-2 top-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-300">
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{exp.emoji}</span>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                      </div>
                      <p className="text-lg font-semibold text-blue-600 mb-1">{exp.company}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period} • {exp.location}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-3 rounded-lg mb-4">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        🎯 Impact: {exp.impact}
                      </p>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {exp.achievements.slice(0, 2).map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 text-sm mt-0.5 leading-none flex-shrink-0">•</span>
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</p>
                        </div>
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

              {/* Desktop layout - alternating cards */}
              <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-300">
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{exp.emoji}</span>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                      </div>
                      <p className="text-lg font-semibold text-blue-600 mb-1">{exp.company}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period} • {exp.location}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-3 rounded-lg mb-4">
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        🎯 Impact: {exp.impact}
                      </p>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {exp.achievements.slice(0, 2).map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 text-sm mt-0.5 leading-none flex-shrink-0">•</span>
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</p>
                        </div>
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
              
              {/* Desktop timeline dot */}
              <div className="hidden md:block w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-2 border-blue-200 dark:border-blue-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              🌟 Professional Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">50%+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Performance Improvements</div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">9</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Enterprise Apps Managed</div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">System Uptime Achieved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
