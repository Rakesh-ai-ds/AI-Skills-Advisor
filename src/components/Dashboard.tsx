import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChatInterface } from './ChatInterface';
import { AgentCard } from './AgentCard';
import { ProgressTracker } from './ProgressTracker';
import { UserProfile } from './UserProfile';
import { QuickActions } from './QuickActions';
import { EnhancedStats } from './EnhancedStats';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Users, TrendingUp, Star, MessageSquare, Zap } from 'lucide-react';
import { AgentPrompts, geminiService } from '@/lib/gemini';

interface DashboardProps {
  user: any;
}

export function Dashboard({ user }: DashboardProps) {
  const [activeAgent, setActiveAgent] = useState<keyof AgentPrompts>('career');
  const [userProfile, setUserProfile] = useState({
    name: user?.displayName || 'Rakesh Kumar',
    branch: 'Computer Science',
    year: 3,
    skills: ['JavaScript', 'React', 'Python'],
    interests: ['AI', 'Web Development', 'Data Science']
  });
  const [motivationalMessage, setMotivationalMessage] = useState('');
  const [completedSkills] = useState(['JavaScript', 'React', 'HTML/CSS']);

  const handleQuickAction = (action: string) => {
    console.log('Quick action triggered:', action);
    // Handle different quick actions
    switch (action) {
      case 'set-goal':
        console.log('Opening career goal setting');
        break;
      case 'skill-test':
        setActiveAgent('skills');
        break;
      case 'mock-interview':
        setActiveAgent('interview');
        break;
      case 'resume-builder':
        console.log('Resume builder would open here');
        break;
      default:
        console.log('Unknown action:', action);
    }
  };

  useEffect(() => {
    // Generate motivational message on load
    const generateMessage = async () => {
      try {
        const progress = (completedSkills.length / 10) * 100;
        console.log('Generating motivational message for:', userProfile.name, 'Progress:', progress + '%');
        const message = await geminiService.generateMotivationalMessage(userProfile.name, progress);
        console.log('Generated motivational message:', message);
        setMotivationalMessage(message);
      } catch (error) {
        console.error('Error generating motivational message:', error);
        setMotivationalMessage(`🚀 Keep going, ${userProfile.name}! You're ${Math.round((completedSkills.length / 10) * 100)}% on your way to career success!`);
      }
    };
    generateMessage();
  }, [userProfile.name, completedSkills.length]);

  const stats = [
    {
      icon: Brain,
      label: 'AI Agents Available',
      value: '4',
      color: 'text-trust',
      bg: 'bg-trust-light'
    },
    {
      icon: Users,
      label: 'Skills Identified',
      value: userProfile.skills.length.toString(),
      color: 'text-growth',
      bg: 'bg-growth-light'
    },
    {
      icon: TrendingUp,
      label: 'Progress',
      value: `${Math.round((completedSkills.length / 10) * 100)}%`,
      color: 'text-energy',
      bg: 'bg-energy-light'
    },
    {
      icon: Star,
      label: 'Career Readiness',
      value: '65%',
      color: 'text-primary',
      bg: 'bg-secondary'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl font-bold">
              Welcome back, {userProfile.name}! 🚀
            </h1>
            <p className="text-xl text-white/90">
              Your AI-powered career journey continues
            </p>
            {motivationalMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto"
              >
                <p className="text-lg">{motivationalMessage}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Enhanced Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <EnhancedStats userProfile={userProfile} completedSkills={completedSkills} />
        </motion.div>

        <Tabs value="agents" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-max lg:grid-cols-4">
            <TabsTrigger value="agents" className="flex items-center gap-2">
              <MessageSquare size={16} />
              <span className="hidden sm:inline">AI Mentors</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex items-center gap-2">
              <TrendingUp size={16} />
              <span className="hidden sm:inline">Progress</span>
            </TabsTrigger>
            <TabsTrigger value="actions" className="flex items-center gap-2">
              <Zap size={16} />
              <span className="hidden sm:inline">Actions</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <Users size={16} />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="agents" className="space-y-6">
            {/* Agent Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Choose Your AI Mentor
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {(Object.keys({ career: '', skills: '', trends: '', interview: '' }) as (keyof AgentPrompts)[]).map((agentType) => (
                  <AgentCard
                    key={agentType}
                    agentType={agentType}
                    isActive={activeAgent === agentType}
                    onClick={() => setActiveAgent(agentType)}
                  />
                ))}
              </div>
            </motion.div>

            {/* Chat Interface */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              <div className="lg:col-span-2">
                <ChatInterface
                  activeAgent={activeAgent}
                  userProfile={userProfile}
                />
              </div>
              <div>
                <ProgressTracker
                  userProfile={userProfile}
                  completedSkills={completedSkills}
                  targetRole="Data Scientist"
                />
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="progress">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ProgressTracker
                userProfile={userProfile}
                completedSkills={completedSkills}
                targetRole="Data Scientist"
              />
              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Learning Roadmap</h3>
                <div className="space-y-4">
                  {[
                    { skill: 'Python Fundamentals', progress: 100, status: 'completed' },
                    { skill: 'Data Structures', progress: 75, status: 'in-progress' },
                    { skill: 'Machine Learning', progress: 30, status: 'in-progress' },
                    { skill: 'Deep Learning', progress: 0, status: 'upcoming' },
                    { skill: 'MLOps', progress: 0, status: 'upcoming' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{item.skill}</span>
                        <Badge 
                          variant={item.status === 'completed' ? 'default' : 'secondary'}
                          className={
                            item.status === 'completed' 
                              ? 'bg-growth text-growth-foreground'
                              : item.status === 'in-progress'
                              ? 'bg-energy text-energy-foreground'
                              : 'bg-muted text-muted-foreground'
                          }
                        >
                          {item.status === 'completed' ? '✓ Done' : 
                           item.status === 'in-progress' ? '⏳ Learning' : '📅 Soon'}
                        </Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${
                            item.status === 'completed' ? 'bg-growth' :
                            item.status === 'in-progress' ? 'bg-energy' : 'bg-muted-foreground'
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.progress}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="actions">
            <QuickActions onActionClick={handleQuickAction} />
          </TabsContent>

          <TabsContent value="profile">
            <UserProfile userProfile={userProfile} setUserProfile={setUserProfile} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}