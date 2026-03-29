'use client';

import { useState } from 'react';
import Link from 'next/link';
import BottomNav from '../components/BottomNav';

const PRODUCTS = [
  {
    id: 'fankit-gen1', name: '1기 PALMATE 팬키트', price: 40, priceKRW: 55000,
    image: '/fankit.jpg', badge: '1기 한정', pledgeAmount: 1000, stock: '5,000개 한정',
    highlight: true, includes: ['PALMATE STAFF 사원증 (NFC)', '박스 캐릭터 키링', '가입 인증서'],
  },
  {
    id: 'lightstick', name: 'PALMATE 공식 응원봉', price: 35, priceKRW: 48000,
    image: '/product-lightstick.png', badge: '인기', pledgeAmount: 1500, stock: '상시 판매',
    highlight: false, includes: ['공식 응원봉', '오프라인 콘서트 연동'],
  },
  {
    id: 'photocard-pack', name: '랜덤 포토카드 팩', price: 5, priceKRW: 6500,
    image: '/product-photocard.png', badge: null, pledgeAmount: 200, stock: '상시 판매',
    highlight: false, includes: ['미공개 셀카 포토카드 2종'],
  },
  {
    id: 'photocard-binder', name: '포토카드 바인더', price: 15, priceKRW: 20000,
    image: '/product-binder.png', badge: 'NEW', pledgeAmount: 500, stock: '상시 판매',
    highlight: false, includes: ['공식 바인더 (20매 수납)', '포토카드 슬리브 20장'],
  },
  {
    id: 'slogan', name: '공식 응원 슬로건', price: 10, priceKRW: 13000,
    image: '/product-slogan.png', badge: null, pledgeAmount: 300, stock: '상시 판매',
    highlight: false, includes: ['양면 슬로건 (반짝이 원단)'],
  },
  {
    id: 'tshirt', name: 'PALMATE 공식 티셔츠', price: 25, priceKRW: 34000,
    image: '/product-tshirt.png', badge: null, pledgeAmount: 800, stock: '상시 판매',
    highlight: false, includes: ['면 100% 오버핏', '뒷면 PALMATE 로고'],
  },
];

export default function ShopPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">

      {/* Header */}
      <div className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/member" className="hidden md:block text-xs text-zinc-500 hover:text-white transition">← 홈</Link>
            <h1 className="text-lg font-black tracking-tight text-yellow-400">Pledge Shop</h1>
          </div>
          <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
            <span className="text-[10px] text-zinc-400 font-bold">MY</span>
            <span className="text-xs font-black text-yellow-400 font-mono">1,000 P</span>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-5 md:px-8 py-5">

        {/* Pledge Banner */}
        <div className="mb-6 p-4 bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-transparent border border-yellow-400/20 rounded-2xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xl">🎫</span>
            <div>
              <h2 className="text-base font-bold">굿즈를 사면 Pledge가!</h2>
              <p className="text-xs text-zinc-400">모든 상품 구매 시 Pledge(투표권)가 함께 지급됩니다</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-zinc-500 mt-2 pl-9">
            <span>KAVE 투표 참여</span>
            <span className="text-zinc-700">|</span>
            <span>콘서트 선예매</span>
            <span className="text-zinc-700">|</span>
            <span>포토카드 교환</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.map((product) => (
            <div key={product.id} className={`rounded-2xl border bg-zinc-900/30 overflow-hidden transition-all hover:border-yellow-400/30 ${product.highlight ? 'border-yellow-400/40' : 'border-zinc-800/60'}`}>

              {/* Image */}
              <div className="relative aspect-[4/3] bg-zinc-800 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                {/* Pledge Badge - 크게 표시 */}
                <div className="absolute bottom-3 right-3 bg-yellow-400 text-black px-2.5 py-1 rounded-lg shadow-lg flex items-center gap-1">
                  <span className="text-[10px]">🎫</span>
                  <span className="text-xs font-black font-mono">+{product.pledgeAmount.toLocaleString()} P</span>
                </div>
                {product.badge && (
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-zinc-900/80 backdrop-blur text-white text-[10px] font-bold rounded-lg border border-zinc-700">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1">{product.name}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-lg font-bold text-white">${product.price}</span>
                  <span className="text-zinc-500 text-xs">(₩{product.priceKRW.toLocaleString()})</span>
                  <span className="text-[10px] text-zinc-600 ml-auto">{product.stock}</span>
                </div>

                {/* Pledge reward highlight */}
                <div className="flex items-center gap-2 p-2 bg-yellow-400/5 border border-yellow-400/15 rounded-lg mb-3">
                  <span className="text-sm">🎫</span>
                  <div className="flex-1">
                    <span className="text-[10px] text-zinc-400">구매 시 </span>
                    <span className="text-xs font-bold text-yellow-400">{product.pledgeAmount.toLocaleString()} Pledge</span>
                    <span className="text-[10px] text-zinc-400"> 즉시 지급</span>
                  </div>
                </div>

                {/* Toggle detail */}
                <button
                  onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
                  className="text-[11px] text-zinc-500 hover:text-yellow-400 transition mb-3"
                >
                  {expandedId === product.id ? '접기 ↑' : '구성품 보기 ↓'}
                </button>

                {expandedId === product.id && (
                  <div className="mb-3 animate-fade-in-up">
                    <div className="space-y-1.5">
                      {product.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                          <span className="text-yellow-400 text-[10px]">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Link href="/shop/checkout"
                  className={`block text-center w-full py-2.5 rounded-xl transition font-bold text-sm ${
                    product.highlight
                      ? 'bg-yellow-400 hover:bg-yellow-300 text-black'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                  }`}>
                  구매하기
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* How Pledge Works */}
        <div className="mt-10 max-w-2xl mx-auto">
          <h3 className="text-sm font-bold text-zinc-400 text-center mb-4">Pledge는 이렇게 쓸 수 있어요</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: '🗳️', title: '투표', desc: 'BoA 활동 결정에 참여' },
              { icon: '🎤', title: '콘서트 선예매', desc: '일반 예매보다 72시간 먼저' },
              { icon: '🃏', title: '포토카드 교환', desc: '원하는 카드를 교환' },
              { icon: '📚', title: '컬렉션 보상', desc: '풀 컬렉션 시 매월 보상' },
            ].map((item) => (
              <Link href="/kave" key={item.title} className="p-3 bg-zinc-900/40 border border-zinc-800/40 rounded-xl text-center hover:border-yellow-400/30 transition">
                <div className="text-xl mb-1">{item.icon}</div>
                <h4 className="text-xs font-bold mb-0.5">{item.title}</h4>
                <p className="text-[9px] text-zinc-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <div className="pb-24 md:pb-0">
        <BottomNav />
      </div>
    </div>
  );
}
