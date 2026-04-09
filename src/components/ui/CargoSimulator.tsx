import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { motion } from "motion/react";
import { Calculator, ArrowRight } from "lucide-react";

const DATA_MOCK = [
  { name: "수도권", 기존물류비: 120, 사계절물류: 85 },
  { name: "충청권", 기존물류비: 150, 사계절물류: 110 },
  { name: "영남권", 기존물류비: 200, 사계절물류: 145 },
  { name: "호남권", 기존물류비: 180, 사계절물류: 130 },
];

export function CargoSimulator() {
  const [isSimulated, setIsSimulated] = useState(false);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulated(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
      {/* Form Section */}
      <div className="p-8 lg:w-1/3 bg-gray-50 border-r border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">실시간 화물 매칭 시뮬레이터</h3>
        </div>
        <p className="text-sm text-gray-500 mb-8">
          출발지와 도착지, 화물 종류를 입력하시면 예상 물류비 절감 효과를 분석해 드립니다.
        </p>

        <form onSubmit={handleSimulate} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">출발지</label>
            <select className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-accent outline-none">
              <option>서울/경기</option>
              <option>부산/경남</option>
              <option>인천</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">도착지</label>
            <select className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-accent outline-none">
              <option>전국 각지</option>
              <option>수도권 물류센터</option>
              <option>항만/공항</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">화물 종류</label>
            <select className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-accent outline-none">
              <option>일반 규격 화물 (팔레트)</option>
              <option>냉동/냉장 신선식품</option>
              <option>특수/위험 화물</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-4"
          >
            효율성 분석하기 <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Chart Section */}
      <div className="p-8 lg:w-2/3 flex flex-col justify-center min-h-[400px]">
        {!isSimulated ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-400">
            <BarChart className="w-16 h-16 mb-4 opacity-20" />
            <p>조건을 입력하고 분석하기 버튼을 눌러주세요.</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-full w-full flex flex-col"
          >
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h4 className="text-lg font-bold text-gray-900">예상 물류비 절감 효과</h4>
                <p className="text-sm text-gray-500">권역별 평균 운송비 비교 (단위: 만원)</p>
              </div>
              <div className="text-right">
                <span className="block text-sm text-gray-500">평균 절감률</span>
                <span className="text-3xl font-bold text-accent">28.5%</span>
              </div>
            </div>
            <div className="flex-1 w-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={DATA_MOCK} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} />
                  <Tooltip
                    cursor={{ fill: '#f8f9fa' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar dataKey="기존물류비" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={32} />
                  <Bar dataKey="사계절물류" fill="#2ECC71" radius={[4, 4, 0, 0]} barSize={32} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
