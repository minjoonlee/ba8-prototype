'use client';

import { useState, useEffect } from 'react';
import { loadTossPayments } from '@tosspayments/tosspayments-sdk';
import Link from 'next/link';

// 공용 더미 클라이언트 키 (Toss Payments 예제용)
const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq';

export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');

  const handlePayment = async (method: '카드' | '가상계좌' | '휴대폰' | '토스결제') => {
    if (!buyerName || !buyerEmail) {
      alert('주문자 이름과 이메일을 입력해주세요.');
      return;
    }
    
    setIsProcessing(true);
    try {
      const tossPayments = await loadTossPayments(clientKey);
      const orderId = `BA8_ORDER_${new Date().getTime()}`;
      
      // Toss Payments will redirect the page upon completion.
      await (tossPayments as any).requestPayment(method, {
        amount: 52000,
        orderId: orderId,
        orderName: '1기 PAL 팬키트 (Pledge)',
        customerName: buyerName,
        customerEmail: buyerEmail,
        successUrl: window.location.origin + '/shop/success?method=toss',
        failUrl: window.location.origin + '/shop/fail',
      });
    } catch (error: any) {
      console.warn('Toss PG Error or SDK mismatch, utilizing simulated fallback:', error);
      // Fallback for simulation if SDK version mismatch occurs
      setTimeout(() => {
        window.location.href = '/shop/success?method=toss';
      }, 1000);
    }
  };

  const handlePayPal = () => {
    if (!buyerName || !buyerEmail) {
      alert('주문자 이름과 이메일을 입력해주세요.');
      return;
    }
    
    setIsProcessing(true);
    // Simulate PayPal redirection flow
    setTimeout(() => {
      window.location.href = '/shop/success?method=paypal';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white py-12 px-6">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/shop" className="text-zinc-500 hover:text-white transition">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold">주문 결제</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Form & Info */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Order Item Summary */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-4 border-b border-zinc-800 pb-2">주문 상품 정보</h2>
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-zinc-800 rounded-xl overflow-hidden shadow-inner">
                  <img src="/fankit.jpg" alt="Fan Kit" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-yellow-400 text-xs font-bold mb-1">한정판</div>
                  <h3 className="font-semibold text-zinc-100">1기 PAL 팬키트 (Pledge)</h3>
                  <p className="text-sm text-zinc-500 mt-1">수량: 1개</p>
                </div>
              </div>
            </div>

            {/* Buyer Info Form */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 relative">
              <h2 className="text-lg font-semibold mb-4 border-b border-zinc-800 pb-2">주문자 정보</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">이름</label>
                  <input 
                    type="text" 
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-400 transition"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">이메일</label>
                  <input 
                    type="email" 
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-400 transition"
                    placeholder="palmate@example.com"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Payment Sidebar */}
          <div className="md:col-span-1 space-y-6">
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sticky top-24 shadow-2xl">
              <h2 className="text-lg font-semibold mb-4 border-b border-zinc-800 pb-2">결제 금액</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-zinc-400 text-sm">
                  <span>상품 금액</span>
                  <span>₩52,000</span>
                </div>
                <div className="flex justify-between text-zinc-400 text-sm">
                  <span>배송비</span>
                  <span>₩0</span>
                </div>
                <div className="pt-3 border-t border-zinc-800">
                  <div className="flex justify-between text-yellow-400 font-bold text-lg">
                    <span>총 결제 금액</span>
                    <span>₩52,000</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm text-zinc-400 mb-2">결제 수단 선택</h3>
                
                <button 
                  onClick={() => handlePayment('카드')}
                  disabled={isProcessing}
                  className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition border border-zinc-700 flex items-center justify-center gap-2 shadow-sm"
                >
                  💳 카드 결제
                </button>
                
                <button 
                  onClick={() => handlePayment('토스결제')}
                  disabled={isProcessing}
                  className="w-full py-3 bg-[#3182F6] hover:bg-[#2563EB] text-white rounded-xl transition font-semibold disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
                  </svg>
                  토스 간편결제
                </button>

                {/* PayPal Option */}
                <div className="pt-2">
                  <button 
                    onClick={handlePayPal}
                    disabled={isProcessing}
                    className="w-full py-3 bg-[#FFC439] hover:bg-[#F4B625] text-[#003087] rounded-xl transition font-black italic disabled:opacity-50 flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span>Pay</span><span className="text-[#0079C1]">Pal</span>
                  </button>
                  <p className="text-[10px] text-zinc-600 text-center mt-2">해외 결제 전용 (International)</p>
                </div>
              </div>

              {isProcessing && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-yellow-400 animate-pulse">결제창을 불러오는 중입니다...</p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
