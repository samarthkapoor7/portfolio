import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I'm a result-oriented full stack and AI developer with hands-on experience building AI voice agents, LLM-powered workflows, and scalable SaaS products. Proficient in LangGraph, OpenAI integrations, real-time systems, and ML inference pipelines with XGBoost. I'm passionate about shipping high-performance, user-focused applications with measurable business impact.`;

export const ABOUT_TEXT = `Full-stack developer focused on building AI voice agents, LLM-powered workflows, and scalable SaaS products. Experienced with LangGraph, OpenAI integrations, and real-time systems, along with ML inference pipelines using XGBoost. Comfortable across the stack with React, Next.js, Node.js, PostgreSQL, and MongoDB, deploying on GCP and using Convex for real-time data. Have built and shipped voice agent platforms using Exotel, Twilio, Deepgram, Cartesia, and Hume AI for natural, real-time conversational experiences.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - present",
    role: "SDE-1",
    company: "Repaio",
    description: `Building real-time AI voice agents using Exotel, Twilio, Deepgram, Cartesia, and Hume AI, with conversational logic orchestrated through LangGraph and OpenAI function calling. Rebuilt the company's outbound calling platform end-to-end, including backend APIs, campaign orchestration, and dynamic variable mapping for B2B clients across banking, NBFC, and fintech. Also designed and built an Attendance & Leave Management System from the ground up on the company's CRM platform.`,
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "LangGraph",
      "OpenAI",
      "Deepgram",
      "Twilio",
      "GCP",
    ],
  },
  {
    year: "Mar 2025 - May 2025",
    role: "Full-stack Intern",
    company: "Bioquix",
    description: `Designed and built the Agentic platform UI with features like a workflow editor, AI-powered chat, analytics dashboard, and protein editor using 3Dmol.js. Defined the design system for consistent UX, implemented authentication with Supabase, and delivered production-ready code in fast iteration cycles. Also contributed to the Bioquix main website, enhancing responsiveness and user experience.`,
    technologies: [
      "React",
      "Figma",
      "TailwindCSS",
      "Supabase",
      "FastAPI",
      "ReactFlow",
      "3Dmol.js",
      "GSAP",
      "Git",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Beacon",
    image: project2,
    description:
      "A predictive dependency health SaaS that scans GitHub repositories, analyzes 6 signal categories per package, and forecasts abandonment 60-90 days in advance using XGBoost. Features a decoupled async pipeline with real-time onboarding progress and a dashboard with animated health scores, survival curves, and AI-generated migration recommendations.",
    technologies: [
      "Next.js",
      "Node.js",
      "Python",
      "BullMQ",
      "Redis",
      "PostgreSQL",
      "XGBoost",
    ],
    link: "https://beacon.forgefastlabs.com",
  },
  {
    title: "Podcastr",
    image: project1,
    description:
      "A podcast platform that boosts user engagement through personalized authentication, AI-generated audio and thumbnails, and an improved user experience with enhanced form management and interactive features like a sticky podcast player.",
    technologies: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Open-AI",
      "Convex",
    ],
    link: "https://podcastr-six-gamma.vercel.app/",
  },
  {
    title: "AI Voice Agent",
    image: project3,
    description:
      "A real-time AI voice agent enabling natural two-way phone conversations with sub-1.2s response latency. Built using Twilio for telephony, OpenAI for dialogue generation, Deepgram for real-time speech-to-text, and Hume AI's TTS engine for emotionally expressive voice responses.",
    technologies: ["Twilio", "OpenAI", "Deepgram", "Hume AI"],
    link: "https://github.com/samarthkapoor7/ai-call",
  },
];

export const CONTACT = {
  address: "Bengaluru, Karnataka",
  email: "kapoorsamarth7@gmail.com",
};
