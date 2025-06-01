
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const projects = [
    {
      title: "Dynamic Food Ordering System",
      description: "Built a scalable meal ordering platform using MongoDB to support dietary customization, allergies, and user preferences. Deployed on AWS with a responsive front end and flexible NoSQL design.",
      category: "Full Stack",
      tags: ["MongoDB", "React", "NoSQL", "AWS", "User Personalization"],
      demoUrl: "#",
      githubUrl: "https://github.com/dasarisaichandana/mealplanner",
      image: "🍽️",
      impact: "Scalable platform supporting complex dietary preferences and allergies"
    },
    {
      title: "FoodApp – Secure Ordering UI",
      description: "Developed a modern Angular front end with JWT authentication and bcrypt password protection. Implemented CORS policy, XSS prevention, and OWASP best practices.",
      category: "Angular",
      tags: ["Angular", "TypeScript", "Security", "OWASP", "JWT"],
      demoUrl: "#",
      githubUrl: "https://github.com/dasarisaichandana/foodApp",
      image: "🍕",
      impact: "Enhanced security with OWASP compliance and modern authentication"
    },
    {
      title: "Facial Emotion Detection System",
      description: "Used CNNs and OpenCV to detect real-time facial expressions for mental health and engagement apps. Designed emotion prediction dashboard with intuitive visualization.",
      category: "Machine Learning",
      tags: ["Python", "OpenCV", "CNN", "Facial Recognition"],
      demoUrl: "#",
      githubUrl: "https://github.com/dasarisaichandana/Real-time-detection",
      image: "😊",
      impact: "Real-time emotion detection for mental health applications"
    },
    {
      title: "Fruit & Vegetable Classifier",
      description: "Created a smart classifier using TensorFlow to identify produce items in real-time. Trained with image data for potential smart kitchen or retail use cases.",
      category: "Machine Learning",
      tags: ["Deep Learning", "TensorFlow", "Image Classification"],
      demoUrl: "#",
      githubUrl: "https://github.com/dasarisaichandana/AI-ML-Learning",
      image: "🥕",
      impact: "AI-powered classification for smart kitchen applications"
    },
    {
      title: "Deep Learning Labs",
      description: "Explored CNNs, RNNs, and regularization techniques through Jupyter notebooks and TensorFlow. Trained on MNIST and IMDB datasets with tuning for real-world conditions.",
      category: "Machine Learning",
      tags: ["Deep Learning", "Neural Networks", "TensorFlow", "NLP"],
      demoUrl: "#",
      githubUrl: "https://github.com/dasarisaichandana/Deep-Learning",
      image: "🧠",
      impact: "Comprehensive exploration of deep learning architectures"
    },
    {
      title: "Heart Disease Prediction Model",
      description: "Developed a machine learning pipeline to predict heart disease based on clinical characteristics using K-Nearest Neighbors, Logistic Regression, and Random Forest. Evaluated model accuracy and interpretability to assist in early detection and decision-making in healthcare scenarios.",
      category: "Machine Learning",
      tags: ["Machine Learning", "Healthcare", "Classification", "Scikit-learn", "Clinical Data"],
      demoUrl: "#",
      githubUrl: "#",
      image: "❤️",
      impact: "Healthcare ML pipeline for early disease detection"
    }
  ];

  const categories = ['All', 'Full Stack', 'Angular', 'Machine Learning'];

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
          Real-world solutions from my GitHub portfolio ✨
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
                  {project.githubUrl !== "#" ? (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </Button>
                  ) : (
                    <Button size="sm" className="flex-1 bg-gray-400 cursor-not-allowed" disabled>
                      <Github size={16} className="mr-2" />
                      Private Repo
                    </Button>
                  )}
                  {project.demoUrl !== "#" && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="hover:bg-gray-100"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink size={16} />
                    </Button>
                  )}
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
