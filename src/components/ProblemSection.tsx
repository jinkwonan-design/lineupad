"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

const problems = [
  {
    title: "예쁘기만 한 영상",
    description: "4K 카메라, 감성 조명... 근데 그게 매출이 되던가요?",
  },
  {
    title: "셀링포인트를 모르는 촬영",
    description: "예쁘게 찍는 건 잘해도, 뭘 부각해야 팔리는진 모릅니다",
  },
  {
    title: "AI로 식욕이 만들어지나요?",
    description: "AI가 이미지는 만들어도, 침 고이게 하는 건 못 합니다",
  },
];

export default function ProblemSection() {
  return (
    <section id="service" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-background">
            기존 영상 제작 업체,
            <br />
            <span className="text-background/40">왜 효과가 없을까요?</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-background mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-background/60 text-base md:text-lg leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-background/70">
            결국 중요한 건 <span className="text-primary font-black">매출로 이어지는 영상</span>입니다
          </p>
        </motion.div>
      </div>
    </section>
  );
}
