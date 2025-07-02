"use client";

import { animate } from "motion";
import { useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "React", level: 90, color: "bg-blue-500", icon: "⚛️" },
  { name: "TypeScript", level: 85, color: "bg-blue-600", icon: "📘" },
  { name: "Next.js", level: 80, color: "bg-black", icon: "⚡" },
  { name: "JavaScript", level: 95, color: "bg-yellow-400", icon: "🟨" },
  { name: "HTML/CSS", level: 90, color: "bg-orange-500", icon: "🌐" },
  { name: "Tailwind CSS", level: 85, color: "bg-cyan-500", icon: "🎨" },
  { name: "Node.js", level: 75, color: "bg-green-500", icon: "🟢" },
  { name: "Git", level: 80, color: "bg-orange-600", icon: "📝" },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;

            // Animate the section title
            const title = containerRef.current?.querySelector("h2");
            if (title) {
              animate(
                title,
                { opacity: [0, 1], y: [30, 0] },
                { duration: 0.8, easing: "ease-out" }
              );
            }

            // Animate skill bars
            const skillBars =
              containerRef.current?.querySelectorAll(".skill-bar");
            skillBars?.forEach((bar, index) => {
              animate(
                bar,
                { opacity: [0, 1], x: [-50, 0] },
                {
                  duration: 0.8,
                  delay: index * 0.1,
                  easing: "ease-out",
                }
              );
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

  return (
    <section id="skills" className="py-20 bg-white">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        ref={containerRef}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            기술 스택
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 기술을 활용하여 사용자 친화적인 웹 애플리케이션을 개발합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-bar">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-semibold text-gray-800">
                    {skill.name}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">기타 기술</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Redux",
              "Zustand",
              "React Query",
              "Framer Motion",
              "Vercel",
              "AWS",
              "Docker",
              "PostgreSQL",
              "MongoDB",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
