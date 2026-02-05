"use client";

import { motion } from "framer-motion";
import { MessageCircle, Video, CreditCard, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "카톡으로 접수 신청",
    icon: MessageCircle,
    color: "from-yellow-400 to-amber-500",
  },
  {
    number: 2,
    title: "온라인 또는 통화 미팅",
    subtitle: "(상품 및 가이드 라인 설명)",
    icon: Video,
    color: "from-blue-400 to-cyan-500",
  },
  {
    number: 3,
    title: "비용 결제",
    icon: CreditCard,
    color: "from-emerald-400 to-green-500",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-background/50 text-base md:text-lg mb-4">
            간단한 3단계
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-background">
            진행 프로세스
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
                {/* Step number badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-background text-sm font-bold px-4 py-1 rounded-full shadow-md">
                    {step.number}단계
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-background mb-1">
                  {step.title}
                </h3>
                {step.subtitle && (
                  <p className="text-sm text-background/50">{step.subtitle}</p>
                )}
              </div>

              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
