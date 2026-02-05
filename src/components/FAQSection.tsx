"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "촬영 원본(Raw 파일)을 따로 받을 수 있나요?",
    answer:
      "네, 가능합니다. 촬영 노하우와 세팅 값이 담긴 고유 자산이기에 제공 시 20만 원의 추가 비용이 발생합니다.",
  },
  {
    question: "제작 기간은 얼마나 걸리나요?",
    answer:
      "'7일 이내 완성'을 목표로 합니다. 외주를 주지 않고 내부 전문가들이 직접 기획-촬영-편집-소통 전 과정을 수행하기 때문에 빠르고 정확한 고퀄리티 결과물을 약속드립니다.",
  },
  {
    question: "제가 무엇을 준비해야 하나요?",
    answer:
      "대표님은 '제품'과 '열정'만 준비해 주세요. 0부터 수십만 채널을 키워낸 전문가 그룹이 알아서 팔리는 구조를 짜드립니다.",
  },
  {
    question: "음식 촬영은 일반 영상 촬영과 무엇이 다른가요?",
    answer:
      "맛있는 찰나를 잡는 시각적 기술이 핵심입니다. 씨즐(Sizzle) 연출, 매크로 촬영, 고감도 ASMR 등 F&B 전문 기술을 투입해 시각과 청각을 동시에 자극합니다.",
  },
  {
    question: "제작 비용 외에 추가 비용이 또 발생하나요?",
    answer:
      "라인업애드는 투명한 정찰제를 준수합니다. 촬영 원본 제공(+20만 원)이나 외부 로케이션 촬영 등 별도 옵션 외에 숨겨진 추가 비용은 없습니다.",
  },
  {
    question: "수정은 몇 번까지 가능한가요?",
    answer:
      "기본적인 자막 오타나 컷 편집 수정은 2회 무상 지원합니다. 기획 단계에서 충분히 소통하여 대표님과의 싱크로율을 최대한 맞추는 데 집중합니다.",
  },
  {
    question: "영상 하나로 유튜브, 인스타, 틱톡 다 쓸 수 있나요?",
    answer:
      "네, 가능합니다. 숏폼(Short-form) 규격에 맞춰 제작해 드리며, 각 플랫폼의 특성에 맞게 활용하실 수 있도록 가이드를 함께 드립니다.",
  },
  {
    question: "촬영 장소는 어디서 진행되나요?",
    answer:
      "내부 전문 스튜디오에서 진행하며, 주방 설비와 전문 조명이 세팅되어 있어 최상의 결과물을 보장합니다. 필요 시 현장 방문 촬영 옵션도 선택 가능합니다.",
  },
  {
    question: "매달 여러 개의 영상을 정기적으로 맡기고 싶습니다.",
    answer:
      "가장 추천드리는 방식입니다. 월간 파트너십 체결 시 단가 할인 혜택과 함께, 채널 성장 데이터에 기반한 마케팅 전략까지 지속적으로 서포트해 드립니다.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-background/50 text-base md:text-lg mb-4">
            자주 묻는 질문
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-background">
            Q&A
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gray-50 rounded-2xl border overflow-hidden transition-all ${
                openIndex === index ? "border-primary/30 shadow-md" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className="text-lg md:text-xl font-bold text-background">
                  Q. {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-background/40 transition-transform ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <p className="text-background/60 leading-relaxed">
                    A. {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
