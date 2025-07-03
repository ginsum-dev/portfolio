"use client";

import { motion } from "motion/react";

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
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            기술 스택
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 기술을 활용하여 사용자 친화적인 웹 애플리케이션을 개발합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-bar"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
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
                <motion.div
                  className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
