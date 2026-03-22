'use client';

import { useState } from 'react';
import Link from 'next/link';

const FANDOM_CANDIDATES = [
  { id: 'palmate', name: 'PALMATE', desc: 'Always with BoA', votes: 0 },
  { id: 'beatbox', name: 'BEATBOX', desc: 'BoA\'s Energy & Rhythm', votes: 0 },
  { id: 'no1crew', name: 'No.1 Crew', desc: 'Forever No.1 with BoA', votes: 0 },
];

export default function KavePage() {
  const [voted, setVoted] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleVote = (id: string) => {
    setVoted(id);
    setTimeout(() => setShowResult(true), 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800/40 backdrop-blur-md bg-black/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-700/40 flex items-center justify-center shadow-lg">
                <img src="/bapal-logo.jpg" alt="BApal" className="w-7 h-7 rounded-full object-cover" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  KAVE
                </h1>
                <p className="text-[10px] text-zinc-500">PAL들의 공간</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        {/* Welcome Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2">
              <span className="text-sm font-semibold text-yellow-400">🏛️ PAL들의 KAVE</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              Welcome to<br />
              <span className="text-yellow-400">PAL KAVE</span>
            </h1>

            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              BoA와 PAL들이 함께 만드는 공간<br />
              <span className="text-sm text-zinc-500">Pledge 보유자 전용</span>
            </p>
          </div>

          {/* Important Notice */}
          <div className="p-6 bg-gradient-to-br from-yellow-400/10 to-amber-400/5 border border-yellow-400/30 rounded-2xl mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📢</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">팬클럽 이름을 함께 정해주세요!</h3>
                <p className="text-sm text-zinc-400 mb-3">
                  5월에 판매될 1기 PAL 팬키트의 공식 이름을 투표로 결정합니다.<br />
                  PAL Mate 여러분의 소중한 의견을 들려주세요.
                </p>
                <div className="flex gap-3 text-xs text-zinc-500">
                  <span>📅 투표 기간: 4월 1일 ~ 4월 30일</span>
                  <span>•</span>
                  <span>🎯 대상: PAL Mate (사전 등록자)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vote Section */}
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3">팬클럽 이름 투표</h2>
            <p className="text-zinc-400">3개 후보 중 마음에 드는 이름을 선택해주세요</p>
          </div>

          <div className="space-y-4">
            {FANDOM_CANDIDATES.map((option) => {
              const isVoted = voted === option.id;
              
              return (
                <button
                  key={option.id}
                  onClick={() => !voted && handleVote(option.id)}
                  disabled={!!voted}
                  className={`w-full text-left p-8 rounded-2xl border-2 transition-all ${
                    isVoted
                      ? 'border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-400/20'
                      : voted
                      ? 'border-zinc-800/50 bg-zinc-900/20 opacity-50'
                      : 'border-zinc-800/50 bg-zinc-900/30 hover:border-yellow-400/50 hover:bg-zinc-900/50'
                  } ${!voted && 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold">{option.name}</h3>
                        {isVoted && (
                          <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                            <span className="text-lg text-zinc-900">✓</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-zinc-400">{option.desc}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* After Vote */}
          {showResult && (
            <div className="mt-8 p-6 bg-gradient-to-br from-yellow-400/10 to-amber-400/5 border border-yellow-400/30 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎉</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">투표 완료!</h3>
                  <p className="text-sm text-zinc-400 mb-4">
                    소중한 의견 감사합니다.<br />
                    최종 결과는 4월 30일에 발표됩니다.
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href="/shop"
                      className="text-sm text-yellow-400 hover:text-yellow-300 transition border-b border-yellow-400/50 hover:border-yellow-300/50 pb-0.5"
                    >
                      1기 PAL 팬키트 알아보기 →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Card Samples */}
          <div className="mt-16 p-8 bg-zinc-900/30 border border-zinc-800/30 rounded-2xl">
            <h3 className="text-xl font-bold mb-6">디지털 명함 미리보기</h3>
            <p className="text-sm text-zinc-400 mb-6">
              NFC 사원증을 다른 사람 폰에 태그하면 이렇게 보입니다
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/card/PAL-000-00001"
                target="_blank"
                className="p-4 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-yellow-500/10 hover:from-pink-500/20 hover:via-purple-500/20 hover:to-yellow-500/20 border border-yellow-400/50 hover:border-yellow-400 rounded-xl transition group"
              >
                <div className="text-xs bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 text-black px-2 py-1 rounded inline-block mb-2 font-bold">
                  ⭐ ARTIST
                </div>
                <h4 className="font-semibold mb-1">BoA</h4>
                <p className="text-xs text-zinc-500">PAL-000-00001</p>
              </Link>

              <Link
                href="/card/PAL-000-00002"
                target="_blank"
                className="p-4 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 hover:border-yellow-400/30 rounded-xl transition group"
              >
                <div className="text-xs bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-2 py-1 rounded inline-block mb-2 font-bold">
                  STAFF
                </div>
                <h4 className="font-semibold mb-1">이대표</h4>
                <p className="text-xs text-zinc-500">PAL-000-00002</p>
              </Link>

              <Link
                href="/card/PAL-001-00215"
                target="_blank"
                className="p-4 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 hover:border-yellow-400/30 rounded-xl transition group"
              >
                <div className="text-xs bg-yellow-400 text-black px-2 py-1 rounded inline-block mb-2 font-bold">
                  FOUNDING
                </div>
                <h4 className="font-semibold mb-1">PAL #215</h4>
                <p className="text-xs text-zinc-500">PAL-001-00215</p>
              </Link>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-8 p-8 bg-zinc-900/30 border border-zinc-800/30 rounded-2xl">
            <h3 className="text-xl font-bold mb-6">PAL KAVE 로드맵</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0 border border-yellow-400/30">
                  <span className="text-yellow-400 font-bold">1</span>
                </div>
                <div>
                  <div className="text-sm text-yellow-400 font-semibold mb-1">4월 1일 ~ 4월 30일</div>
                  <h4 className="font-semibold mb-1">팬클럽 이름 투표</h4>
                  <p className="text-sm text-zinc-500">PAL Mate들의 투표로 공식 이름 결정</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 border border-zinc-700">
                  <span className="text-zinc-400 font-bold">2</span>
                </div>
                <div>
                  <div className="text-sm text-zinc-500 font-semibold mb-1">5월 초 (2주간)</div>
                  <h4 className="font-semibold mb-1">1기 PAL 팬키트 판매</h4>
                  <p className="text-sm text-zinc-500">5,000개 한정 / $40 / NFC 사원증 포함</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 border border-zinc-700">
                  <span className="text-zinc-400 font-bold">3</span>
                </div>
                <div>
                  <div className="text-sm text-zinc-500 font-semibold mb-1">5월 중순~</div>
                  <h4 className="font-semibold mb-1">KAVE 정식 오픈</h4>
                  <p className="text-sm text-zinc-500">Pledge 보유자 전용 콘텐츠 & 투표 시작</p>
                </div>
              </div>
            </div>
          </div>
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
              <Link href="/" className="hover:text-zinc-400 transition-colors">홈으로</Link>
              <Link href="/shop" className="hover:text-zinc-400 transition-colors">팬키트 구매</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
