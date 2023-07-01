"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

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

interface SkillProps {
  skill: {
    imgSrc: string;
    altText: string;
    link: string;
  };
  i: number;
}

const Skill: React.FC<SkillProps> = ({ skill, i }) => {
  const controls = useAnimation();
  const ref = useRef();
  const isMounted = useRef(false); // new ref to track mount status

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        delay: i * 0.4, // adjust stagger speed
        duration: 1, // adjust fade-in speed
      },
    },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    isMounted.current = true; // set to true after mount

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isMounted.current) {
          // only start animation if component is mounted
          controls.start("visible");
        }
      },
      {
        rootMargin: "-50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      isMounted.current = false; // set to false before unmount

      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center m-5"
      custom={i}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {skill.link ? (
        <a href={skill.link} target="_blank" rel="noopener noreferrer">
          <motion.img
            src={skill.imgSrc}
            alt={skill.altText}
            width={50}
            height={50}
            whileHover={{
              scale: 1.1,
              rotate: 360,
              transition: { duration: 8 },
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="rounded-full border-solid cursor-pointer"
          />
        </a>
      ) : (
        <motion.img
          src={skill.imgSrc}
          alt={skill.altText}
          width={50}
          height={50}
          whileHover={{ scale: 1.1, rotate: 90 }}
          className="rounded-full border-solid cursor-pointer"
        />
      )}
      <p className="mt-2 text-sm">{skill.altText}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {skills.map((skill, i) => (
        <Skill key={skill.altText} skill={skill} i={i} />
      ))}
    </div>
  );
};

export default Skills;
