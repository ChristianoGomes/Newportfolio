"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After studying {" "}
        <span className="font-medium">Psychology</span>, I decided to pursue my
        passion for programming. I enrolled in Codecademy, Freecodecamp & learned{" "}
        <span className="font-medium">Front-end web development</span>.{" "}
        <span className="italic">there are many aspects I enjoy about programming</span> my top two
       are problem-solving & creative freedom it provides. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem or building a beautiful interface. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Tailwind CSS, and Node.js
        </span>
        . I am also familiar with TypeScript and Prisma. I am eager to
        learn new technologies & on my way to a full stack certification. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not immersed in lines of code</span>, you can find me at the beach with my english bulldog,
         at the gym pumping iron, or at a local music event. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning {" "}
        <span className="font-medium">Three.js </span>.
      </p>
    </motion.section>
  );
}
