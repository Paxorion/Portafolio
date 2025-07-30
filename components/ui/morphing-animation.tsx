"use client";

import type { ReactNode } from "react";

interface MorphingAnimationProps {
  children: ReactNode;
  duration?: string;
  active?: boolean;
  delay?: string;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

export function MorphingAnimation({
  children,
  duration = "8s",
  active = true,
  delay = "0s",
  className = "",
  intensity = "medium",
}: MorphingAnimationProps) {
  // Define the animation class based on the intensity
  const getAnimationClass = () => {
    if (!active) return "";

    switch (intensity) {
      case "subtle":
        return "animate-custom-morphing-subtle";
      case "strong":
        return "animate-custom-morphing-strong";
      default:
        return "animate-custom-morphing";
    }
  };

  return (
    <div
      className={`${getAnimationClass()} ${className}`}
      style={{
        animationDuration: duration,
        animationDelay: delay,
      }}
    >
      {children}
    </div>
  );
} 