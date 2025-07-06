// AI Assistant Knowledge Base
export const portfolioKnowledge = {
  // Personal Information
  developer: {
    name: "Shaurya Sood",
    role: "Full Stack Developer",
    experience: "3+ years",
    location: "India",
    specialization: ["React", "Node.js", "Three.js", "AI/ML"]
  },

  // Skills and Technologies
  skills: {
    frontend: {
      expert: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      advanced: ["Three.js", "React Three Fiber", "TypeScript", "Redux"],
      intermediate: ["Vue.js", "Angular", "SASS", "Bootstrap"]
    },
    backend: {
      expert: ["Node.js", "Express.js", "MongoDB"],
      advanced: ["PostgreSQL", "Redis", "JWT Authentication"],
      intermediate: ["Python", "Django", "MySQL", "GraphQL"]
    },
    tools: {
      expert: ["Git", "VS Code", "Chrome DevTools"],
      advanced: ["Docker", "AWS", "Firebase", "Vercel"],
      intermediate: ["Jenkins", "Kubernetes", "Linux"]
    },
    aiml: {
      advanced: ["TensorFlow", "Machine Learning", "Data Analysis"],
      intermediate: ["Python AI Libraries", "Computer Vision"]
    }
  },

  // Projects
  projects: {
    "91springboard": {
      title: "91Springboard Mobile App",
      type: "Enterprise Client Work",
      description: "Cross-platform coworking space management app",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      metrics: "60K+ users, 29K+ organizations",
      features: ["Real-time booking", "Payment integration", "Community features"],
      impact: "Revolutionized coworking space management across India"
    },
    "codecrack": {
      title: "CodeCrack",
      type: "Competitive Coding Platform",
      description: "Gamified coding platform with real-time execution",
      technologies: ["React", "Node.js", "Docker", "WebSocket"],
      features: ["Multi-language support", "1v1 battles", "Real-time compilation"],
      impact: "Enhanced developer learning through gamification"
    },
    "payway": {
      title: "PayWay",
      type: "Fintech Platform",
      description: "P2P payment system with bank integration",
      technologies: ["React", "Node.js", "PostgreSQL", "Payment APIs"],
      features: ["Bank integration", "Real-time transactions", "Security"],
      impact: "Simplified digital payments for users"
    },
    "chatio": {
      title: "ChatIo",
      type: "Real-time Messaging Platform",
      description: "WhatsApp-like messaging application",
      technologies: ["React", "Node.js", "Socket.io", "Google OAuth"],
      features: ["Real-time messaging", "Media sharing", "Group chats"],
      impact: "Seamless communication platform"
    }
  },

  // Experience
  experience: {
    total: "3+ years of professional development",
    highlights: [
      "Enterprise client work with 60K+ user impact",
      "Full-stack development across multiple domains",
      "3D web development expertise",
      "Multilingual application development"
    ],
    industries: ["Coworking", "Fintech", "Gaming", "Communication"]
  },

  // Portfolio Features
  portfolio: {
    technologies: ["React", "Three.js", "Tailwind CSS", "EmailJS"],
    features: [
      "Interactive 3D island scene",
      "Dark/Light theme with 3D environment changes",
      "Bilingual support (English/Hindi)",
      "Responsive design",
      "Animated 3D models",
      "Contact form integration"
    ],
    uniqueness: "One of the few portfolios with full 3D interaction and bilingual AI assistant"
  }
};

// Response templates for different question types
export const responseTemplates = {
  greeting: [
    "Hello! I'm your AI assistant. I can tell you everything about Shaurya's skills, projects, and experience. What would you like to know?",
    "Hi there! I'm here to help you learn about Shaurya Sood's portfolio. Feel free to ask about his projects, skills, or experience!",
    "Welcome! I'm the AI assistant for this portfolio. Ask me anything about Shaurya's development journey!"
  ],
  
  skills: [
    "Shaurya has expertise in {skill}. Would you like to know more about specific projects using this technology?",
    "Yes, {skill} is one of Shaurya's strong areas. He has {level} proficiency in it.",
    "Great question! Shaurya uses {skill} professionally. Let me tell you about his experience with it."
  ],
  
  projects: [
    "That's an excellent project! {project} showcases Shaurya's ability in {technologies}. Would you like to know more details?",
    "{project} is a great example of Shaurya's work. It has {impact} and uses cutting-edge technologies.",
    "I'd love to tell you about {project}! It's one of the standout projects in the portfolio."
  ],
  
  general: [
    "That's an interesting question! Let me share what I know about that.",
    "Great question! Based on Shaurya's portfolio, here's what I can tell you:",
    "I'd be happy to help with that! Here's the information you're looking for:"
  ]
};

// Question categorization patterns
export const questionPatterns = {
  skills: [
    /skills?/i, /technology/i, /technologies/i, /programming/i, /coding/i,
    /frontend/i, /backend/i, /fullstack/i, /react/i, /javascript/i, /node/i,
    /three\.?js/i, /3d/i, /tools/i, /framework/i
  ],
  
  projects: [
    /project/i, /work/i, /portfolio/i, /application/i, /app/i, /website/i,
    /91springboard/i, /codecrack/i, /payway/i, /chatio/i, /built/i, /created/i,
    /developed/i, /example/i
  ],
  
  experience: [
    /experience/i, /years/i, /background/i, /career/i, /professional/i,
    /worked/i, /job/i, /employment/i, /history/i
  ],
  
  contact: [
    /contact/i, /hire/i, /email/i, /reach/i, /connect/i, /collaboration/i,
    /available/i, /freelance/i, /opportunity/i
  ],
  
  about: [
    /about/i, /who/i, /person/i, /developer/i, /tell me/i, /know/i, /shaurya/i
  ]
};