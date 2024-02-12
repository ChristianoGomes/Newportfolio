import React from "react";

import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import petme from "@/public/petme.png";
import proper from "@/public/proper.png";
import hiking from "@/public/hiking.png";
import realtor from "@/public/realtor.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freecodecamp & Codecademy",
    location: "Miami, FL",
    description:
      "I achieved a professional certification for Front-end engineering as well as responsive web design, libraries & frameworks.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Freelance front-end Developer",
    location: "Miami, FL",
    description:
      "I'm now a front-end developer working as a freelancer. My preferred tech stack includes React, Next.js, TypeScript, Tailwind, and Prisma . I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024",
  }
,
] as const;

export const projectsData = [
  {
    title: "PetMe",
    description:
      "full-stack application with auth that allows users to share, save & like pictures of their pets. I was the front-end developer.",
    tags: ["React", "Typescript", "Tailwind", "Appwrite","CSS", "HTML"],
    imageUrl: petme,
  },
  {
    title: "Hiking App",
    description:
      "A Hiking app landing page mobile friend beautiful design. I was the front-end developer.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "CSS", "HTML"],
    imageUrl: hiking,
  },
  {
    title: "Real Estate website",
    description:
      "mobile-first web for a real estate agent. provides information about the agent, her properties & a fast way for her clients to connect . I was the front-end developer.",
    tags: ["React", "Typescript",  "Next.js", "Tailwind"],
    imageUrl: realtor,
  },
  {
    title: "Fitness App",
    description:
      "A public web app for proper exercise form using API data. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "Javascript",  "CSS", "HTML"],
    imageUrl: proper,
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Tailwind",
  "Prisma",
  "Redux",
  "PostgreSQL",
  "Framer Motion",
] as const;
