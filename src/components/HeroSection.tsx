"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const portfolioItems = [
  { category: "F&B 브랜드", metric: "조회수 83만" },
  { category: "식품 A 브랜드", metric: "ROAS 3.1배" },
  { category: "F&B B 브랜드", metric: "조회수 147만" },
  { category: "푸드 C 브랜드", metric: "매출 1000만" },
  { category: "식품 D 브랜드", metric: "조회수 257만" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 pt-16 md:pt-24 pb-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-background/5 border border-background/10 rounded-full text-sm text-background/70">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            식품 · F&B 전문 영상 제작
          </span>
        </motion.div>

        {/* Main Headline */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-background leading-[1.1] tracking-tight mb-6"
          >
            인플루언서가
            <br />
            직접 만드는{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                숏폼 영상
              </span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-0" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-background/60 font-medium max-w-2xl mx-auto"
          >
            대기업 대비{" "}
            <span className="text-background font-bold">1/10</span> 비용으로{" "}
            <span className="text-background font-bold">10배</span> 더 높은 조회수를 경험하세요
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#contact"
            className="group w-full sm:w-auto px-8 py-4 bg-background text-white rounded-full font-bold text-lg hover:bg-background/90 transition-all duration-300 flex items-center justify-center gap-2"
          >
            무료 상담 받기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-background border-2 border-background/20 rounded-full font-bold text-lg hover:border-background/40 hover:bg-background/5 transition-all duration-300"
          >
            포트폴리오 보기
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-8 md:gap-16 mb-16"
        >
          {[
            { value: "500+", label: "제작 영상" },
            { value: "14억", label: "누적 매출" },
            { value: "1,000만+", label: "총 조회수" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-4xl font-black text-background">{stat.value}</p>
              <p className="text-sm md:text-base text-background/50">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Portfolio Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-center text-background/40 text-sm mb-6">
            최근 제작 영상
          </p>

          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-hide justify-center">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex-shrink-0 w-[140px] md:w-[170px] snap-center cursor-pointer group"
              >
                {/* iPhone Mockup */}
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-[3px] shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    {/* Inner Frame */}
                    <div className="relative bg-[#0a0a0a] rounded-[2.3rem] overflow-hidden">
                      {/* Screen */}
                      <div className="relative aspect-[9/19.5] bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
                        {/* Dynamic Island */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[35%] h-[22px] bg-black rounded-full z-20" />

                        {/* Screen Content - Video Thumbnail Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
                          {/* Food image placeholder pattern */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-gray-700/50 flex items-center justify-center">
                              <Play className="w-8 h-8 text-white/60 fill-white/60 ml-1" />
                            </div>
                          </div>

                          {/* Subtle overlay lines */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-1/4 left-0 right-0 h-px bg-white/20" />
                            <div className="absolute top-2/4 left-0 right-0 h-px bg-white/20" />
                            <div className="absolute top-3/4 left-0 right-0 h-px bg-white/20" />
                          </div>
                        </div>

                        {/* Play Button Overlay on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-lg">
                            <Play className="w-6 h-6 text-background fill-background ml-0.5" />
                          </div>
                        </div>

                        {/* Bottom Metric Badge */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
                          <span className="bg-primary text-background text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                            {item.metric}
                          </span>
                        </div>

                        {/* Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-1 bg-white/30 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Side Buttons */}
                  <div className="absolute left-0 top-[25%] w-[3px] h-8 bg-[#2a2a2a] rounded-l-sm" />
                  <div className="absolute left-0 top-[40%] w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
                  <div className="absolute left-0 top-[55%] w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
                  <div className="absolute right-0 top-[35%] w-[3px] h-16 bg-[#2a2a2a] rounded-r-sm" />
                </div>

                {/* Category Label */}
                <p className="text-center text-xs text-background/50 mt-4 font-medium">
                  {item.category}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
