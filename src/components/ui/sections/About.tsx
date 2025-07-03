"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            프론트엔드 개발자로서 사용자 경험을 중시하며 창의적인 솔루션을
            만듭니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Personal Info */}
          <motion.div
            className="content-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">개인 소개</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                안녕하세요! 저는 사용자 중심의 웹 애플리케이션을 개발하는
                프론트엔드 개발자입니다. React, TypeScript, Next.js를 주로
                사용하며, 깔끔하고 효율적인 코드 작성을 지향합니다.
              </p>
              <p>
                새로운 기술을 배우는 것을 좋아하며, 항상 최신 트렌드와 베스트
                프랙티스를 적용하여 더 나은 사용자 경험을 제공하려고 노력합니다.
              </p>
              <p>
                팀워크를 중요시하며, 다른 개발자들과의 협업을 통해 더 나은
                결과물을 만들어내는 것을 즐깁니다.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                주요 관심사
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "사용자 경험 (UX)",
                  "성능 최적화",
                  "접근성 (Accessibility)",
                  "반응형 디자인",
                  "모던 JavaScript",
                  "상태 관리",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience & Education */}
          <motion.div
            className="content-section space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">경력</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-gray-900">
                    프론트엔드 개발자
                  </h4>
                  <p className="text-blue-600 font-medium">
                    Tech Company • 2022 - 현재
                  </p>
                  <p className="text-gray-600 mt-2">
                    React와 TypeScript를 사용한 웹 애플리케이션 개발. 사용자
                    인터페이스 개선 및 성능 최적화 담당.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-gray-900">
                    웹 개발자 인턴
                  </h4>
                  <p className="text-green-600 font-medium">
                    Startup • 2021 - 2022
                  </p>
                  <p className="text-gray-600 mt-2">
                    Next.js를 활용한 풀스택 웹 개발. 데이터베이스 설계 및 API
                    개발 경험.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">교육</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-900">
                    컴퓨터공학 학사
                  </h4>
                  <p className="text-purple-600 font-medium">
                    대학교 • 2017 - 2021
                  </p>
                  <p className="text-gray-600 mt-2">
                    소프트웨어 공학, 데이터 구조, 알고리즘 등 전공 과정 이수
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">자격증</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">AWS Certified Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Google Cloud Platform</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">
                    React Developer Certification
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
