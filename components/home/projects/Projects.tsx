import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "homeR",
    imgSrc: "project-imgs/homeR.jpg",
    code: "https://github.com/4orrest/homer-readme",
    projectLink: "https://homer-psi.vercel.app/",
    tech: ["NextJS", "Tailwind", "OpenAI api", "MySQL", "TypeScript"],
    description: "AI platform for the homebuying journey",
    modalContent: (
      <>
        <p>AI enablement platform for first time homebuyers</p>
        <p>
          users can generate images of their dream home & ask home-buying
          related questions using AI.
        </p>
        <p>
          *currently in development* generate a video of your dream home &
          summarize real estate listings using AI
        </p>
      </>
    ),
  },
  {
    title: "DeductIt",
    imgSrc: "project-imgs/deductIthome.jpg",
    code: "https://github.com/4orrest/deductIt",
    projectLink: "https://deduct-it.vercel.app/",
    tech: ["Node", "NextJS", "TypeScript", "Tailwind", "Redis"],
    description:
      "A social deduction game where users can vote on which posts are generated by AI.",
    modalContent: (
      <>
        <p>infinite scrolling for dynamically loading posts</p>
        <p>advanced caching with Upstash Redis</p>
        <p>optimistic updates to improve UX</p>
        <p>custom feed for authenticated users</p>
        <p>dynamic post editor</p>
      </>
    ),
  },
  {
    title: "Vinland",
    imgSrc: "project-imgs/vinland.jpg",
    code: "https://github.com/4orrest/Vinland",
    projectLink: "https://vinland.vercel.app/",
    tech: ["NextJS", "Prisma", "Stripe", "Framer-Motion", "Zustand"],
    description:
      "An e-commerce store using stripe payment intents and a cool Viking Lottie animation.",
    modalContent: (
      <>
        <p>
          Created an e-commerce store to practice using stripe API & payment
          intents
        </p>
        <p>Used prisma ORM & planetscale for database</p>
        <p>
          Check the GitHub readme for the best instructions for checking out and
          looking at your orders dashboard!
        </p>
      </>
    ),
  },
  // {
  //   title: "Paint Reference 4",
  //   imgSrc: "project-imgs/example-project.jpg",
  //   code: "https://www.github.com",
  //   projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   tech: ["Python", "FastAPI", "SQLAlchemy"],
  //   description:
  //     "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
  //   modalContent: (
  //     <>
  //       <p>Alright, you got me. I&apos;m all out of paint references.</p>
  //       <p>
  //         Point is, use this space to explain a bit further WHAT this project
  //         is, as well as what YOU contributed to it.
  //       </p>
  //       <p>You get the idea. Now more lorem {":)"}</p>
  //       <p>
  //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
  //         quia officia odio nulla consectetur aperiam ad tempora magni magnam
  //         nesciunt.
  //       </p>
  //       <p>
  //         Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
  //         rerum dolorum. Deserunt soluta modi culpa animi.
  //       </p>
  //     </>
  //   ),
  // },
];
