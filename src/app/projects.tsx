"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/nexus.jpg",
    title: "Nexus",
    desc: "Treasurer",
  },
  {
    img: "/image/content-curation.jpeg",
    title: "TEDxShivNadarUniversity '23 ",
    desc: "Content & Curation Lead",
  },
  {
    img: "/image/tedx.jpeg",
    title: "TEDxShivNadarUniversity ‘22",
    desc: "Content Associate",
  },
  {
    img: "/image/analytica.jpeg",
    title: "Analytica",
    desc: "Co-Founder",
  },
  {
    img: "/image/snu-sl.jpeg",
    title: "SNU SL (E-Sports)",
    desc: "Organizer",
  },
  {
    img: "/image/business-conclave.jpeg",
    title: "Business Conclave",
    desc: "Transportation Head",
  },
  {
    img: "/image/envision.jpg",
    title: "Envision",
    desc: "Member",
  },
  {
    img: "/image/actor.jpeg",
    title: "CinemaScope",
    desc: "Actor",
  },
  {
    img: "/image/breeze.jpeg",
    title: "Breeze 2023",
    desc: "Finance Committee Volunteer",
  },
  {
    img: "/image/academic-2.jpeg",
    title: "Imprints",
    desc: "Izhaar",
  },
  {
    img: "/image/aic.jpeg",
    title: "TEDx Club",
    desc: "Time Capsule",
  },
  {
    img: "/image/family-head.jpeg",
    title: "Family Head!",
    desc: "",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8" id="experience">
      <div className="container mx-auto mb-20 text-center">
        <Typography placeholder="placeholder" variant="h2" color="blue-gray" className="mb-4">
          My Experience
        </Typography>
        <Typography placeholder="placeholder"
          variant="lead"
          className="mx-auto w-full px-4 font-xs !text-gray-500 lg:w-10/12"
        >
          From my very first year, I&apos;ve poured my passion into being a committed club player, immersing myself in diverse events of all scales. My journey has given me a firsthand understanding of the intricate challenges that clubs and societies grapple with. Fueled by this experience, my vision is to infuse an even more personal touch into our campus culture and ensure that it thrives rather than survive. 
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
