import Image from "next/image";

const skills = [
  { imgSrc: "/skills/javascript.png", altText: "JavaScript" },
  { imgSrc: "/skills/reactjs.png", altText: "React" },
  { imgSrc: "/skills/nextJS.svg", altText: "NextJS" },
  { imgSrc: "/skills/mongodb.png", altText: "MongoDB" },
  { imgSrc: "/skills/nodejs.png", altText: "NodeJS" },
  { imgSrc: "/skills/framer-motion.svg", altText: "Framer Motion" },
  { imgSrc: "/skills/tailwind.png", altText: "Tailwind" },
  { imgSrc: "/skills/git.png", altText: "Git" },
  { imgSrc: "/skills/typescript.svg", altText: "Typescript" },
  { imgSrc: "/skills/prisma.png", altText: "Prisma" },
  // More skills
];

export default function Skills() {
  return (
    <div>
      {skills.map((skill) => (
        <button key={skill.altText} className="text-center">
          <Image
            src={skill.imgSrc}
            alt={skill.altText}
            width={50}
            height={50}
            className="flex flex-wrap flex-row justify-center z-10 md:justify-start rounded-full border-solid cursor-pointer m-4"
          />
          <p className="mt-2 text-sm">{skill.altText}</p>
        </button>
      ))}
    </div>
  );
}
