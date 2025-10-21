"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Social({
  github = "https://github.com/SayedAnwar-07?tab=repositories",
  linkedin = "https://www.linkedin.com/in/sayedanwartamim",
  email = "sayedanwarofficial@gmail.com",
  whatsapp = "+8801903636076",
}) {
  const mailto = `mailto:${email}`;
  const whatsappLink = whatsapp.startsWith("http")
    ? whatsapp
    : `https://wa.me/${String(whatsapp).replace(/\D/g, "")}`;

  const icons = [
    {
      href: github,
      label: "GitHub",
      icon: <FaGithub size={26} aria-hidden />,
    },
    {
      href: linkedin,
      label: "LinkedIn",
      icon: <FaLinkedin size={26} aria-hidden />,
    },
    {
      href: mailto,
      label: "Gmail",
      icon: <FaEnvelope size={26} aria-hidden />,
    },
    {
      href: whatsappLink,
      label: "WhatsApp",
      icon: <FaWhatsapp size={26} aria-hidden />,
    },
  ];

  return (
    <section className="py-8">
      <div className="">
        <TooltipProvider>
          <div className="flex items-center justify-center md:justify-start gap-5">
            {icons.map((it) => (
              <Tooltip key={it.label}>
                <TooltipTrigger asChild>
                  <a
                    href={it.href}
                    aria-label={it.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-muted-foreground/20 transition-transform hover:scale-110 hover:bg-muted focus:outline-none"
                  >
                    {it.icon}
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>{it.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
