export async function GET() {
  const baseUrl = "https://www.lineupclip.co.kr";
  const now = new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>라인업애드 - 인플루언서가 직접 만드는 영상</title>
    <link>${baseUrl}</link>
    <description>대기업의 1/10 수준의 제작 비용으로 조회수와 매출을 동시에. 식품/F&amp;B 전문 숏폼 영상 제작 대행 서비스</description>
    <language>ko</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <item>
      <title>라인업애드 - 식품/F&amp;B 전문 숏폼 영상 제작</title>
      <link>${baseUrl}</link>
      <description>인플루언서가 직접 만드는 영상. 누적 매출 25억, 총 조회수 1억+ 달성. 유튜브, 인스타그램, 틱톡에 최적화된 숏폼 영상을 제작합니다.</description>
      <pubDate>${now}</pubDate>
      <guid>${baseUrl}</guid>
    </item>
    <item>
      <title>영상 제작 가이드라인 - BASIC / STANDARD / PREMIUM</title>
      <link>${baseUrl}/#pricing</link>
      <description>브랜드 목표와 예산에 맞는 최적의 플랜을 선택하세요. 30만원부터 시작하는 합리적인 영상 제작 서비스.</description>
      <pubDate>${now}</pubDate>
      <guid>${baseUrl}/#pricing</guid>
    </item>
    <item>
      <title>포트폴리오 - 실제 제작 영상 모음</title>
      <link>${baseUrl}/#portfolio</link>
      <description>라인업애드가 제작한 실제 영상 포트폴리오를 확인하세요. 수백만 조회수를 달성한 숏폼 영상들.</description>
      <pubDate>${now}</pubDate>
      <guid>${baseUrl}/#portfolio</guid>
    </item>
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
