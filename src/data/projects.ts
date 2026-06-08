export type Project = {
  title: string;
  description: string;
  problem: string;
  features: string[];
  techStack: string[];
  image: string;
  liveDemo: string;
  github: string;
  impact?: string;
};

export const projects: Project[] = [
  {
    title: "RecruitAI",
    description:
      "AI-powered resume screening system that screens hundreds of resumes instantly with semantic matching and deep insights.",
    problem:
      "Manual resume screening is slow and inconsistent for high-volume hiring workflows.",
    features: [
      "Semantic resume matching with AI",
      "Bulk screening dashboard",
      "Deep candidate insights",
      "REST API architecture",
    ],
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenRouter API",
      "Framer Motion",
    ],
    image: "/images/recruitai-screenshot.png",
    liveDemo: "https://resume-matcher-frontend-eight.vercel.app",
    github: "https://github.com/Saksham-Joshi856",
    impact: "Screens hundreds of resumes instantly with semantic matching.",
  },
  {
    title: "Maanavta Hitaay",
    description:
      "NGO website with secure donation integration, instant receipts, and 80G tax benefit support using Razorpay.",
    problem:
      "The NGO needed a trustworthy digital platform to accept donations and issue compliant receipts.",
    features: [
      "Razorpay payment integration",
      "Automated donation receipts",
      "80G tax benefit support",
      "Responsive public website",
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Razorpay Integration",
      "Responsive Design",
      "Node.js Backend",
    ],
    image: "/images/maanavta-screenshot.png",
    liveDemo: "https://maanavtahitaay.org/",
    github: "https://github.com/Saksham-Joshi856",
    impact: "Enabled secure online donations with instant receipt generation.",
  },
];
