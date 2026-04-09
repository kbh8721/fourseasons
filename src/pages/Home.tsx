import { motion } from "motion/react";
import { Link, useOutletContext } from "react-router-dom";
import { LiveTicker } from "../components/ui/LiveTicker";
import { CargoSimulator } from "../components/ui/CargoSimulator";
import { Building2, Truck, ArrowRight, ShieldCheck, Clock, Globe2 } from "lucide-react";

export function Home() {
  const { openConsultation } = useOutletContext<{ openConsultation: () => void }>();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            alt="Logistics Warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-base-gray" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
              사계절 내내 변함없는 신뢰,<br />
              <span className="text-accent">글로벌 물류</span>의 새로운 기준.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              최첨단 IT 시스템과 전국 단위 인프라를 통해 고객의 비즈니스 성장을 가속화하는 맞춤형 종합 물류 솔루션을 제공합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={openConsultation}
                className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(46,204,113,0.3)] hover:shadow-[0_0_30px_rgba(46,204,113,0.5)] flex items-center gap-2"
              >
                무료 컨설팅 신청 <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/services"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                서비스 자세히 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Ticker */}
      <LiveTicker />

      {/* Dual Gateway Section */}
      <section className="py-24 bg-base-gray relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">어떤 서비스가 필요하신가요?</h2>
            <p className="text-gray-500 text-lg">고객님의 상황에 맞는 최적의 솔루션을 선택해주세요.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Corporate Gateway */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group cursor-pointer"
              onClick={openConsultation}
            >
              <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                <Building2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">기업 물류 / 컨설팅</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                복잡한 공급망 관리를 단순화하고 물류 비용을 절감하세요. 사계절 물류의 전문가가 귀사의 비즈니스에 딱 맞는 맞춤형 컨설팅을 제공합니다.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircleIcon /> 전국 단위 운송 네트워크
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircleIcon /> 스마트 창고 및 재고 관리
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircleIcon /> 수출입 포워딩 서비스
                </li>
              </ul>
              <div className="flex items-center text-primary font-bold group-hover:text-accent transition-colors">
                기업 상담 신청하기 <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>

            {/* Individual/Driver Gateway */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group cursor-pointer"
              onClick={openConsultation}
            >
              <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors">
                <Truck className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">지입차주 모집 / 안내</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                안정적인 물량과 투명한 정산 시스템으로 사장님의 성공적인 비즈니스를 지원합니다. 사계절 물류와 함께 든든한 내일을 준비하세요.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircleIcon color="text-accent" /> 업계 최고 수준 운임 보장
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircleIcon color="text-accent" /> 100% 투명한 익월 정산
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircleIcon color="text-accent" /> 차량 정비 및 복지 혜택
                </li>
              </ul>
              <div className="flex items-center text-accent font-bold group-hover:text-primary transition-colors">
                지입 상담 신청하기 <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">데이터로 증명하는 효율성</h2>
            <p className="text-gray-500 text-lg">사계절 물류의 최적화 알고리즘이 만들어내는 놀라운 비용 절감 효과를 직접 확인해보세요.</p>
          </div>
          <CargoSimulator />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">무사고 안전 책임주의</h3>
              <p className="text-gray-400 leading-relaxed">
                철저한 사전 점검과 실시간 모니터링으로 화물의 안전을 최우선으로 보장합니다.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">정시 배송률 99.8%</h3>
              <p className="text-gray-400 leading-relaxed">
                빅데이터 기반의 라우팅 최적화를 통해 약속된 시간에 정확하게 배송합니다.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Globe2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">글로벌 네트워크</h3>
              <p className="text-gray-400 leading-relaxed">
                전 세계 주요 항만 및 공항과 연결된 강력한 파트너십으로 국경 없는 물류를 실현합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckCircleIcon({ color = "text-primary" }: { color?: string }) {
  return (
    <svg className={`w-5 h-5 ${color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
