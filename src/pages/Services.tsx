import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PackageSearch, LineChart, Globe, Warehouse } from "lucide-react";
import { cn } from "@/src/lib/utils";

const TABS = [
  { id: "logistics", label: "기업 물류 대행" },
  { id: "consulting", label: "물류 컨설팅" },
];

export function Services() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">서비스</h1>
          <p className="text-xl text-gray-600">고객의 비즈니스 특성에 맞춘 최적화된 물류 솔루션</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-xl inline-flex">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-8 py-3 rounded-lg font-semibold transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-white text-primary shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "logistics" && (
            <motion.div
              key="logistics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <ServiceCard
                icon={<PackageSearch />}
                title="국내 운송 네트워크"
                desc="전국 50여 개 거점을 연결하는 촘촘한 배송망으로 당일/익일 배송을 완벽하게 수행합니다."
              />
              <ServiceCard
                icon={<Warehouse />}
                title="스마트 창고 보관"
                desc="온습도 제어가 가능한 최신식 창고와 WMS(창고관리시스템)를 통해 재고를 안전하게 관리합니다."
              />
              <ServiceCard
                icon={<Globe />}
                title="수출입 포워딩"
                desc="해상/항공 운송부터 통관, 내륙 운송까지 One-Stop 국제 물류 서비스를 제공합니다."
              />
            </motion.div>
          )}

          {activeTab === "consulting" && (
            <motion.div
              key="consulting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <ServiceCard
                icon={<LineChart />}
                title="공급망(SCM) 최적화"
                desc="데이터 분석을 통해 병목 현상을 파악하고 물류 흐름을 개선하여 전체 비용을 절감합니다."
              />
              <ServiceCard
                icon={<Warehouse />}
                title="거점 설계 및 레이아웃"
                desc="물동량 데이터를 기반으로 최적의 물류 센터 위치를 선정하고 내부 레이아웃을 설계합니다."
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-base-gray p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group">
      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 text-primary group-hover:text-accent group-hover:scale-110 transition-all shadow-sm">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
