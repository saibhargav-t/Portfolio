import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export const content = {
  hero: {
    name: "Sai Bhargav Thummalapalli",
    role: "Java Developer & Full Stack Engineer",
    tagline: "Crafting scalable payment ecosystems and robust microservices architectures that power modern fintech solutions.",
    cta: "View My Work",
    social: [
      { icon: FaLinkedin, link: "https://www.linkedin.com/in/saibhargav-t", label: "LinkedIn" },
      { icon: FaGithub, link: "https://github.com/saibhargav-t", label: "GitHub" },
      { icon: SiLeetcode, link: "https://leetcode.com/problemset/", label: "LeetCode" },
      { icon: FaEnvelope, link: "mailto:saibhargavt@outlook.com", label: "Email" },
    ]
  },
  about: {
    title: "About Me",
    description: "I am a passionate Java Developer with a knack for building high-performance, scalable systems. With deep expertise in Spring Boot, AWS, and Microservices, I specialize in solving complex backend challenges, particularly in the fintech domain. My approach combines rigorous engineering standards with a focus on delivering tangible business value.",
    skills: [
      { category: "Languages", items: ["Java (Advanced)", "JavaScript", "HTML/CSS", "SQL"] },
      { category: "Frameworks", items: ["Spring Boot", "Hibernate", "React", "JUnit", "Mockito", "Apache Struts"] },
      { category: "Cloud & DB", items: ["AWS", "GCP", "Azure", "MySQL", "MongoDB", "PostgreSQL", "Redis", "Cassandra"] },
      { category: "DevOps & Tools", items: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Git", "Kafka", "GraphQL"] },
    ]
  },
  experience: {
    title: "Work Experience",
    jobs: [
      {
        company: "HulkHire Tech",
        role: "Java Developer Trainee",
        period: "Jun 2025 – Aug 2025",
        description: "Spearheaded the development of a critical Payment Integration System, acting as the middleware backbone for 50+ merchants and multiple Payment Service Providers (PSPs).",
        achievements: [
          "Engineered a high-throughput system capable of processing 10,000+ daily transactions, reducing processing complexity by 65%.",
          "Streamlined merchant onboarding workflows, slashing integration time from 2 weeks to just 3 days (78% efficiency gain).",
          "Optimized operational efficiency by 85%, enabling cross-functional teams to focus on core business logic rather than maintenance.",
          "Recognized as a STAR Performer for exceptional delivery speed and technical excellence."
        ]
      },
      {
        company: "I8I Esports",
        role: "Co-Founder & Operations Manager",
        period: "Sep 2023 – Jun 2025",
        description: "Co-founded and managed operations for an esports platform, overseeing team coordination, project timelines, and platform launches.",
        achievements: [
          "Improved operational efficiency by 30% by streamlining workflows and automating routine tasks.",
          "Built scalable processes for tournament organization, customer support, and user onboarding.",
          "Collaborated with cross-functional teams to scale the user base and maintain high service quality."
        ]
      },
      {
        company: "Epam India",
        role: "Cloud & DevOps Intern",
        period: "Jan 2023 – May 2023",
        description: "Architected and deployed scalable web applications on AWS, implementing CI/CD pipelines and Infrastructure as Code (IaC).",
        achievements: [
          "Designed CI/CD pipelines using Jenkins and Docker, reducing manual intervention and accelerating delivery cycles.",
          "Implemented IaC using Terraform to automate cloud resource provisioning and ensure consistent environments.",
          "Deployed scalable applications on AWS EC2 with Application Load Balancers for high availability."
        ]
      }
    ]
  },
  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "Core Payment Integration System",
        description: "A robust, secure payment processing engine built on a microservices architecture. It orchestrates validation, processing, and provider communication with bank-grade security standards.",
        tech: ["Spring Boot", "Spring Security", "MySQL", "AWS", "JUnit"],
        link: "https://github.com/saibhargav-t",
        period: "Jun 2025 – Aug 2025"
      },
      {
        title: "Cloud-Native CI/CD Pipeline",
        description: "An automated DevOps pipeline designed to accelerate software delivery. It integrates Docker and Kubernetes for seamless container orchestration and deployment.",
        tech: ["AWS", "Git", "Docker", "Terraform", "Jenkins"],
        link: "https://github.com/saibhargav-t/CI-CD-Pipeline-Using-Cloud-and-DevOps",
        period: "Jan 2025 – Mar 2025"
      },
      {
        title: "Enterprise Employee Management",
        description: "A comprehensive system for managing workforce data, featuring secure authentication and RESTful API integration.",
        tech: ["Java", "Spring Boot"],
        link: "https://github.com/saibhargav-t/EmployeeManagementSpring-Basic",
        period: "Recent"
      }
    ]
  },
  certifications: {
    title: "Certifications & Continuous Learning",
    description: "During my career gap, I dedicated myself to intensive upskilling, following a structured learning path from core fundamentals to advanced cloud-native architectures.",
    items: [
      {
        title: "Core Java Made Easy",
        issuer: "Udemy",
        date: "",
        link: "https://www.udemy.com/certificate/UC-4528468e-7df2-4e71-93ff-f33bb00616cc/",
        description: "Mastered Java fundamentals, OOP principles, and exception handling.",
        skills: ["OOPs", "Collections", "Multithreading"]
      },
      {
        title: "JDBC Servlets and JSP",
        issuer: "Udemy",
        date: "",
        link: "https://www.udemy.com/certificate/UC-7b093847-ce0b-4a35-ab23-59161e713f74/",
        description: "Built dynamic web apps using Servlets, JSP, and MVC architecture.",
        skills: ["JDBC", "Servlet Lifecycle", "JSP Tags"]
      },
      {
        title: "Spring Boot 3, Spring 6 & Hibernate",
        issuer: "Udemy",
        date: "",
        link: "https://www.udemy.com/certificate/UC-dea95ece-1825-40d9-b1e0-4e6141fc0ad3/",
        description: "Deep dive into dependency injection, REST APIs, and ORM.",
        skills: ["Spring Boot", "REST APIs", "Hibernate"]
      },
      {
        title: "The Ultimate MySQL Bootcamp",
        issuer: "Udemy",
        date: "",
        link: "https://www.udemy.com/certificate/UC-ae97b6e3-e8a8-4387-993c-e47b6a4ec4df/",
        description: "Advanced SQL querying, database design, and performance tuning.",
        skills: ["Complex Queries", "Normalization", "Indexing"]
      },
      {
        title: "Linux Command Line Bootcamp",
        issuer: "Udemy",
        date: "",
        link: "https://www.udemy.com/certificate/UC-fa940ac8-356e-439a-939a-4d2d472ac91d/",
        description: "Proficiency in Linux file systems, permissions, and bash scripting.",
        skills: ["Bash Scripting", "File Systems", "Permissions"]
      },
      {
        title: "DevOps MasterClass",
        issuer: "Udemy",
        date: "Ongoing",
        link: "", 
        description: "Mastering Terraform, Kubernetes, Ansible, and Docker for modern DevOps practices.",
        skills: ["Docker", "Kubernetes", "Terraform", "Ansible"]
      }
    ]
  },
  education: {
    title: "Education",
    items: [
      {
        institution: "Lovely Professional University",
        degree: "B.Tech in Computer Science",
        period: "2019 – 2023",
        score: "7.28 CGPA"
      },
      {
        institution: "Sri Chaitanya Junior College",
        degree: "MPC",
        period: "2017 – 2019",
        score: "9.5 CGPA"
      }
    ]
  },
  contact: {
    title: "Get In Touch",
    email: "saibhargavt@outlook.com",
    phone: "+91 9515208812",
    location: "Hyderabad, Telangana",
    careerGapNote: "Why Hire Me? I believe in turning challenges into opportunities. My recent career gap was a conscious decision to bridge the gap between academic knowledge and industry demands. I used this time to rigorously upskill in Cloud Computing, DevOps, and Advanced Java, building production-grade projects to prove my competency. I am now more ready than ever to deliver immediate value.",
    roles: [
      "Java Backend Developer",
      "Full Stack Engineer",
      "Software Development Engineer (SDE)",
      "Cloud/DevOps Engineer"
    ]
  }
};
