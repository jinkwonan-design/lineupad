"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const contentTypes = [
  {
    title: "숏폼 콘텐츠",
    subtitle: "틱톡, 릴스, 쇼츠용",
  },
  {
    title: "SNS 콘텐츠",
    subtitle: "인스타그램, 페이스북",
  },
  {
    title: "상세페이지 소재",
    subtitle: "스마트스토어, 쿠팡",
  },
  {
    title: "광고 소재",
    subtitle: "메타, 유튜브 광고",
  },
];

export default function PlatformSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentTypes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentTypes.length) % contentTypes.length);
  };

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-background/50 text-base md:text-lg mb-4">
            한 번의 제작으로 다양한 활용
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-background leading-tight">
            하나의 영상으로{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
              모든 플랫폼
            </span>
            에
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Main Display Area */}
          <div className="flex items-center justify-center gap-4 md:gap-6 py-8">
            {/* Left Phone Mockup - Faded */}
            <div className="hidden md:block relative opacity-40 scale-90 -mr-8">
              <div className="w-32 lg:w-40 aspect-[9/16] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden border-4 border-gray-300 shadow-lg">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <Play className="w-5 h-5 text-gray-400 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Left Phone Mockup - Semi visible */}
            <div className="hidden lg:block relative opacity-60 scale-95 -mr-4">
              <div className="w-36 lg:w-44 aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden border-4 border-gray-200 shadow-xl">
                <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <Play className="w-6 h-6 text-gray-400 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Center Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <div className="w-56 md:w-64 lg:w-72 aspect-[9/14] bg-gradient-to-br from-primary via-primary to-amber-400 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-background mb-2">
                  {contentTypes[currentIndex].title}
                </h3>
                <p className="text-background/70 text-sm md:text-base">
                  {contentTypes[currentIndex].subtitle}
                </p>
              </div>
            </motion.div>

            {/* Right Phone Mockup - Semi visible */}
            <div className="hidden lg:block relative opacity-60 scale-95 -ml-4">
              <div className="w-36 lg:w-44 aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden border-4 border-gray-200 shadow-xl">
                <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <Play className="w-6 h-6 text-gray-400 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Phone Mockup - Faded */}
            <div className="hidden md:block relative opacity-40 scale-90 -ml-8">
              <div className="w-32 lg:w-40 aspect-[9/16] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden border-4 border-gray-300 shadow-lg">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <Play className="w-5 h-5 text-gray-400 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-background" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-background" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {contentTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-background/50 mt-10 text-sm md:text-base"
        >
          제작된 영상은 숏폼, SNS, 상세페이지, 광고 소재 등 다양하게 활용 가능합니다
        </motion.p>
      </div>
    </section>
  );
}
