import { Button } from './ui/button';
import { Input } from './ui/input';
import { X, Send } from 'lucide-react';
import { useState } from 'react';

interface AIDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  type: 'ai' | 'user';
  text: string;
}

export function AIDrawer({ isOpen, onClose }: AIDrawerProps) {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'ai', text: 'Hi! I\'m here to help you get the perfect website quote. What type of website do you need?' },
    { type: 'ai', text: 'I can help you with landing pages, multi-page websites, or custom projects.' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add user message
      const newMessages = [...messages, { type: 'user' as const, text: inputValue }];
      setMessages(newMessages);
      
      // Simulate AI response after a delay
      setTimeout(() => {
        const aiResponse = generateAIResponse(inputValue);
        setMessages(prev => [...prev, { type: 'ai' as const, text: aiResponse }]);
      }, 1000);
      
      setInputValue('');
    }
  };

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('landing') || lowerMessage.includes('page')) {
      return 'Perfect! A landing page is great for startups. What\'s your main goal - lead generation, product sales, or brand awareness?';
    } else if (lowerMessage.includes('ecommerce') || lowerMessage.includes('shop')) {
      return 'E-commerce is exciting! How many products will you be selling? Do you need payment processing and inventory management?';
    } else if (lowerMessage.includes('portfolio') || lowerMessage.includes('showcase')) {
      return 'A portfolio site is perfect for showcasing your work. How many projects would you like to feature?';
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return 'Based on our conversation, I\'d recommend our Landing Start package ($2,500) or Pro Website package ($5,000). Would you like details on either?';
    } else {
      return 'That sounds interesting! Can you tell me more about your specific needs and target audience?';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Desktop Drawer */}
      <div className={`AI/Drawer hidden lg:block fixed top-0 right-0 h-full w-[450px] bg-card border-l border-border shadow-elevated transform transition-transform duration-300 z-60 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="AI/Header flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-lg font-medium text-card-foreground">AI Assistant</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-1 hover:bg-muted"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(100vh-80px)]">
          {/* Iframe Placeholder */}
          <div className="AI/Iframe p-6 border-b border-border">
            <div className="bg-muted border-2 border-dashed border-border rounded-soft p-8 text-center">
              <p className="text-muted-foreground">AI Assistant (iframe here)</p>
            </div>
          </div>

          {/* Messages */}
          <div className="AI/Messages flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-soft shadow-soft ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="AI/Input p-6 border-t border-border">
            <div className="flex gap-2">
              <Input 
                placeholder="Type your message..."
                className="flex-1 bg-input-background border-border"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft"
                onClick={handleSendMessage}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Sheet */}
      <div className={`AI/Drawer lg:hidden fixed inset-x-0 bottom-0 h-[85vh] bg-card rounded-t-xl border-t border-border shadow-elevated transform transition-transform duration-300 z-60 ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        {/* Header */}
        <div className="AI/Header flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-medium text-card-foreground">AI Assistant</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-1 hover:bg-muted"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(85vh-68px)]">
          {/* Iframe Placeholder */}
          <div className="AI/Iframe p-4 border-b border-border">
            <div className="bg-muted border-2 border-dashed border-border rounded-soft p-6 text-center">
              <p className="text-muted-foreground text-sm">AI Assistant (iframe here)</p>
            </div>
          </div>

          {/* Messages */}
          <div className="AI/Messages flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-soft shadow-soft ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="AI/Input p-4 border-t border-border">
            <div className="flex gap-2">
              <Input 
                placeholder="Type your message..."
                className="flex-1 bg-input-background border-border"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft"
                onClick={handleSendMessage}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}