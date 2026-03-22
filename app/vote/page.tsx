'use client';

import { useState } from 'react';
import Link from 'next/link';

const FANDOM_NAMES = [
  { id: 'palmate', name: 'PALMATE', votes: 3847, desc: 'Always with BoA' },
  { id: 'beatopia', name: 'BEATOPIA', votes: 2156, desc: 'BoA\'s UTOPIA' },
  { id: 'no1family', name: 'No.1 Family', votes: 1923, desc: 'Forever No.1' },
  { id: 'starlights', name: 'Starlights', votes: 1654, desc: 'Shining with BoA' },
];

export default function VotePage() {
  const [voted, setVoted] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const totalVotes = FANDOM_NAMES.reduce((sum, item) => sum + item.votes, 0);

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
              <h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                BApal
              </h1>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2">
              <span className="text-sm font-semibold text-yellow-400">🗳️ FOUNDING VOTE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">
              팬덤 이름을<br />
              <span className="text-yellow-400">함께 결정해주세요</span>
            </h1>

            <p className="text-lg text-zinc-400">
              BoA와 함께할 공식 팬클럽 이름을 투표로 정합니다.<br />
              <span className="text-sm text-zinc-500">투표는 1인 1회 / 마감: 2024.04.15</span>
            </p>
          </div>

          {/* Vote Cards */}
          <div className="space-y-4">
            {FANDOM_NAMES.map((option) => {
              const isVoted = voted === option.id;
              const percentage = ((option.votes / totalVotes) * 100).toFixed(1);
              
              return (
                <button
                  key={option.id}
                  onClick={() => !voted && handleVote(option.id)}
                  disabled={!!voted}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${
                    isVoted
                      ? 'border-yellow-400 bg-yellow-400/10'
                      : voted
                      ? 'border-zinc-800/50 bg-zinc-900/20 opacity-50'
                      : 'border-zinc-800/50 bg-zinc-900/20 hover:border-yellow-400/50 hover:bg-zinc-900/40'
                  } ${!voted && 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{option.name}</h3>
                      <p className="text-sm text-zinc-500">{option.desc}</p>
                    </div>
                    {isVoted && (
                      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center ml-4">
                        <span className="text-2xl text-zinc-900">✓</span>
                      </div>
                    )}
                  </div>

                  {showResult && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-400">{option.votes.toLocaleString()}표</span>
                        <span className={isVoted ? 'text-yellow-400 font-semibold' : 'text-zinc-500'}>
                          {percentage}%
                        </span>
                      </div>
                      <div className="h-2 bg-zinc-800/50 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-1000 ${
                            isVoted ? 'bg-yellow-400' : 'bg-zinc-700'
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* After Vote Message */}
          {showResult && (
            <div className="mt-8 p-6 bg-gradient-to-br from-yellow-400/10 to-amber-400/5 border border-yellow-400/30 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎉</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">투표해주셔서 감사합니다!</h3>
                  <p className="text-sm text-zinc-400 mb-4">
                    투표 결과는 2024년 4월 15일에 발표됩니다.<br />
                    당선된 팬클럽명으로 공식 굿즈가 제작됩니다.
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href="/shop"
                      className="text-sm text-yellow-400 hover:text-yellow-300 transition border-b border-yellow-400/50 hover:border-yellow-300/50 pb-0.5"
                    >
                      굿즈 미리보기 →
                    </Link>
                    <Link
                      href="/member"
                      className="text-sm text-zinc-400 hover:text-white transition border-b border-zinc-700/50 hover:border-zinc-500 pb-0.5"
                    >
                      멤버 페이지로 →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 p-6 bg-zinc-900/20 border border-zinc-800/30 rounded-2xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{totalVotes.toLocaleString()}</div>
              <div className="text-xs text-zinc-500 mt-1">총 투표수</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4</div>
              <div className="text-xs text-zinc-500 mt-1">후보 이름</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">1기</div>
              <div className="text-xs text-zinc-500 mt-1">창립 멤버</div>
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
