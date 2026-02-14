"use client";

import { motion } from "framer-motion";
import { Play, Eye, Download } from "lucide-react";
import { useRef, useState } from "react";
import { trackLead } from "@/lib/fbpixel";

const portfolioItems = [
  { views: "576만", video: "https://pub-8fe4c6430238462ebbc0dcb8f85e4269.r2.dev/video1.mp4" },
  { views: "229만", video: "https://pub-8fe4c6430238462ebbc0dcb8f85e4269.r2.dev/video16.mp4" },
  { views: "258만", video: "https://pub-8fe4c6430238462ebbc0dcb8f85e4269.r2.dev/video15.mp4" },
  { views: "412만", video: "https://pub-8fe4c6430238462ebbc0dcb8f85e4269.r2.dev/video17.mp4" },
];

function PortfolioVideoCard({ item, index }: { item: { views: string; video: string }; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0.001;
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0.001;
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900 cursor-pointer group"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={`${item.video}#t=0.001`}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
      />

      {/* Play button overlay */}
      <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
          <Play className="w-4 h-4 sm:w-6 sm:h-6 text-background ml-0.5" fill="currentColor" />
        </div>
      </div>

      {/* Views badge */}
      <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center gap-1 sm:gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5">
        <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-white/80" />
        <span className="text-white text-xs sm:text-sm font-semibold">{item.views} 조회</span>
      </div>

      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-32 bg-gray-50 relative overflow-hidden">
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
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-background/50 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 px-2">
            밀키트, 디저트, 건강기능식품까지 — 카테고리의 한계를 깨는 압도적 성과
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-background leading-tight">
            당신의 제품도{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">품절대란</span>의 주인공이 됩니다
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioVideoCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Portfolio Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.a
            href="/portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackLead}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-background text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-background/90 transition-all duration-300 shadow-lg"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            포트폴리오 다운로드
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
