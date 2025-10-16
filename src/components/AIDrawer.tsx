import { Button } from './ui/button';
import { Input } from './ui/input';
import { X, Send } from 'lucide-react';
import { useState } from 'react';
import { AI_CONFIG } from '../ai/config';

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

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue('');

    const newMessages = [...messages, { type: 'user' as const, text: userText }];
    setMessages(newMessages);

    try {
      const res = await fetch('/.netlify/functions/deepseek-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: AI_CONFIG.systemPrompt },
            ...newMessages.map(m => ({ role: m.type === 'user' ? 'user' : 'assistant', content: m.text }))
          ],
          temperature: AI_CONFIG.temperature,
          max_tokens: AI_CONFIG.maxTokens,
          model: AI_CONFIG.model
        })
      });
      if (!res.ok) {
        throw new Error('Request failed');
      }
      const data = await res.json();
      const raw = data?.reply || 'Sorry, I could not respond right now.';
      const hasAction = /\[ACTION:OPEN_FORM\]/i.test(raw);
      const btnMatch = raw.match(/\[BUTTON:([^\]]+)\]/i);
      const clean = raw.replace(/\[ACTION:OPEN_FORM\]/gi, '').replace(/\[BUTTON:[^\]]+\]/gi, '').trim();
      setMessages(prev => [...prev, { type: 'ai' as const, text: clean }]);
      if (hasAction) {
        const el = document.querySelector('[data-cta="get-started"]') as HTMLElement | null;
        el?.click();
      } else if (btnMatch) {
        const label = btnMatch[1].trim();
        setMessages(prev => [...prev, { type: 'ai' as const, text: `(${label})` }]);
      }
    } catch (e) {
      setMessages(prev => [...prev, { type: 'ai' as const, text: 'Network error. Please try again later.' }]);
    }
  };

  // Legacy local rules removed; replies now come from serverless function

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