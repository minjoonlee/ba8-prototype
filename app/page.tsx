'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isSimulatingNFC, setIsSimulatingNFC] = useState(false);

  const simulateNFC = () => {
    setIsSimulatingNFC(true);
    setTimeout(() => {
      window.location.href = '/verify?nfc=BA8-001-00215';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Header */}
      <header className="border-b border-zinc-800/40 backdrop-blur-md bg-zinc-950/80 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700/40 flex items-center justify-center overflow-hidden">
              <img src="/bapal-logo.jpg" alt="BApal" className="w-7 h-7 rounded-full object-cover" />
            </div>
            <h1 className="text-lg font-bold tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              BApal
            </h1>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/kave" className="hidden md:block text-sm text-zinc-400 hover:text-yellow-400 transition font-medium">KAVE</Link>
            <Link href="/shop" className="hidden md:block text-sm text-zinc-400 hover:text-white transition font-medium">Shop</Link>
            <Link href="/member" className="text-xs md:text-sm text-zinc-400 hover:text-white transition">
              입장하기 →
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 md:px-8">

        {/* Hero Section */}
        <section className="py-12 md:py-20 lg:py-28">
          <div className="md:flex md:items-center md:justify-between md:gap-16">
            {/* Left: Branding */}
            <div className="text-center md:text-left md:flex-1">
              <div className="flex flex-col items-center md:items-start gap-3 mb-5">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-zinc-900 border border-zinc-800/60 flex items-center justify-center shadow-xl shadow-yellow-400/10 ring-1 ring-yellow-400/10 overflow-hidden">
                  <img src="/bapal-logo.jpg" alt="BApal" className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                    <span className="text-white">BA</span><span className="text-zinc-400">pal</span>
                  </h2>
                  <p className="text-[10px] md:text-xs text-zinc-600 tracking-[0.3em] uppercase mt-1">Entertainment</p>
                </div>
              </div>

              <p className="text-sm md:text-base text-zinc-400 mb-4">
                2000년부터 함께한 아시아의 별<br />
                <span className="text-yellow-400 font-semibold">Always with BoA</span>
              </p>

              <div className="inline-flex items-center gap-4 text-xs bg-zinc-900/50 border border-zinc-800/50 rounded-full px-4 py-2">
                <div className="text-center">
                  <div className="text-yellow-400 font-bold">24+</div>
                  <div className="text-zinc-600 text-[10px]">Years</div>
                </div>
                <div className="w-px h-5 bg-zinc-700"></div>
                <div className="text-center">
                  <div className="text-yellow-400 font-bold">5,000</div>
                  <div className="text-zinc-600 text-[10px]">한정</div>
                </div>
                <div className="w-px h-5 bg-zinc-700"></div>
                <div className="text-center">
                  <div className="text-yellow-400 font-bold">$40</div>
                  <div className="text-zinc-600 text-[10px]">팬키트</div>
                </div>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="mt-8 md:mt-0 md:w-96">
              <div className="bg-zinc-900/50 border border-yellow-400/20 rounded-2xl p-5 md:p-6 space-y-4">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-3 py-1 text-xs font-bold text-yellow-400 mb-2">
                    KAVE 투표 진행 중
                  </div>
                  <p className="text-xs text-zinc-500">팬클럽 이름을 함께 정해요!</p>
                </div>

                <Link
                  href="/kave"
                  className="block w-full py-3.5 bg-yellow-400 hover:bg-yellow-300 text-black rounded-xl transition font-bold text-center text-sm"
                >
                  KAVE 입장하기
                </Link>

                <Link
                  href="/shop"
                  className="block w-full py-3 bg-transparent hover:bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 rounded-xl transition text-sm font-semibold text-center"
                >
                  팬키트 구매 ($40)
                </Link>
              </div>

              <div className="text-center mt-4">
                {isSimulatingNFC ? (
                  <div className="inline-flex items-center gap-2 text-sm text-yellow-400 bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/30 animate-pulse">
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="10" opacity="0.25"></circle>
                      <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"></path>
                    </svg>
                    NFC 스캔 중...
                  </div>
                ) : (
                  <button onClick={simulateNFC} className="text-xs text-zinc-500 hover:text-yellow-400 transition">
                    팬키트 NFC 인증 시뮬레이션 →
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* About KAVE */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="p-4 bg-zinc-900/40 border border-zinc-800/40 rounded-xl">
            <div className="text-lg mb-2">🗳️</div>
            <h3 className="text-sm font-bold mb-1">KAVE</h3>
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              PAL 전용 투표 공간. 투표로 BoA의 여정에 참여하세요.
            </p>
          </div>
          <div className="p-4 bg-zinc-900/40 border border-zinc-800/40 rounded-xl">
            <div className="text-lg mb-2">🎫</div>
            <h3 className="text-sm font-bold mb-1">Pledge</h3>
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              팬키트 구매 시 받는 투표권. NFC/QR로 인증합니다.
            </p>
          </div>
          <div className="p-4 bg-zinc-900/40 border border-zinc-800/40 rounded-xl">
            <div className="text-lg mb-2">🎬</div>
            <h3 className="text-sm font-bold mb-1">독점 콘텐츠</h3>
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              비하인드 영상, 미공개 포토, 라이브 토크.
            </p>
          </div>
          <div className="p-4 bg-zinc-900/40 border border-zinc-800/40 rounded-xl">
            <div className="text-lg mb-2">🎁</div>
            <h3 className="text-sm font-bold mb-1">한정 굿즈</h3>
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              멤버 전용 한정판 굿즈 & 포토카드.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/30 mt-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-6">
          <p className="text-[10px] text-zinc-600 text-center">
            © 2024 BApal Entertainment. Always with BoA.
          </p>
        </div>
      </footer>
    </div>
  );
}
