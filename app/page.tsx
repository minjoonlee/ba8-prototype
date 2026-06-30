const NAV = [
  { label: 'Artist', href: '#artist' },
  { label: 'News', href: '#news' },
  { label: 'Audition', href: '#audition' },
  { label: 'Company', href: '#company' },
];

const BOA = {
  name: 'BoA',
  nameKo: '보아',
  role: 'Singer · Producer',
  avatar: '/boa-main.webp',
  href: 'https://boa.pledge.im',
};

const NEWS = [
  {
    img: '/news-fanconcert.jpg',
    tag: 'FAN CONCERT',
    date: '2026.06.28',
    title: "BoA 첫 공식 팬콘서트 'BoA THE MIC' 성료",
    href: 'https://tvreport.co.kr/music/article/1057697/',
  },
  {
    img: '/news-single.jpg',
    tag: 'NEW SINGLE',
    date: '2026.05.30',
    title: "독립 후 첫 디지털 싱글 'Ain't No Hard Feelings' 발매",
    href: 'https://www.youtube.com/watch?v=YeVCiWLuqYU',
  },
  {
    img: '/news-company.jpg',
    tag: 'COMPANY',
    date: '2026.03.03',
    title: "BoA, 1인 기획사 '베이팔 엔터테인먼트' 설립",
    href: 'https://www.starnewskorea.com/music/2026/03/03/2026030309582729495',
  },
];

const BUSINESS = [
  { t: 'Music Production', d: '음반 기획 · 제작 및 음원 유통' },
  { t: 'Concert & Tour', d: '국내외 공연 · 투어 기획 및 운영' },
  { t: 'IP · MD', d: '아티스트 IP 기반 상품 및 콘텐츠' },
  { t: 'Fan Platform', d: '팬덤 커뮤니티 · 멤버십 플랫폼' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* ===== Nav ===== */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-zinc-950/60 border-b border-white/5">
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-5 h-16">
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/bapal-logo-new.png" alt="BApal" className="w-8 h-8 object-contain" />
            <span
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              BApal
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-[13px] tracking-wide text-zinc-400">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={BOA.href}
            className="rounded-full bg-yellow-400 px-4 py-1.5 text-[12px] font-bold text-black hover:bg-yellow-300 transition-colors"
          >
            BoA KAVE
          </a>
        </nav>
      </header>

      {/* ===== Hero ===== */}
      <section id="top" className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <img
          src="/concert-25th.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/40 to-zinc-950" />
        <div className="relative z-10 flex flex-col items-center text-center px-5">
          <span className="mb-6 text-[11px] tracking-[0.5em] text-yellow-400/80 uppercase">
            Entertainment
          </span>
          <h1
            className="text-6xl md:text-8xl font-bold tracking-tight leading-none"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            BApal
          </h1>
          <p className="mt-6 max-w-md text-sm md:text-base text-zinc-300 leading-relaxed">
            아티스트와 팬이 함께 만들어가는 엔터테인먼트.
            <br className="hidden sm:block" />
            BApal은 음악 그 너머의 경험을 만듭니다.
          </p>
          <p className="mt-3 text-[11px] tracking-[0.3em] text-zinc-500 uppercase">
            Always with our Artists
          </p>
        </div>
        <a
          href="#artist"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </section>

      {/* ===== Artist (BoA) ===== */}
      <section id="artist" className="mx-auto max-w-6xl px-5 py-24 md:py-32 scroll-mt-16">
        <div className="mb-12">
          <p className="text-[11px] tracking-[0.4em] text-yellow-400/80 uppercase mb-3">Artist</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">아티스트</h2>
        </div>

        <a
          href={BOA.href}
          className="group grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/30 hover:border-yellow-400/40 transition-all duration-300"
        >
          <div className="relative aspect-[4/5] sm:aspect-[16/10] md:aspect-auto overflow-hidden">
            <img
              src={BOA.avatar}
              alt={BOA.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold leading-none">
                {BOA.name}
                <span className="ml-3 text-2xl font-normal text-zinc-400">{BOA.nameKo}</span>
              </h3>
              <p className="mt-3 text-[12px] tracking-[0.2em] text-zinc-500 uppercase">{BOA.role}</p>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              2000년 데뷔 이후 아시아를 대표해 온 아티스트 BoA.
              25년간 함께한 SM을 떠나 직접 설립한 베이팔과 함께 새로운 여정을 시작합니다.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-yellow-400">
              KAVE 바로가기
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </div>
        </a>
      </section>

      {/* ===== News ===== */}
      <section id="news" className="border-y border-white/5 bg-zinc-900/20 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <div className="mb-12">
            <p className="text-[11px] tracking-[0.4em] text-yellow-400/80 uppercase mb-3">News</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">소식</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {NEWS.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded bg-black/60 backdrop-blur px-2 py-0.5 text-[10px] font-bold tracking-widest text-yellow-400">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[11px] text-zinc-500 tracking-wide">{item.date}</p>
                  <h3 className="mt-1.5 text-sm font-medium text-zinc-100 leading-snug group-hover:text-white">
                    {item.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Audition ===== */}
      <section id="audition" className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 px-8 py-14 md:px-16 md:py-20 text-black">
            <div className="relative z-10 max-w-xl">
              <p className="text-[11px] tracking-[0.4em] uppercase mb-4 font-bold opacity-70">Audition</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                BApal과 함께할
                <br />
                새로운 아티스트를 찾습니다
              </h2>
              <p className="mt-5 text-sm md:text-base text-black/70 leading-relaxed">
                장르와 국적에 제한 없이, 무대를 꿈꾸는 모든 분들의 지원을 기다립니다.
              </p>
              <a
                href="mailto:audition@bapal.kr"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white hover:bg-zinc-800 transition-colors"
              >
                지원하기
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Company / Business ===== */}
      <section id="company" className="border-t border-white/5 bg-zinc-900/20 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <p className="text-[11px] tracking-[0.4em] text-yellow-400/80 uppercase mb-3">Company</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug">
                회사 소개
              </h2>
              <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                베이팔 엔터테인먼트는 BoA가 직접 설립한 기획사로, 사명은
                &lsquo;BoA&rsquo;와 &lsquo;pal(친구)&rsquo;을 더한 &lsquo;보아와 친구들&rsquo;을 의미합니다.
                아티스트와 팬이 더 가까이 소통하는 구조를 지향합니다.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {BUSINESS.map((b) => (
                <div key={b.t} className="border-t border-zinc-800 pt-4">
                  <h3 className="text-base font-bold">{b.t}</h3>
                  <p className="mt-1.5 text-[13px] text-zinc-500 leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <img src="/bapal-logo-new.png" alt="BApal" className="w-7 h-7 object-contain" />
                <span className="text-base font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                  BApal Entertainment
                </span>
              </div>
              <p className="text-[12px] text-zinc-500 leading-relaxed max-w-xs">
                Always with our Artists.
                <br />
                음악과 팬덤이 만나는 새로운 엔터테인먼트.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-[12px] text-zinc-500">
              <a href="#artist" className="hover:text-white transition-colors">Artist</a>
              <a href="#news" className="hover:text-white transition-colors">News</a>
              <a href="#audition" className="hover:text-white transition-colors">Audition</a>
              <a href="#company" className="hover:text-white transition-colors">Company</a>
              <a href={BOA.href} className="hover:text-white transition-colors">BoA KAVE</a>
              <a href="mailto:contact@bapal.kr" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-[11px] text-zinc-600">© 2026 BApal Entertainment. All rights reserved.</p>
            <p className="text-[11px] text-zinc-600">contact@bapal.kr</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
