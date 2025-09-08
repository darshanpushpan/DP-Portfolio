
import {
  logo,
  bellmedia,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Security Analyst",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "Security Software Developer",
    icon: backend,
  },
  {
    title: "IT Support Specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Cyber Security Specialist Intern",
    company_name: "Bell Media",
    icon: bellmedia,
    iconBg: "#383E56",
    date: "May 2024 – Aug 2024",
    points: [
      "Configured and optimized Nessus and Burp Suite to scan 25+ web applications, reducing vulnerabilities by 30% through OWASP-aligned remediation.",
      "Monitored and analyzed network traffic with Wireshark, escalating incidents to SOC teams to support rapid response.",
      "Developed Python scripts to automate vulnerability testing, streamlining security workflows and enhancing efficiency.",
      "Collaborated with infrastructure and development teams to document procedures, ensuring consistent security practices.",
    ],
  },
  {
    title: "Cyber Security Intern",
    company_name: "Bell Media",
    icon: bellmedia,
    iconBg: "#383E56",
    date: "May 2023 – Aug 2023",
    points: [
      "Built Python/Bash scripts to automate security control deployment for 50+ servers, improving system reliability and operational efficiency.",
      "Tuned security alerts in SIEM tools, reducing false positives and supporting NIST-compliant incident response runbooks.",
      "Investigated suspicious emails, enhancing email security processes through detailed analysis and stakeholder coordination.",
      "Documented technical workflows, contributing to a centralized knowledgebase for security operations.",
    ],
  },
];

const educations = [
  {
    title: "Bachelor of Science, Specialist in Computer Science",
    company_name: "Trent University",
    icon: bellmedia,
    iconBg: "#383E56",
    date: "May 2022 – April 2025",
    points: [
      "Peterborough, ON",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Darshan proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a developer who truly cares about their clients' success like Darshan does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Darshan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "ATS Software Simulator",
    description:
      "React app that parses and analyzes DOCX resumes for ATS compatibility, extracting Work Experience, Education, Skills, and Projects. Built with Tailwind CSS and mammoth for accurate parsing and a user-friendly preview.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "white-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "mammoth", color: "green-text-gradient" },
      { name: "webpack", color: "blue-text-gradient" },
      { name: "python", color: "white-text-gradient" },
    ],
    image: project2,
    source_code_link: "",
  },
  {
    name: "Automated Vulnerability Scanner",
    description:
      "Python-based scanner integrating SQLmap and custom scripts to detect OWASP Top 10 issues. Generates reports with severity rankings and remediation steps; benchmarked against Metasploitable/DVWA and cross-verified via manual testing.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "sqlmap", color: "white-text-gradient" },
      { name: "owasp-zap", color: "pink-text-gradient" },
      { name: "metasploit", color: "green-text-gradient" },
    ],
    image: project3,
    source_code_link: "",
  },
  {
    name: "Raspberry Pi Local Cloud Server",
    description:
      "Configured a Raspberry Pi 4 to host a Nextcloud server with an external drive for secure file storage and sync. Installed Apache, PHP, and MariaDB, optimized performance, integrated storage via fstab, and secured with HTTPS (Let’s Encrypt) and UFW firewall for remote access.",
    tags: [
      { name: "raspberry-pi", color: "blue-text-gradient" },
      { name: "nextcloud", color: "white-text-gradient" },
      { name: "apache", color: "pink-text-gradient" },
      { name: "php", color: "green-text-gradient" },
      { name: "mariadb", color: "blue-text-gradient" },
      { name: "lets-encrypt", color: "white-text-gradient" },
      { name: "ufw", color: "pink-text-gradient" },
    ],
    image: gearXpert,
    source_code_link: "",
  },
];

export { services, technologies, experiences, educations, testimonials, projects };
