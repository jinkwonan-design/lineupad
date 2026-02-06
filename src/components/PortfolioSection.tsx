"use client";

import { motion } from "framer-motion";
import { Play, Eye } from "lucide-react";
import { useRef, useState } from "react";

const portfolioItems = [
  { views: "576만", video: "/videos/video1.mp4" },
  { views: "229만", video: "/videos/video16.mp4" },
  { views: "258만", video: "/videos/video15.mp4" },
  { views: "412만", video: "/videos/video17.mp4" },
];

function PortfolioVideoCard({ item, index }: { item: { views: string; video: string }; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gray-900 cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={item.video}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Play button overlay */}
      <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
          <Play className="w-6 h-6 text-background ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Views badge */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
        <Eye className="w-4 h-4 text-white/80" />
        <span className="text-white text-sm font-semibold">{item.views} 조회</span>
      </div>

      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration - matching hero style */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-background/50 text-base md:text-lg mb-4">
            밀키트, 디저트, 건강기능식품까지 — 카테고리의 한계를 깨는 압도적 성과
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-background leading-tight">
            당신의 제품도{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">품절대란</span>의 주인공이 됩니다
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioVideoCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
