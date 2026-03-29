'use client';

import { useState } from 'react';
import Link from 'next/link';
import BottomNav from '../components/BottomNav';

function BoaAvatar({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const s = size === 'sm' ? 'w-9 h-9' : 'w-11 h-11';
  return (
    <div className={`${s} rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center border-2 border-yellow-400 shadow-lg overflow-hidden relative`}>
      <img src="/boa-avatar.png" alt="BoA" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      <span className="text-black font-black text-sm absolute">B</span>
    </div>
  );
}

function PalAvatar({ number, name }: { number: string; name: string }) {
  const colors = ['from-purple-500 to-indigo-600', 'from-pink-500 to-rose-600', 'from-cyan-500 to-blue-600', 'from-emerald-500 to-green-600'];
  const colorIdx = parseInt(number.replace(/\D/g, '')) % colors.length;
  return (
    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${colors[colorIdx]} flex items-center justify-center text-white text-xs font-bold shadow-inner`}>
      {name.substring(0, 2).toUpperCase()}
    </div>
  );
}

const OFFICIAL_POSTS = [
  { id: 1, time: '10분 전', text: '스태프들 안녕! 오늘 저녁 메뉴 추천해줘! 달콤한 게 땡기는데... 💛', likes: '1.2K', comments: '842' },
  { id: 2, time: '3시간 전', text: '다들 KAVE에서 투표 했어? 응원봉 디자인 고민 많이 해봐~ 어떤 게 제일 예쁜지 궁금하다!', likes: '3.4K', comments: '1.1K' },
];

const FAN_POSTS = [
  { id: 1, name: 'BoA Fan 99', number: '#0215', time: '1시간 전', text: '오피셜 굿즈 드디어 도착!! 키링 너무 귀엽다 ㅠㅠ #PALMATE #굿즈언박싱', likes: '15', comments: '2' },
  { id: 2, name: 'Yellow Heart', number: '#0081', time: '3시간 전', text: '팔메이트 오늘 기분 좋아보이네! 저녁으로 케이크 어때? 🍰', likes: '8', comments: '1' },
  { id: 3, name: 'PAL_Oasis99', number: '#0044', time: '5시간 전', text: 'KAVE에서 응원봉 투표 완료! A안 클래식 스퀘어 밀었습니다 💪', likes: '32', comments: '5' },
];

export default function MemberPage() {
  const [activeTab, setActiveTab] = useState<'boa' | 'palmate' | 'media'>('boa');

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">

      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between">
          <div className="font-bold text-lg tracking-wider" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            <span className="text-yellow-400">BApal</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hidden md:block text-xs text-zinc-500 hover:text-white transition">Home</Link>
            <Link href="/kave" className="text-xs bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 px-3 py-1.5 rounded-full font-bold hover:bg-yellow-400/20 transition">
              KAVE 투표
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto md:flex md:gap-8 px-5 md:px-8">
        {/* Main Content */}
        <main className="flex-1 max-w-2xl">

          {/* BoA Welcome Banner */}
          <section className="pt-6 pb-4">
            <div className="bg-gradient-to-br from-yellow-400/10 via-yellow-400/5 to-transparent border border-yellow-400/20 rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex items-center gap-4">
                <BoaAvatar />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="font-bold text-yellow-400 text-sm">BoA</span>
                    <span className="text-yellow-400 text-xs">Official</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-snug">
                    안녕 Palmate들! 오늘도 함께해줘서 고마워 💛
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tab Navigation */}
          <div className="sticky top-[49px] z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50">
            <div className="flex">
              {[
                { key: 'boa' as const, label: 'BoA 오피셜' },
                { key: 'palmate' as const, label: 'Palmate' },
                { key: 'media' as const, label: '미디어' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 py-3.5 text-sm font-semibold border-b-2 transition ${
                    activeTab === tab.key
                      ? 'border-yellow-400 text-white'
                      : 'border-transparent text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Feed Content */}
          <div className="py-5 space-y-4">
            {activeTab === 'boa' && (
              <div className="space-y-4 animate-fade-in-up">
                {OFFICIAL_POSTS.map((post) => (
                  <div key={post.id} className="bg-zinc-900/60 border border-zinc-800/60 rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <BoaAvatar size="sm" />
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-yellow-400 text-sm">BoA</span>
                          <svg className="w-3.5 h-3.5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xs text-zinc-500">{post.time}</span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-200 mb-4">{post.text}</p>
                    <div className="flex items-center gap-6 border-t border-zinc-800/50 pt-3">
                      <button className="flex items-center gap-2 text-zinc-400 hover:text-yellow-400 text-sm transition">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        <span>{post.comments}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'palmate' && (
              <div className="space-y-4 animate-fade-in-up">
                <p className="text-xs text-zinc-500 mb-2">Palmate = BoA의 팬덤. 각 번호가 여러분입니다.</p>
                {FAN_POSTS.map((post) => (
                  <div key={post.id} className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <PalAvatar number={post.number} name={post.name} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">{post.name}</span>
                          <span className="text-[10px] text-zinc-500 font-mono bg-zinc-800 px-1.5 py-0.5 rounded">{post.number}</span>
                        </div>
                        <span className="text-xs text-zinc-500">{post.time}</span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-300 mb-3">{post.text}</p>
                    <div className="flex items-center gap-6 border-t border-zinc-800/40 pt-3">
                      <button className="flex items-center gap-2 text-zinc-400 hover:text-yellow-400 text-sm transition">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        <span className="text-xs">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        <span className="text-xs">{post.comments}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'media' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 animate-fade-in-up">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-zinc-900 rounded-xl border border-zinc-800/50 relative group cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-40 group-hover:scale-110 transition-transform">
                      {i % 2 === 0 ? '📽️' : '📸'}
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black/60 rounded px-2 py-0.5 text-[10px] text-white backdrop-blur">
                      BoA Note #{i}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>

        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-72 lg:w-80 pt-6 space-y-4">
          <div className="sticky top-[65px] space-y-4">
            {/* Quick Links */}
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-5">
              <h3 className="text-sm font-bold mb-3 text-zinc-300">바로가기</h3>
              <div className="space-y-2">
                <Link href="/kave" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-800/50 transition">
                  <span className="text-lg">🗳️</span>
                  <div>
                    <p className="text-sm font-semibold">KAVE 투표</p>
                    <p className="text-[10px] text-zinc-500">진행 중인 투표 2건</p>
                  </div>
                </Link>
                <Link href="/shop" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-800/50 transition">
                  <span className="text-lg">🛍️</span>
                  <div>
                    <p className="text-sm font-semibold">Shop</p>
                    <p className="text-[10px] text-zinc-500">1기 팬키트 판매 중</p>
                  </div>
                </Link>
                <Link href="/profile" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-800/50 transition">
                  <span className="text-lg">💳</span>
                  <div>
                    <p className="text-sm font-semibold">MY 디지털 명함</p>
                    <p className="text-[10px] text-zinc-500">프로필 편집</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Pledge Info */}
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400 font-bold text-sm">MY Pledge</span>
              </div>
              <div className="text-2xl font-black text-yellow-400 font-mono">1,000 P</div>
              <p className="text-[10px] text-zinc-500 mt-1">KAVE 투표에 사용 가능</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom Nav - mobile only */}
      <div className="pb-24 md:pb-0">
        <BottomNav />
      </div>
    </div>
  );
}
