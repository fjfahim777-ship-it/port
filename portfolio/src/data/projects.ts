import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "bazar-dor",
    name: "Bazar Dor",
    nameBn: "বাজার দর",
    description:
      "Bazar Dor is a Bengali-first web application designed to make essential product prices easier to explore through a user-friendly interface.",
    liveUrl: "https://bazar-dor-dusky-alpha.vercel.app/",
    repoUrl: "https://github.com/fjfahim74/bazar-dor",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "MongoDB",
    ],
    imageSrc: "/images/projects/bazar-dor.png",
    imageAlt: "Screenshot of the Bazar Dor web application",
    placeholderLabel: "Price explorer · বাজার দর",
    placeholderTone: "bg-indigo-50 text-indigo-900",
    overview:
      "Bazar Dor is a full-stack learning project built with Next.js, React, TypeScript, Tailwind CSS and DaisyUI. It uses Better Auth and MongoDB for authentication and data storage, and focuses on presenting essential product prices in a Bengali-first interface.",
    purpose:
      "Prices of everyday products can be hard to follow. This project explores how a clear, Bengali-first interface can make browsing essential product prices simpler for users.",
    features: [
      "Bengali-first interface",
      "User-friendly way to explore essential product prices",
      "Full-stack setup combining a Next.js frontend with Better Auth and MongoDB",
    ],
    role: "Personal full-stack learning project. I used it to practise connecting a frontend interface with authentication and a database.",
    challenges: [
      "Connecting authentication and database functionality with the user interface is a common full-stack challenge, and it was the main area this project let me explore.",
      "Understanding how frontend pages relate to server-side functionality, such as sessions, protected actions and stored data.",
      "Designing an interface that stays clear and approachable for Bengali-speaking users.",
    ],
    learningOutcomes: [
      "Authentication basics with Better Auth",
      "Database integration with MongoDB",
      "How frontend interfaces and server-side code work together in Next.js",
      "Building with TypeScript, Tailwind CSS and DaisyUI",
    ],
    futureImprovements: [
      "Better usability and navigation",
      "Expanded product information",
      "Further refinement of data handling",
    ],
  },
  {
    slug: "anti-kuddus-protocol",
    name: "Anti-Kuddus Protocol",
    description:
      "Anti-Kuddus Protocol is a digital classroom governance project developed for a hackathon. It aims to provide useful digital tools for classroom transparency, student support, and reporting.",
    liveUrl: "https://lnkd.in/gD3dP8UP",
    repoUrl: "https://lnkd.in/gEdJ8Q25",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "Firebase Authentication",
      "Firestore",
      "Netlify Functions",
      "Google Gemini API",
      "Git",
      "GitHub",
      "Netlify",
    ],
    imageSrc: "/images/projects/anti-kuddus-protocol.png",
    imageAlt: "Screenshot of the Anti-Kuddus Protocol web application",
    placeholderLabel: "Classroom governance",
    placeholderTone: "bg-slate-100 text-slate-900",
    overview:
      "Anti-Kuddus Protocol is a digital classroom governance project developed for the BAIUST CSE Fest Spring 2026 Hackathon. It combines several tools for classroom transparency, student support and reporting, built with HTML5, CSS3, JavaScript, Firebase and Netlify Functions, with the Google Gemini API powering the study assistant.",
    purpose:
      "The project aims to give classrooms useful digital tools for transparency, student support and reporting.",
    features: [
      "Anonymous Complaint System",
      "AI Study Assistant using Google Gemini",
      "Smart Seat Planner",
      "SOS Emergency Alert System",
      "Rule Checker",
      "Corruption Ledger",
    ],
    role: "Team Leader of team Algonova.",
    challenges: [
      "Bringing several different tools together into one classroom governance idea during a hackathon.",
      "Working with Firebase Authentication and Firestore, and using Netlify Functions to connect to the Google Gemini API.",
      "Coordinating a team: planning, sharing work and staying focused as team leader.",
      "Persistence. Our team had setbacks in earlier competitions, kept improving, and returned to win.",
    ],
    learningOutcomes: [
      "Leading a small team through a hackathon project",
      "Building with plain HTML, CSS and JavaScript plus Firebase services",
      "Using serverless functions on Netlify with an AI API",
      "Teamwork, persistence and learning from earlier results",
    ],
    futureImprovements: [
      "Further polish and testing of each tool",
      "Improved accessibility and mobile experience",
      "Gathering feedback from real classroom users",
    ],
    award: {
      title: "Champion, Junior Category",
      details: "BAIUST CSE Fest Spring 2026 Hackathon · Team Algonova",
    },
  },
  {
    slug: "fitlog",
    name: "FitLog",
    description:
      "FitLog is a responsive workout library and planning application that helps users explore workouts and organize their daily exercise plans.",
    liveUrl: "https://lnkd.in/gpc7KKm6",
    repoUrl: "https://lnkd.in/g68tJG77",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React-Toastify",
    ],
    imageSrc: "/images/projects/fitlog.png",
    imageAlt: "Screenshot of the FitLog workout planning application",
    placeholderLabel: "Workout planner",
    placeholderTone: "bg-sky-50 text-sky-900",
    overview:
      "FitLog is a responsive workout library and planning application built with Next.js, React, TypeScript, Tailwind CSS and DaisyUI, with React-Toastify for notifications.",
    purpose:
      "FitLog helps users explore workouts and organize their daily exercise plans in one place.",
    features: [
      "Browse and filter workout exercises",
      "View detailed workout instructions",
      "Create a daily plan with up to five workouts",
      "Save workouts for later",
      "Mark workouts as completed and manage the plan",
      "Sort workouts by duration, calories, or rating",
      "Responsive layouts for mobile, tablet, and desktop",
    ],
    role: "Personal project used to practise interactive frontend development with Next.js.",
    challenges: [
      "Managing state for a daily plan, saved workouts and completed workouts.",
      "Combining filtering and sorting so the workout list stays easy to use.",
      "Using dynamic routing for workout detail pages.",
      "Keeping layouts usable across mobile, tablet and desktop screens.",
    ],
    learningOutcomes: [
      "Next.js App Router",
      "Dynamic routing",
      "Reusable components",
      "State management",
      "Responsive web design",
      "Interactive frontend development",
    ],
    futureImprovements: [
      "More workouts and categories",
      "Progress tracking over time",
      "Further accessibility and usability refinement",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
