import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyB9Ue911yG5rNO-qtnV0hKdAv4P4fxHiiA";
const genAI = new GoogleGenerativeAI(API_KEY);

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  agentType?: 'career' | 'skills' | 'trends' | 'interview';
}

export interface AgentPrompts {
  career: string;
  skills: string;
  trends: string;
  interview: string;
}

export const agentPrompts: AgentPrompts = {
  career: `You are a professional AI Career Mentor. A student tells you their current skills, branch, and year. 
  Suggest 3–5 suitable career paths, including required skills, recommended courses, and estimated timeline to reach entry-level proficiency. 
  Present the answer in a clear, structured list with emojis for visual appeal. Be encouraging and specific about actionable next steps.`,
  
  skills: `You are a Skills Gap Analyzer AI. A student provides their current skills and a target career role. 
  List the skills they are missing, suggest the best resources to learn them, and provide a priority roadmap (which skills to learn first). 
  Use emojis and present in a clear priority order with estimated learning timeframes.`,
  
  trends: `You are an AI Market Trends Agent. Given a student's preferred career sector, provide the top 5 in-demand jobs in India, 
  upcoming skill trends, and potential salary ranges. Present it in a structured format with clear sections:

  ## In-Demand Jobs for [Student Name] (India)
  
  Use a table format with these columns: Rank | Job Title | In-Demand Skills | Salary Range (INR LPA) | Growth Indicator | Market Outlook
  
  **Upcoming Skill Trends:**
  * List key emerging skills
  * Focus on what's growing in India's market
  
  **Market Outlook:** Brief summary of the sector's future
  
  Make it clean, professional, and easy to read with proper formatting.`,
  
  interview: `You are an AI Interview Coach. Ask the student 3–5 relevant interview questions for their target role. 
  Evaluate their answers and provide tips to improve, including examples of better responses. Be supportive and constructive in your feedback.`
};

export class GeminiService {
  private model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  async chatWithAgent(
    message: string, 
    agentType: keyof AgentPrompts, 
    userProfile?: any
  ): Promise<string> {
    try {
      const systemPrompt = agentPrompts[agentType];
      const profileContext = userProfile ? 
        `Student Profile: ${userProfile.name}, ${userProfile.branch}, Year ${userProfile.year}, Skills: ${userProfile.skills?.join(', ')}` : 
        '';
      
      const fullPrompt = `${systemPrompt}\n\n${profileContext}\n\nStudent Question: ${message}`;
      
      const result = await this.model.generateContent(fullPrompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini API Error:', error);
      return "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.";
    }
  }

  async generateMotivationalMessage(studentName: string, progress: number): Promise<string> {
    try {
      const prompt = `Generate a short, encouraging message for ${studentName} who has completed ${progress}% of their career roadmap. 
      Make it motivating, specific to their progress, and include relevant emojis. Keep it under 50 words.`;
      
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating motivational message:', error);
      return `🚀 Great progress, ${studentName}! You're ${progress}% there - keep building your future!`;
    }
  }
}

export const geminiService = new GeminiService();