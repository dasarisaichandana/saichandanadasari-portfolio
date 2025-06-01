
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Sai's Dev Bot 🤖 Ask me anything about her coding journey!", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const predefinedResponses = {
    "clean code": "Sai believes in writing code that tells a story! She focuses on meaningful variable names, consistent formatting, and breaking complex logic into reusable components. Her mantra: 'Code should be written for humans first, computers second.' 📚",
    "burnout": "Great question! Sai deals with burnout by taking regular breaks, contributing to open source projects for fun, and volunteering - it reminds her why she loves coding. She also practices the 50/10 rule: 50 minutes coding, 10 minutes away from screen! 🌱",
    "toughest bug": "Oh boy! Once she spent 3 days debugging an Angular app that randomly crashed. Turned out to be a memory leak in an RxJS subscription that wasn't being unsubscribed. Since then, she's religious about cleaning up subscriptions! 🐛",
    "react": "Sai LOVES React! She's been working with it for 2+ years and especially enjoys the component lifecycle, hooks, and state management with Redux. Her recent project improved performance by 50% using React's lazy loading! ⚛️",
    "angular": "Angular was Sai's first love in frontend! She's built multiple banking applications with Angular, NgRx, and RxJS. She appreciates Angular's structure and TypeScript integration for large-scale applications. 🅰️",
    "volunteer": "Sai volunteers because she believes tech should serve humanity! She's currently helping Civic Tech Fredericton with meal planning apps and has coordinated aid for 1000+ families through SAHAYA charity. Giving back keeps her grounded! ❤️"
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    
    // Simple keyword matching for responses
    let botResponse = "That's a great question! Sai would love to discuss that with you personally. Feel free to reach out via the contact form above! 😊";
    
    const lowerInput = inputValue.toLowerCase();
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (lowerInput.includes(keyword)) {
        botResponse = response;
        break;
      }
    }

    setTimeout(() => {
      setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
    }, 1000);

    setMessages(newMessages);
    setInputValue('');
  };

  const easterEggs = [
    "Try asking about 'clean code' 🧹",
    "Ask me about 'burnout' 😴",
    "Curious about her 'toughest bug'? 🐛",
    "Want to know about 'React'? ⚛️",
    "Ask about 'volunteer' work! ❤️"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl animate-pulse"
        >
          🤖
        </Button>
      )}

      {isOpen && (
        <Card className="w-80 h-96 shadow-2xl border-2 border-blue-300">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Dev Bot 🤖</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                ✕
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {message.text}
                  </div>
                </div>
              ))}
              
              {messages.length === 1 && (
                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <p className="text-xs text-yellow-800 mb-2">💡 Try these questions:</p>
                  {easterEggs.map((egg, index) => (
                    <div key={index} className="text-xs text-yellow-700">• {egg}</div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="text-sm"
                />
                <Button onClick={handleSendMessage} size="sm">
                  Send
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ChatBot;
