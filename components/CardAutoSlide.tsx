"use client";

import React from "react";
import "./CardAutoSlide.css";
import { SiGithub, SiJavascript, SiTypescript, SiDjango, SiReact, SiNextdotjs } from "react-icons/si";
import { BorderBeam } from "./ui/border-beam";

const cards = [
  { icon: <SiGithub size={50} />, color: "255, 255, 255" },
  { icon: <SiJavascript size={50} />, color: "247, 224, 37" },
  { icon: <SiTypescript size={50} />, color: "142, 202, 252" },
  { icon: <SiNextdotjs size={50} />, color: "255, 255, 255" },
  { icon: <SiDjango size={50} />, color: "142, 252, 157" },
  { icon: <SiReact size={50} />, color: "8, 221, 255" },
];

const CardAutoSlide: React.FC = () => {
  return (
    <div className="wrapper relative">
      <div className="inner" style={{ "--quantity": cards.length } as React.CSSProperties}>
        {cards.map((card, index) => (
          <div
            className="card relative overflow-hidden"
            key={index}
            style={{
              "--index": index,
              "--color-card": card.color,
            } as React.CSSProperties}
          >
            <div className="img">{card.icon}</div>

            {/* Overlay BorderBeam on each card */}
            <BorderBeam
              size={80}
              duration={5 + index}
              colorFrom={`rgba(${card.color}, 0.6)`}
              colorTo={`rgba(${card.color}, 0)`}
              borderWidth={2}
              className="absolute top-0 left-0 w-full h-full"
            />
            <div className="text-[#ffffff3d]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardAutoSlide;
