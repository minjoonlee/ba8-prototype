'use client';

import Link from 'next/link';

export default function PalmatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-700/40 flex items-center justify-center shadow-lg">
                <img src="/bapal-logo.jpg" alt="BApal" className="w-7 h-7 rounded-full object-cover" />
              </div>
              <h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                BApal
              </h1>
            </Link>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#" className="text-zinc-400 hover:text-white transition">About</a>
              <a href="#" className="text-zinc-400 hover:text-white transition">Artists</a>
              <Link href="/member" className="text-yellow-400 hover:text-yellow-300 transition">PALMATE</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero - PALMATE Focused */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          {/* PALMATE Logo & Branding */}
          <div className="text-center space-y-8 mb-16">
            {/* Yellow Heart Logo */}
            <div className="flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 200 180" className="w-48 h-40">
                  {/* Yellow Heart */}
                  <path 
                    d="M100 160 C60 135, 30 105, 30 75 C30 50, 45 35, 65 35 C80 35, 90 42, 100 55 C110 42, 120 35, 135 35 C155 35, 170 50, 170 75 C170 105, 140 135, 100 160 Z" 
                    fill="#facc15" 
                    className="drop-shadow-2xl"
                  />
                  {/* PALMATE Text */}
                  <text 
                    x="100" 
                    y="95" 
                    textAnchor="middle" 
                    fill="#18181b" 
                    fontSize="32" 
                    fontWeight="900"
                    fontFamily="Arial Black, sans-serif"
                  >
                    PALMATE
                  </text>
                  {/* Star accent */}
                  <text x="160" y="45" fontSize="20">⭐</text>
                </svg>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-yellow-400 tracking-[0.2em] font-light">Always with BoA</p>
              <h2 className="text-4xl md:text-6xl font-bold">
                Welcome to <span className="text-yellow-400">PALMATE</span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                바쁜 일상의 모든 바쁨이 너의<br />
                유일무이한 친구로 함께할 삶이다
              </p>
            </div>
          </div>

          {/* Fan Kit Preview */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Staff Card */}
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-400/30 rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-yellow-400/20 border border-yellow-400/40 rounded text-xs font-semibold text-yellow-400">
                  PALMATE STAFF
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                  <span className="text-zinc-500">Name</span>
                  <span className="font-mono">__________</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                  <span className="text-zinc-500">Department</span>
                  <span className="text-yellow-400 font-semibold">FAN DIVISION</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                  <span className="text-zinc-500">Since</span>
                  <span>2024</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                  <span className="text-zinc-500">No.</span>
                  <span className="font-mono">00000</span>
                </div>
              </div>

              <div className="pt-4 text-center">
                <p className="text-xs text-zinc-600">Your exclusive staff ID</p>
              </div>
            </div>

            {/* Founding Member Card */}
            <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-yellow-400/50 rounded-2xl p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-2 right-2 text-yellow-400/20 text-6xl">⭐</div>
              
              <div className="relative z-10">
                <div className="px-4 py-2 bg-yellow-400 text-zinc-900 rounded-lg inline-block font-bold text-sm mb-4">
                  FOUNDING MEMBER
                </div>

                <div className="space-y-4">
                  <div className="text-center py-6 border-2 border-yellow-400/30 rounded-xl bg-black/30">
                    <div className="text-5xl font-bold text-yellow-400 tracking-wider font-mono">
                      No.000215
                    </div>
                  </div>

                  <p className="text-xs text-center text-zinc-500 leading-relaxed">
                    I am thrilled to welcome you as<br />
                    a founding member of PALMATE
                  </p>

                  <div className="text-center pt-2">
                    <p className="text-xs text-yellow-400/70">WELCOME TO PALMATE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What's Inside */}
          <section className="space-y-8">
            <h3 className="text-3xl font-bold text-center">What's in the Kit?</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 text-center space-y-3 hover:border-yellow-400/30 transition">
                <div className="text-5xl mb-2">📦</div>
                <h4 className="font-semibold">Box Character</h4>
                <p className="text-xs text-zinc-500">귀여운 박스 캐릭터 키링</p>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 text-center space-y-3 hover:border-yellow-400/30 transition">
                <div className="text-5xl mb-2">🪪</div>
                <h4 className="font-semibold">Staff ID</h4>
                <p className="text-xs text-zinc-500">PALMATE 사원증 (NFC)</p>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 text-center space-y-3 hover:border-yellow-400/30 transition">
                <div className="text-5xl mb-2">🎵</div>
                <h4 className="font-semibold">Lyrics Stickers</h4>
                <p className="text-xs text-zinc-500">가사 스티커 세트</p>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 text-center space-y-3 hover:border-yellow-400/30 transition">
                <div className="text-5xl mb-2">✉️</div>
                <h4 className="font-semibold">Welcome Letter</h4>
                <p className="text-xs text-zinc-500">BoA의 환영 편지</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-16 text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-6 py-3">
              <span className="text-sm text-yellow-400">NFC 인증으로 멤버 전용 콘텐츠 접근</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/member"
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-yellow-400/30"
              >
                멤버 페이지 보기
              </Link>
              <Link
                href="/"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 rounded-xl transition"
              >
                BApal 홈으로
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 mt-24">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-500">
              © 2024 BApal Entertainment. Always with BoA.
            </p>
            <div className="flex gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
