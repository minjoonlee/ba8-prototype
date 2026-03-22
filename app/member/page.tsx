'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MemberPage() {
  const [activeTab, setActiveTab] = useState<'home' | 'content' | 'community'>('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800/50 backdrop-blur-sm sticky top-0 bg-black/80 z-50">
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
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-zinc-900/50 border border-yellow-400/30 rounded-full px-4 py-2">
                <span className="text-xs text-yellow-400 font-semibold">FOUNDING MEMBER</span>
                <span className="text-xs text-zinc-500">|</span>
                <span className="text-xs text-zinc-400">No.000215</span>
              </div>
              <button className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
                <span className="text-sm">👤</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with PALMATE */}
      <div className="relative overflow-hidden border-b border-zinc-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/[0.03] to-amber-400/[0.02]"></div>
        <div className="container mx-auto px-6 py-12 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <span className="text-sm font-semibold text-yellow-400">PALMATE STAFF</span>
                <span className="text-xs text-yellow-400/70">Always with BoA</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Welcome,<br />
                <span className="text-yellow-400">PALMATE!</span>
              </h2>
              <p className="text-zinc-400">
                당신만을 위한 익스클루시브 콘텐츠가 준비되어 있습니다
              </p>
            </div>
            <div className="relative">
              {/* PALMATE Character - Box Character */}
              <div className="w-48 h-48 bg-gradient-to-br from-yellow-400/10 to-amber-400/5 rounded-3xl flex items-center justify-center border border-yellow-400/20 shadow-2xl shadow-yellow-400/10 backdrop-blur-sm">
                <div className="text-center space-y-2">
                  {/* Box Character */}
                  <div className="relative">
                    <div className="w-24 h-28 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-lg flex flex-col items-center justify-center shadow-lg border-2 border-amber-300">
                      {/* Face */}
                      <div className="flex gap-2 mb-2">
                        <div className="w-2 h-2 bg-zinc-800 rounded-full"></div>
                        <div className="w-2 h-2 bg-zinc-800 rounded-full"></div>
                      </div>
                      <div className="w-4 h-1 bg-zinc-800 rounded-full"></div>
                      {/* Yellow Heart */}
                      <div className="absolute bottom-2">
                        <svg viewBox="0 0 20 20" className="w-5 h-5">
                          <path d="M10 17 C6 14, 3 11, 3 8 C3 5.5, 4.5 4, 6 4 C7.5 4, 8.5 5, 10 6 C11.5 5, 12.5 4, 14 4 C15.5 4, 17 5.5, 17 8 C17 11, 14 14, 10 17 Z" fill="#facc15" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-yellow-400 font-bold tracking-wider">PALMATE</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-yellow-400/50">
                <span className="text-zinc-900 font-bold text-lg">⭐</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="flex gap-1">
            {[
              { id: 'home', label: '홈', icon: '🏠' },
              { id: 'content', label: '콘텐츠', icon: '📺' },
              { id: 'community', label: '커뮤니티', icon: '💬' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-4 border-b-2 transition ${
                  activeTab === tab.id
                    ? 'border-yellow-400 text-yellow-400'
                    : 'border-transparent text-zinc-500 hover:text-white'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {activeTab === 'home' && (
          <div className="space-y-12">
            {/* Latest News */}
            <section>
              <h3 className="text-2xl font-bold mb-6">Latest Updates</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden hover:border-white/20 transition cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600" 
                      alt="Behind The Scenes"
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded border border-yellow-400/30 font-semibold">NEW</span>
                      <span className="text-xs text-zinc-500">2024.03.20</span>
                    </div>
                    <h4 className="text-xl font-semibold">"Emptiness" MV 비하인드</h4>
                    <p className="text-sm text-zinc-400">신곡 뮤직비디오 촬영 현장 독점 공개</p>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden hover:border-white/20 transition cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600" 
                      alt="Fan Meeting"
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded border border-red-500/30">LIVE</span>
                      <span className="text-xs text-zinc-500">오늘 20:00</span>
                    </div>
                    <h4 className="text-xl font-semibold">BoA 25주년 화상 팬미팅</h4>
                    <p className="text-sm text-zinc-400">1기 멤버 우선 참여 / 선착순 100명</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Membership Benefits */}
            <section>
              <h3 className="text-2xl font-bold mb-6">Your Benefits</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-yellow-400/20 rounded-xl p-6 space-y-4 hover:border-yellow-400/40 transition group">
                  <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center text-2xl">
                    📦
                  </div>
                  <h4 className="font-semibold">PALMATE Kit</h4>
                  <p className="text-sm text-zinc-400">박스 캐릭터 굿즈, 사원증, 스티커 등</p>
                  <button className="text-sm text-yellow-400 hover:underline group-hover:text-yellow-300 transition">자세히 보기 →</button>
                </div>

                <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-yellow-400/20 rounded-xl p-6 space-y-4 hover:border-yellow-400/40 transition group">
                  <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center text-2xl">
                    🎫
                  </div>
                  <h4 className="font-semibold">Concert Priority</h4>
                  <p className="text-sm text-zinc-400">콘서트 티켓 우선 예매권</p>
                  <button className="text-sm text-yellow-400 hover:underline group-hover:text-yellow-300 transition">일정 확인 →</button>
                </div>

                <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-yellow-400/20 rounded-xl p-6 space-y-4 hover:border-yellow-400/40 transition group">
                  <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center text-2xl">
                    ✉️
                  </div>
                  <h4 className="font-semibold">Monthly Letter</h4>
                  <p className="text-sm text-zinc-400">매월 보아의 손편지 + 가사 스티커</p>
                  <button className="text-sm text-yellow-400 hover:underline group-hover:text-yellow-300 transition">편지함 →</button>
                </div>
              </div>
            </section>

            {/* Member Stats - PALMATE Style */}
            <section className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-yellow-400/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <svg viewBox="0 0 20 20" className="w-6 h-6">
                  <path d="M10 17 C6 14, 3 11, 3 8 C3 5.5, 4.5 4, 6 4 C7.5 4, 8.5 5, 10 6 C11.5 5, 12.5 4, 14 4 C15.5 4, 17 5.5, 17 8 C17 11, 14 14, 10 17 Z" fill="#facc15" />
                </svg>
                <h3 className="text-xl font-bold">My PALMATE Stats</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">215</div>
                  <div className="text-sm text-zinc-500 mt-1">회원 번호</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">47</div>
                  <div className="text-sm text-zinc-500 mt-1">참여일</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">128</div>
                  <div className="text-sm text-zinc-500 mt-1">포인트</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">1기</div>
                  <div className="text-sm text-zinc-500 mt-1">창립 멤버</div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="space-y-8">
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📺</div>
              <h3 className="text-2xl font-bold mb-2">Exclusive Content</h3>
              <p className="text-zinc-400">PALMATE 멤버를 위한 특별한 콘텐츠</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden hover:border-white/20 transition cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                    <span className="text-4xl">🎬</span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">Video #{i}</h4>
                    <p className="text-xs text-zinc-500">2024.03.{20 - i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'community' && (
          <div className="space-y-8">
            <div className="text-center py-12">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-2">PALMATE Community</h3>
              <p className="text-zinc-400">1기 멤버들과 소통하세요</p>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                { user: 'PALMATE #0042', message: '콘서트 너무 기대돼요! 🎉', time: '5분 전' },
                { user: 'PALMATE #0128', message: '오늘 라이브 너무 좋았어요 ❤️', time: '12분 전' },
                { user: 'PALMATE #0003', message: '1기 굿즈 언제 배송되나요?', time: '1시간 전' }
              ].map((post, i) => (
                <div key={i} className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 hover:border-yellow-400/20 transition">
                  <div className="flex items-start gap-4">
                    {/* Box Character Avatar */}
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-200 to-yellow-300 rounded flex items-center justify-center flex-shrink-0 border border-yellow-400/30">
                      <div className="flex flex-col items-center">
                        <div className="flex gap-0.5 mb-0.5">
                          <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
                          <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
                        </div>
                        <div className="w-2 h-0.5 bg-zinc-800 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-sm">{post.user}</span>
                        <span className="text-xs text-zinc-500">{post.time}</span>
                      </div>
                      <p className="text-zinc-300">{post.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 mt-24">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-500">
              © 2024 BApal Entertainment. Always with BoA.
            </p>
            <div className="flex gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-white transition">Help</a>
              <a href="#" className="hover:text-white transition">Settings</a>
              <a href="#" className="hover:text-white transition">Logout</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
