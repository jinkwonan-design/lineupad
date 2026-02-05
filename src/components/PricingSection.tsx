"use client";

import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    title: "기본 및 조리 연출",
    items: [
      { id: 1, name: "완제품 그대로 촬영", desc: "가공 없이 제품의 본모습을 깔끔하게 촬영" },
      { id: 2, name: "조리 과정 포함", desc: "칼질, 불 사용 등 실제 요리 과정 연출" },
      { id: 3, name: "고기 굽기 연출", desc: "육즙과 그릴링을 살리는 전문 굽기 작업" },
      { id: 4, name: "곁들임 음식 구성", desc: "메인 외 소스, 가니쉬 등 풍성한 상차림" },
    ],
  },
  {
    title: "시각/청각 극대화",
    items: [
      { id: 5, name: "먹는 장면(시식) 포함", desc: "모델의 표정과 리액션으로 맛 전달" },
      { id: 6, name: "씨즐(Sizzle) 특수 연출", desc: "치즈 늘리기, 소스 붓기 등 시각적 쾌감" },
      { id: 7, name: "매크로(초근접) 질감 촬영", desc: "육즙, 바삭한 단면 등 초근접 디테일" },
      { id: 8, name: "고감도 ASMR 음향", desc: "바삭함, 보글거림 등 식욕 깨우는 현장음" },
    ],
  },
  {
    title: "전문 기획 및 환경",
    items: [
      { id: 9, name: "언박싱 및 패키지 브랜딩", desc: "제품 개봉부터 포장까지 브랜드 설계" },
      { id: 10, name: "레시피/정보성 모션 그래픽", desc: "조리법이나 성분을 디자인 자막으로 전달" },
      { id: 11, name: "외부 로케이션 촬영", desc: "매장 현장, 야외 등 특수 장소 출장 촬영" },
      { id: 12, name: "영상 길이 연장", desc: "고밀도 기획으로 40초 초과 영상 제작" },
    ],
  },
];

const pricingTiers = [
  {
    name: "BASIC",
    description: "완제품 촬영",
    price: "30",
    minChecks: 0,
    maxChecks: 1,
    recommended: false,
  },
  {
    name: "STANDARD",
    description: "옵션 2~3개",
    price: "45",
    minChecks: 2,
    maxChecks: 3,
    recommended: false,
  },
  {
    name: "ADVANCED",
    description: "옵션 4~6개",
    price: "65",
    minChecks: 4,
    maxChecks: 6,
    recommended: false,
  },
  {
    name: "PREMIUM",
    description: "옵션 7~9개",
    price: "90",
    minChecks: 7,
    maxChecks: 9,
    recommended: true,
  },
  {
    name: "MASTER",
    description: "옵션 10개 이상",
    price: "120",
    minChecks: 10,
    maxChecks: 99,
    recommended: false,
    plus: true,
  },
];

export default function PricingSection() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getActiveTierIndex = () => {
    const count = checkedItems.length;
    if (count === 0) return -1;
    return pricingTiers.findIndex(
      (tier) => count >= tier.minChecks && count <= tier.maxChecks
    );
  };

  const activeTierIndex = getActiveTierIndex();

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
              가이드라인
            </span>
          </h2>
          <p className="text-background/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            선택하신 옵션 하나하나가 조회수를 높이고
            <br className="hidden md:block" />
            고객의 지갑을 여는 강력한 소구 포인트가 됩니다.
          </p>
          {checkedItems.length > 0 && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-primary font-semibold"
            >
              선택된 옵션: {checkedItems.length}개
            </motion.p>
          )}
        </motion.div>

        {/* Options Grid - 3 Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {categories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm"
            >
              <h3 className="text-lg font-bold text-background mb-4 pb-3 border-b border-gray-100">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => {
                  const isChecked = checkedItems.includes(item.id);
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + itemIndex * 0.05 }}
                      className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all duration-300 text-left ${
                        isChecked
                          ? "bg-primary/10 border-2 border-primary shadow-md"
                          : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${
                          isChecked
                            ? "bg-primary"
                            : "bg-gray-200"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 transition-all duration-300 ${
                            isChecked ? "text-white" : "text-gray-400"
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-semibold transition-colors duration-300 ${
                            isChecked ? "text-primary" : "text-background"
                          }`}
                        >
                          {item.name}
                        </p>
                        <p className="text-xs text-background/50 mt-0.5">{item.desc}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-3xl border border-gray-200 shadow-sm overflow-visible pt-4">
            <div className="grid grid-cols-5">
              {pricingTiers.map((tier, index) => {
                const isActive = index === activeTierIndex;
                const isRecommended = tier.recommended;
                return (
                  <motion.div
                    key={index}
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      y: isActive ? -8 : 0,
                    }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    className={`relative p-6 text-center border-r last:border-r-0 border-gray-100 transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-b from-primary/20 to-primary/10 shadow-lg rounded-2xl z-10"
                        : ""
                    }`}
                  >
                    {(isRecommended || isActive) && (
                      <div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <motion.span
                          animate={{
                            scale: isActive ? [1, 1.1, 1] : 1,
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: isActive ? Infinity : 0,
                            repeatDelay: 1,
                          }}
                          className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 ${
                            isActive
                              ? "bg-primary text-background shadow-lg"
                              : "bg-primary text-background"
                          }`}
                        >
                          <Crown className="w-3 h-3" />
                          {isActive ? "선택됨" : "BEST"}
                        </motion.span>
                      </div>
                    )}
                    <p
                      className={`text-sm font-bold mb-1 transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-background/50"
                      }`}
                    >
                      {tier.name}
                    </p>
                    <p className="text-xs text-background/40 mb-4">{tier.description}</p>
                    <div>
                      <span
                        className={`text-3xl font-black transition-all duration-300 ${
                          isActive
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400"
                            : "text-background"
                        }`}
                      >
                        {tier.price}
                      </span>
                      <span className="text-sm text-background/50">만원{tier.plus && "+"}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {pricingTiers.map((tier, index) => {
              const isActive = index === activeTierIndex;
              const isRecommended = tier.recommended;
              return (
                <motion.div
                  key={index}
                  animate={{
                    scale: isActive ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`relative p-5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-br from-primary/20 to-primary/10 border-primary shadow-xl"
                      : "bg-white border-gray-200"
                  }`}
                >
                  {(isRecommended || isActive) && (
                    <motion.span
                      animate={{
                        scale: isActive ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: isActive ? Infinity : 0,
                        repeatDelay: 1,
                      }}
                      className="absolute -top-2 right-4 bg-primary text-background text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <Crown className="w-3 h-3" />
                      {isActive ? "선택됨" : "BEST"}
                    </motion.span>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        className={`font-bold transition-colors duration-300 ${
                          isActive ? "text-primary" : "text-background"
                        }`}
                      >
                        {tier.name}
                      </p>
                      <p className="text-xs text-background/50">{tier.description}</p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-2xl font-black transition-all duration-300 ${
                          isActive
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400"
                            : "text-background"
                        }`}
                      >
                        {tier.price}
                      </span>
                      <span className="text-sm text-background/50">만원{tier.plus && "+"}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
