import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I'm a result-oriented full stack and AI developer with hands-on experience building AI voice agents, LLM-powered workflows, and scalable SaaS products. Proficient in LangGraph, OpenAI integrations, real-time systems, and ML inference pipelines with XGBoost. I'm passionate about shipping high-performance, user-focused applications with measurable business impact.`;

export const ABOUT_TEXT = `Full-stack developer focused on building AI voice agents, LLM-powered workflows, and scalable SaaS products. Experienced with LangGraph, OpenAI integrations, and real-time systems, along with ML inference pipelines using XGBoost. Comfortable across the stack with React, Next.js, Node.js, PostgreSQL, and MongoDB, deploying on GCP and using Convex for real-time data. Have built and shipped voice agent platforms using Exotel, Twilio, Deepgram, Cartesia, and Hume AI for natural, real-time conversational experiences.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - present",
    role: "SDE-1",
    company: "Repaio",
    description: `Worked on AI voice agents leveraging services like Exotel, Twilio, Deepgram, Cartesia, HumeAI, and OpenAI LLMs to build real-time conversational solutions. Designed and developed an Attendance & Leave Management System from the ground up on the company’s CRM platform, streamlining employee workflows. Contributed to both backend integrations and frontend UI/UX, delivering scalable, production-ready features.`,
    technologies: [
      "React",
      "Node.js",
      "TailwindCSS",
      "PostgreSQL",
      "VoiceAI",
      "Docker",
      "GCP",
      "OpenAI",
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
  {
    year: "Nov 2024 - Jan 2025",
    role: "Front End Developer",
    company: "Unified Mentor",
    description: `Designed and developed responsive web interfaces for industrial projects using FE frameworks. Adhered to agile methodologies to ensure smooth project workflows and iterative improvements.`,
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    year: "Oct 2021 - Nov 2021",
    role: "Graphic Designer",
    company: "Sportsbae",
    description: `Increased social media engagement by 50% during IPL 2021 and grew followers by 20% through targeted campaigns, innovative branding strategies, and leveraging analytics, all while maintaining high-quality standards and consistently meeting tight deadlines to ensure effective project delivery and client satisfaction.`,
    technologies: ["Adobe Photoshop", "After Effects"],
  },
];

export const PROJECTS = [
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
    link: "https://www.podcastrr.me/",
  },
  {
    title: "SaaS Landing Page",
    image: project2,
    description:
      "Engaging and responsive SaaS landing page with smooth animations, fast performance, and a sleek, professional design.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://saas-landing-page-ebon.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://samarthkapoor.tech",
  },
  {
    title: "Zentry Landing Page",
    image: project4,
    description: "Gaming landing page with GSAP animations (sound on)",
    technologies: ["React", "GSAP"],
    link: "https://zentry-iota.vercel.app/",
  },
];

export const CONTACT = {
  address: "Bengaluru, Karnataka",
  email: "kapoorsamarth7@gmail.com",
};
