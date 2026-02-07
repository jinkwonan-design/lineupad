"use client";

import { Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <span className="text-xl font-bold text-background">라인업</span>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">애드</span>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <p className="text-background/50 text-sm">
              영상 제작 문의: 카카오톡 채널
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Youtube className="w-5 h-5 text-background/60" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Instagram className="w-5 h-5 text-background/60" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-background/40 text-sm">
            © 2025 라인업애드. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
