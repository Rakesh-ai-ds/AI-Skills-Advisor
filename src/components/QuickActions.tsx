import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Target, 
  Users, 
  FileText, 
  Calendar, 
  Briefcase,
  Download,
  Share2
} from 'lucide-react';

interface QuickActionsProps {
  onActionClick: (action: string) => void;
}

export function QuickActions({ onActionClick }: QuickActionsProps) {
  const actions = [
    {
      icon: Target,
      title: 'Set Career Goal',
      description: 'Define your target role and timeline',
      color: 'text-energy',
      bg: 'bg-energy-light',
      action: 'set-goal',
      popular: true
    },
    {
      icon: BookOpen,
      title: 'Skill Assessment',
      description: 'Test your current skill level',
      color: 'text-growth',
      bg: 'bg-growth-light',
      action: 'skill-test',
      popular: false
    },
    {
      icon: Briefcase,
      title: 'Mock Interview',
      description: 'Practice with AI interviewer',
      color: 'text-trust',
      bg: 'bg-trust-light',
      action: 'mock-interview',
      popular: true
    },
    {
      icon: Users,
      title: 'Find Mentors',
      description: 'Connect with industry experts',
      color: 'text-primary',
      bg: 'bg-secondary',
      action: 'find-mentors',
      popular: false
    },
    {
      icon: FileText,
      title: 'Resume Builder',
      description: 'Create ATS-friendly resume',
      color: 'text-energy',
      bg: 'bg-energy-light',
      action: 'resume-builder',
      popular: true
    },
    {
      icon: Calendar,
      title: 'Study Schedule',
      description: 'Plan your learning journey',
      color: 'text-growth',
      bg: 'bg-growth-light',
      action: 'study-schedule',
      popular: false
    }
  ];

  return (
    <Card className="p-6 bg-gradient-card border-0 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-foreground">Quick Actions</h3>
          <p className="text-sm text-muted-foreground">Fast-track your career growth</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="gap-2">
            <Download size={14} />
            Export
          </Button>
          <Button size="sm" variant="outline" className="gap-2">
            <Share2 size={14} />
            Share
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <motion.div
              key={action.action}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <Card 
                className="p-4 cursor-pointer hover:shadow-card transition-all duration-200 border border-border/50 hover:border-primary/20"
                onClick={() => onActionClick(action.action)}
              >
                {action.popular && (
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-2 -right-2 bg-energy text-energy-foreground text-xs"
                  >
                    Popular
                  </Badge>
                )}
                
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${action.bg} flex-shrink-0`}>
                    <Icon size={16} className={action.color} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground mb-1 truncate">
                      {action.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-trust-light rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-trust">AI Recommendation</span>
        </div>
        <p className="text-sm text-trust">
          Based on your profile, I suggest starting with a <strong>Skill Assessment</strong> to identify gaps, 
          then setting a clear <strong>Career Goal</strong> to focus your learning path.
        </p>
      </div>
    </Card>
  );
}