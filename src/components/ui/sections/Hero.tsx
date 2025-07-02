"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;

            document.fonts.ready.then(() => {
              if (!containerRef.current) return;

              const titleElement = containerRef.current.querySelector("h1");
              const subtitleElement = containerRef.current.querySelector("p");
              const buttonElement =
                containerRef.current.querySelector("button");

              if (titleElement) {
                const { words } = splitText(titleElement);
                animate(
                  words,
                  { opacity: [0, 1], y: [20, 0] },
                  {
                    type: "spring",
                    duration: 1.5,
                    bounce: 0.1,
                    delay: stagger(0.1),
                  }
                );
              }

              if (subtitleElement) {
                animate(
                  subtitleElement,
                  { opacity: [0, 1], y: [20, 0] },
                  {
                    type: "spring",
                    duration: 1,
                    delay: 0.5,
                  }
                );
              }

              if (buttonElement) {
                animate(
                  buttonElement,
                  { opacity: [0, 1], y: [20, 0] },
                  {
                    type: "spring",
                    duration: 1,
                    delay: 0.8,
                  }
                );
              }
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" ref={containerRef}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            안녕하세요!
            <br />
            프론트엔드 개발자입니다
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            사용자 경험을 중시하며, 현대적이고 반응형 웹 애플리케이션을 만드는
            것을 좋아합니다. React, TypeScript, Next.js를 주로 사용합니다.
          </p>
          <button
            onClick={scrollToAbout}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            더 알아보기
          </button>
        </div>
      </div>
    </section>
  );
}
