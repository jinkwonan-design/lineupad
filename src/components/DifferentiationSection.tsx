"use client";

import { motion } from "framer-motion";
import { Check, TrendingUp } from "lucide-react";

const differentiators = [
  {
    title: "조회수가 터져야 매출도 터진다",
    description: "알고리즘을 타게끔 만드는 후킹 요소 삽입",
  },
  {
    title: "구매를 유도하는 심리",
    description: "'이거 어디서 사요?' '얼마에요?' 라는 댓글이 달리게끔 만듭니다",
  },
  {
    title: "대기업 1/10 가격",
    description: "부담없는 가격으로 다수의 영상 제작 가능",
  },
];

export default function DifferentiationSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-background/50 text-lg md:text-xl mb-4">
            광고비만 태우고 매출은 그대로인가요?
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-background">
            범인은{" "}
            <span className="text-primary relative">
              컨텐츠
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary/40"/>
              </svg>
            </span>
            입니다
          </h2>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-background via-background to-gray-800 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium text-sm">실제 성과</span>
            </div>

            <h3 className="text-center text-xl md:text-2xl text-white/80 mb-8">
              유튜브에 영상 올려놓기만 했는데
            </h3>

            {/* Main Stat */}
            <div className="text-center mb-8">
              <p className="text-6xl md:text-8xl font-black text-primary mb-2">14억+</p>
              <p className="text-white/60 text-base">누적 매출 달성</p>
            </div>

            {/* Sub Stats */}
            <div className="flex justify-center gap-12 md:gap-20">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">6만</p>
                <p className="text-white/40 text-sm">총 주문수</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">41.8만</p>
                <p className="text-white/40 text-sm">제품 클릭수</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Differentiators Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-background mb-4">
            라인업애드는 다릅니다
          </h3>
          <p className="text-lg md:text-xl text-background/50">
            저희가 만드는 영상에는 <span className="text-primary font-bold">이유</span>가 있습니다
          </p>
        </motion.div>

        {/* Differentiators */}
        <div className="space-y-4">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-gray-50 hover:bg-emerald-50 rounded-2xl p-6 md:p-8 transition-all duration-300 border border-gray-100 hover:border-emerald-200"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                  <Check className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-background mb-2">
                    {item.title}
                  </h3>
                  <p className="text-background/60 text-base md:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
