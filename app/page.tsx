'use client';

import { useState, useEffect } from 'react';

const FANDOM_CANDIDATES = [
  { id: 'bestie', name: 'Bestie (베스티)' },
  { id: 'jumpingboa', name: 'Jumping BoA (점핑보아)' },
  { id: 'peaceb', name: 'Peace B (피스비)' },
];

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwVm06-d2hb5OpRDb8216kpc_Lj3H_Dslx6yyvEg2iduJ3Yl0phGUbc7I0kWiftRrq0IA/exec';

export default function Home() {
  const [voted, setVoted] = useState<string | null>(null);
  const [showKaveMsg, setShowKaveMsg] = useState(false);
  const [confirmTarget, setConfirmTarget] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('bapal_vote');
    if (saved) setVoted(saved);
  }, []);

  const handleVoteClick = (id: string) => {
    if (voted) return;
    setConfirmTarget(id);
  };

  const handleConfirm = async () => {
    if (!confirmTarget) return;
    setSubmitting(true);

    try {
      // Get IP
      let ip = 'unknown';
      try {
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        ip = data.ip;
      } catch {}

      // Send to Google Sheets via image ping (bypasses CORS)
      if (GOOGLE_SCRIPT_URL) {
        const candidate = FANDOM_CANDIDATES.find(c => c.id === confirmTarget);
        const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
        const params = new URLSearchParams({
          vote: candidate?.name || confirmTarget,
          ip,
          timestamp: new Date().toISOString(),
          device: isMobile ? 'Mobile' : 'Desktop',
          userAgent: navigator.userAgent,
        });
        const url = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;
        console.log('Sending vote to:', url);
        await new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => { console.log('Vote sent OK'); resolve(); };
          img.onerror = () => { console.log('Vote sent (img error expected)'); resolve(); };
          img.src = url;
          setTimeout(resolve, 3000);
        });
      }

      localStorage.setItem('bapal_vote', confirmTarget);
      setVoted(confirmTarget);
    } catch {
      // Still save locally even if sheet fails
      localStorage.setItem('bapal_vote', confirmTarget);
      setVoted(confirmTarget);
    }

    setConfirmTarget(null);
    setSubmitting(false);
  };

  const confirmName = FANDOM_CANDIDATES.find(c => c.id === confirmTarget)?.name;

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans flex flex-col items-center justify-center px-5 py-16">
      <div className="flex flex-col items-center gap-8 w-full max-w-md">
        {/* Logo */}
        <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
          <img src="/bapal-logo-new.png" alt="BApal Entertainment" className="w-full h-full object-contain" />
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            BApal
          </h1>
          <p className="text-[10px] md:text-xs text-zinc-600 tracking-[0.4em] uppercase mt-2">
            Entertainment
          </p>
        </div>

        {/* Fandom Vote */}
        <div className="w-full mt-4">
          <div className="text-center mb-5">
            <h2 className="text-sm font-bold text-white mb-1">BoA 공식 팬덤명 투표</h2>
            <p className="text-[11px] text-zinc-500">새로운 시작, 팬덤의 이름을 함께 정해주세요</p>
          </div>
          <div className="space-y-2.5">
            {FANDOM_CANDIDATES.map((opt) => {
              const isVoted = voted === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleVoteClick(opt.id)}
                  disabled={!!voted}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isVoted
                      ? 'border-yellow-400 bg-yellow-400/10'
                      : voted
                      ? 'border-zinc-800/30 bg-zinc-900/20 opacity-40'
                      : 'border-zinc-800 bg-zinc-900/30 hover:border-yellow-400/40 cursor-pointer'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm">{opt.name}</h4>
                    </div>
                    {isVoted && (
                      <span className="text-yellow-400 text-xs font-bold">투표 완료</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* KAVE Button */}
        <button
          onClick={() => setShowKaveMsg(true)}
          className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-zinc-700/50 hover:border-zinc-600 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300"
        >
          KAVE 이동하기
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
        {showKaveMsg && (
          <p className="text-[11px] text-zinc-500 -mt-4 animate-fade-in-up">
            아직 KAVE가 열리지 않았습니다
          </p>
        )}
      </div>

      {/* Footer */}
      <p className="mt-16 text-[10px] text-zinc-700">
        © 2026 BApal Entertainment
      </p>

      {/* Confirm Modal */}
      {confirmTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-5">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-base font-bold text-white mb-2">투표 확인</h3>
            <p className="text-sm text-zinc-400 mb-1">
              <span className="text-yellow-400 font-bold">{confirmName}</span>에 투표하시겠습니까?
            </p>
            <p className="text-[11px] text-zinc-500 mb-6">
              투표는 1회만 가능하며, 변경할 수 없습니다.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmTarget(null)}
                className="flex-1 py-2.5 rounded-xl border border-zinc-700 text-sm text-zinc-400 hover:bg-zinc-800 transition"
              >
                취소
              </button>
              <button
                onClick={handleConfirm}
                disabled={submitting}
                className="flex-1 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-bold transition disabled:opacity-50"
              >
                {submitting ? '처리 중...' : '투표하기'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
