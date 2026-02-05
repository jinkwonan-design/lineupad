"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration - matching hero style */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-background/50 text-base md:text-lg mb-4">
            같은 비용, 다른 결과
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-background leading-tight">
            어떤 마케팅이 더{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">효과적</span>일까요?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Blog Reviews */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-3 w-full">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200"
                    >
                      <span className="text-background/30 text-xs font-medium">블로그 리뷰</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center pt-6 mt-6 border-t border-gray-100">
                <p className="text-background/50 text-sm mb-1">체험단 조회수 평균</p>
                <p className="text-3xl md:text-4xl font-black text-background/40">100회</p>
              </div>
            </div>
          </motion.div>

          {/* Short-form Videos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-primary/30 shadow-lg ring-4 ring-primary/10 h-full flex flex-col">
              {/* Vertical short-form videos */}
              <div className="flex-1 flex items-center justify-center">
                <div className="flex justify-center gap-3">
                  {[
                    "from-orange-400 to-red-500",
                    "from-pink-400 to-rose-500",
                    "from-violet-400 to-purple-500",
                  ].map((color, i) => (
                    <div
                      key={i}
                      className={`aspect-[9/16] w-16 md:w-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center pt-6 mt-6 border-t border-gray-100">
                <p className="text-background/50 text-sm mb-1">숏폼 조회수</p>
                <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">653만회</p>
              </div>
            </div>
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-background text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                6,530배 효과
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-xl md:text-2xl text-background/70">
            대표님은 뭘{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400 font-bold">선택</span>
            하고 싶으신가요?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
