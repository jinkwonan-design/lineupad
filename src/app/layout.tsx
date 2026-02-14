import type { Metadata } from "next";
import MetaPixel from "@/components/MetaPixel";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "라인업애드 - 인플루언서가 직접 만드는 영상",
  description: "대기업의 1/10 수준의 제작 비용으로 조회수와 매출을 동시에. 식품/F&B 전문 숏폼 영상 제작 대행 서비스",
  keywords: ["숏폼", "영상제작", "인플루언서", "식품영상", "F&B", "마케팅", "유튜브", "인스타그램", "틱톡"],
  openGraph: {
    title: "라인업애드 - 인플루언서가 직접 만드는 영상",
    description: "대기업의 1/10 수준의 제작 비용으로 조회수와 매출을 동시에",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="5284179e3d217a2ac4e1843a656ad0a528bc0ece" />
        <meta name="google-site-verification" content="3HjFXQCMoXTcPtZrOK4LI7a0M6No9uB28jTH1j4ojUE" />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
