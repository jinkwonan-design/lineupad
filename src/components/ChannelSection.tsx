"use client";

import { motion } from "framer-motion";
import { Users, Eye, DollarSign } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    label: "누적 팔로워",
    value: "35만+",
    icon: Users,
    color: "from-blue-400 to-cyan-500",
  },
  {
    label: "누적 조회수",
    value: "6.5억+",
    icon: Eye,
    color: "from-purple-400 to-pink-500",
  },
  {
    label: "누적 매출액",
    value: "14억+",
    icon: DollarSign,
    color: "from-primary to-amber-400",
  },
];


export default function ChannelSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Main Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-background leading-tight mb-6">
            누구나 찍을 수는 있지만,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
              아무나 터뜨릴 수는 없습니다.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-background/60 max-w-3xl mx-auto leading-relaxed">
            수십만 채널을 바닥부터 일궈낸 F&B 전문 크리에이터들이 모였습니다.
            <br className="hidden md:block" />
            단순 촬영이 아닌, 유입과 매출을 부르는 전략적 기획부터 제작까지—
            <br className="hidden md:block" />
            <span className="font-semibold text-background">라인업애드의 전문가 그룹</span>이 책임집니다.
          </p>
        </motion.div>

        {/* Team Photo - Wide horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group mb-16"
        >
          <div className="aspect-[21/9] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden border border-gray-200">
            <Image
              src="/images/team.jpg"
              alt="라인업애드 팀"
              width={1512}
              height={648}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 md:left-6 md:right-auto bg-white/90 backdrop-blur-sm rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-sm font-semibold text-background">라인업애드 팀</p>
            <p className="text-xs text-background/60">F&B 전문 크리에이터 그룹</p>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-gray-50 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-gray-100 text-center hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div
                className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
              >
                <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400 mb-1">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-background/50">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
