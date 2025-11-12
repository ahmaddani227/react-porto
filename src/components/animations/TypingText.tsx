"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface TypingTextProps {
  texts: string[];
  className?: string;
}

export default function TypingText({ texts, className }: TypingTextProps) {
  const LETTER_DELAY = 0.1;
  const BOX_FADE_DURATION = 0.08;
  const FADE_DELAY = 3.2;
  const MAIN_FADE_DURATION = 0.4;
  const SWAP_DELAY_IN_MS = 4200;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <span className={`inline-block font-mono text-blue-400 ${className}`}>
      &gt;{" "}
      {texts[index].split("").map((char, i) => {
        const isSpace = char === " ";
        return (
          <motion.span
            key={`${index}-${i}`}
            className="relative inline-block"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0.05,
                ease: "easeOut",
              }}
            >
              {isSpace ? "\u00A0" : char}
            </motion.span>

            {!isSpace && (
              <motion.span
                className="absolute inset-[2px] bg-neutral-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  delay: i * LETTER_DELAY,
                  times: [0, 0.2, 1],
                  duration: BOX_FADE_DURATION,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.span>
        );
      })}
    </span>
  );
}
