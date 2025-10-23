import { 
  Code2,
  Globe2,
  Calendar,
  GraduationCap,
  Heart
} from 'lucide-react';

import { IconType } from "react-icons";
import { SiReact, SiDjango, SiTailwindcss, SiRedux, SiStripe, SiJavascript, SiExpress, SiTypescript, SiShadcnui } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri"


export interface Tag {
  id: number;
  name: string;
  Icon: IconType;
  color: {
    light: string;
    dark: string;
  };
}

export interface Project {
  id: number;
  title: string;
  timeline: string;
  description: string;
  subDescription: string[];
  githubLink?: string;
  href?: string;
  video?: string;
  liveURL?: string;
  tags: Tag[];
}

export const icons = [
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Node.js' },
  { name: 'Tailwind CSS' },
  { name: 'PostgreSQL' },
  { name: 'MongoDB' },
  { name: 'GraphQL' },
  { name: 'AWS' },
  { name: 'Docker' },
  { name: 'Git' },
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'HTML5' },
  { name: 'CSS3' },
];

export const terminalCommands = [
  { command: 'npm create next-app@latest', description: 'Initialize Next.js project' },
  { command: 'npx shadcn@latest add button', description: 'Add shadcn/ui component' },
  { command: 'git push origin main', description: 'Deploy to production' },
  { command: 'npm run build', description: 'Build for production' },
];

export const globeLocations = [
  { lat: 40.7128, lng: -74.006, size: 0.05 },  
  { lat: 51.5074, lng: -0.1278, size: 0.05 },  
  { lat: 35.6762, lng: 139.6503, size: 0.05 },  
  { lat: 37.7749, lng: -122.4194, size: 0.05 }, 
  { lat: 1.3521, lng: 103.8198, size: 0.05 },   
];

export const experienceItems = [
  { title: 'Full Stack Developer', subtitle: '2021 - Present' },
  { title: 'Frontend Specialist', subtitle: '2019 - 2021' },
  { title: '3+ Years Experience', subtitle: 'Web Development' },
];

export const educationItems = [
  { title: 'Computer Science', subtitle: 'University of Technology' },
  { title: 'AWS Certified', subtitle: 'Cloud Practitioner' },
  { title: 'React Specialist', subtitle: 'Advanced Concepts' },
];

export const philosophyItems = [
  { title: 'Clean Code', subtitle: 'Writing maintainable, scalable, and efficient code' },
  { title: 'User Experience', subtitle: 'Creating intuitive and delightful UIs' },
  { title: 'Continuous Learning', subtitle: 'Always exploring new technologies' },
];

export const cardIcons = {
  stack: Code2,
  globe: Globe2,
  calendar: Calendar,
  graduation: GraduationCap,
  heart: Heart
};

// ========================== Projects ===========================
export const myProjects: Project[] = [
  {
    id: 1,
    title: "Eventra BD",
    timeline: "July - August, 2025",
    description:
      "Developed a dynamic multi-seller event management platform that allows organizers to create and manage events, upload galleries, add services, and handle bookings while users can explore and review events seamlessly.",
    subDescription: [
      "Event management system built with React & DRF.",
      "Role-based JWT authentication for sellers and customers.",
      "Event creation, service management, and reviews.",
    ],
    githubLink: "https://github.com/SayedAnwar-07/eventrabd_backend",
    liveURL: "https://eventrabd.netlify.app",
    video: "/EventraBD.mp4",
    tags: [
      { id: 1, name: "", Icon: SiReact, color: { light: "#61dafb", dark: "#155dfc" } },
      { id: 2, name: "", Icon: SiDjango, color: { light: "#092E20", dark: "#0d3c2c" } },
      { id: 3, name: "", Icon: SiTailwindcss, color: { light: "#38BDF8", dark: "#0ea5e9" } },
      { id: 4, name: "", Icon: SiRedux, color: { light: "#764abc", dark: "#5c35a5" } },
    ]
  },
  {
    id: 2,
    title: "The Medhakosh - Online Learning Platform",
    timeline: "May - June, 2025",
    description:
      "Developed a full-featured online learning platform enabling students to enroll and track courses, and teachers to manage content with ease.",
    subDescription: [
        "Online learning platform with React & Django.",
        "JWT authentication with roles.",
        "State managed with Redux Toolkit & Zod.",
      ],
    githubLink: "https://github.com/SayedAnwar-07/LMS_projects",
    liveURL: "https://the-medhakosh.netlify.app",
    video: "/LMS.mp4",
    tags: [
      { id: 1, name: "", Icon: SiReact, color: { light: "#61dafb", dark: "#155dfc" } },
      { id: 2, name: "", Icon: SiDjango, color: { light: "#092E20", dark: "#0d3c2c" } },
      { id: 3, name: "", Icon: SiTailwindcss, color: { light: "#38BDF8", dark: "#0ea5e9" } },
      { id: 4, name: "", Icon: SiRedux, color: { light: "#764abc", dark: "#5c35a5" } },
      { id: 5, name: "", Icon: SiStripe, color: { light: "#635bff", dark: "#5248cc" } },
    ],
  },
  {
    id: 3,
    title: "NeonStich (Cloths E-commerce)",
    timeline: "December - January, 2024",
    description:
      "Built a feature-rich clothing e-commerce platform using the MERN stack with RESTful APIs for product and cart management.",
    subDescription: [
      "Clothing e-commerce platform with MERN stack.",
      "JWT-based user authentication and roles.",
      "Stripe payments and order tracking.",
    ],
    githubLink: "https://github.com/SayedAnwar-07/NeonStich",
    liveURL: "https://neonstich.netlify.app",
    video: "/neonstich.mp4",
    tags: [
      { id: 1, name: "", Icon: SiReact, color: { light: "#61dafb", dark: "#155dfc" } },
      { id: 2, name: "", Icon: SiJavascript, color: { light: "#f7df1e", dark: "#e6d60b" } },
      { id: 3, name: "", Icon: SiExpress, color: { light: "#000000", dark: "#ffffff" } },
      { id: 4, name: "", Icon: SiTailwindcss, color: { light: "#38BDF8", dark: "#0ea5e9" } },
      { id: 5, name: "", Icon: SiStripe, color: { light: "#0085d1", dark: "#0085d1" } },
    ],
  },
 {
    id: 4,
    title: "Integritrade LLC",
    timeline: "August - September, 2025",
    description:
      "Professional ITAD & Electronic Recycling Services. Secure, compliant, and environmentally responsible IT asset disposition and electronic recycling solutions for businesses of all sizes.",
    subDescription: [
      "ITAD & electronic recycling platform with secure asset management.",
      "Compliant with industry standards for data destruction and recycling.",
      "Supports businesses of all sizes with eco-friendly solutions.",
    ],
    href: "https://integritradellc.com",
    liveURL: "https://integritradellc.com",
    video: "/integritrade_llc.mp4", 
    tags: [
      { id: 1, name: "", Icon: RiNextjsFill, color: { light: "#000", dark: "#000" } },
      { id: 2, name: "", Icon: SiTypescript, color: { light: "#0085d1", dark: "#0085d1" } },
      { id: 3, name: "", Icon: SiShadcnui, color: { light: "#000000", dark: "#ffffff" } },
      { id: 4, name: "", Icon: SiTailwindcss, color: { light: "#38BDF8", dark: "#0ea5e9" } },
    ],
  }
];

// ========================== Experiences ===========================
export const experiences = [
  {
    id: 0,
    img: "/assets/logos/ostad.png",
    job: "Fullstack Engineer",
    title: "Ostad",
    date: "November 2024 - June 2025",
    course: "Full Stack Web Development with Python, Django & React",
    contents: [
      "Completed a comprehensive Full Stack Web Development course at Ostad.",
      "Specialized in HTML, CSS, SQL, Bootstrap, Python, Django, and React.",
      "Gained hands-on experience in building dynamic web applications, RESTful APIs, and database management.",
      "Developed a strong foundation in frontend and backend technologies."
    ],
    skills: ["Python", "ReactJS", "JavaScript", "Bootstrap", "HTML", "CSS", "MySQL", "Django", "RESTful APIs"],
  },
  {
    id: 1,
    img: "/assets/logos/ph.png",
    job: "Fullstack Developer",
    title: "Programming Hero",
    date: "December 2023 - June 2024",
    course: "MERN Stack Course",
    contents: [
      "Completed a comprehensive MERN Stack course at Programming Hero.",
      "Built web apps using MongoDB, Express.js, React.js, and Node.js.",
      "Strong foundation in RESTful APIs, database management, and responsive design."
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      "@tanstack/react-query",
    ],
  },
  {
    id: 2,
    img: "/assets/logos/sb.png",
    job: "HTML, CSS & Bootstrap",
    title: "SoroBindu",
    date: "September 2023 - December 2023",
    course: "HTML, CSS & Bootstrap basic to advanced",
    contents: [
      "Completed a full course in HTML, CSS, and Bootstrap at SoroBindu.",
      "Focused on responsive web design and user-friendly UI techniques.",
      "Strong frontend foundation including layout, styling, and design best practices."
    ],
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Responsive Design",
      "Web Development",
      "Frontend Development",
      "Web Design",
    ],
  },
];