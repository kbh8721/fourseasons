import { motion } from "motion/react";

const NEWS = [
  {
    id: 1,
    category: "보도자료",
    title: "사계절 물류, 2026년 최우수 물류기업 국토부 장관상 수상",
    date: "2026.04.05",
    image: "https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "공지사항",
    title: "부산 신항 제2물류센터 오픈 안내",
    date: "2026.03.20",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "물류트렌드",
    title: "AI가 바꾸는 2026년 글로벌 공급망의 미래",
    date: "2026.03.10",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "보도자료",
    title: "친환경 전기 화물차 100대 추가 도입 완료",
    date: "2026.02.28",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop",
  },
];

export function Center() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">고객센터</h1>
          <p className="text-xl text-gray-600">사계절 물류의 새로운 소식과 물류 트렌드를 전해드립니다.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group cursor-pointer flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold text-accent mb-2 block">{item.category}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <span className="text-sm text-gray-500 mt-auto">{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
