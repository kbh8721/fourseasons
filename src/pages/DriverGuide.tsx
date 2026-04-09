import { motion } from "motion/react";
import { Wallet, Wrench, HeartHandshake, ArrowRight } from "lucide-react";
import { useOutletContext } from "react-router-dom";

export function DriverGuide() {
  const { openConsultation } = useOutletContext<{ openConsultation: () => void }>();

  return (
    <div className="pt-32 pb-24 bg-base-gray min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">지입차주 안내</h1>
          <p className="text-xl text-gray-600">사계절 물류와 함께 성장할 든든한 파트너를 모십니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <Wallet className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-xl font-bold mb-3">안정적인 수익 보장</h3>
            <p className="text-gray-600">대기업 고정 물량 확보로 비수기 없는 안정적인 매출을 약속드립니다. 익월 100% 현금 결제.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <Wrench className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-xl font-bold mb-3">차량 관리 지원</h3>
            <p className="text-gray-600">지정 정비소 할인 혜택 및 소모품 지원, 신차 구매 시 저금리 금융 상품을 연계해 드립니다.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <HeartHandshake className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-xl font-bold mb-3">우수 차주 포상</h3>
            <p className="text-gray-600">무사고, 근태 우수 차주님께 매 분기 포상금 지급 및 명절 귀향비, 경조사를 지원합니다.</p>
          </motion.div>
        </div>

        <div className="bg-primary text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">지금 바로 상담받아보세요</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              초기 자본금 상담부터 차량 선택, 노선 배정까지 전문 매니저가 1:1로 상세히 안내해 드립니다.
            </p>
            <button
              onClick={openConsultation}
              className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all flex items-center gap-2 mx-auto"
            >
              지입 상담 신청하기 <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
