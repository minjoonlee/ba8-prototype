'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const tabs = [
    { id: 'member', href: '/member', label: '홈', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
         <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ) },
    { id: 'kave', href: '/kave', label: 'KAVE', icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ) },
    { id: 'shop', href: '/shop', label: '샵', icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ) },
    { id: 'profile', href: '/profile', label: 'MY', icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ) },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 pointer-events-none md:hidden">
      <div className="max-w-md mx-auto h-16 bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 flex justify-between items-center px-5 pointer-events-auto">
        {tabs.map((tab) => {
          const isExactMatch = pathname === tab.href || (tab.id === 'shop' && pathname?.startsWith('/shop'));

          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`flex flex-col items-center gap-1 transition ${isExactMatch ? 'text-yellow-400' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              <div className={isExactMatch ? 'animate-bounce-short' : ''}>
                {tab.icon}
              </div>
              <span className={`text-[10px] ${isExactMatch ? 'font-bold' : 'font-medium'}`}>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
