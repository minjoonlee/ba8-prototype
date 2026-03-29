'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SuccessPage() {
  const [loading, setLoading] = useState(true);

  // In a real app, you would take the ?paymentKey, ?orderId, and ?amount from the URL 
  // and send them to your backend to verify the transaction.
  useEffect(() => {
    // Simulate API approval delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-white text-center">
      
      {loading ? (
        <div className="space-y-6">
          <div className="w-16 h-16 border-4 border-zinc-800 border-t-yellow-400 rounded-full animate-spin mx-auto"></div>
          <p className="text-sm text-zinc-400">결제 정보 승인 중입니다...</p>
        </div>
      ) : (
        <div className="space-y-8 animate-fade-in max-w-md">
          {/* Confetti / Success Icon */}
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative w-full h-full bg-zinc-900 border-4 border-yellow-400 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-400/30">
               <span className="text-5xl">🎉</span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">결제 완료!</h1>
            <p className="text-zinc-400 leading-relaxed">
              1기 PAL 팬키트 (Pledge) 구매가 확정되었습니다.<br />
              환영합니다, STAFF님!
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-left space-y-3 shadow-inner">
            <h2 className="text-sm text-yellow-400 font-bold mb-4 border-b border-zinc-800 pb-2">가상 영수증</h2>
            <div className="flex justify-between text-sm text-zinc-400">
              <span>상품명</span>
              <span className="text-zinc-200">1기 PAL 팬키트</span>
            </div>
            <div className="flex justify-between text-sm text-zinc-400">
              <span>결제금액</span>
              <span className="text-zinc-200">₩52,000</span>
            </div>
            <div className="flex justify-between text-sm text-zinc-400">
              <span>결제수단</span>
              <span className="text-zinc-200">
                {typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('method') === 'paypal' 
                  ? 'PayPal (테스트)' 
                  : '토스페이먼츠 (테스트)'}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <Link 
              href="/member" 
              className="block w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl transition shadow-[0_0_20px_rgba(250,204,21,0.3)] animate-pulse"
            >
              NFC 태그로 팬덤 입장하기
            </Link>
            <Link 
              href="/shop" 
              className="block w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 rounded-xl transition border border-zinc-800"
            >
              쇼핑 계속하기
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}
