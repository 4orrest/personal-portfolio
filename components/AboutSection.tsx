"use client";
import React from "react";
import Image from "next/image";
import Skill from "./Skill";
import { motion } from "framer-motion";
import Link from "next/link";

const bulletPoints = [
  { text: "Currently working on homeR, a real estate AI app", emoji: "🚢" },
  {
    text: "Product management consultant @ fortune 500 tyson foods",
    emoji: "🌟",
  },
  { text: "Learning Solidity", emoji: "🧪" },
  {
    text: "Exploring the future of real estate in web3",
    emoji: "🏠",
  },
  {
    text: "Working on my jump shot for weekend warrior basketball",
    emoji: "🏀",
  },
  { text: "Watching the all-in podcast", emoji: "📺" },
  {
    text: "Working on IYK labs",
    emoji: "💡",
  },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-28">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              today, this is me
            </h1>
            <ul className="list-none pl-0">
              {bulletPoints.map((point, index) => (
                <li key={index} className="text-base my-4">
                  {point.emoji} {point.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:w-1/2">
            <h1 className="text-2xl font-bold mb-6 justify-center">
              technologies im using
            </h1>
            <div>
              <Skill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
