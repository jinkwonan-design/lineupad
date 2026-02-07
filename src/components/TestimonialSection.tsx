"use client";

import { motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";

const testimonials = [
  {
    text: "그냥 첫 장면 보면서도 와~~맛있겠다가 저절로 나옴",
    username: "먹방러버",
    timeAgo: "3일 전",
    likes: 127,
    avatar: "bg-gradient-to-br from-red-400 to-orange-500",
  },
  {
    text: "헐 벌써 품절ㅠㅠ 다음에 꼭 사야지",
    username: "쇼핑홀릭",
    timeAgo: "1주 전",
    likes: 89,
    avatar: "bg-gradient-to-br from-blue-400 to-cyan-500",
  },
  {
    text: "당장 주문했음 ㅋㅋㅋ",
    username: "충동구매왕",
    timeAgo: "5일 전",
    likes: 203,
    avatar: "bg-gradient-to-br from-green-400 to-emerald-500",
  },
  {
    text: "와 영상 나오자마자 소리질렀다 진짜! 피자때깔봐 🍕",
    username: "피자매니아",
    timeAgo: "2일 전",
    likes: 156,
    avatar: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    text: "여긴 강 보기만해도 ㄴㄴ 맛있음이 느껴지네",
    username: "미식가",
    timeAgo: "4일 전",
    likes: 94,
    avatar: "bg-gradient-to-br from-purple-400 to-pink-500",
  },
  {
    text: "음식 색감만 봐도 정말 맛있어 보이네요... 영상 퀄 대박",
    username: "컬러풀라이프",
    timeAgo: "1주 전",
    likes: 67,
    avatar: "bg-gradient-to-br from-pink-400 to-rose-500",
  },
  {
    text: "이거 보고 바로 검색함ㅋㅋㅋ 지갑이 열렸다",
    username: "지갑털린사람",
    timeAgo: "6일 전",
    likes: 312,
    avatar: "bg-gradient-to-br from-indigo-400 to-purple-500",
  },
  {
    text: "매번 영상 퀄리티 미쳤다... 어떻게 찍는거임?",
    username: "영상덕후",
    timeAgo: "3일 전",
    likes: 178,
    avatar: "bg-gradient-to-br from-teal-400 to-cyan-500",
  },
  {
    text: "이 영상보고 3개나 샀어요 ㅋㅋ 선물용으로 딱이에요",
    username: "선물요정",
    timeAgo: "2일 전",
    likes: 241,
    avatar: "bg-gradient-to-br from-cyan-300 to-orange-500",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration - matching hero style */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-background/50 text-base md:text-lg mb-4">
            조회수만 높은게 아닙니다
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-background leading-tight">
            영상에 달리는 댓글들이
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">라인업애드의 실력</span>을 증명합니다
          </h2>
        </motion.div>

        {/* YouTube-style comments grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-5 transition-all duration-300 border border-gray-100 h-full"
            >
              {/* Comment Header */}
              <div className="flex items-start gap-3 h-full">
                <div className={`w-10 h-10 rounded-full ${testimonial.avatar} flex-shrink-0 flex items-center justify-center text-white font-bold text-sm`}>
                  {testimonial.username.charAt(0)}
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-background text-sm">@{testimonial.username}</span>
                    <span className="text-background/40 text-xs">{testimonial.timeAgo}</span>
                  </div>
                  <p className="text-background text-sm md:text-base leading-relaxed flex-1">
                    {testimonial.text}
                  </p>
                  {/* Like section */}
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 text-background/50 hover:text-background transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-xs font-medium">{testimonial.likes}</span>
                    </button>
                    <span className="text-background/30 text-xs">답글</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
