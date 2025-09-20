# AI Skills Advisor

<div align="center">

![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Submitted for Google Gen AI Exchange Hackathon 2024**

*An intelligent platform that helps developers discover their skill gaps and get personalized learning recommendations*

[Live Prototype](https://advisor-bot.lovable.app/) | [GitHub Repository](https://github.com/Rakesh-ai-ds/AI-Skills-Advisor)

</div>

---

## What is AI Skills Advisor?

AI Skills Advisor is a smart web application that leverages **Google Gemini AI** to help developers understand their current skill level and discover what they need to learn next. Built specifically for the **Google Gen AI Exchange Hackathon 2024**, this project addresses the challenge of skill assessment and personalized learning in the rapidly evolving tech landscape.

> **Note**: This is a working prototype developed during the hackathon to demonstrate the potential of AI-powered skill assessment.

---

## Key Features

**Smart Skill Assessment**
- Uses Google Gemini's natural language processing to evaluate technical knowledge
- Supports multiple programming languages, frameworks, and development tools
- Provides detailed feedback on strengths and areas for improvement

**Personalized Learning Recommendations**
- Creates custom learning paths based on individual skill gaps
- Suggests relevant resources, tutorials, and documentation
- Tracks progress and adapts recommendations over time

**Modern User Experience**
- Clean, responsive interface built with React and TypeScript
- Fast loading with Vite build system
- Mobile-friendly design using Tailwind CSS

---

## Google AI Technologies & Tools Used

<div align="center">

| <span style="color: #4285F4">**Google Technology**</span> | <span style="color: #34A853">**Purpose**</span> | <span style="color: #EA4335">**Implementation**</span> |
|------------|---------|----------------|
| <span style="color: #4285F4">**Google Gemini Pro**</span> | Core AI engine for skill analysis | Natural language understanding for evaluating developer responses and knowledge |
| <span style="color: #FBBC04">**Google AI Studio**</span> | Rapid prototyping and testing | Fine-tuning prompts and testing different AI model configurations |
| <span style="color: #34A853">**Vertex AI Platform**</span> | Production-ready deployment | Scalable AI model serving and performance monitoring |
| <span style="color: #EA4335">**Gemini API**</span> | Real-time AI integration | Direct connection to Google's language models for instant skill assessment |

</div>

**Additional Resources & Platforms Used:**

<div align="center">

![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=flat-square&logo=google-cloud&logoColor=white)
![AI Studio](https://img.shields.io/badge/Google_AI_Studio-FBBC04?style=flat-square&logo=google&logoColor=black)
![Vertex AI](https://img.shields.io/badge/Vertex_AI-34A853?style=flat-square&logo=google&logoColor=white)
![Gemini API](https://img.shields.io/badge/Gemini_API-EA4335?style=flat-square&logo=google&logoColor=white)

</div>

---

## Why This Project Matters

The **Google Gen AI Exchange Hackathon 2024** challenges developers to create solutions that unlock real-world opportunities using AI. This project tackles several important problems:

- **Skills Gap Crisis**: Many developers struggle to identify what skills they're missing in today's fast-changing tech environment
- **Personalized Learning**: Generic tutorials don't work for everyone - people need customized learning paths
- **Career Growth**: Understanding skill gaps is crucial for professional development and job opportunities
- **Accessibility**: Making skill assessment available to developers worldwide, regardless of their background

---

## Getting Started

**What you'll need:**
- Node.js (version 18 or higher)
- npm package manager
- A modern web browser
- Google Cloud account for AI API access

**Quick setup:**

```bash
# Clone the repository
git clone https://github.com/Rakesh-ai-ds/AI-Skills-Advisor.git

# Go to the project folder
cd AI-Skills-Advisor

# Install all dependencies
npm install

# Start the development server
npm run dev
```

**Try it live:** [Launch the prototype here](https://lovable.dev/projects/d078d427-0b63-4e94-9e0d-01ba36ed250e)

---

## Project Architecture

```
AI-Skills-Advisor/
├── src/
│   ├── components/         # React components for UI
│   ├── pages/             # Different app pages
│   ├── services/          # Google AI integration logic
│   ├── utils/             # Helper functions
│   └── types/             # TypeScript definitions
├── public/                # Static files and assets
├── package.json           # Project dependencies
└── vite.config.ts        # Build configuration
```

---

## Technology Stack Deep Dive

**Frontend Framework**
<div align="center">

![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

**Styling & Design**
<div align="center">

![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

</div>

**AI & Backend Services**
<div align="center">

![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)

</div>

---

## Development Commands

```bash
npm run dev          # Start development server with hot reload
npm run build        # Create production build
npm run preview      # Preview the production build locally
npm run lint         # Check code quality with ESLint
npm run type-check   # Verify TypeScript types
```

---

## Current Status & Future Plans

**What's working now (Prototype):**
- Basic skill assessment interface
- Integration with Google Gemini API
- Responsive design for all devices
- Real-time AI-powered responses

**What's coming next:**
- Support for more programming languages
- Advanced analytics and progress tracking
- Integration with popular learning platforms
- Community features and skill sharing
- Certification system for completed skills

---

## Contributing to the Project

Want to help improve AI Skills Advisor? Here's how:

1. Fork this repository
2. Create a new branch for your feature (`git checkout -b feature/awesome-feature`)
3. Make your changes and test them
4. Commit your changes (`git commit -m 'Add awesome feature'`)
5. Push to your branch (`git push origin feature/awesome-feature`)
6. Open a Pull Request

---

## License

This project is open source and available under the MIT License.

---

## About the Developer

**Rakesh** - AI & Data Science Enthusiast

Passionate about using artificial intelligence to solve real-world problems. Currently exploring the intersection of AI and developer education.

- GitHub: [@Rakesh-ai-ds](https://github.com/Rakesh-ai-ds)
- Project Repository: [AI-Skills-Advisor](https://github.com/Rakesh-ai-ds/AI-Skills-Advisor)

---

## Acknowledgments

Special thanks to:
- **Google Gen AI Exchange Hackathon Team** for organizing this incredible competition
- **Google Gemini** team for providing powerful AI capabilities
- **MEITY Startup Hub & Startup India** for supporting innovation in the developer ecosystem
- **Lovable Platform** for making rapid prototyping possible
- The open source community for the amazing tools and libraries

---

<div align="center">

**Built for Google Gen AI Exchange Hackathon 2024**

![Google Hackathon](https://img.shields.io/badge/Google_Gen_AI_Exchange-2024-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Status](https://img.shields.io/badge/Status-Prototype-FF6B35?style=for-the-badge)
![AI Powered](https://img.shields.io/badge/Powered_by-Google_Gemini-34A853?style=for-the-badge&logo=google&logoColor=white)

</div>
