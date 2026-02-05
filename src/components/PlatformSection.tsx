"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Heart, MessageCircle, Send, Bookmark, ThumbsUp, ThumbsDown, Share2, Sparkles } from "lucide-react";
import Image from "next/image";

const contentTypes = [
  {
    title: "숏폼 콘텐츠",
    subtitle: "틱톡, 릴스, 쇼츠용",
    image: "/images/ones.png",
    uiType: "shortform",
  },
  {
    title: "SNS 콘텐츠",
    subtitle: "인스타그램, 페이스북",
    image: "/images/ones.png",
    uiType: "instagram",
  },
  {
    title: "상세페이지 소재",
    subtitle: "스마트스토어, 쿠팡",
    image: "/images/ones.png",
    uiType: "smartstore",
  },
  {
    title: "광고 소재",
    subtitle: "메타, 유튜브 광고",
    image: null,
    uiType: null,
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
              <div className="w-56 md:w-64 lg:w-72 aspect-[9/14] bg-gradient-to-br from-primary via-primary to-amber-400 rounded-[2rem] shadow-2xl overflow-hidden">
                {contentTypes[currentIndex].uiType === "smartstore" && contentTypes[currentIndex].image ? (
                  // Naver Smart Store UI Style
                  <div className="relative w-full h-full bg-gray-100 flex flex-col">
                    {/* Smart Store Header */}
                    <div className="bg-white p-2 border-b border-gray-200">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 rounded bg-gray-100 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-[8px] text-gray-900 font-medium truncate">프리미엄 상품 5kg</p>
                          <div className="flex items-center gap-1">
                            <span className="text-[10px] font-bold text-gray-900">34,900원</span>
                            <span className="text-[7px] text-gray-400 line-through">57,280원</span>
                          </div>
                        </div>
                        <button className="bg-[#03c75a] text-white text-[7px] font-bold px-2 py-1 rounded">
                          구매하기
                        </button>
                      </div>
                    </div>
                    {/* Tabs */}
                    <div className="flex border-b border-gray-200 bg-white">
                      <div className="flex-1 py-1.5 text-center text-[8px] font-bold text-white bg-[#03c75a]">상세정보</div>
                      <div className="flex-1 py-1.5 text-center text-[8px] text-gray-500">리뷰 514</div>
                      <div className="flex-1 py-1.5 text-center text-[8px] text-gray-500">Q&A</div>
                    </div>
                    {/* Product Detail Content */}
                    <div className="flex-1 bg-gray-100 p-3 flex flex-col items-center justify-center">
                      {/* Video thumbnail with play button */}
                      <div className="relative w-[85%] aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={contentTypes[currentIndex].image}
                          alt={contentTypes[currentIndex].title}
                          fill
                          className="object-cover"
                        />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <div className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center">
                            <Play className="w-6 h-6 text-white ml-1" fill="white" />
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <span className="mt-3 bg-gray-800 text-white text-[9px] font-bold px-3 py-1 rounded-full">
                        {contentTypes[currentIndex].title}
                      </span>
                    </div>
                  </div>
                ) : contentTypes[currentIndex].uiType === "instagram" && contentTypes[currentIndex].image ? (
                  // Instagram UI Style
                  <div className="relative w-full h-full bg-white flex flex-col">
                    {/* Instagram Header */}
                    <div className="flex items-center gap-2 p-2 border-b border-gray-100">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-[2px]">
                        <div className="w-full h-full rounded-full bg-white p-[1px]">
                          <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300" />
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-gray-900 flex-1">lineup_ad</span>
                      <span className="text-[8px] text-blue-500 font-semibold">팔로우</span>
                    </div>
                    {/* Image */}
                    <div className="relative flex-1">
                      <Image
                        src={contentTypes[currentIndex].image}
                        alt={contentTypes[currentIndex].title}
                        fill
                        className="object-cover"
                      />
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
                          <Play className="w-6 h-6 text-white ml-1" fill="white" />
                        </div>
                      </div>
                    </div>
                    {/* Instagram Actions */}
                    <div className="p-2 bg-white">
                      <div className="flex items-center gap-3 mb-1">
                        <Heart className="w-5 h-5 text-gray-900" />
                        <MessageCircle className="w-5 h-5 text-gray-900" />
                        <Send className="w-5 h-5 text-gray-900" />
                        <Bookmark className="w-5 h-5 text-gray-900 ml-auto" />
                      </div>
                      <p className="text-[9px] font-semibold text-gray-900">좋아요 1.4만개</p>
                      <p className="text-[8px] text-gray-400 mt-0.5">1월 1일</p>
                    </div>
                    {/* Label overlay */}
                    <div className="absolute top-12 left-2 right-2 text-center">
                      <span className="bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                        {contentTypes[currentIndex].title}
                      </span>
                    </div>
                  </div>
                ) : contentTypes[currentIndex].uiType === "shortform" && contentTypes[currentIndex].image ? (
                  // YouTube Shorts UI Style
                  <div className="relative w-full h-full bg-black">
                    <Image
                      src={contentTypes[currentIndex].image}
                      alt={contentTypes[currentIndex].title}
                      fill
                      className="object-cover"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center">
                        <Play className="w-7 h-7 text-white ml-1" fill="white" />
                      </div>
                    </div>
                    {/* YouTube Shorts Right Sidebar */}
                    <div className="absolute right-2 bottom-20 flex flex-col items-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                          <ThumbsUp className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-[10px] text-white mt-1">5.2천</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                          <ThumbsDown className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-[10px] text-white mt-1">싫어요</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-[10px] text-white mt-1">73</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                          <Share2 className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-[10px] text-white mt-1">공유</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-[10px] text-white mt-1">리믹스</span>
                      </div>
                    </div>
                    {/* YouTube Shorts Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                          <span className="text-[8px] font-bold text-white">AD</span>
                        </div>
                        <span className="text-white text-[11px] font-medium">@lineup_ad</span>
                        <button className="bg-white text-black text-[9px] font-bold px-2 py-0.5 rounded ml-1">
                          구독
                        </button>
                      </div>
                      <p className="text-white text-[10px] leading-tight">
                        {contentTypes[currentIndex].title}
                      </p>
                      {/* Label */}
                      <span className="inline-block mt-2 bg-red-600 text-white text-[8px] font-bold px-2 py-0.5 rounded">
                        Shorts
                      </span>
                    </div>
                  </div>
                ) : contentTypes[currentIndex].image ? (
                  // Default image style
                  <div className="relative w-full h-full">
                    <Image
                      src={contentTypes[currentIndex].image}
                      alt={contentTypes[currentIndex].title}
                      fill
                      className="object-cover"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center">
                        <Play className="w-7 h-7 text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                      <h3 className="text-xl md:text-2xl font-black text-white mb-1">
                        {contentTypes[currentIndex].title}
                      </h3>
                      <p className="text-white/80 text-xs md:text-sm">
                        {contentTypes[currentIndex].subtitle}
                      </p>
                    </div>
                  </div>
                ) : (
                  // Default gradient style
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-background mb-2">
                      {contentTypes[currentIndex].title}
                    </h3>
                    <p className="text-background/70 text-sm md:text-base">
                      {contentTypes[currentIndex].subtitle}
                    </p>
                  </div>
                )}
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
