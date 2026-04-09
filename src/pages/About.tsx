import { motion } from "motion/react";

const TIMELINE = [
  { year: "2026", title: "글로벌 스마트 물류 센터 확장", desc: "AI 기반 자동화 창고 시스템 도입 및 아시아 허브 구축" },
  { year: "2024", title: "친환경 물류 선언", desc: "전기 화물차 500대 도입 및 탄소 배출 저감 프로젝트 가동" },
  { year: "2020", title: "통합 물류 플랫폼 런칭", desc: "실시간 화물 추적 및 매칭 시스템 '4S-Track' 오픈" },
  { year: "2015", title: "전국 주요 거점 확보", desc: "수도권, 영남권, 호남권 대형 물류 센터 완공" },
  { year: "2010", title: "사계절 물류 설립", desc: "신뢰와 정직을 바탕으로 한 화물 운송 서비스 시작" },
];

export function About() {
  return (
    <div className="pt-24 pb-24 bg-base-gray min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">회사소개</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            사계절 내내 변함없는 신뢰로,<br />
            고객의 비즈니스를 세계로 연결합니다.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-16">
          {TIMELINE.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] md:left-1/2 md:-translate-x-1/2 shadow-[0_0_0_4px_rgba(46,204,113,0.2)]" />
              
              <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <span className="text-accent font-bold text-xl mb-2 block">{item.year}</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
