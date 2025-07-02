"use client";

import { animate } from "motion";
import { useEffect, useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "React와 Node.js를 사용한 풀스택 이커머스 플랫폼. 사용자 인증, 상품 관리, 결제 시스템을 포함합니다.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "🛒",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "드래그 앤 드롭 기능이 있는 칸반 보드 스타일의 태스크 관리 애플리케이션.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "📋",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "실시간 날씨 정보를 제공하는 대시보드. 위치 기반 날씨 예보와 차트를 포함합니다.",
    technologies: ["Next.js", "TypeScript", "Chart.js", "OpenWeather API"],
    image: "🌤️",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "반응형 디자인과 애니메이션이 포함된 개인 포트폴리오 웹사이트.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "💼",
    githubUrl: "#",
    liveUrl: "#",
  },
];

export default function Projects() {
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

            // Animate project cards
            const projectCards =
              containerRef.current?.querySelectorAll(".project-card");
            projectCards?.forEach((card, index) => {
              animate(
                card,
                { opacity: [0, 1], y: [50, 0] },
                {
                  duration: 0.8,
                  delay: index * 0.2,
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
    <section id="projects" className="py-20 bg-gray-50">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        ref={containerRef}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            프로젝트
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 기술을 활용하여 개발한 프로젝트들을 소개합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">{project.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-800 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            GitHub에서 더 보기
          </a>
        </div>
      </div>
    </section>
  );
}
