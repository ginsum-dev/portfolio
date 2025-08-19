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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            About
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            사용자 중심의 웹 개발로 완성도 높은 웹 서비스를 제공합니다.
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
                Typescript, React, Next.js를 기반으로 서비스를
                개발/배포/운영하였습니다.
              </p>
              <p>
                클린 아키텍처와 유지보수성 높은 프론트엔드 구조 설계를 중요시
                하며, 항상 최신 트렌드와 베스트 프랙티스를 적용하여 더 나은
                사용자 경험을 제공하려고 노력합니다.
              </p>
              <p>
                팀워크를 중요시하며, 다른 개발자들과의 협업을 통해 더 나은
                결과물을 만들어내는 것을 즐깁니다.
              </p>
              <p>
                사용자의 행동을 설계하는 UX 중심의 프론트엔드 개발자입니다.
                소통의 중요성을 이해하고 실천하는 사람이 되고 싶습니다.
              </p>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                기술 스택
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Typescript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Shadcn UI",
                  "styled-components",
                  "emotion",
                  "Ant Design",
                  "Zustand",
                  "Redux",
                  "React Query",
                  "Storybook",
                  "Framer Motion",
                  "Git",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
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
                    className="px-3 py-1 bg-blue-100 text-blue-500 rounded-full text-sm font-medium"
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
                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="font-semibold text-gray-900">
                    프론트엔드 개발자
                  </h4>
                  <p className="text-blue-500 font-medium">
                    개념원리 • 2023.05 - 2024.07
                  </p>
                  <p className="text-gray-600 mt-2">
                    - 수학 학습앱의 콘텐츠 관리 및 학생 관리를 위한 CMS 웹사이트
                    개발 및 유지보수
                  </p>
                  <p className="text-gray-600 mt-2">
                    - 문항,유저,운영 관리등 전반적인 웹사이트 개발에 참여
                  </p>
                  <p className="text-gray-600 mt-2">
                    - Antd 를 기반으로 컨텐스 검색, 등록, 리스트 등 커스텀
                    컴포넌트 작업
                  </p>
                  <p className="text-gray-600 mt-2">
                    - 수식 수정을 위한 에디터 커스텀 기능 개발 Storybook 기반
                    문서화
                  </p>
                  <p className="text-gray-600 mt-2">
                    - 모노레포 기반 패키지 관리
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-6">
                  <h4 className="font-semibold text-gray-900">
                    프론트엔드 개발자
                  </h4>
                  <p className="text-green-500 font-medium">
                    하이퍼클라우드 • 2022.11 - 2023.04
                  </p>
                  <p className="text-gray-600 mt-2">
                    - AR 기반의 앱을 위한 컨텐츠 CRUD를 위한 사이트 개발
                  </p>
                  <p className="text-gray-600 mt-2">
                    - Material UI 를 기반으로 이미지 업로드, 텍스트 필드 등
                    커스텀 컴포넌트 작업
                  </p>
                  <p className="text-gray-600 mt-2">
                    - Redux-toolkit을 사용한 전역 상태 관리
                  </p>
                </div>
                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="font-semibold text-gray-900">
                    프론트엔드 개발자
                  </h4>
                  <p className="text-purple-500 font-medium">
                    데이터뱅크 • 2020.05 - 2022.09
                  </p>
                  <p className="text-gray-600 mt-2">
                    - 모의고사 및 AI 자동채점을 제공하는 영어학습 서비스 개발 및
                    유지보수
                  </p>
                  <p className="text-gray-600 mt-2">
                    - 콘텐츠를 관리하고 유저들의 답안을 채점하는 어드민 사이트
                    개발 및 유지보수
                  </p>
                  <p className="text-gray-600 mt-2">
                    -글로벌 유저를 위한 다국어 지원 기능 개발 및 언어 전환에
                    따른 UI 변경 대응
                  </p>
                </div>
              </div>
            </div>

            {/* <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">교육</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-900">건축공학 학사</h4>
                  <p className="text-purple-600 font-medium">연세대학교</p>
                  <p className="text-gray-600 mt-2">
                    소프트웨어 공학, 데이터 구조, 알고리즘 등 전공 과정 이수
                  </p>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
