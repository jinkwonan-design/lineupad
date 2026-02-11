"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-background mb-3 sm:mb-4">
            &apos;우리 제품도{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">가능</span>
            할까?&apos;
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-background/60 mb-8 sm:mb-10">
            제품 사진 한 장이면 무료로 진단해 드립니다
          </p>

          <motion.a
            href="https://open.kakao.com/o/sXiCmDfi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2.5 sm:gap-3 bg-primary text-background px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            무료 진단 신청하기
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
