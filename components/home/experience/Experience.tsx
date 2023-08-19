import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Consultant",
    position: "Product Manager",
    time: "2021 - Present",
    location: "Sacramento",
    description:
      "Product management consultancy for small businesses, early stage start-ups and Fortune 500 companies",
    tech: ["SQL", "React", "Node", "Tailwind CSS", "Docker", "CRM", "Git"],
  },
  {
    title: "RedDoor",
    position: "Product Manager",
    time: "2019 - 2020",
    location: "San Francisco",
    description:
      "Launched an innovative suite of B2B and B2C mortgage tools that enabled homeowners to get pre-approved for a mortgage in as little as 60 seconds",
    tech: ["SQL", "React", "Node", "Asana", "CRM", "Figma"],
  },
  {
    title: "eXp Realty",
    position: "Project Manager",
    time: "2018-2019",
    location: "Sacramento",
    description:
      "Building a better sales process between real estate agents and their clients",
    tech: ["Jira", "CRM", "Sketch", "Mailchimp", "Multiple Listing Service"],
  },
];
