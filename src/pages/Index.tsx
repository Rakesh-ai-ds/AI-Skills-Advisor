import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dashboard } from '@/components/Dashboard';
import { motion } from 'framer-motion';
import { Brain, Users, TrendingUp, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

const Index = () => {
  const [user, setUser] = useState(null);
  const [showDemo, setShowDemo] = useState(false);

  // Mock user for demo
  const demoUser = {
    displayName: 'Rakesh Kumar',
    email: 'rakesh@student.edu'
  };

  const features = [
    {
      icon: Brain,
      title: 'AI Career Agent',
      description: 'Get personalized career paths based on your skills and interests',
      color: 'text-trust'
    },
    {
      icon: Users,
      title: 'Skills Gap Analysis', 
      description: 'Identify missing skills and get priority learning roadmaps',
      color: 'text-growth'
    },
    {
      icon: TrendingUp,
      title: 'Market Trends',
      description: 'Stay updated with industry trends and in-demand skills',
      color: 'text-energy'
    },
    {
      icon: MessageCircle,
      title: 'Interview Coach',
      description: 'Practice interviews with AI and get personalized feedback',
      color: 'text-primary'
    }
  ];

  if (showDemo || user) {
    return <Dashboard user={user || demoUser} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white"
              >
                <Sparkles size={16} />
                Powered by Google AI Stack
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Your AI-Powered
                <span className="block bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
                  Career Mentor
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                Navigate your career journey with personalized AI guidance, skill gap analysis, and market insights tailored for students in India.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={() => setShowDemo(true)}
                variant="hero"
                className="px-8 py-4 text-lg font-semibold"
              >
                Try Demo Now
                <ArrowRight size={20} className="ml-2" />
              </Button>
              
              <Button
                size="lg"
                variant="modern"
                className="px-8 py-4 text-lg"
                onClick={() => setUser(demoUser)}
              >
                Sign in with Google
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-6 text-white/60 text-sm"
            >
              <span className="flex items-center gap-2">
                ✓ 4 AI Mentor Agents
              </span>
              <span className="flex items-center gap-2">
                ✓ Real-time Market Data
              </span>
              <span className="flex items-center gap-2">
                ✓ Personalized Roadmaps
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet Your AI Career Mentors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four specialized AI agents working together to guide your career journey from student to professional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Google AI Stack Section */}
      <div className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Built with Google AI Stack
            </h2>
            <p className="text-muted-foreground text-lg">
              Leveraging the full power of Google's AI and cloud technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Gemini API', desc: 'Advanced reasoning & chat' },
              { name: 'Vertex AI', desc: 'Custom ML models' },
              { name: 'BigQuery', desc: 'Skills & market data' },
              { name: 'Cloud Run', desc: 'Scalable backend' },
              { name: 'Firebase', desc: 'Real-time database' },
              { name: 'Cloud Storage', desc: 'Document management' },
              { name: 'AI Platform', desc: 'Model training' },
              { name: 'Analytics', desc: 'Usage insights' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <Badge variant="secondary" className="mb-2 bg-trust-light text-trust">
                  {tech.name}
                </Badge>
                <p className="text-xs text-muted-foreground">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-foreground">
            Ready to Shape Your Future?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of students who are already building their dream careers with AI guidance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setShowDemo(true)}
              variant="hero"
              className="px-8 py-4 text-lg font-semibold"
            >
              Start Your Journey
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-muted-foreground text-sm">
            <span>🎓 For Students</span>
            <span>🤖 AI-Powered</span>
            <span>🇮🇳 Made in India</span>
            <span>🚀 Future-Ready</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
