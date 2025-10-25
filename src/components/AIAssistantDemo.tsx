import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, User, Send, ArrowRight } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'assistant';
  content: string;
}

const demoMessages: Message[] = [
  {
    id: 1,
    type: 'user',
    content: 'I want a website for my business.'
  },
  {
    id: 2,
    type: 'assistant',
    content: "Great choice ✨ Let's make something unique for you."
  },
  {
    id: 3,
    type: 'user',
    content: 'Do I need to call someone?'
  },
  {
    id: 4,
    type: 'assistant',
    content: "Nope 😊 Just answer a few quick questions — we'll prepare your offer automatically."
  },
  {
    id: 5,
    type: 'user',
    content: 'Sounds easy. How soon can I see results?'
  },
  {
    id: 6,
    type: 'assistant',
    content: "Within 24 hours you'll get multiple design options — all made for your business."
  },
  {
    id: 7,
    type: 'user',
    content: "Perfect, let's start!"
  },
  {
    id: 8,
    type: 'assistant',
    content: 'Awesome! 🚀 Click below to begin.'
  }
];

interface AIAssistantDemoProps {
  onGetStarted?: () => void;
}

export function AIAssistantDemo({ onGetStarted }: AIAssistantDemoProps) {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < demoMessages.length) {
        if (demoMessages[currentIndex].type === 'assistant') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setVisibleMessages(prev => [...prev, demoMessages[currentIndex]]);
            setCurrentIndex(prev => prev + 1);
          }, 1000);
        } else {
          setVisibleMessages(prev => [...prev, demoMessages[currentIndex]]);
          setCurrentIndex(prev => prev + 1);
        }
      } else {
        setTimeout(() => {
          setVisibleMessages([]);
          setCurrentIndex(0);
          setIsTyping(false);
        }, 3000);
      }
    }, currentIndex === 0 ? 1000 : 2000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  const TypingIndicator = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-center gap-3 mb-4"
    >
      <div className="w-8 h-8 bg-accent-dark flex items-center justify-center">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div className="bg-surface border border-border px-4 py-3">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 lg:py-32 bg-surface" style={{ contentVisibility: 'auto', containIntrinsicSize: '900px' } as any}>
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 border border-border bg-elevated mb-6">
            <span className="font-mono text-xs tracking-wider uppercase text-text-secondary">
              AI Assistant
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-text-primary mb-6">
            No waiting. Just answers.
          </h2>
          
          <p className="text-xl text-text-secondary">
            Our AI assistant asks 5 questions and instantly builds the best package for you.
          </p>
        </div>

        {/* Chat Window */}
        <div className="bg-elevated border-2 border-border overflow-hidden">
          {/* Chat Header */}
          <div className="bg-surface px-6 py-4 border-b-2 border-border">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-danger"></div>
              <div className="w-3 h-3 bg-warning"></div>
              <div className="w-3 h-3 bg-success"></div>
              <div className="ml-4 font-mono text-xs font-medium text-text-secondary uppercase tracking-wider">
                AI Assistant Chat
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div ref={chatContainerRef} className="h-[280px] lg:h-[400px] overflow-y-auto bg-bg scrollbar-hide">
            <div className="p-6">
              <div className="space-y-4 max-w-2xl mx-auto">
                <AnimatePresence>
                  {visibleMessages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-start gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                      {/* Avatar */}
                      <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 ${
                        message.type === 'user' 
                          ? 'bg-surface border border-border' 
                          : 'bg-accent-dark'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="w-4 h-4 text-text-primary" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>

                      {/* Message Bubble */}
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 border ${
                        message.type === 'user'
                          ? 'bg-surface border-border text-text-primary'
                          : 'bg-elevated border-border text-text-primary'
                      }`}>
                        <p className="text-[15px] leading-relaxed">
                          {message.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && <TypingIndicator />}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-surface border-t-2 border-border">
            <div className="flex items-center gap-3 max-w-2xl mx-auto">
              <button 
                className="flex-1 bg-elevated border border-border px-4 py-3 text-left text-text-tertiary hover:border-accent-dark transition-colors focus-visible:ring-4 focus-visible:ring-brand/20"
                onClick={onGetStarted}
                aria-label="Open assistant input"
              >
                Type your message...
              </button>
              <button 
                className="w-12 h-12 bg-accent-dark hover:bg-accent-dark-soft flex items-center justify-center transition-colors"
                onClick={onGetStarted}
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <button
            data-cta="get-started"
            onClick={onGetStarted}
            className="fancy-black"
          >
            <span className="text">Get Started</span>
            <span className="top-key"></span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
