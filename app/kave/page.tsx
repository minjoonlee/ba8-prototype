'use client';

import { useState } from 'react';
import Link from 'next/link';
import BottomNav from '../components/BottomNav';

/* ── Data ── */

const LATEST_UPDATES = [
  {
    id: 'u1', badge: 'NEW', badgeColor: 'bg-yellow-400 text-black', date: '2024.03.20',
    title: '"Emptiness" MV 비하인드', desc: '신곡 뮤직비디오 촬영 현장 독점 공개',
    image: '/content-mv-behind.png', cost: null,
  },
  {
    id: 'u2', badge: 'LIVE', badgeColor: 'bg-red-500 text-white', date: '오늘 20:00',
    title: 'BoA 25주년 화상 팬미팅', desc: '1기 멤버 우선 참여 / 선착순 100명',
    image: '/content-fanmeeting.png', cost: 100,
  },
  {
    id: 'u3', badge: '편지', badgeColor: 'bg-pink-500 text-white', date: '매월 1일',
    title: 'BoA 손편지 보기', desc: '매월 BoA가 직접 쓴 손편지 + 가사 스티커',
    image: '/content-letter.png', cost: null,
  },
  {
    id: 'u4', badge: '독점', badgeColor: 'bg-cyan-500 text-black', date: '2024.03.15',
    title: '"Better" 안무 연습 영상', desc: '미공개 연습실 영상 풀버전',
    image: '/content-practice.png', cost: null,
  },
];

const LIGHTSTICK_CANDIDATES = [
  { id: 'ls1', name: 'A. 클래식 스퀘어', desc: 'PALMATE 박스 로고 중심', votes: 1205 },
  { id: 'ls2', name: 'B. 샤이닝 하트', desc: '하트 모티프 둥근 디자인', votes: 840 },
  { id: 'ls3', name: 'C. 미니멀 스틱', desc: '슬림한 현대적 디자인', votes: 320 },
];

const CITY_CANDIDATES = [
  { id: 'seoul', name: '서울', desc: '올림픽 홀', votes: 2100 },
  { id: 'tokyo', name: '도쿄', desc: '도쿄 돔 시티 홀', votes: 1540 },
  { id: 'la', name: 'LA', desc: '더 윌턴 극장', votes: 980 },
];

const FANDOM_CANDIDATES = [
  { id: 'bestie', name: 'Bestie (베스티)', desc: 'BoA의 가장 친한 친구, 우리', votes: 0 },
  { id: 'jumpingboa', name: '점핑보아', desc: 'BoA와 함께 뛰는 에너지', votes: 0 },
  { id: 'peaceb', name: 'Peace B (피스비)', desc: 'BoA와 함께하는 평화', votes: 0 },
];

const CONCERT_SCHEDULE = [
  { id: 'c1', title: 'BoA 25th Anniversary Concert', venue: '서울 올림픽홀', date: '2025.08.15', cost: 200, status: 'open' as const, image: '/concert-25th.png' },
  { id: 'c2', title: 'BoA Fan Meeting Tokyo', venue: '도쿄 돔 시티 홀', date: '2025.09.20', cost: 150, status: 'soon' as const, image: '/concert-tokyo.png' },
];

const MY_PHOTOCARDS = [
  { id: 'pc1', era: 'My Name', year: '2004', owned: true, gradient: 'from-red-800 to-red-950', image: null },
  { id: 'pc2', era: 'Only One', year: '2012', owned: true, gradient: 'from-blue-800 to-blue-950', image: '/pc-onlyone.png' },
  { id: 'pc3', era: 'Starry Night', year: '2019', owned: false, gradient: 'from-indigo-800 to-indigo-950', image: '/pc-starrynight.png' },
  { id: 'pc4', era: 'Better', year: '2020', owned: true, gradient: 'from-emerald-800 to-emerald-950', image: null },
  { id: 'pc5', era: 'Forgive Me', year: '2022', owned: false, gradient: 'from-purple-800 to-purple-950', image: null },
  { id: 'pc6', era: 'The Live', year: '2023', owned: true, gradient: 'from-amber-800 to-amber-950', image: null },
  { id: 'pc7', era: 'Emptiness', year: '2024', owned: true, gradient: 'from-cyan-800 to-cyan-950', image: null },
  { id: 'pc8', era: 'Miracle', year: '2002', owned: false, gradient: 'from-pink-800 to-pink-950', image: null },
  { id: 'pc9', era: 'Hurricane Venus', year: '2010', owned: true, gradient: 'from-orange-800 to-orange-950', image: null },
];

const TRADE_POSTS = [
  { id: 't1', user: 'PAL_0081', have: 'Starry Night', want: 'Only One', time: '2시간 전' },
  { id: 't2', user: 'PAL_0312', have: 'Better', want: 'Forgive Me', time: '5시간 전' },
  { id: 't3', user: 'PAL_0044', have: 'Forgive Me', want: 'My Name', time: '1일 전' },
];

/* ── Components ── */

function VoteCard({ title, dday, desc, candidates, votedId, onVote, costLabel }: {
  title: string; dday: string; desc: string;
  candidates: { id: string; name: string; desc: string; votes: number }[];
  votedId: string | null; onVote: (id: string) => void; costLabel: string;
}) {
  const totalVotes = candidates.reduce((s, c) => s + c.votes, 0);
  return (
    <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-bold text-sm">{title}</h3>
        <span className="text-[10px] font-bold text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-2 py-0.5 rounded">{dday}</span>
      </div>
      <p className="text-xs text-zinc-500 mb-3">{desc}</p>
      <div className="space-y-2">
        {candidates.map((opt) => {
          const isVoted = votedId === opt.id;
          const pct = Math.round((opt.votes / totalVotes) * 100);
          return (
            <button key={opt.id} onClick={() => !votedId && onVote(opt.id)} disabled={!!votedId}
              className={`w-full text-left p-3 rounded-xl border transition-all relative overflow-hidden ${
                isVoted ? 'border-yellow-400 bg-yellow-400/10' : votedId ? 'border-zinc-800/30 bg-zinc-900/20 opacity-40' : 'border-zinc-800 bg-zinc-900/30 hover:border-yellow-400/40 cursor-pointer'
              }`}>
              {votedId && <div className={`absolute inset-y-0 left-0 ${isVoted ? 'bg-yellow-400/10' : 'bg-zinc-800/30'} transition-all duration-500`} style={{ width: `${pct}%` }} />}
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <h4 className="font-bold text-sm">{opt.name}</h4>
                  <p className="text-[10px] text-zinc-500">{opt.desc}</p>
                </div>
                {votedId ? (
                  <span className={`text-xs font-bold font-mono ${isVoted ? 'text-yellow-400' : 'text-zinc-500'}`}>{pct}%</span>
                ) : (
                  <span className="text-[10px] font-bold text-yellow-400 border border-yellow-400/30 px-2 py-1 rounded-full whitespace-nowrap">{costLabel}</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

type KaveTab = 'content' | 'vote' | 'concert' | 'photocard';

export default function KavePage() {
  const [activeTab, setActiveTab] = useState<KaveTab>('content');
  const [voteTab, setVoteTab] = useState<'ongoing' | 'closed'>('ongoing');
  const [votedLightstick, setVotedLightstick] = useState<string | null>(null);
  const [votedCity, setVotedCity] = useState<string | null>(null);
  const [votedFandom, setVotedFandom] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [reservedConcert, setReservedConcert] = useState<string | null>(null);

  const handleVote = (type: 'ls' | 'city', id: string) => {
    if (type === 'ls') setVotedLightstick(id);
    else setVotedCity(id);
    toast('투표 완료!');
  };

  const toast = (msg: string) => { setToastMsg(msg); setShowToast(true); setTimeout(() => setShowToast(false), 2000); };

  const ownedCount = MY_PHOTOCARDS.filter(p => p.owned).length;
  const totalCards = MY_PHOTOCARDS.length;
  const collectionBonus = ownedCount === totalCards;

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">

      {/* Header */}
      <div className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/member" className="hidden md:block text-xs text-zinc-500 hover:text-white transition">← 홈</Link>
            <h1 className="text-lg font-black tracking-tight text-yellow-400">KAVE</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/shop" className="hidden md:inline-block text-xs text-zinc-500 hover:text-yellow-400 transition">Pledge Shop →</Link>
            <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
              <span className="text-[10px] text-zinc-400 font-bold">MY</span>
              <span className="text-xs font-black text-yellow-400 font-mono">1,000 P</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-[49px] z-30 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/40">
        <div className="max-w-5xl mx-auto px-5 md:px-8 flex gap-1 overflow-x-auto scrollbar-hide">
          {[
            { key: 'content' as const, label: '콘텐츠' },
            { key: 'vote' as const, label: '투표' },
            { key: 'concert' as const, label: '콘서트' },
            { key: 'photocard' as const, label: '포토카드' },
          ].map((tab) => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition whitespace-nowrap ${
                activeTab === tab.key ? 'border-yellow-400 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-5 md:px-8 py-5">

        {/* ===== CONTENT TAB ===== */}
        {activeTab === 'content' && (
          <div className="animate-fade-in-up">
            <div className="mb-5">
              <h2 className="text-lg font-bold mb-1">독점 콘텐츠</h2>
              <p className="text-xs text-zinc-500">Pledge 멤버만 볼 수 있는 BoA의 비하인드와 특별 콘텐츠</p>
            </div>

            {/* Featured */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {LATEST_UPDATES.slice(0, 2).map((item) => (
                <div key={item.id} className="relative rounded-2xl overflow-hidden cursor-pointer group border border-zinc-800/40 hover:border-yellow-400/30 transition">
                  <div className="h-44 md:h-52 relative bg-zinc-900">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${item.badgeColor}`}>{item.badge}</span>
                      <span className="text-[10px] text-zinc-300">{item.date}</span>
                    </div>
                    {item.cost && (
                      <div className="absolute top-3 right-3 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded">{item.cost} P</div>
                    )}
                  </div>
                  <div className="p-4 bg-zinc-900/40">
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* More content */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {LATEST_UPDATES.slice(2).map((item) => (
                <div key={item.id} className="rounded-xl border border-zinc-800/40 overflow-hidden cursor-pointer hover:border-yellow-400/30 transition group">
                  <div className="h-24 relative bg-zinc-900 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${item.badgeColor}`}>{item.badge}</span>
                    </div>
                  </div>
                  <div className="p-3 bg-zinc-900/40">
                    <h4 className="font-bold text-xs mb-0.5 leading-tight">{item.title}</h4>
                    <p className="text-[10px] text-zinc-500 line-clamp-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== VOTE TAB ===== */}
        {activeTab === 'vote' && (
          <div className="animate-fade-in-up">
            <div className="mb-5">
              <h2 className="text-lg font-bold mb-1">Pledge로 투표하기</h2>
              <p className="text-xs text-zinc-500">BoA의 여정에 직접 참여하세요</p>
            </div>
            <div className="flex gap-2 mb-5 max-w-xs">
              <button onClick={() => setVoteTab('ongoing')} className={`flex-1 py-2 text-sm font-bold rounded-xl transition ${voteTab === 'ongoing' ? 'bg-yellow-400 text-black' : 'bg-zinc-900 border border-zinc-800 text-zinc-400'}`}>진행 중 (3)</button>
              <button onClick={() => setVoteTab('closed')} className={`flex-1 py-2 text-sm font-bold rounded-xl transition ${voteTab === 'closed' ? 'bg-yellow-400 text-black' : 'bg-zinc-900 border border-zinc-800 text-zinc-400'}`}>마감됨</button>
            </div>
            {voteTab === 'ongoing' && (
              <div className="grid md:grid-cols-2 gap-4">
                <VoteCard title="공식 팬덤명 투표" dday="D-7" desc="BoA 공식 팬덤 이름을 함께 정해요!" candidates={FANDOM_CANDIDATES} votedId={votedFandom} onVote={(id) => { setVotedFandom(id); toast('투표 완료!'); }} costLabel="10 P" />
                <VoteCard title="공식 응원봉 디자인" dday="D-5" desc="어떤 응원봉이 가장 마음에 드시나요?" candidates={LIGHTSTICK_CANDIDATES} votedId={votedLightstick} onVote={(id) => handleVote('ls', id)} costLabel="20 P" />
                <VoteCard title="1기 팬미팅 개최 도시" dday="D-12" desc="첫 번째 만남은 어디서?" candidates={CITY_CANDIDATES} votedId={votedCity} onVote={(id) => handleVote('city', id)} costLabel="50 P" />
              </div>
            )}
            {voteTab === 'closed' && (
              <div className="max-w-lg">
                <div className="bg-zinc-900/30 rounded-2xl border border-zinc-800/50 p-5 text-center py-12">
                  <p className="text-zinc-500 text-sm">아직 마감된 투표가 없습니다</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===== CONCERT TAB ===== */}
        {activeTab === 'concert' && (
          <div className="animate-fade-in-up">
            <div className="mb-5">
              <h2 className="text-lg font-bold mb-1">콘서트 선예매</h2>
              <p className="text-xs text-zinc-500">Pledge로 선예매권을 확보하세요. 일반 예매보다 72시간 먼저!</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {CONCERT_SCHEDULE.map((concert) => {
                const isReserved = reservedConcert === concert.id;
                return (
                  <div key={concert.id} className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl overflow-hidden">
                    <div className="h-36 relative bg-zinc-900 overflow-hidden flex items-end p-4">
                      <img src={concert.image} alt={concert.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                      <div className="absolute top-3 right-3">
                        {concert.status === 'open' ? (
                          <span className="text-[10px] font-bold text-black bg-yellow-400 px-2 py-0.5 rounded">선예매 OPEN</span>
                        ) : (
                          <span className="text-[10px] font-bold text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">COMING SOON</span>
                        )}
                      </div>
                      <h3 className="font-bold text-base text-white leading-tight relative z-10">{concert.title}</h3>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between text-xs text-zinc-400">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          {concert.venue}
                        </div>
                        <span>{concert.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-yellow-400 font-black text-sm font-mono">{concert.cost} P</span>
                        <span className="text-[10px] text-zinc-500">선예매권</span>
                      </div>
                      {concert.status === 'open' ? (
                        isReserved ? (
                          <div className="w-full py-2.5 rounded-xl bg-zinc-800 text-center text-sm font-bold text-yellow-400 border border-yellow-400/30">선예매 완료 ✓</div>
                        ) : (
                          <button onClick={() => { setReservedConcert(concert.id); toast('선예매 완료! -' + concert.cost + ' P'); }}
                            className="w-full py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-bold transition">{concert.cost} P로 선예매하기</button>
                        )
                      ) : (
                        <div className="w-full py-2.5 rounded-xl bg-zinc-800 text-center text-sm text-zinc-500 border border-zinc-700">오픈 예정</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 p-4 bg-zinc-900/30 border border-zinc-800/40 rounded-xl max-w-lg">
              <p className="text-[11px] text-zinc-500 leading-relaxed">선예매는 일반 예매 시작 72시간 전에 진행됩니다. Pledge를 사용하면 우선 좌석 선택이 가능합니다.</p>
            </div>
          </div>
        )}

        {/* ===== PHOTOCARD TAB ===== */}
        {activeTab === 'photocard' && (
          <div className="animate-fade-in-up">
            <div className="mb-5">
              <h2 className="text-lg font-bold mb-1">포토카드북</h2>
              <p className="text-xs text-zinc-500">포토카드를 모으고, 교환하고, 컬렉션 보상을 받으세요</p>
            </div>

            <div className="md:flex md:gap-6">
              {/* Left: Collection */}
              <div className="flex-1 mb-6 md:mb-0">
                {/* Progress */}
                <div className={`p-4 rounded-2xl border mb-4 ${collectionBonus ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-zinc-900/40 border-zinc-800/60'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold">My 컬렉션</h3>
                    <span className="text-xs font-mono font-bold text-yellow-400">{ownedCount} / {totalCards}</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full transition-all" style={{ width: `${(ownedCount / totalCards) * 100}%` }}></div>
                  </div>
                  {collectionBonus ? (
                    <p className="text-xs text-yellow-400 font-bold">컬렉션 완성! 매월 50 P 보상 지급 중</p>
                  ) : (
                    <p className="text-[10px] text-zinc-500">전부 모으면 매월 <span className="text-yellow-400 font-bold">50 P</span> 정기 보상!</p>
                  )}
                </div>

                {/* Card Grid - 앨범 느낌 */}
                <div className="grid grid-cols-3 gap-2.5">
                  {MY_PHOTOCARDS.map((card) => (
                    <div key={card.id} className={`aspect-[3/4] rounded-xl border relative overflow-hidden ${
                      card.owned ? 'border-zinc-700 hover:border-yellow-400/40' : 'border-zinc-800/30 opacity-40'
                    } transition cursor-pointer group`}>
                      {/* Card visual */}
                      {card.image && card.owned ? (
                        <div className="absolute inset-0">
                          <img src={card.image} alt={card.era} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-2 left-2 right-2 text-center">
                            <p className="text-[10px] font-bold text-white drop-shadow">{card.era}</p>
                            <p className="text-[8px] text-white/60">{card.year}</p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className={`absolute inset-0 bg-gradient-to-b ${card.gradient}`}>
                            {card.owned && <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>}
                          </div>
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
                            {card.owned ? (
                              <>
                                <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur flex items-center justify-center mb-1.5 border border-white/10">
                                  <span className="text-white font-black text-xs">BoA</span>
                                </div>
                                <p className="text-[10px] font-bold text-white drop-shadow leading-tight">{card.era}</p>
                                <p className="text-[8px] text-white/50">{card.year}</p>
                              </>
                            ) : (
                              <>
                                <div className="w-10 h-10 rounded-full bg-zinc-900/60 flex items-center justify-center mb-1.5 border border-zinc-700">
                                  <span className="text-zinc-600 text-lg">?</span>
                                </div>
                                <p className="text-[10px] text-zinc-500 font-bold">{card.era}</p>
                                <p className="text-[8px] text-zinc-700">{card.year}</p>
                              </>
                            )}
                          </div>
                        </>
                      )}
                      {card.owned && (
                        <div className="absolute top-1.5 right-1.5 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center shadow">
                          <span className="text-black text-[7px] font-bold">✓</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Trade Board */}
              <div className="md:w-80 lg:w-96">
                <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold">교환 게시판</h3>
                    <button className="text-[10px] text-yellow-400 font-bold bg-yellow-400/10 border border-yellow-400/30 px-2 py-1 rounded-lg hover:bg-yellow-400/20 transition">교환 등록</button>
                  </div>
                  <div className="space-y-3">
                    {TRADE_POSTS.map((post) => (
                      <div key={post.id} className="p-3 bg-zinc-900/60 border border-zinc-800/40 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-zinc-300">{post.user}</span>
                          <span className="text-[9px] text-zinc-600">{post.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded font-mono text-[10px]">{post.have}</span>
                          <svg className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                          <span className="bg-yellow-400/10 text-yellow-400 px-2 py-0.5 rounded font-mono text-[10px]">{post.want}</span>
                        </div>
                        <button className="mt-2 w-full py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-[10px] font-bold text-zinc-400 hover:text-white transition">교환 신청</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pledge CTA */}
        <div className="mt-8 p-4 bg-zinc-900/30 border border-zinc-800/40 rounded-xl flex items-center justify-between max-w-lg">
          <div>
            <p className="text-xs text-zinc-400">Pledge가 부족하신가요?</p>
            <p className="text-[10px] text-zinc-600">Pledge Shop에서 굿즈 구매 시 지급됩니다</p>
          </div>
          <Link href="/shop" className="text-xs bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 px-3 py-2 rounded-lg font-bold hover:bg-yellow-400/20 transition whitespace-nowrap">Pledge Shop</Link>
        </div>
      </main>

      {showToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 bg-yellow-400 text-black font-bold rounded-xl shadow-2xl text-sm">{toastMsg}</div>
      )}

      <div className="pb-24 md:pb-0"><BottomNav /></div>
    </div>
  );
}
