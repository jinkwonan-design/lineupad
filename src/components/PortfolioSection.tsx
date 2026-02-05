"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const portfolioItems = [
  { views: "83만", color: "from-orange-400 to-orange-500" },
  { views: "31만", color: "from-pink-400 to-pink-500" },
  { views: "147만", color: "from-emerald-400 to-emerald-500" },
  { views: "257만", color: "from-blue-400 to-blue-500" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration - matching hero style */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-background/50 text-base md:text-lg mb-4">
            밀키트, 디저트, 건강기능식품까지 — 카테고리의 한계를 깨는 압도적 성과
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-background leading-tight">
            당신의 제품도{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">품절대란</span>의 주인공이 됩니다
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white/40 transition-all duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
                  {item.views}뷰
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
