"use client";

import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";

const pricingTiers = [
  {
    name: "BASIC",
    price: "30",
    recommended: false,
    features: [
      "조리 과정 촬영",
      "곁들임 음식 구성",
    ],
  },
  {
    name: "STANDARD",
    price: "50",
    recommended: true,
    features: [
      "조리 과정 촬영",
      "곁들임 음식 구성",
      "먹는 장면(시식) 포함",
      "제품 언박싱 연출",
    ],
  },
  {
    name: "PREMIUM",
    price: "80",
    recommended: false,
    features: [
      "STANDARD 항목 전체 포함",
      "목소리 남/여 버전 제공",
      "인트로 A/B 버전 제공",
      "소구점별 맞춤 기획",
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-background/50 text-base md:text-lg mb-4">
            투명한 가격 정책
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-background mb-6">
            영상 제작{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
              가이드라인
            </span>
          </h2>
          <p className="text-background/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            브랜드 목표와 예산에 맞는 최적의 플랜을 선택하세요
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {pricingTiers.map((tier, index) => {
            const isRecommended = tier.recommended;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 ${
                  isRecommended
                    ? "border-primary shadow-xl scale-105 md:scale-110"
                    : "border-gray-200 shadow-sm hover:shadow-lg"
                }`}
              >
                {isRecommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <motion.span
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      }}
                      className="bg-primary text-background text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg"
                    >
                      <Crown className="w-3.5 h-3.5" />
                      BEST
                    </motion.span>
                  </div>
                )}

                {/* Plan Name */}
                <div className="text-center mb-6">
                  <p
                    className={`text-lg font-bold mb-2 ${
                      isRecommended ? "text-primary" : "text-background/70"
                    }`}
                  >
                    {tier.name}
                  </p>
                  <div className="flex items-end justify-center gap-1">
                    <span
                      className={`text-4xl md:text-5xl font-black ${
                        isRecommended
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300"
                          : "text-background"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span className="text-background/50 text-lg mb-1">만원</span>
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-px mb-6 ${isRecommended ? "bg-primary/30" : "bg-gray-200"}`} />

                {/* Features */}
                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + featureIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isRecommended ? "bg-primary" : "bg-primary/20"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            isRecommended ? "text-background" : "text-primary"
                          }`}
                        />
                      </div>
                      <p className="text-sm text-background/80">{feature}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full mt-8 py-4 rounded-full text-center font-bold transition-all duration-300 ${
                    isRecommended
                      ? "bg-primary text-background hover:bg-primary/90 shadow-lg"
                      : "bg-gray-100 text-background hover:bg-gray-200"
                  }`}
                >
                  상담 신청하기
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-background/40 mt-12 text-sm"
        >
          * 모든 플랜에 원본 영상 파일이 포함됩니다
        </motion.p>
      </div>
    </section>
  );
}
