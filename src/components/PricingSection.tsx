"use client";

import { motion } from "framer-motion";
import { Check, Crown, Zap } from "lucide-react";

interface Feature {
  highlight: string;
  detail?: string;
}

interface PricingTier {
  name: string;
  price: string;
  persona: string;
  badge?: { text: string; type: "best" | "pro" };
  recommended: boolean;
  premium?: boolean;
  features: Feature[];
  stats: { icon: string; text: string; strong: string };
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "BASIC",
    price: "30",
    persona: "꼭 필요한 구성만 선택, 알짜배기 효율을 원한다면!",
    recommended: false,
    features: [
      { highlight: "완제품 그대로 촬영", detail: "가공 없이 제품의 본모습을 깔끔하게 촬영" },
      { highlight: "조리 과정 포함", detail: "칼질, 불 사용 등 실제 요리 과정 연출" },
      { highlight: "언박싱 및 패키지 브랜딩", detail: "제품 개봉부터 포장까지 브랜드 설계" },
      { highlight: "곁들임 음식 구성", detail: "메인 외 소스, 가니쉬 등 풍성한 상차림" },
    ],
    stats: { icon: "📸", text: "기본 조리 연출로 ", strong: "제품의 매력을 깔끔하게 전달" },
    cta: "상담 신청하기",
  },
  {
    name: "STANDARD",
    price: "50",
    persona: "바이럴 요소 → 즉각적인 반응은 매출로 바로 반영!",
    badge: { text: "BEST", type: "best" },
    recommended: true,
    features: [
      { highlight: "BASIC 항목 전체 포함" },
      { highlight: "먹는 장면(시식) 포함", detail: "모델의 표정과 리액션으로 맛 전달" },
      { highlight: "씨즐(Sizzle) 특수 연출", detail: "치즈 늘리기, 소스 붓기 등 시각적 쾌감" },
      { highlight: "고감도 ASMR 음향", detail: "바삭함, 보글거림 등 식욕 깨우는 현장음" },
    ],
    stats: { icon: "🔥", text: "시청각 극대화로 ", strong: "평균 체류시간 2.4배 ↑" },
    cta: "가장 인기 있는 플랜 시작하기",
  },
  {
    name: "PREMIUM",
    price: "80",
    persona: "소구점이 다른 두개의 영상을 하나의 제작 비용으로!",
    badge: { text: "성과 극대화", type: "pro" },
    recommended: false,
    premium: true,
    features: [
      { highlight: "STANDARD 항목 전체 포함" },
      { highlight: "소구점이 다른 영상 2개 제작", detail: "타겟별 맞춤 메시지로 A/B 테스트 가능" },
      { highlight: "하나의 제품, 두 가지 대본", detail: "각각 다른 소구점으로 구성된 별도 스크립트" },
      { highlight: "목소리까지 다르게 연출", detail: "영상별 톤·성별이 다른 내레이션 제공" },
    ],
    stats: { icon: "📊", text: "A/B 테스트로 ", strong: "광고 전환율 평균 35% 개선" },
    cta: "프리미엄 상담 신청하기",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
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
          <p className="text-xs font-semibold tracking-[3px] uppercase text-primary mb-4">
            Transparent Pricing
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
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {pricingTiers.map((tier, index) => {
            const isRecommended = tier.recommended;
            const isPremium = tier.premium;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative bg-white rounded-3xl border transition-all duration-300 flex flex-col ${
                  isRecommended
                    ? "border-primary shadow-xl md:scale-105 z-10"
                    : isPremium
                    ? "border-emerald-700 bg-gradient-to-b from-white to-emerald-50"
                    : "border-gray-200 shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Badge */}
                <div className="flex justify-center pt-5 pb-1">
                  {tier.badge && (
                    <motion.span
                      animate={isRecommended ? { scale: [1, 1.05, 1] } : undefined}
                      transition={isRecommended ? { duration: 2, repeat: Infinity, repeatDelay: 0.5 } : undefined}
                      className={`inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                        tier.badge.type === "best"
                          ? "bg-primary text-background shadow-lg"
                          : "bg-emerald-700 text-white shadow-lg"
                      }`}
                    >
                      {tier.badge.type === "best" ? (
                        <Crown className="w-3 h-3" />
                      ) : (
                        <Zap className="w-3 h-3" />
                      )}
                      {tier.badge.text}
                    </motion.span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 pb-8 flex-1 flex flex-col">
                  {/* Plan Name */}
                  <p className={`text-sm font-bold tracking-[2px] uppercase mb-1 ${
                    isPremium ? "text-emerald-700" : "text-primary"
                  }`}>
                    {tier.name}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`text-5xl font-black tracking-tight ${
                      isRecommended
                        ? "text-primary"
                        : isPremium
                        ? "text-emerald-700"
                        : "text-background"
                    }`}>
                      {tier.price}
                    </span>
                    <span className="text-lg text-background/50">만원</span>
                  </div>

                  {/* Persona */}
                  <span className={`inline-block self-start px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5 ${
                    isPremium
                      ? "bg-emerald-700/10 text-emerald-700"
                      : "bg-primary/10 text-primary"
                  }`}>
                    {tier.persona}
                  </span>

                  {/* Divider */}
                  <div className={`h-px mb-5 ${
                    isPremium ? "bg-emerald-700/15" : isRecommended ? "bg-primary/30" : "bg-gray-200"
                  }`} />

                  {/* Features */}
                  <div className="space-y-3.5 mb-6 flex-1">
                    {tier.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + featureIndex * 0.1 }}
                        className="flex items-start gap-2.5"
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isPremium
                            ? "bg-emerald-700/15"
                            : "bg-primary/10"
                        }`}>
                          <Check className={`w-3 h-3 ${
                            isPremium ? "text-emerald-700" : "text-primary"
                          }`} />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-background">{feature.highlight}</span>
                          {feature.detail && (
                            <span className="block text-xs text-background/40 mt-0.5">{feature.detail}</span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats Callout */}
                  <div className={`rounded-xl p-3.5 flex items-center gap-3 mb-6 ${
                    isPremium
                      ? "bg-emerald-700/10"
                      : "bg-primary/10"
                  }`}>
                    <span className="text-2xl flex-shrink-0">{tier.stats.icon}</span>
                    <p className="text-xs text-background/60 leading-relaxed">
                      {tier.stats.text}
                      <strong className={isPremium ? "text-emerald-700" : "text-primary"}>
                        {tier.stats.strong}
                      </strong>
                    </p>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`block w-full py-4 rounded-2xl text-center text-[15px] font-bold transition-all duration-300 mt-auto ${
                      isRecommended
                        ? "bg-primary text-background hover:bg-primary/90 shadow-lg shadow-primary/30"
                        : isPremium
                        ? "bg-emerald-700 text-white hover:bg-emerald-800 shadow-lg shadow-emerald-700/25"
                        : "bg-primary/10 text-emerald-700 border border-primary/30 hover:bg-primary/15"
                    }`}
                  >
                    {tier.cta}
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <span className="inline-flex items-center gap-1.5 bg-white px-5 py-2.5 rounded-full border border-gray-200 text-sm text-background/40">
            📁 모든 플랜에 원본 영상 파일이 포함됩니다
          </span>
        </motion.div>
      </div>
    </section>
  );
}
