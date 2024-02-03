"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography placeholder="placeholder"
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Devansh Asthana for Cultural <br /> Secretary
          </Typography>
          <Typography placeholder="placeholder"
            variant="lead"
            color="blue-gray" // Added color property
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Devansh Asthana, an undergrad at SNU with a passion for hosting events and meeting people. Here,
            you&apos;ll get a glimpse of my journey. From being an eager kid who just wanted to be a part of a club to founding my own, I have learnt a lot and I intend to bring that experience in my role as Cultural Secretary.
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/devansh.jpeg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
