"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function PopularClients() {
  return (
    <section className="py-8 px-8 lg:py-20 mb-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography
            placeholder="placeholder"
            variant="h6"
            className="mb-4 uppercase !text-gray-500"
          >
            THIS ELECTION
          </Typography>
          <Typography
            placeholder="placeholder"
            variant="h2"
            color="blue-gray"
            className="mb-4"
          >
            Vote for Devansh Asthana as <br /> Cultural Secretary
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default PopularClients;
