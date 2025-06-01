
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent! 🎉",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Let's Create Something Amazing
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Ready to turn your ideas into reality? Let's chat! ☕
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-2 border-blue-200 dark:border-blue-700">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 dark:text-white">
                  📍 Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Email</p>
                    <a href="mailto:saichandana0599@gmail.com" className="text-blue-600 hover:underline">
                      saichandana0599@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Phone</p>
                    <a href="tel:+15064400852" className="text-blue-600 hover:underline">
                      +1 506-440-0852
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Location</p>
                    <p className="text-blue-600">Fredericton, NB - Canada</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/sai-chandana-dasari-a95433215/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👩‍💻</span>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">GitHub</p>
                    <a 
                      href="https://github.com/dasarisaichandana" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View my code
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">
                🚀 Open to Opportunities
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Currently seeking full-time Front-End Developer positions in Canada. 
                Passionate about React, Angular, and creating exceptional user experiences.
              </p>
              <div className="flex space-x-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Available Now
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Remote Friendly
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-purple-200 dark:border-purple-700">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 dark:text-white">
                💬 Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or just say hi! 👋"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-200"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg transform hover:scale-105 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message 🚀'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
