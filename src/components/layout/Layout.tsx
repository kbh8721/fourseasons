import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ConsultationModal } from "../ui/ConsultationModal";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare } from "lucide-react";

export function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar onOpenConsultation={() => setIsModalOpen(true)} />
      
      <main className="flex-grow">
        <Outlet context={{ openConsultation: () => setIsModalOpen(true) }} />
      </main>

      <Footer />

      {/* Floating CTA for Mobile / Quick Access */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-primary/90 transition-colors md:hidden"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isModalOpen && (
          <ConsultationModal onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
