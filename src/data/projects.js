export const PROJECTS = [
  {
    title: "Beacon",
    tagline: "Predictive dependency-health SaaS",
    problem:
      "Teams discover a critical open-source dependency is dying only after it's already breaking their builds — with no early warning.",
    approach:
      "A decoupled async pipeline scans GitHub repositories, analyzes six signal categories per package, and forecasts abandonment 60–90 days ahead with an XGBoost model. Real-time onboarding progress streams over SSE.",
    result:
      "A dashboard with animated health scores, survival curves, and AI-generated migration recommendations — turning maintenance risk into a forecast.",
    technologies: [
      "Next.js",
      "Node.js",
      "Python",
      "BullMQ",
      "Redis",
      "PostgreSQL",
      "XGBoost",
    ],
    links: [{ label: "Live", href: "https://beacon.forgefastlabs.com" }],
  },
  {
    title: "AI Voice Agent",
    tagline: "Real-time conversational telephony",
    problem:
      "Natural two-way phone conversations demand near-instant responses — perceptible lag breaks the illusion of talking to a person.",
    approach:
      "Telephony via Twilio, real-time speech-to-text with Deepgram, dialogue from OpenAI, and emotionally expressive TTS from Hume AI — all streamed to minimize round-trip latency.",
    result:
      "Sub-1.2s response latency with natural, emotionally aware two-way voice conversations over the phone.",
    technologies: ["Twilio", "OpenAI", "Deepgram", "Hume AI"],
    links: [
      { label: "GitHub", href: "https://github.com/samarthkapoor7/ai-call" },
    ],
  },
  {
    title: "Podcastr",
    tagline: "AI-native podcast platform",
    problem:
      "Creating and discovering podcasts is high-friction — from producing audio to keeping listeners engaged across a session.",
    approach:
      "Personalized authentication, AI-generated audio and thumbnails, robust form management, and interactive playback including a sticky global player.",
    result:
      "A smoother end-to-end listening and creation experience that lifts engagement.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI", "Convex"],
    links: [
      { label: "Live", href: "https://podcastr-six-gamma.vercel.app/" },
    ],
  },
];

export const EDUCATION = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "VIT Bhopal University",
  period: "2021 — 2025",
};
