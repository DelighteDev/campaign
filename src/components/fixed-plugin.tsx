"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://delightedev.com" target="_blank">
      <Button
      placeholder="placeholder"
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="devansh-asthana-logo"
          src="https://www.material-tailwind.com/favicon.png"
        />{" "}
        Devansh Asthana for Cultural Secretary
      </Button>
    </a>
  );
}
