'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function FailContent() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message') || '결제 처리 중 문제가 발생했습니다.';

  return (
    <div className="max-w-md w-full space-y-8 animate-fade-in">
      {/* Error Icon */}
      <div className="w-24 h-24 bg-red-500/10 border border-red-500/30 rounded-full flex items-center justify-center mx-auto text-4xl">
        ⚠️
      </div>

      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-red-400">결제 실패</h1>
        <p className="text-zinc-400">{message}</p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-left shadow-lg">
        <p className="text-xs text-zinc-500 leading-relaxed text-center">
           테스트 환경의 일시적 오류이거나 잔액이 부족할 수 있습니다.<br /> 
           다시 한번 시도해주세요.
        </p>
      </div>

      <div className="space-y-4 pt-4">
        <Link 
          href="/shop/checkout" 
          className="block w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl transition border border-zinc-700 shadow-md"
        >
          결제 다시 시도하기
        </Link>
        <Link 
          href="/shop" 
          className="block w-full py-3 text-zinc-500 hover:text-white transition"
        >
          상점으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

export default function FailPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-white text-center">
      <Suspense fallback={<div className="text-zinc-500">로딩 중...</div>}>
        <FailContent />
      </Suspense>
    </div>
  );
}
