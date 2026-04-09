import React, { useState } from "react";
import { motion } from "motion/react";
import { X, CheckCircle2, ArrowRight, Building2, User } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function ConsultationModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: "",
    inquiry: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleNext = () => setStep((s) => s + 1);
  const handlePrev = () => setStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep(4);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-primary">무료 컨설팅 신청</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {/* Progress Bar */}
          {step < 4 && (
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-2 flex-1 rounded-full mx-1 transition-colors duration-300",
                      i <= step ? "bg-accent" : "bg-gray-100"
                    )}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 text-center">Step {step} of 3</p>
            </div>
          )}

          {/* Step 1: Type */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h3 className="text-lg font-semibold mb-6 text-center">어떤 고객이신가요?</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => { setFormData({ ...formData, type: "corporate" }); handleNext(); }}
                  className="flex flex-col items-center justify-center p-8 border-2 border-gray-100 rounded-xl hover:border-accent hover:bg-accent/5 transition-all group"
                >
                  <Building2 className="w-12 h-12 text-gray-400 group-hover:text-accent mb-4" />
                  <span className="font-medium text-gray-900">기업 고객</span>
                  <span className="text-xs text-gray-500 mt-2">물류 대행 / 컨설팅</span>
                </button>
                <button
                  onClick={() => { setFormData({ ...formData, type: "individual" }); handleNext(); }}
                  className="flex flex-col items-center justify-center p-8 border-2 border-gray-100 rounded-xl hover:border-accent hover:bg-accent/5 transition-all group"
                >
                  <User className="w-12 h-12 text-gray-400 group-hover:text-accent mb-4" />
                  <span className="font-medium text-gray-900">개인 고객</span>
                  <span className="text-xs text-gray-500 mt-2">지입차주 상담</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Inquiry */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h3 className="text-lg font-semibold mb-6">문의하실 내용을 선택해주세요</h3>
              <div className="space-y-3">
                {["종합 물류 대행", "물류 네트워크 컨설팅", "지입차주 가입 문의", "기타 문의"].map((item) => (
                  <button
                    key={item}
                    onClick={() => { setFormData({ ...formData, inquiry: item }); handleNext(); }}
                    className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-accent hover:bg-accent/5 transition-colors font-medium text-gray-700"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button onClick={handlePrev} className="mt-6 text-sm text-gray-500 hover:text-primary">
                이전으로
              </button>
            </motion.div>
          )}

          {/* Step 3: Contact */}
          {step === 3 && (
            <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleSubmit}>
              <h3 className="text-lg font-semibold mb-6">연락처를 남겨주세요</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">이름 / 담당자명</label>
                  <input required type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                  <input required type="tel" placeholder="010-0000-0000" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">이메일 (선택)</label>
                  <input type="email" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <button type="button" onClick={handlePrev} className="px-6 py-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  이전
                </button>
                <button type="submit" className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  신청 완료하기 <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.form>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-10 h-10 text-accent" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">신청이 완료되었습니다</h3>
              <p className="text-gray-500 mb-8">
                담당자가 내용을 확인한 후<br />빠른 시일 내에 연락드리겠습니다.
              </p>
              <button
                onClick={onClose}
                className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                닫기
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
