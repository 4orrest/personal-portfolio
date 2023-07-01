"use client";
import React from "react";
import Image from "next/image";
import Skill from "./Skill";
import { motion } from "framer-motion";

const bulletPoints = ["Point 1", "Point 2", "Point 3"];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Hey!
            </h1>
            <p>
              my name is{" "}
              <span className="font-bold text-teal-500">{"Forrest"}</span>. I'm
              a product-focused software engineer passionate about creating
              products that <span className="font-bold">{"enable"}</span>{" "}
              others.
            </p>
          </div>
          <div className="text-center md:w-1/2">
            <h1 className="text-2xl font-bold mb-6 justify-center">Skills</h1>
            <div>
              <Skill />
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={500}
              height={500}
              className="hidden md:block md:relative md:bottom-12 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
