import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Target, 
  BookOpen, 
  Zap, 
  TrendingUp, 
  Users, 
  Brain, 
  Star,
  Clock,
  CheckCircle
} from 'lucide-react';

interface EnhancedStatsProps {
  userProfile: any;
  completedSkills: string[];
}

export function EnhancedStats({ userProfile, completedSkills }: EnhancedStatsProps) {
  const skillProgress = (completedSkills.length / 10) * 100;
  const careerReadiness = Math.min(85, skillProgress + 20);

  const stats = [
    {
      icon: Brain,
      label: 'AI Agents',
      value: '4',
      subtext: 'Active mentors',
      color: 'text-trust',
      bg: 'bg-trust-light',
      trend: '+100%'
    },
    {
      icon: BookOpen,
      label: 'Skills Mastered',
      value: completedSkills.length.toString(),
      subtext: `${userProfile.skills?.length || 0} total skills`,
      color: 'text-growth',
      bg: 'bg-growth-light',
      trend: '+2 this week'
    },
    {
      icon: TrendingUp,
      label: 'Progress',
      value: `${Math.round(skillProgress)}%`,
      subtext: 'Learning journey',
      color: 'text-energy',
      bg: 'bg-energy-light',
      trend: '+15% this month'
    },
    {
      icon: Star,
      label: 'Career Readiness',
      value: `${Math.round(careerReadiness)}%`,
      subtext: 'Job market ready',
      color: 'text-primary',
      bg: 'bg-secondary',
      trend: '↗ Excellent'
    }
  ];

  const achievements = [
    { 
      icon: Trophy, 
      name: 'Quick Starter', 
      desc: 'Completed first skill assessment',
      unlocked: completedSkills.length >= 1,
      color: 'text-energy'
    },
    { 
      icon: Target, 
      name: 'Skill Builder', 
      desc: 'Mastered 3+ skills',
      unlocked: completedSkills.length >= 3,
      color: 'text-growth'
    },
    { 
      icon: Zap, 
      name: 'Fast Learner', 
      desc: 'Completed 5+ skills',
      unlocked: completedSkills.length >= 5,
      color: 'text-trust'
    },
    { 
      icon: Star, 
      name: 'Expert Level', 
      desc: 'Achieved 80%+ career readiness',
      unlocked: careerReadiness >= 80,
      color: 'text-primary'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-start justify-between mb-2">
                  <div className={`p-2 rounded-lg ${stat.bg} group-hover:scale-110 transition-transform`}>
                    <Icon size={20} className={stat.color} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {stat.trend}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.subtext}</p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Achievement Showcase */}
      <Card className="p-6 bg-gradient-card border-0 shadow-card">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="text-energy" size={20} />
          <h3 className="text-lg font-semibold text-foreground">Your Achievements</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: achievement.unlocked ? 1 : 0.95 
                }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`relative p-4 rounded-lg border transition-all duration-300 ${
                  achievement.unlocked
                    ? 'bg-gradient-growth text-growth-foreground shadow-success border-growth/20'
                    : 'bg-muted/50 text-muted-foreground border-muted'
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className={`p-2 rounded-full ${
                    achievement.unlocked 
                      ? 'bg-white/20' 
                      : 'bg-muted'
                  }`}>
                    <Icon 
                      size={16} 
                      className={achievement.unlocked ? 'text-current' : 'text-muted-foreground'}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{achievement.name}</p>
                    <p className="text-xs opacity-80">{achievement.desc}</p>
                  </div>
                  {achievement.unlocked && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="absolute -top-2 -right-2 bg-energy text-white rounded-full p-1"
                    >
                      <CheckCircle size={12} />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Card>

      {/* Weekly Progress */}
      <Card className="p-6 bg-gradient-card border-0 shadow-card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Clock className="text-primary" size={20} />
            <h3 className="text-lg font-semibold text-foreground">This Week's Progress</h3>
          </div>
          <Badge variant="secondary" className="bg-energy-light text-energy">
            🔥 On Fire!
          </Badge>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Skills Practice</span>
            <span className="text-sm font-medium">12/15 sessions</span>
          </div>
          <Progress value={80} className="h-2" />
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Career Research</span>
            <span className="text-sm font-medium">3/5 companies</span>
          </div>
          <Progress value={60} className="h-2" />
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Interview Prep</span>
            <span className="text-sm font-medium">5/8 questions</span>
          </div>
          <Progress value={62} className="h-2" />
        </div>
      </Card>
    </div>
  );
}