export const projects = [
  {
    id: 1,
    title: "AI Customer Request Triage",
    description:
      "Built and deployed an AI-powered customer request automation that uses Gemini to classify and summarize requests, validates structured AI output, stores results in PostgreSQL, and routes high-priority requests to Slack. Developed with Codex using a review-first agentic workflow, with API-key authentication, bounded retries, safe failure handling, and automated tests.",
    stack: [
      "Python",
      "FastAPI",
      "Gemini API",
      "PostgreSQL",
      "Slack API",
      "Pytest",
      "Codex",
    ],
    demoLink: "https://ai-customer-triage.onrender.com",
    demoLabel: "Live Demo",
    githubLink: "https://github.com/thidarr/ai-customer-triage",
  },
  {
    id: 2,
    title: "JobFlow AI",
    description:
      "Built and deployed a full-stack AI-powered job application platform for tracking applications, managing candidate profiles and follow-ups, and analyzing candidate-job fit. Integrated Gemini API for structured match analysis and PostgreSQL for persistent application and AI match data.",
    stack: [
      "Python",
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Gemini API",
      "Tailwind CSS",
    ],
    demoLink: "https://jobflow-ai-xi.vercel.app",
    demoLabel: "Live Demo",
    githubLink: "https://github.com/thidarr/jobflow-ai",
  },

  {
    id: 3,
    title:
      "Segmenting and Predicting Tourist Spending Behavior For Optimized Marketing",
    description:
      "Integrated and preprocessed two tourism datasets using Python to analyze tourist spending behavior. Developed and tuned a Random Forest classifier to segment tourists into high-, medium-, and low-spending groups, achieving 75.57% cross-validation accuracy. Presented at ICTHM 2025.",
    stack: ["Python", "pandas", "Random Forest", "Matplotlib"],
    demoLink: "/tourist_spending_analysis.pdf",
    demoLabel: "View Report",
    githubLink: "https://github.com/thidarr/tourist_spending_analysis",
  },

  {
    id: 4,
    title: "Agent-Based Modeling of Student Productivity & Mental Health",
    description:
      "Built a Python-based agent simulation as part of a team using a Cognitive-Behavioral Resource Framework to analyze how lifestyle factors affect student productivity and mental health. Simulated outcomes over 800 time steps and applied multivariate linear regression to evaluate long-term patterns (R² = 0.4608).",
    stack: [
      "Python",
      "Agent-Based Modeling",
      "Linear Regression",
      "Matplotlib",
    ],
    demoLink: "/Data_Analytics_in_Agent_Based_Modeling.pdf",
    demoLabel: "View Report",
    githubLink:
      "https://github.com/thidarr/Agent-Based-Modeling-of-Student-Productivity-and-Mental-Health",
  },

];