'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

function VerifyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [memberInfo, setMemberInfo] = useState<any>(null);

  useEffect(() => {
    const nfcId = searchParams.get('nfc');
    
    if (!nfcId) {
      setStatus('error');
      return;
    }

    // Simulate NFC verification
    setTimeout(() => {
      // Parse membership tier from NFC ID
      const match = nfcId.match(/BA8-(\d{3})-(\d+)/);
      if (match) {
        const [, generation, memberNumber] = match;
        
        setMemberInfo({
          id: nfcId,
          generation: parseInt(generation),
          memberNumber: parseInt(memberNumber),
          tier: parseInt(memberNumber) <= 500 ? 'FOUNDING MEMBER' : 'PALMATE STAFF',
          name: 'PALMATE Member',
          joinDate: '2024.01.15'
        });
        setStatus('success');

        // Redirect to member page after 2 seconds
        setTimeout(() => {
          router.push('/member');
        }, 2000);
      } else {
        setStatus('error');
      }
    }, 1500);
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur">
          {status === 'verifying' && (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 border-4 border-amber-400/20 border-t-amber-400 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">📱</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">NFC 인증 중...</h2>
                <p className="text-zinc-400">멤버십 정보를 확인하고 있습니다</p>
              </div>
            </div>
          )}

          {status === 'success' && memberInfo && (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-white/10 border-2 border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-5xl">✓</span>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">인증 완료!</h2>
                <p className="text-zinc-400">멤버 페이지로 이동합니다...</p>
              </div>

              <div className="bg-black/30 rounded-xl p-6 space-y-3 text-left border border-zinc-800/50">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-500">멤버십 등급</span>
                  <span className="text-white font-semibold">{memberInfo.tier}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-500">기수</span>
                  <span className="text-white">{memberInfo.generation}기</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-500">회원 번호</span>
                  <span className="text-white font-mono">No.{String(memberInfo.memberNumber).padStart(6, '0')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-500">가입일</span>
                  <span className="text-white">{memberInfo.joinDate}</span>
                </div>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center border-2 border-red-500/30">
                  <span className="text-5xl">⚠️</span>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-red-400">인증 실패</h2>
                <p className="text-zinc-400">유효하지 않은 멤버십 카드입니다</p>
              </div>
              <button
                onClick={() => router.push('/')}
                className="w-full py-3 px-6 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition"
              >
                홈으로 돌아가기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <VerifyContent />
    </Suspense>
  );
}
