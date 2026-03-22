'use client';

import { useState } from 'react';
import Link from 'next/link';

/* BApal Heart-B Logo SVG component
   The actual logo is a heart shape where the contour integrates the letter B:
   - Left side: vertical stroke (back of B)
   - Right side: two bumps forming the B shape
   - Top: heart's characteristic cleft
*/
function BApalLogo({ size = 96, color = 'white', strokeWidth = 2.5 }: { size?: number; color?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} fill="none">
      {/* Heart-B integrated shape */}
      <path
        d={`
          M 35 20
          C 25 20, 15 28, 15 40
          C 15 55, 30 70, 50 85
          C 58 80, 64 74, 68 68
          C 60 68, 54 64, 54 58
          C 54 53, 58 50, 63 50
          C 58 50, 54 47, 54 42
          C 54 37, 58 33, 64 33
          L 50 33
          L 50 30
          C 45 24, 40 20, 35 20
          Z
        `}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right side - heart top + B bumps */}
      <path
        d={`
          M 50 30
          C 55 24, 60 20, 68 20
          C 77 20, 85 28, 85 40
          C 85 44, 83 47, 80 50
          C 85 53, 87 57, 87 62
          C 87 70, 80 76, 68 68
          C 64 74, 58 80, 50 85
        `}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill="none"
      />
      {/* Middle bridge connecting B bumps */}
      <path
        d="M 64 33 C 74 33, 80 37, 80 42 C 80 47, 74 50, 63 50"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <path
        d="M 63 50 C 74 50, 80 53, 80 58 C 80 64, 74 68, 68 68"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
}

function BApalLogoSimple({ size = 24, color = 'white' }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} fill="none">
      {/* Simplified heart-B: Heart outline where right side has B bumps */}
      <path
        d={`
          M 50 30
          C 45 24, 38 18, 30 18
          C 18 18, 10 28, 10 40
          C 10 58, 30 72, 50 88
          C 57 83, 63 77, 67 71
          C 58 71, 50 66, 50 59
          C 50 53, 56 49, 63 49
          C 56 49, 50 45, 50 39
          C 50 33, 55 30, 50 30
          Z
        `}
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d={`
          M 50 30
          C 55 24, 62 18, 70 18
          C 82 18, 90 28, 90 40
          C 90 45, 88 49, 83 52
          C 89 55, 92 60, 92 65
          C 92 73, 83 79, 67 71
        `}
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
      />
      {/* B upper bump */}
      <path
        d="M 63 30 C 76 30, 84 35, 84 42 C 84 47, 78 49, 63 49"
        stroke={color}
        strokeWidth="4"
        fill="none"
      />
      {/* B lower bump */}
      <path
        d="M 63 49 C 78 49, 86 54, 86 61 C 86 67, 79 71, 67 71"
        stroke={color}
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
}

export default function Home() {
  const [isSimulatingNFC, setIsSimulatingNFC] = useState(false);

  const simulateNFC = () => {
    setIsSimulatingNFC(true);
    setTimeout(() => {
      window.location.href = '/verify?nfc=BA8-001-00215';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800/40 backdrop-blur-md bg-black/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-700/40 flex items-center justify-center shadow-lg">
                <img src="/bapal-logo.jpg" alt="BApal" className="w-7 h-7 rounded-full object-cover" />
              </div>
              <h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                BApal
              </h1>
            </div>
            <nav className="hidden md:flex gap-8 text-sm">
              <Link href="/kave" className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold">🏛️ KAVE</Link>
              <Link href="/shop" className="text-zinc-500 hover:text-white transition-colors">팬키트</Link>
              <a href="#about" className="text-zinc-500 hover:text-white transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-zinc-950 border border-zinc-800/60 flex items-center justify-center shadow-2xl shadow-black/60 ring-1 ring-zinc-700/20">
              <img src="/bapal-logo.jpg" alt="BApal" className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover opacity-90" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-3">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              <span className="text-white">BA</span><span className="text-zinc-300">pal</span>
            </h2>
            <p className="text-sm md:text-base text-zinc-500 font-light tracking-[0.4em] uppercase">
              Entertainment
            </p>
          </div>

          {/* Tagline */}
          <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed tracking-wide">
            2000년부터 함께한 아시아의 별<br />
            <span className="text-yellow-400">Always with BoA</span>
          </p>

          {/* CTA Card */}
          <div className="pt-8 space-y-6">
            <div className="bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800/40 rounded-2xl overflow-hidden max-w-sm mx-auto shadow-2xl shadow-black/40">
              {/* Card Image Area */}
              <div className="relative h-72 bg-gradient-to-b from-zinc-800/80 to-zinc-950 flex items-end justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="relative text-center space-y-2">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-zinc-950/60 border border-zinc-700/30 flex items-center justify-center backdrop-blur-sm">
                    <img src="/bapal-logo.jpg" alt="BApal" className="w-10 h-10 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>BApal</h3>
                  <p className="text-[11px] text-zinc-500 tracking-[0.25em] uppercase">Entertainment</p>
                </div>
              </div>

              {/* CTA Content */}
              <div className="px-7 py-6 text-center space-y-4">
                <p className="text-sm text-zinc-500 leading-relaxed">
                  공식 팬클럽 이름 투표 진행 중!<br />
                  함께 만들어가는 팬덤 문화
                </p>

                <div className="space-y-3">
                  <Link
                    href="/kave"
                    className="block w-full py-4 px-6 bg-yellow-400 hover:bg-yellow-500 text-black rounded-xl transition-all font-bold tracking-wide shadow-lg shadow-yellow-400/20"
                  >
                    <span className="flex items-center justify-center gap-2">
                      🏛️ PAL들의 KAVE 입장
                      <span className="text-xs">→</span>
                    </span>
                  </Link>

                  <Link
                    href="/shop"
                    className="block w-full py-3 px-6 bg-yellow-400/10 hover:bg-yellow-400/20 border border-yellow-400/30 hover:border-yellow-400/50 text-yellow-400 rounded-xl transition-all text-sm font-semibold"
                  >
                    <span className="flex items-center justify-center gap-2">
                      🎁 1기 PAL 팬키트 ($40)
                      <span className="text-xs">→</span>
                    </span>
                  </Link>
                </div>

                <p className="text-[11px] text-zinc-600 pt-1">
                  멤버십 카드로 전용 혜택 받기
                </p>
              </div>
            </div>

            <Link
              href="/member"
              className="inline-block text-sm text-zinc-500 hover:text-yellow-400 transition-colors border-b border-zinc-700/50 hover:border-yellow-400/50 pb-0.5"
            >
              멤버 페이지 미리보기 →
            </Link>
          </div>
        </div>

        {/* About KAVE Section */}
        <div id="about" className="max-w-4xl mx-auto mt-24 mb-16 p-8 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/40 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">PAL들의 KAVE란?</h2>
            <p className="text-zinc-400">BoA와 팬들이 함께 만드는 특별한 공간</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-zinc-900/30 border border-zinc-800/30 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center mb-4 border border-yellow-400/30">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">KAVE</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Pledge 보유자만 입장할 수 있는 PAL 전용 공간입니다. 
                투표, 독점 콘텐츠, 커뮤니티 등 다양한 활동을 즐길 수 있습니다.
              </p>
            </div>

            <div className="p-6 bg-zinc-900/30 border border-zinc-800/30 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center mb-4 border border-yellow-400/30">
                <span className="text-2xl">🎫</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pledge</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                팬키트 구매 시 받는 디지털 인증(NFC/QR)입니다. 
                Pledge를 보유하면 투표권과 함께 KAVE 입장이 가능합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { icon: '🎬', title: 'Exclusive Content', desc: '비하인드 영상, 미공개 포토, 라이브 토크' },
            { icon: '🎫', title: 'Concert Priority', desc: 'BoA 콘서트 우선 예매 + VIP 좌석' },
            { icon: '🎁', title: 'Special Goods', desc: '멤버 전용 한정판 굿즈 & 포토카드' },
          ].map((feature) => (
            <div key={feature.title} className="bg-zinc-900/20 border border-zinc-800/30 rounded-2xl p-7 space-y-4 hover:border-yellow-400/20 transition-colors group">
              <div className="w-12 h-12 bg-yellow-400/5 rounded-xl flex items-center justify-center text-2xl border border-yellow-400/10 group-hover:border-yellow-400/30 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/30 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-600">
              © 2024 BApal Entertainment. Always with BoA.
            </p>
            <div className="flex gap-6 text-xs text-zinc-600">
              <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
