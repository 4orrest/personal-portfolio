"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Vinland",
    description:
      "Im just testing to see if a lot of text here would look OK so mostly just ignore this text, it's probably gonna be really long and really meaningless for a second OK?",
    image: "/vinland.jpg",
    github: "",
    link: "https://ecommerce-app-4orrest.vercel.app/",
    technologies: [
      "NextJS",
      "Node.js",
      "Stripe",
      "Prisma",
      "Railway",
      "TypeScript",
      "NextAuth",
      "Tailwind",
    ],
  },
  {
    name: "Vinland",
    description: "lolz",
    image: "/vinland.jpg",
    github: "",
    link: "https://ecommerce-app-4orrest.vercel.app/",
    technologies: [
      "NextJS",
      "Node.js",
      "Stripe",
      "Prisma",
      "Railway",
      "TypeScript",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-150px 0px -150px 0px">
                <div className="flex flex-col md:flex-row md:space-x-12 md:items-center">
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      opacity: 0.8,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.8,
                    }}
                  >
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={500}
                        height={500}
                        className="rounded-xl shadow-xl"
                      />
                    </Link>
                  </motion.div>
                  <div className="mt-8 md:mt-0 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>

                    {/* This is where you add the technology tags */}
                    <div className="mb-4">
                      {project.technologies &&
                        project.technologies.map((technology, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                          >
                            {technology}
                          </span>
                        ))}
                    </div>

                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
