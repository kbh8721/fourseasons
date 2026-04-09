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
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">회사소개</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            사계절 내내 변함없는 신뢰로,<br />
            고객의 비즈니스를 세계로 연결합니다.
          </p>
        </motion.div>

        {/* Team/Culture Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-24 rounded-3xl overflow-hidden shadow-2xl relative h-[400px] md:h-[500px] group"
        >
          {/* 
            사용자 안내:
            좌측 파일 탐색기에서 public 폴더를 생성하고(또는 최상위 경로에) 
            채팅창에 올려주신 사진을 'team-photo.jpg'라는 이름으로 업로드해주세요!
          */}
          <img
            src="/team-photo.jpg"
            alt="사계절 물류 팀워크"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-8 md:p-12">
            <div className="text-white">
              <span className="inline-block px-3 py-1 bg-accent rounded-full text-xs font-bold mb-4">Our Culture</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">현장에서 답을 찾는 사람들</h2>
              <p className="text-gray-200 md:text-lg max-w-2xl">
                사계절 물류의 가장 큰 자산은 '사람'입니다. 끈끈한 팀워크와 소통을 바탕으로, 
                우리는 매일 물류 현장의 새로운 혁신을 만들어갑니다.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">걸어온 길</h2>
        </div>

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
