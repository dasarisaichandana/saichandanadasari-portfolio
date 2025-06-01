
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const VolunteerSection = () => {
  const volunteerWork = [
    {
      role: "Full Stack Developer",
      organization: "Civic Tech Fredericton",
      period: "Apr 2025 – Present",
      description: "Upgraded the admin page for a meal planning application by integrating OAuth for Google sign-ins, enhancing secure and seamless user authentication",
      impact: "Improved security and user experience for meal planning platform",
      icon: "🍽️",
      color: "from-green-500 to-emerald-500"
    },
    {
      role: "Positive Mental Health Team",
      organization: "University of New Brunswick",
      period: "2023-2024",
      description: "Assisted in organizing and supporting mental health awareness activities during orientation week to help new students.",
      impact: "Supported mental wellness for 500+ new students",
      icon: "🧠",
      color: "from-blue-500 to-cyan-500"
    },
    {
      role: "Volunteer Coordinator",
      organization: "SAHAYA Charity",
      period: "2019-2022",
      description: "Led food donation and charity drives, supporting underserved communities through SAHAYA's initiatives.",
      impact: "Coordinated aid for 1000+ families in need",
      icon: "❤️",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Community Impact
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Using tech skills to make a difference 🌟
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteerWork.map((work, index) => (
            <Card key={index} className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${work.color} flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {work.icon}
                </div>
                <CardTitle className="text-xl font-bold text-center text-gray-800 dark:text-white">
                  {work.role}
                </CardTitle>
                <p className="text-center text-blue-600 font-semibold">{work.organization}</p>
                <p className="text-center text-sm text-gray-500">{work.period}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {work.description}
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">
                    🎯 Impact: {work.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-2 border-blue-200 dark:border-blue-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Why Volunteering Matters to Me
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              "Technology has the power to solve real-world problems and create positive change. 
              Through volunteering, I've learned that the most rewarding code is the one that makes 
              someone's life a little bit better. Whether it's helping students with mental health 
              resources or building tools for social good, these experiences remind me why I became 
              a developer in the first place."
            </p>
            <div className="mt-6 flex justify-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold">
                🌱 Growing through giving back
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
