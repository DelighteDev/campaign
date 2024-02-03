"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section className="py-12 px-8 lg:py-24" id="why-me">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography placeholder="placeholder" variant="h2" color="blue-gray" className="mb-4" >
            So, why vote for me?
          </Typography>
          <Typography placeholder="placeholder"
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-10/12" 
          >
            Your vote for me is a vote for a dedicated advocate who will tirelessly work to enhance our student experience and make our campus culture truly unforgettable. With your support, I aim to instigate a dynamic and inclusive community that we can all be proud to belong to.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
