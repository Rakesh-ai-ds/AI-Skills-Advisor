import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ChatMessage, geminiService, AgentPrompts } from '@/lib/gemini';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatInterfaceProps {
  activeAgent: keyof AgentPrompts;
  userProfile?: any;
  onNewMessage?: (message: ChatMessage) => void;
}

export function ChatInterface({ activeAgent, userProfile, onNewMessage }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Send welcome message when agent changes
    const welcomeMessages = {
      career: "👋 Hi! I'm your Career Path Agent. Tell me about your skills and interests, and I'll suggest amazing career paths for you!",
      skills: "🎯 Hello! I'm your Skills Gap Analyzer. Share your target career role and current skills - I'll show you exactly what to learn next!",
      trends: "📈 Hey there! I'm your Market Trends Agent. Ask me about industry trends, in-demand jobs, or salary expectations in any field!",
      interview: "💼 Welcome! I'm your Interview Coach. Ready to practice? Tell me your target role and I'll help you ace those interviews!"
    };

    const welcomeMessage: ChatMessage = {
      id: Date.now().toString(),
      text: welcomeMessages[activeAgent],
      sender: 'ai',
      timestamp: new Date(),
      agentType: activeAgent
    };

    setMessages([welcomeMessage]);
  }, [activeAgent]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
      agentType: activeAgent
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await geminiService.chatWithAgent(inputMessage, activeAgent, userProfile);
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
        agentType: activeAgent
      };

      setMessages(prev => [...prev, aiMessage]);
      onNewMessage?.(aiMessage);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getAgentIcon = (agentType: keyof AgentPrompts) => {
    const icons = {
      career: '🚀',
      skills: '🎯',
      trends: '📈',
      interview: '💼'
    };
    return icons[agentType];
  };

  const getAgentName = (agentType: keyof AgentPrompts) => {
    const names = {
      career: 'Career Agent',
      skills: 'Skills Agent',
      trends: 'Trends Agent',
      interview: 'Interview Coach'
    };
    return names[agentType];
  };

  return (
    <Card className="h-[500px] flex flex-col bg-gradient-card border-0 shadow-card">
      {/* Chat Header */}
      <div className="p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{getAgentIcon(activeAgent)}</span>
          <h3 className="font-semibold">{getAgentName(activeAgent)}</h3>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start gap-2 max-w-[80%] ${
                message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  message.sender === 'user' 
                    ? 'bg-energy text-energy-foreground' 
                    : 'bg-trust text-white'
                }`}>
                  {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-energy text-energy-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-trust text-white flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div className="bg-muted rounded-lg p-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={`Ask ${getAgentName(activeAgent)}...`}
            className="flex-1"
            disabled={isLoading}
          />
          <Button 
            onClick={handleSendMessage}
            disabled={isLoading || !inputMessage.trim()}
            size="icon"
            className="bg-gradient-energy hover:opacity-90"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
    </Card>
  );
}