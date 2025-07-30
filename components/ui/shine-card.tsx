"use client";

import type React from "react";
import { cn } from "@/lib/utils";

interface ShineCardProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Animation duration in seconds
  intensity?: number; // Shine opacity (0-1)
  color?: string; // Shine color
  strokeColor?: string; // Top stroke color
  borderRadius?: string; // Border radius
  background?: string; // Card background
  backdropBlur?: string; // Backdrop blur amount
  border?: string; // Border style
  direction?: "bl" | "tl" | "br" | "tr"; // Direction of the shine
  typeCard?: "vertical" | "horizontal"; // Type of the card
}

// tl (top-left) = -45° ✅
// bl (bottom-left) = 45° ✅
// br (bottom-right) = 135° ✅
// tr (top-right) = 225° ✅

export default function ShineCard({
  children,
  className,
  speed = 0.7,
  intensity = 0.25,
  color = "#444444",
  strokeColor = "#666666",
  borderRadius = "20px",
  background = "rgba(22, 22, 22, 0.3)",
  backdropBlur = "3px",
  border = "1px solid #333333",
  direction = "tl",
  typeCard = "vertical",
}: ShineCardProps) {
  const cardStyle = {
    "--shine-speed": `${speed}s`,
    "--shine-intensity": intensity,
    "--shine-color": color,
    "--stroke-color": strokeColor,
    "--border-radius": borderRadius,
    "--card-background": background,
    "--backdrop-blur": backdropBlur,
    "--card-border": border,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "relative overflow-hidden z-[1]",
        "shine-card-container",
        className
      )}
      style={cardStyle}
    >
      {/* Top stroke */}
      <div className="shine-stroke" />

      {/* Shine effect */}
      <div className="shine-effect" />

      {/* Content */}
      <div className="relative z-10 h-full w-full">{children}</div>

      <style jsx>{`
        .shine-card-container {
          background: var(--card-background);
          backdrop-filter: blur(var(--backdrop-blur));
          border: var(--card-border);
          border-radius: var(--border-radius);
          box-shadow: none;
        }

        .shine-stroke {
          height: 1px;
          position: absolute;
          top: 0px;
          left: 2.5%;
          width: 95%;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0),
            #333333 10%,
            var(--stroke-color) 80%,
            rgba(0, 0, 0, 0)
          );
        }

        .shine-effect {
          position: absolute;
          top: -1px;
          left: -1px;
          width: calc(100%);
          height: calc(100%);
          background: linear-gradient(
            to ${direction === "bl" || direction === "tl" ? "right" : "left"},
            transparent 20%,
            transparent 40%,
            var(--shine-color) 50%,
            var(--shine-color) 55%,
            transparent 70%,
            transparent 100%
          );
          transform: scale(${typeCard === "vertical" ? "2" : "4"})
            rotate(
              ${direction === "tl"
                ? "-45deg"
                : direction === "br"
                ? "135deg"
                : direction === "bl"
                ? "45deg"
                : direction === "tr"
                ? "225deg"
                : "-45deg"}
            );
          background-size: 200% auto;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .shine-card-container:hover .shine-effect {
          opacity: var(--shine-intensity);
          animation: moveGradient var(--shine-speed) forwards;
        }

        @keyframes moveGradient {
          0% {
            background-position: 0;
            opacity: var(--shine-intensity);
          }
          100% {
            background-position: 100% 0;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
} 