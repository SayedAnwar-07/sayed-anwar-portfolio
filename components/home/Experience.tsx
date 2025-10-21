"use client"

import Image from "next/image"
import { experiences } from "@/data/data"
import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"
import { Header } from "../common/Header"


export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section ref={sectionRef} id="experience" className="relative py-20 overflow-hidden">

      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="px-4">
           <Header
            title="Professional Experience"
            subtitle="Career Timeline"
            description="A comprehensive overview of my professional journey and key achievements in the tech industry"
            align="left"
          />
        </div>


        <div className="relative ml-6">
          {/* Vertical timeline line with scroll animation */}
          <div className="hidden md:flex absolute top-0 left-4 w-1 h-full bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
            <motion.div 
              className="w-full h-full bg-[#bde64e] rounded"
              style={{ 
                scaleY,
                transformOrigin: "top"
              }}
            />
          </div>

          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative flex flex-col md:flex-row md:gap-20 lg:gap-40 lg:items-start gap-4 mb-16"
            >
              {/* Timeline Icon */}
              <div className="relative z-10">
                <Image
                  src={exp.img}
                  alt={exp.title}
                  width={50}
                  height={50}
                  className="object-contain rounded-full"
                />
              </div>

              {/* center Side */}
              <div className="md:w-1/3 flex flex-col gap-1">
                <p className="text-sm text-slate-700 dark:text-gray-200 font-semibold transition-all duration-300 hover:translate-x-1 delay-75">
                  {exp.date}
                </p>
                <h3 className="text-2xl font-bold transition-all duration-300 hover:translate-x-1 delay-75">{exp.title}</h3>
                <p className="text-base text-gray-500 dark:text-gray-400 font-semibold transition-all duration-300 hover:translate-x-1 delay-75">
                  {exp.course}
                </p>
              </div>

              {/* Right Side */}
              <div className="md:w-2/3 mt-4 md:mt-0">
                <ul className="space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {exp.contents.map((content: string, i: number) => (
                    <li key={i} className="transition-all duration-300 hover:translate-x-1 delay-75">{content}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}