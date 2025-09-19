import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { User, GraduationCap, Code, Target, Plus, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface UserProfileProps {
  userProfile: any;
  setUserProfile: (profile: any) => void;
}

export function UserProfile({ userProfile, setUserProfile }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(userProfile);
  const [newSkill, setNewSkill] = useState('');
  const [newInterest, setNewInterest] = useState('');

  const handleSave = () => {
    setUserProfile(editData);
    setIsEditing(false);
    toast({
      title: "Profile Updated! 🎉",
      description: "Your career profile has been successfully updated.",
    });
  };

  const addSkill = () => {
    if (newSkill.trim() && !editData.skills.includes(newSkill.trim())) {
      setEditData({
        ...editData,
        skills: [...editData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    setEditData({
      ...editData,
      skills: editData.skills.filter((s: string) => s !== skill)
    });
  };

  const addInterest = () => {
    if (newInterest.trim() && !editData.interests.includes(newInterest.trim())) {
      setEditData({
        ...editData,
        interests: [...editData.interests, newInterest.trim()]
      });
      setNewInterest('');
    }
  };

  const removeInterest = (interest: string) => {
    setEditData({
      ...editData,
      interests: editData.interests.filter((i: string) => i !== interest)
    });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <h2 className="text-2xl font-bold text-foreground">Your Career Profile</h2>
        <Button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="bg-gradient-primary hover:opacity-90"
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <User className="text-primary" size={20} />
              <h3 className="text-lg font-semibold text-foreground">Basic Information</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                {isEditing ? (
                  <Input
                    id="name"
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    className="mt-1"
                  />
                ) : (
                  <p className="text-foreground font-medium mt-1">{userProfile.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="branch">Branch/Field of Study</Label>
                {isEditing ? (
                  <Select
                    value={editData.branch}
                    onValueChange={(value) => setEditData({ ...editData, branch: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Computer Science">Computer Science</SelectItem>
                      <SelectItem value="Information Technology">Information Technology</SelectItem>
                      <SelectItem value="Electronics">Electronics & Communication</SelectItem>
                      <SelectItem value="Mechanical">Mechanical Engineering</SelectItem>
                      <SelectItem value="Civil">Civil Engineering</SelectItem>
                      <SelectItem value="Business">Business Administration</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <div className="flex items-center gap-2 mt-1">
                    <GraduationCap size={16} className="text-trust" />
                    <span className="text-foreground font-medium">{userProfile.branch}</span>
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="year">Current Year</Label>
                {isEditing ? (
                  <Select
                    value={editData.year.toString()}
                    onValueChange={(value) => setEditData({ ...editData, year: parseInt(value) })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1st Year</SelectItem>
                      <SelectItem value="2">2nd Year</SelectItem>
                      <SelectItem value="3">3rd Year</SelectItem>
                      <SelectItem value="4">4th Year</SelectItem>
                      <SelectItem value="5">Graduate</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <p className="text-foreground font-medium mt-1">Year {userProfile.year}</p>
                )}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <Code className="text-growth" size={20} />
              <h3 className="text-lg font-semibold text-foreground">Technical Skills</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {(isEditing ? editData.skills : userProfile.skills).map((skill: string) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-growth-light text-growth flex items-center gap-1"
                  >
                    {skill}
                    {isEditing && (
                      <X
                        size={12}
                        className="cursor-pointer hover:text-destructive"
                        onClick={() => removeSkill(skill)}
                      />
                    )}
                  </Badge>
                ))}
              </div>
              
              {isEditing && (
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                    className="flex-1"
                  />
                  <Button size="icon" onClick={addSkill} disabled={!newSkill.trim()}>
                    <Plus size={16} />
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Career Interests */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-energy" size={20} />
              <h3 className="text-lg font-semibold text-foreground">Career Interests</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {(isEditing ? editData.interests : userProfile.interests).map((interest: string) => (
                  <Badge
                    key={interest}
                    variant="secondary"
                    className="bg-energy-light text-energy flex items-center gap-1"
                  >
                    {interest}
                    {isEditing && (
                      <X
                        size={12}
                        className="cursor-pointer hover:text-destructive"
                        onClick={() => removeInterest(interest)}
                      />
                    )}
                  </Badge>
                ))}
              </div>
              
              {isEditing && (
                <div className="flex gap-2">
                  <Input
                    placeholder="Add an interest..."
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addInterest()}
                    className="flex-1"
                  />
                  <Button size="icon" onClick={addInterest} disabled={!newInterest.trim()}>
                    <Plus size={16} />
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Career Goals */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-primary" size={20} />
              <h3 className="text-lg font-semibold text-foreground">Career Goals</h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <Label htmlFor="careerGoals">What are your career aspirations?</Label>
                {isEditing ? (
                  <Textarea
                    id="careerGoals"
                    value={editData.careerGoals || ''}
                    onChange={(e) => setEditData({ ...editData, careerGoals: e.target.value })}
                    placeholder="Describe your dream job, target companies, or career objectives..."
                    className="mt-1 min-h-[100px]"
                  />
                ) : (
                  <p className="text-muted-foreground mt-1">
                    {userProfile.careerGoals || "I want to become a successful data scientist, working on innovative AI projects that solve real-world problems and make a positive impact on society."}
                  </p>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {isEditing && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-2 justify-end"
        >
          <Button
            variant="outline"
            onClick={() => {
              setEditData(userProfile);
              setIsEditing(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-gradient-primary hover:opacity-90">
            Save Changes
          </Button>
        </motion.div>
      )}
    </div>
  );
}