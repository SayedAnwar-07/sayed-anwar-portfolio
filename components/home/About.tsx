'use client';

import { Globe } from '@/components/ui/globe';
import { AnimatedSpan, Terminal, TypingAnimation } from '../ui/terminal';
import TechOrbitingCircles from '../ui/TechOrbitingCircles';
import { Header } from '../common/Header';
import { InteractiveGridPattern } from '../ui/interactive-grid-pattern';
import { cn } from "@/lib/utils";
import { FaJs, FaReact, FaPython, FaNodeJs } from "react-icons/fa"
import { SiNextdotjs, SiDjango } from "react-icons/si"
import { ExternalLink } from "lucide-react";
import MyResume from '../MyResume';
import { ShimmerButton } from '../ui/shimmer-button';
 

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="min-h-screen py-20 px-4"
    >
      <div className="container mx-auto">
        <Header
            title="About me "
            subtitle="Get to know about me "
            description=" I am web developer specializing in modern web technologies. I create responsive and user-friendly web applications using React, Next.js, and Tailwind CSS."
            align="left"
        />

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>   
            {/* About info */}
            <div className='w-full h-full border rounded-md lg:col-span-1 lg:row-span-1'>
                <div className="w-full h-full px-4 border rounded-md lg:col-span-1 lg:row-span-2 relative overflow-hidden flex flex-col justify-center items-center text-center">
                  <InteractiveGridPattern
                    className={cn(
                      "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                      "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                    )}
                  />
                  <h3 className="text-lg font-semibold mb-6 z-10">Sayed Anwar</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 z-10 max-w-md">
                    I am a passionate web developer with expertise in building modern and responsive web applications. 
                  </p>

                  {/* using skill icons */}
                   <div className="flex flex-wrap justify-center gap-4 z-10 mt-10">
                       {/* JavaScript */}
                        <div className="flex flex-col items-center gap-1">
                          <FaJs className="w-7 h-7 text-yellow-500" />
                          <span className="text-xs text-gray-500 dark:text-gray-300">JavaScript</span>
                        </div>

                        {/* React */}
                        <div className="flex flex-col items-center gap-1">
                          <FaReact className="w-7 h-7 text-blue-500" />
                          <span className="text-xs text-gray-500 dark:text-gray-300">React</span>
                        </div>

                        {/* Node.js */}
                        <div className="flex flex-col items-center gap-1">
                          <FaNodeJs className="w-7 h-7 text-green-600" />
                          <span className="text-xs text-gray-500 dark:text-gray-300">Node.js</span>
                        </div>

                        {/* Next.js */}
                        <div className="flex flex-col items-center gap-1">
                          <SiNextdotjs className="w-7 h-7 text-black dark:text-white" />
                          <span className="text-xs text-gray-500 dark:text-gray-300">Next.js</span>
                        </div>

                        {/* Django */}
                        <div className="flex flex-col items-center gap-1">
                          <SiDjango className="w-7 h-7 text-green-700" />
                          <span className="text-xs text-gray-500 dark:text-gray-300">Django</span>
                        </div>

                        {/* Python */}
                        <div className="flex flex-col items-center gap-1">
                          <FaPython className="w-7 h-7 text-blue-400" />
                          <span className="text-xs text-gray-500 dark:text-gray-300">Python</span>
                        </div>                     
                    </div>
                </div>

            </div>   

            
             {/* Icons */}
            <div className='border rounded-md lg:col-span-2 lg:row-span-1'>
              <TechOrbitingCircles/>
            </div>    
            
            {/* glove */}
            <div className="bg-background relative flex size-full items-center justify-center overflow-hidden px-40 pt-8 pb-40 lg:pb-60 border rounded-md lg:col-span-1 lg:row-span-1">
              <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
              GLOVE
              </span>
              <Globe className="top-28" />
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
            </div>

            {/* terminal */}
            <div className='border rounded-md lg:col-span-1 lg:row-span-1'>
                  <Terminal>
                    <TypingAnimation>&gt; npx shadcn@latest init</TypingAnimation>
                    <AnimatedSpan className="text-green-500">✔ JavaScript</AnimatedSpan>
                    <AnimatedSpan className="text-green-500">✔ Python</AnimatedSpan>
                    <AnimatedSpan className="text-green-500">✔ JWT Auth</AnimatedSpan>
                    <AnimatedSpan className="text-green-500">✔ REST APIs</AnimatedSpan>
                    <AnimatedSpan className="text-green-500">✔ MongoDB</AnimatedSpan>
                    <AnimatedSpan className="text-green-500">✔ React</AnimatedSpan>
                    <AnimatedSpan className="text-green-500">✔ Nextjs</AnimatedSpan>
                    <AnimatedSpan className="text-green-500">✔ Redux</AnimatedSpan>
                    <AnimatedSpan className="text-green-500">✔ Tailwind CSS</AnimatedSpan>
                    <AnimatedSpan className="text-blue-500">
                      <span>ℹ Updated 1 file:</span>
                      <span className="pl-2">- lib/utils.ts</span>
                    </AnimatedSpan>
                    <TypingAnimation className="text-muted-foreground">
                      Success! Project initialization completed.
                    </TypingAnimation>
                    <TypingAnimation className="text-muted-foreground">
                      You may now add components.
                    </TypingAnimation>
                  </Terminal>
            </div>

           {/* Resume content */}
           <div className="lg:col-span-1 lg:row-span-1 relative border rounded-md overflow-hidden group">             
              <MyResume />
              {/* Overlay with blur and button */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href="https://drive.google.com/file/d/1JeYJETyN1FUXVpEcetosDTuouSIaO-tC/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform translate-y-12 group-hover:translate-y-0 transition-all duration-500"
                >
                  <ShimmerButton className="px-6 sm:px-8 py-2 sm:py-3 text-sm md:text-base flex items-center gap-2">
                        View Resume
                        <ExternalLink size={18} />
                  </ShimmerButton>
                  
                </a>
              </div>
            </div>
           
        </div>  
      </div>
    </section>
  );
}
