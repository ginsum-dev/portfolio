"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function Title() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            // hasAnimatedRef.current = true;

            document.fonts.ready.then(() => {
              if (!containerRef.current) return;
              containerRef.current.style.visibility = "visible";

              const { words } = splitText(
                containerRef.current.querySelector("h1")!
              );

              // Animate the words in the h1
              animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                  type: "spring",
                  duration: 2,
                  bounce: 0,
                  delay: stagger(0.05),
                }
              );
            });
          }
        });
      },
      {
        threshold: 0.1, // 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before fully visible
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <h1 className="h1 flex flex-col text-4xl font-bold whitespace-pre-wrap">
        Hello World!
      </h1>
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 420px;
                text-align: left;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
  );
}
