
import React from 'react';
import HeroSection from '../components/HeroSection';
import TimelineSection from '../components/TimelineSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsOrbit from '../components/SkillsOrbit';
import VolunteerSection from '../components/VolunteerSection';
import ContactSection from '../components/ContactSection';
import ChatBot from '../components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <HeroSection />
      <TimelineSection />
      <ProjectsSection />
      <SkillsOrbit />
      <VolunteerSection />
      <ContactSection />
      <ChatBot />
    </div>
  );
};

export default Index;
