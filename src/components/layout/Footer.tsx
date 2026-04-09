import { Link } from "react-router-dom";
import { Ship, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Ship className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold tracking-tight">사계절 물류</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              사계절 내내 변함없는 신뢰.<br />
              글로벌 물류의 새로운 기준을 제시합니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">서비스</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">기업 물류 대행</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">물류 컨설팅</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">국제 운송</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">창고 보관 및 재고 관리</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">파트너</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/driver-guide" className="hover:text-white transition-colors">지입차주 안내</Link></li>
              <li><Link to="/driver-guide" className="hover:text-white transition-colors">협력사 등록</Link></li>
              <li><Link to="/driver-guide" className="hover:text-white transition-colors">채용 정보</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">고객센터</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><span className="block text-accent font-bold text-xl mb-1">1588-0000</span></li>
              <li>평일 09:00 - 18:00</li>
              <li>주말 및 공휴일 휴무</li>
              <li className="pt-2">
                <a href="mailto:contact@4seasonslogistics.com" className="hover:text-white transition-colors">
                  contact@4seasonslogistics.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 4Seasons Logistics. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <Link to="#" className="hover:text-white transition-colors">이용약관</Link>
            <Link to="#" className="hover:text-white transition-colors">이메일무단수집거부</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
