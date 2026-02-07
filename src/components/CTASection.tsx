"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-background/50 text-base md:text-lg mb-4">
            무료 상담 신청
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-background mb-4">
            지금 바로{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">문의</span>
            하세요
          </h2>
          <p className="text-lg md:text-xl text-background/60 mb-10">
            카카오톡으로 간편하게 상담받으세요
          </p>

          <motion.a
            href="https://pf.kakao.com/_xexaxl"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#FEE500] text-[#3C1E1E] px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            카카오톡 문의하기
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
