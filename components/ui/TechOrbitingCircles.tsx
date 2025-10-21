"use client";

import React from "react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Image from "next/image";

// Your original imports
import react from "@/public/assets/tech_logo/reactjs.png";
import nodejs from "@/public/assets/tech_logo/nodejs.png";
import redux from "@/public/assets/tech_logo/redux.png";
import tailwind from "@/public/assets/tech_logo/tailwindcss.png";
import next from "@/public/assets/tech_logo/nextjs.png";
import netlify from "@/public/assets/tech_logo/netlify.png";
import html from "@/public/assets/tech_logo/html.png";
import css from "@/public/assets/tech_logo/css.png";
import django from "@/public/assets/tech_logo/django.png";
import express from "@/public/assets/tech_logo/express.png";
import shadcn from "@/public/assets/tech_logo/shadcn.webp";
import python from "@/public/assets/tech_logo/python.png";
import ts from "@/public/assets/tech_logo/typescript.png";
import js from "@/public/assets/tech_logo/javascript.png";
import vercel from "@/public/assets/tech_logo/vercel.png";
import firebase from "@/public/assets/tech_logo/firebase.png";
import git from "@/public/assets/tech_logo/git.png";
import github from "@/public/assets/tech_logo/github.png";
import mongo from "@/public/assets/tech_logo/mongodb.png";


const techLogos = [
  { src: react, alt: "React", size: 100 },
  { src: next, alt: "Next.js", size: 100 },
  { src: nodejs, alt: "Node.js", size: 100 },
  { src: ts, alt: "TypeScript", size: 100 },
  { src: js, alt: "JavaScript", size: 100 },
  { src: python, alt: "Python", size: 100 },
  { src: tailwind, alt: "Tailwind CSS", size: 100 },
  { src: shadcn, alt: "Shadcn UI", size: 100 },
  { src: redux, alt: "Redux", size: 100 },
  { src: django, alt: "Django", size: 100 },
  { src: express, alt: "Express", size: 100 },
  { src: mongo, alt: "MongoDB", size: 100 },
  { src: firebase, alt: "Firebase", size: 100 },
  { src: html, alt: "HTML", size: 100 },
  { src: css, alt: "CSS", size: 100 },
  { src: git, alt: "Git", size: 100 },
  { src: github, alt: "GitHub", size: 100 },
  { src: vercel, alt: "Vercel", size: 100 },
  { src: netlify, alt: "Netlify", size: 100 },

];

export function TechOrbitingCircles() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-gray-300">
        Tech Stack
      </span>

      {/* Inner Circle */}
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        {techLogos.slice(0, 6).map((logo) => (
          <div
            key={logo.alt}
            className="flex size-10 items-center justify-center rounded-full border bg-background p-2 shadow-md"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.size}
              height={logo.size}
              className="rounded-full"
            />
          </div>
        ))}
      </OrbitingCircles>

      {/* Middle Circle */}
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={150}
        reverse
      >
        {techLogos.slice(6, 12).map((logo) => (
          <div
            key={logo.alt}
            className="flex size-12 items-center justify-center rounded-full border bg-background p-2 shadow-md"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.size}
              height={logo.size}
              className="rounded-full"
            />
          </div>
        ))}
      </OrbitingCircles>

      {/* Outer Circle */}
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        duration={20}
        radius={220}
      >
        {techLogos.slice(12).map((logo) => (
          <div
            key={logo.alt}
            className="flex size-10 items-center justify-center rounded-full border bg-background p-2 shadow-md"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.size}
              height={logo.size}
              className="rounded-full"
            />
          </div>
        ))}
      </OrbitingCircles>
    </div>
  );
}

export default TechOrbitingCircles;