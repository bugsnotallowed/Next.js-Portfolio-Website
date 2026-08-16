export const portfolioData = {
  profile: {
    name: "Adarsh Gupta",
    location: "Mumbai, India",
    headline: "Software Developer",
    summary:
      "Computer Engineering Graduate with experience building full-stack, blockchain, and AI-powered applications.",
  },

  employment: {
    current: true,
    company: "Information Data Systems Pvt Ltd",
    role: "Software Developer Engineer Intern",
    startDate: "2026-01-07",
  },

  education: {
    degree: "B.E. Computer Engineering",
    institution:
      "Fr. Conceicao Rodrigues College of Engineering, Bandra, Mumbai",
    cgpa: "8.0/10.0",
    graduationYear: "2026",
  },

  skills: {
    programming: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C++",
    ],

    frontend: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],

    backend: [
      "Node.js",
      "Express.js",
      "Flask",
      "FastAPI",
    ],

    databases: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
    ],

    blockchain: [
      "Solidity",
      "Hedera Hashgraph",
      "Hedera Consensus Service",
      "Hardhat",
      "Ganache",
    ],

    ai: [
      "LangChain",
      "LangGraph",
      "RAG",
      "ChromaDB",
      "Hugging Face",
      "Agentic AI",
      "Automation",
    ],
  },

  projects: [
    {
      name: "RespiScope",
      description:
        "Smart stethoscope and consultation platform.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "ESP32",
        "WebSockets",
        "Grid FS",
        "Express.js",
      ],
      link: "https://respiscope.netlify.app",
    },
    {
      name: "Agentic RAG Knowledge Base Chat",
      description:
        "AI-powered chat system for intelligent conversation management.",
      technologies: [
        "Next.js",
        "FastAPI",
        "ChromaDB",
        "LangChain",
        "LangGraph",
        "Hugging Face",
      ],
    },
    {
      name: "Blockchain Based Carbon Footprint Tracker",
      description:
        "Blockchain-based solution for tracking and reporting carbon footprint.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Solidity",
        "MetaMask",
        "Blockchain",
        "Web3.js",
      ],
    },

    {
      name: "Hedera Messaging Service",
      description:
        "Blockchain-based messaging application using Hedera Consensus Service.",
      technologies: [
        "Hedera HCS",
        "Node.js",
        "MongoDB",
      ],
    },

    {
      name: "Video Chat Application",
      description:
        "One-to-one video calling application with real-time messaging.",
      technologies: [
        "React",
        "Node.js",
        "WebRTC",
        "Socket.io",
      ],
    },
  ],

  certifications: [
    "Hedera Hashgraph Certification",
    "Hedera Consensus Service Certification",
    "AWS Certified Solutions Architect - Academy Graduate",
    "AWS NLP for ML Certification - Academy Graduate",
    "AWS Cloud Foundations Certification - Academy Graduate",
    "Claude Code in Action Certification - Anthropic AI",
  ],

  achievements: [
    "IEEE-CRCE Council leadership - Seceretary",
    "Organized Prakalp project competition",
    "Selected for MU Pre-Incubation Program",
    "Won Best Dance trophy in college for Class",
  ],
} as const;