import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { AgentPrompts } from '@/lib/gemini';

interface AgentCardProps {
  agentType: keyof AgentPrompts;
  isActive: boolean;
  onClick: () => void;
}

export function AgentCard({ agentType, isActive, onClick }: AgentCardProps) {
  const agentConfig = {
    career: {
      icon: '🚀',
      name: 'Career Path Agent',
      description: 'Discover personalized career paths based on your skills and interests',
      color: 'trust',
      features: ['Career Suggestions', 'Skill Requirements', 'Learning Timeline']
    },
    skills: {
      icon: '🎯',
      name: 'Skills Gap Analyzer',
      description: 'Identify missing skills and get a personalized learning roadmap',
      color: 'growth',
      features: ['Gap Analysis', 'Learning Resources', 'Priority Roadmap']
    },
    trends: {
      icon: '📈',
      name: 'Market Trends Agent',
      description: 'Stay updated with industry trends and in-demand skills',
      color: 'energy',
      features: ['Job Market Trends', 'Salary Insights', 'Future Skills']
    },
    interview: {
      icon: '💼',
      name: 'Interview Coach',
      description: 'Practice interviews and get personalized feedback',
      color: 'primary',
      features: ['Mock Interviews', 'Answer Evaluation', 'Improvement Tips']
    }
  };

  const config = agentConfig[agentType];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Card 
        className={`h-full cursor-pointer transition-all duration-300 ${
          isActive 
            ? 'ring-2 ring-primary shadow-glow bg-gradient-card' 
            : 'hover:shadow-card border border-border'
        }`}
        onClick={onClick}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl">{config.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-foreground">{config.name}</h3>
              <Badge 
                variant="secondary" 
                className={`mt-1 ${
                  isActive ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                {isActive ? 'Active' : 'Available'}
              </Badge>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4 flex-1">
            {config.description}
          </p>
          
          <div className="space-y-2 mb-4">
            {config.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-growth rounded-full"></div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button 
            variant={isActive ? "success" : "outline"}
            className={`w-full ${
              isActive 
                ? '' 
                : 'border-border hover:bg-secondary'
            }`}
          >
            {isActive ? 'Currently Active' : 'Start Conversation'}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}