import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target, BookOpen, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProgressTrackerProps {
  userProfile?: any;
  completedSkills?: string[];
  targetRole?: string;
}

export function ProgressTracker({ userProfile, completedSkills = [], targetRole }: ProgressTrackerProps) {
  const totalSkills = 10; // This would be dynamic based on career path
  const completedCount = completedSkills.length;
  const progress = (completedCount / totalSkills) * 100;

  const achievements = [
    { icon: Trophy, name: 'First Step', condition: completedCount >= 1, color: 'text-energy' },
    { icon: Target, name: 'On Track', condition: completedCount >= 3, color: 'text-growth' },
    { icon: BookOpen, name: 'Learning Pro', condition: completedCount >= 5, color: 'text-trust' },
    { icon: Zap, name: 'Skill Master', condition: completedCount >= 8, color: 'text-primary' },
  ];

  const motivationalMessages = [
    "🚀 Great start! Every expert was once a beginner.",
    "🎯 You're building momentum! Keep going!",
    "📈 Halfway there! Your future self will thank you.",
    "🔥 Amazing progress! You're becoming unstoppable!",
    "🏆 Outstanding! You're ready for the next level!"
  ];

  const getMotivationalMessage = () => {
    if (progress === 0) return motivationalMessages[0];
    if (progress < 25) return motivationalMessages[1];
    if (progress < 50) return motivationalMessages[2];
    if (progress < 75) return motivationalMessages[3];
    return motivationalMessages[4];
  };

  return (
    <Card className="p-6 bg-gradient-card border-0 shadow-card">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">Your Career Journey</h3>
          {targetRole && (
            <Badge variant="secondary" className="bg-growth-light text-growth">
              🎯 Target: {targetRole}
            </Badge>
          )}
        </div>

        {/* Progress Circle */}
        <div className="flex justify-center">
          <motion.div 
            className="relative w-32 h-32"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-muted stroke-current"
                strokeDasharray="100, 100"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                strokeWidth="2"
                fill="none"
              />
              <motion.path
                className="text-growth stroke-current"
                strokeDasharray={`${progress}, 100`}
                strokeLinecap="round"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                strokeWidth="2"
                fill="none"
                initial={{ strokeDasharray: "0, 100" }}
                animate={{ strokeDasharray: `${progress}, 100` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-growth">{Math.round(progress)}%</span>
            </div>
          </motion.div>
        </div>

        {/* Skills Progress */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-muted-foreground">Skills Completed</span>
            <span className="text-sm font-bold text-foreground">{completedCount}/{totalSkills}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Motivational Message */}
        <motion.div 
          className="text-center p-4 bg-growth-light rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm font-medium text-growth">
            {getMotivationalMessage()}
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground mb-3">Achievements</h4>
          <div className="grid grid-cols-2 gap-2">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const isUnlocked = achievement.condition;
              
              return (
                <motion.div
                  key={achievement.name}
                  className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
                    isUnlocked 
                      ? 'bg-gradient-growth text-growth-foreground shadow-success' 
                      : 'bg-muted text-muted-foreground'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: isUnlocked ? 1.05 : 1 }}
                >
                  <Icon 
                    size={16} 
                    className={isUnlocked ? 'text-current' : 'text-muted-foreground'}
                  />
                  <span className="text-xs font-medium">{achievement.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Next Steps */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">Next Steps</h4>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-energy rounded-full"></div>
              <span>Complete Python fundamentals course</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-energy rounded-full"></div>
              <span>Build your first data science project</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-energy rounded-full"></div>
              <span>Practice SQL queries daily</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}