
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const projects = [
    {
      title: "Banking Application Dashboard",
      description: "Angular-based core banking dashboard with real-time data visualization and secure authentication",
      category: "Angular",
      tags: ["Angular", "NgRx", "RxJS", "Material-UI", "Jasmine"],
      demoUrl: "#",
      githubUrl: "#",
      image: "🏦",
      impact: "Improved user experience for 10,000+ banking customers"
    },
    {
      title: "Health Card PWA",
      description: "Progressive Web App for health card registration with offline capabilities and Firebase integration",
      category: "React",
      tags: ["React", "PWA", "Firebase", "Node.js", "Material-UI"],
      demoUrl: "#",
      githubUrl: "#",
      image: "🏥",
      impact: "Reduced registration time by 60% with offline-first design"
    },
    {
      title: "Social Innovation Platform",
      description: "React dashboard for social impact tracking with Google OAuth and performance optimizations",
      category: "React",
      tags: ["React", "Vite", "Google OAuth", "Material-UI", "Performance"],
      demoUrl: "#",
      githubUrl: "#",
      image: "🌍",
      impact: "50% faster cold starts with Vite migration"
    },
    {
      title: "Capital Markets Monitor",
      description: "Business intelligence dashboard for monitoring capital markets applications and batch jobs",
      category: "Analytics",
      tags: ["Power BI", "SQL", "Excel", "Business Analysis"],
      demoUrl: "#",
      githubUrl: "#",
      image: "📈",
      impact: "Reduced system downtime by 40% through proactive monitoring"
    }
  ];

  const categories = ['All', 'React', 'Angular', 'Analytics'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-6 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          "Code With Soul" Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Where creativity meets functionality ✨
        </p>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' 
                    : 'hover:scale-105 hover:shadow-md'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="text-6xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <CardTitle className="text-xl font-bold text-center text-gray-800 dark:text-white">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">
                    💡 Impact: {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-none">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="hover:bg-gray-100">
                    <Github size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
