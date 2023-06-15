"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const skills = [
  {
    imgSrc: "/skills/javascript.png",
    altText: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    imgSrc: "/skills/reactjs.png",
    altText: "React",
    link: "https://react.dev/",
  },
  {
    imgSrc: "/skills/nextJS.svg",
    altText: "NextJS",
    link: "https://nextjs.org/docs",
  },
  {
    imgSrc: "/skills/mongodb.png",
    altText: "MongoDB",
    link: "https://www.mongodb.com/docs/",
  },
  {
    imgSrc: "/skills/nodejs.png",
    altText: "NodeJS",
    link: "https://nodejs.org/en/docs",
  },
  {
    imgSrc: "/skills/framer-motion.svg",
    altText: "Framer Motion",
    link: "https://www.framer.com/motion/",
  },
  {
    imgSrc: "/skills/tailwind.png",
    altText: "Tailwind",
    link: "https://v2.tailwindcss.com/docs",
  },
  {
    imgSrc: "/skills/git.png",
    altText: "Git",
    link: "https://git-scm.com/doc",
  },
  {
    imgSrc: "/skills/typescript.svg",
    altText: "Typescript",
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    imgSrc: "/skills/prisma.png",
    altText: "Prisma",
    link: "https://www.prisma.io/docs",
  },
  // More skills
];

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center">
      {skills.map((skill) => (
        <div key={skill.altText} className="flex flex-col items-center m-5">
          {skill.link ? (
            <a href={skill.link} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={skill.imgSrc}
                alt={skill.altText}
                width={50}
                height={50}
                whileHover={{ scale: 1.5 }}
                className="rounded-full border-solid cursor-pointer"
              />
            </a>
          ) : (
            <motion.img
              src={skill.imgSrc}
              alt={skill.altText}
              width={50}
              height={50}
              whileHover={{ scale: 1.1 }}
              className="rounded-full border-solid cursor-pointer"
            />
          )}
          <p className="mt-2 text-sm">{skill.altText}</p>
        </div>
      ))}
    </div>
  );
}
