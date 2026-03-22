'use client';

import { useState } from 'react';
import Link from 'next/link';

const PRODUCTS = [
  {
    id: 'fankit-gen1',
    name: '1기 PAL 팬키트 (Pledge)',
    price: 40,
    priceKRW: 52000,
    image: '/fankit.jpg',
    badge: '1기 한정',
    stock: '5,000개 한정 / 5월 초 판매',
    includes: [
      'PALMATE STAFF 사원증 (NFC)',
      '박스 캐릭터 키링',
      'Lyrics Stickers',
      'FOUNDING MEMBER 카드',
      'PALMATE 스티커',
      '환영 편지 (BoA 친필 서명)'
    ],
    highlight: true
  },
];

export default function ShopPage() {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (id: string) => {
    setCart([...cart, id]);
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
                BApal Shop
              </h1>
            </Link>
            <div className="relative">
              <button className="w-10 h-10 rounded-full bg-zinc-900/50 border border-zinc-700/40 flex items-center justify-center hover:border-yellow-400/50 transition">
                <span className="text-xl">🛒</span>
              </button>
              {cart.length > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs text-black font-bold">{cart.length}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2">
            <span className="text-sm font-semibold text-yellow-400">🎁 1기 PAL 모집</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            팬키트 구매
          </h1>
          <p className="text-zinc-400">
            Pledge를 획득하고 KAVE에 입장하세요<br />
            <span className="text-sm text-zinc-500">5월 초 판매 시작 / 5,000개 한정</span>
          </p>
        </div>

        {/* Products Grid */}
        <div className="max-w-4xl mx-auto">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className={`bg-zinc-900/30 border-2 rounded-3xl overflow-hidden transition ${
                product.highlight
                  ? 'border-yellow-400/40 shadow-2xl shadow-yellow-400/20'
                  : 'border-zinc-800/50 hover:border-yellow-400/30'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image */}
                <div className="relative aspect-square bg-zinc-900/50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4 px-4 py-2 bg-yellow-400 text-black text-sm font-bold rounded-full shadow-lg">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-2xl mb-3">{product.name}</h3>
                      <div className="flex items-baseline gap-3">
                        <div className="text-4xl font-bold text-yellow-400">
                          ${product.price}
                        </div>
                        <div className="text-lg text-zinc-500">
                          (₩{product.priceKRW?.toLocaleString()})
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-xl">
                      <div className="text-sm text-yellow-400 font-semibold mb-1">판매 일정</div>
                      <div className="text-xs text-zinc-400">{product.stock}</div>
                    </div>

                    {/* Includes */}
                    <div>
                      <div className="text-sm font-semibold mb-3 text-zinc-300">구성품</div>
                      <div className="space-y-2">
                        {product.includes.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                            <div className="w-5 h-5 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center flex-shrink-0">
                              <span className="text-yellow-400 text-xs">✓</span>
                            </div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mt-6">
                    <button
                      onClick={() => addToCart(product.id)}
                      className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-black rounded-xl transition font-bold shadow-lg shadow-yellow-400/20"
                    >
                      사전 알림 신청
                    </button>
                    <p className="text-xs text-center text-zinc-500">
                      5월 초 판매 시작 시 이메일로 알려드립니다
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pledge Info */}
        <div className="mt-16 max-w-3xl mx-auto space-y-6">
          <div className="p-6 bg-gradient-to-br from-yellow-400/10 to-amber-400/5 border border-yellow-400/30 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎫</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Pledge란?</h3>
                <p className="text-sm text-zinc-400 mb-3">
                  팬키트를 구매하면 NFC/QR 사원증에 고유 번호가 부여됩니다.<br />
                  이것이 바로 당신의 <span className="text-yellow-400 font-semibold">Pledge</span>입니다.
                </p>
                <div className="space-y-2 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>KAVE 입장권</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>투표권 (1 Pledge = 1 Vote)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>독점 콘텐츠 열람권</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-zinc-900/30 border border-zinc-800/30 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">인증 방법</h3>
                <p className="text-sm text-zinc-400 mb-3">
                  팬키트 수령 후 NFC 사원증을 스마트폰에 태그하거나,<br />
                  QR 코드를 스캔하여 KAVE에 입장하세요.
                </p>
                <Link
                  href="/kave"
                  className="inline-block text-sm text-yellow-400 hover:text-yellow-300 transition border-b border-yellow-400/50 hover:border-yellow-300/50 pb-0.5"
                >
                  KAVE 미리보기 →
                </Link>
              </div>
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
              <a href="#" className="hover:text-zinc-400 transition-colors">배송 안내</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">교환/환불</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">고객센터</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
