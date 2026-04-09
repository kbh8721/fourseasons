import { motion } from "motion/react";

const TICKER_ITEMS = [
  "🚢 [부산항] 컨테이너선 입항 완료 및 하역 작업 중",
  "🚛 [수도권] 당일 새벽 배송 98.5% 달성",
  "✈️ [인천공항] 항공 화물 정상 처리 중 (지연 없음)",
  "🏢 [용인센터] 냉동/냉장 창고 가동률 85%",
  "🌐 [글로벌] 미주 노선 해운 운임 안정화 추세",
];

export function LiveTicker() {
  return (
    <div className="bg-primary/95 text-white py-3 overflow-hidden flex items-center border-b border-white/10">
      <div className="px-4 md:px-8 flex-shrink-0 flex items-center gap-2 border-r border-white/20 mr-4">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
        </span>
        <span className="text-sm font-bold tracking-wider text-accent">LIVE STATUS</span>
      </div>
      
      <div className="flex-1 overflow-hidden relative">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex whitespace-nowrap gap-12 text-sm text-gray-300"
        >
          {/* Double the items for seamless looping */}
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
