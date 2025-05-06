import { meta, shopify, starbucks, tesla, iiit } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

// Since Python icon is not available in the assets, we'll use JavaScript as a placeholder
// Replace this with actual Python icon when available
const python = javascript;

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    }
];

export const experiences = [
    {
        title: "BTech Undergraduate",
        company_name: "IIIT Bhubaneswar",
        icon: iiit,
        iconBg: "#003366",
        date: "2024 - Present",
        points: [
            "Pursuing B.Tech in Computer Science.",
            "Interested in system design, AI-ML, and web development.",
            "Learning and implementing web development technologies including React.js.",
            "Developing skills in data structures and algorithms.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/gorakhnathsamal',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/gorakhnathsamal',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'JotDown',
        description: 'AI-powered note taking webapp that helps users organize, summarize, and enhance their notes with intelligent suggestions and formatting.',
        link: 'https://github.com/gorakhnathsamal/jotdown',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-green',
        name: 'AniBuddies',
        description: 'A comprehensive platform for reporting and tracking stray animals, connecting rescuers with shelters, and facilitating adoption processes.',
        link: 'https://github.com/gorakhnathsamal/anibuddies',
    },
    {
        iconUrl: car,
        theme: 'btn-back-yellow',
        name: 'StudyFlow',
        description: 'AI-powered study assistant that helps students organize study materials, create flashcards, and generate practice questions for exams.',
        link: 'https://github.com/gorakhnathsamal/studyflow',
    }
];