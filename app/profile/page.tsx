'use client';

import { useState, useRef } from 'react';
import BottomNav from '../components/BottomNav';
import PalmateCharacter from '../components/PalmateCharacter';
import Link from 'next/link';

const USER_DATA = {
  level: 44,
  exp: 8400,
  nextExp: 10000,
  title: 'Master PALMATE',
  lifetimePledge: 12500,
  pledgeRank: '상위 3%',
  currentPledge: 1000,
};

const PLEDGE_HISTORY = [
  { id: 1, type: 'earn', label: '1기 팬키트 구매', amount: 1000, date: '2024.03.29' },
  { id: 2, type: 'spend', label: '팬클럽 이름 투표 (PALMATE)', amount: -10, date: '2024.04.01' },
  { id: 3, type: 'spend', label: '응원봉 디자인 투표 (A안)', amount: -20, date: '2024.04.03' },
  { id: 4, type: 'earn', label: '랜덤 포토카드 팩 구매', amount: 200, date: '2024.04.05' },
  { id: 5, type: 'spend', label: '팬미팅 도시 투표 (서울)', amount: -50, date: '2024.04.07' },
  { id: 6, type: 'earn', label: '포토카드 팩 구매 x2', amount: 400, date: '2024.04.10' },
  { id: 7, type: 'spend', label: '응원봉 색상 투표', amount: -20, date: '2024.04.12' },
];

const BADGES = [
  { id: 'b1', name: 'Founding', icon: '⭐', acquired: true },
  { id: 'b2', name: 'Fan Kit', icon: '🎁', acquired: true },
  { id: 'b4', name: 'First Vote', icon: '🗳️', acquired: true },
  { id: 'b5', name: 'Welcome', icon: '👋', acquired: true },
  { id: 'b3', name: 'VIP', icon: '🎫', acquired: false },
  { id: 'b6', name: 'Collector', icon: '🛍️', acquired: false },
];

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showPledgeHistory, setShowPledgeHistory] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profile, setProfile] = useState({
    name: '', phone: '', email: '', instagram: '', bio: '',
  });

  const memberNumber = '#0215';
  const pledgeId = 'PAL-001-00215';
  const joinedDate = '2024.01.15';

  const handleChange = (field: string, value: string) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleSave = () => setIsEditing(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'PALMATE Staff Card',
          text: `${profile.name || 'Palmate Staff'} - BoA의 ${memberNumber} 번째 Palmate`,
          url: window.location.href,
        });
      } catch {}
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다!');
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Avatar component shared between card and edit
  const AvatarDisplay = ({ editable = false, size = 'lg' }: { editable?: boolean; size?: 'sm' | 'lg' }) => {
    const s = size === 'lg' ? 'w-20 h-20' : 'w-16 h-16';
    return (
      <div
        onClick={() => editable && isEditing && fileInputRef.current?.click()}
        className={`${s} rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-900 border-2 ${isEditing && editable ? 'border-yellow-400/50 cursor-pointer' : 'border-zinc-600'} flex items-center justify-center overflow-hidden relative transition`}
      >
        {profileImage ? (
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        ) : (
          <PalmateCharacter className={`${size === 'lg' ? 'w-24 h-24' : 'w-20 h-20'} absolute translate-y-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`} />
        )}
        {editable && isEditing && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">

      {/* Header */}
      <div className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/member" className="hidden md:block text-xs text-zinc-500 hover:text-white transition">← 홈</Link>
            <h1 className="text-lg font-bold tracking-tight">MY</h1>
          </div>
          <button
            onClick={() => setShowPreview(true)}
            className="text-xs font-bold px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition"
          >
            명함 미리보기
          </button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-5 md:px-8 py-6">
        <div className="max-w-lg mx-auto md:max-w-none md:flex md:gap-8 md:items-start">

          {/* Main Card - 한 장에 다 */}
          <div className="flex-1 max-w-lg space-y-6">

            {/* Profile Card */}
            <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-2xl border border-zinc-700/50 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-15 bg-gradient-to-tr from-yellow-400 via-pink-500 to-cyan-500"></div>

              {/* Top bar */}
              <div className="flex justify-between items-center px-6 pt-5 relative z-10">
                <div className="font-serif italic font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">PALMATE</div>
                <button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className={`text-[10px] font-bold px-3 py-1 rounded-lg transition ${
                    isEditing
                      ? 'bg-yellow-400 text-black'
                      : 'bg-zinc-800/80 border border-zinc-700 text-zinc-400 hover:text-white'
                  }`}
                >
                  {isEditing ? '저장' : '편집'}
                </button>
              </div>

              {/* Profile Section */}
              <div className="px-6 pt-4 pb-5 relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <AvatarDisplay editable size="lg" />
                  <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                  <div className="flex-1 min-w-0 pt-1">
                    <p className="text-yellow-400 text-xs font-bold mb-0.5">BoA의 {memberNumber} 번째 Palmate</p>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="이름 / 닉네임"
                        className="w-full bg-zinc-800/60 border border-zinc-700 rounded-lg px-3 py-1.5 text-base font-bold text-white placeholder:text-zinc-600 focus:border-yellow-400/50 focus:outline-none transition"
                      />
                    ) : (
                      <h2 className="text-lg font-bold text-white truncate">{profile.name || 'Palmate Staff'}</h2>
                    )}
                    <p className="text-[10px] text-zinc-500 font-mono mt-1">Since {joinedDate}</p>

                    {/* Level + Title inline */}
                    <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                      <span className="text-[10px] font-black text-yellow-400 bg-yellow-400/15 border border-yellow-400/30 rounded-full px-2 py-0.5 font-mono">Lv.{USER_DATA.level}</span>
                      <span className="text-[10px] font-bold text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-full px-2 py-0.5">{USER_DATA.title}</span>
                    </div>
                  </div>
                </div>

                {/* Badges - 뱃지 줄 */}
                <div className="flex gap-1.5 mb-4 flex-wrap">
                  {BADGES.filter(b => b.acquired).map((badge) => (
                    <div key={badge.id} className="relative group">
                      <div className="w-9 h-10 relative">
                        <svg viewBox="0 0 36 40" className="w-full h-full">
                          <path d="M18 1L3 7V22C3 32 18 39 18 39C18 39 33 32 33 22V7L18 1Z" fill="url(#shieldFill)" stroke="#FACC15" strokeWidth="1" />
                          <defs>
                            <linearGradient id="shieldFill" x1="18" y1="1" x2="18" y2="39">
                              <stop offset="0%" stopColor="#422006" />
                              <stop offset="100%" stopColor="#1c1917" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center -mt-0.5">
                          <span className="text-sm">{badge.icon}</span>
                        </div>
                      </div>
                      {/* Tooltip */}
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-zinc-800 text-[9px] text-zinc-300 px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
                        {badge.name}
                      </div>
                    </div>
                  ))}
                  {BADGES.filter(b => !b.acquired).map((badge) => (
                    <div key={badge.id} className="w-9 h-10 relative opacity-20 grayscale">
                      <svg viewBox="0 0 36 40" className="w-full h-full">
                        <path d="M18 1L3 7V22C3 32 18 39 18 39C18 39 33 32 33 22V7L18 1Z" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center -mt-0.5">
                        <span className="text-sm">{badge.icon}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pledge */}
                <div
                  onClick={() => setShowPledgeHistory(true)}
                  className="p-3 bg-zinc-900/60 border border-zinc-800/60 rounded-xl cursor-pointer hover:border-yellow-400/30 transition group mb-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-lg">🎫</div>
                      <div>
                        <p className="text-[9px] text-zinc-500">보유 Pledge</p>
                        <p className="text-base font-black text-yellow-400 font-mono">{USER_DATA.currentPledge.toLocaleString()} P</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-[9px] text-zinc-600">랭크 {USER_DATA.pledgeRank}</p>
                        <p className="text-[9px] text-zinc-600">누적 {USER_DATA.lifetimePledge.toLocaleString()} P</p>
                      </div>
                      <span className="text-zinc-600 group-hover:text-zinc-400 transition text-xs">→</span>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2.5 border-t border-zinc-700/50 pt-4">
                  {[
                    { key: 'phone', label: '전화번호', type: 'tel', placeholder: '010-0000-0000', icon: (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    )},
                    { key: 'email', label: '이메일', type: 'email', placeholder: 'example@email.com', icon: (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    )},
                    { key: 'instagram', label: '인스타그램', type: 'text', placeholder: '@username', icon: (
                      <span className="text-xs font-bold">@</span>
                    )},
                    { key: 'bio', label: '한 줄 소개', type: 'text', placeholder: '자기소개를 입력하세요', icon: (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                    )},
                  ].map((field) => (
                    <div key={field.key}>
                      {isEditing ? (
                        <div>
                          <label className="text-[10px] text-zinc-500 mb-1 block">{field.label}</label>
                          <input
                            type={field.type}
                            value={profile[field.key as keyof typeof profile]}
                            onChange={(e) => handleChange(field.key, e.target.value)}
                            placeholder={field.placeholder}
                            className="w-full bg-zinc-800/60 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-yellow-400/50 focus:outline-none transition"
                          />
                        </div>
                      ) : (
                        profile[field.key as keyof typeof profile] ? (
                          <div className="flex items-center gap-2 text-xs text-zinc-400">
                            {field.icon}
                            <span>{profile[field.key as keyof typeof profile]}</span>
                          </div>
                        ) : null
                      )}
                    </div>
                  ))}
                  {!isEditing && !profile.phone && !profile.email && !profile.instagram && !profile.bio && (
                    <p className="text-xs text-zinc-600 italic">편집을 눌러 연락처를 입력하세요</p>
                  )}
                </div>

                {/* Bottom: Pledge ID */}
                <div className="mt-4 pt-3 border-t border-zinc-700/50 flex justify-between items-end">
                  <div>
                    <p className="text-[9px] text-zinc-600">PLEDGE ID</p>
                    <p className="text-xs font-mono text-zinc-400 tracking-widest">{pledgeId}</p>
                  </div>
                  <div className="flex gap-0.5">
                    <div className="w-1 h-3.5 bg-yellow-600/40 rounded-full"></div>
                    <div className="w-1 h-3.5 bg-yellow-600/40 rounded-full"></div>
                    <div className="w-1 h-3.5 bg-yellow-600/40 rounded-full"></div>
                    <div className="w-1 h-3.5 bg-yellow-600/40 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Edit hint */}
            {isEditing && profileImage && (
              <button onClick={() => setProfileImage(null)} className="text-xs text-red-400 hover:text-red-300 transition">
                프로필 사진 삭제
              </button>
            )}

            {/* Info note */}
            <div className="p-4 bg-zinc-900/30 border border-zinc-800/40 rounded-xl">
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                이 카드는 NFC 태그 시 상대방에게 표시됩니다. 명함처럼 활용할 수 있으며, 공개하고 싶지 않은 정보는 비워두세요.
              </p>
            </div>
          </div>

          {/* Desktop: Level progress sidebar */}
          <aside className="hidden md:block w-72 lg:w-80 sticky top-[65px] space-y-4">
            <div className="p-4 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-zinc-400">레벨 진행</span>
                <span className="text-xs text-yellow-400 font-mono font-bold">Lv.{USER_DATA.level}</span>
              </div>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full" style={{ width: `${(USER_DATA.exp / USER_DATA.nextExp) * 100}%` }}></div>
              </div>
              <p className="text-[10px] text-zinc-500 font-mono text-right">{USER_DATA.exp.toLocaleString()} / {USER_DATA.nextExp.toLocaleString()} EXP</p>
            </div>

            <div className="p-4 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl">
              <h3 className="text-xs font-bold text-zinc-400 mb-3">바로가기</h3>
              <div className="space-y-2">
                <Link href="/kave" className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-800/50 transition text-sm">
                  🗳️ <span>KAVE 투표</span>
                </Link>
                <Link href="/shop" className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-800/50 transition text-sm">
                  🛍️ <span>Pledge 충전 (Shop)</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-5" onClick={() => setShowPreview(false)}>
          <div className="w-full max-w-sm animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <p className="text-center text-xs text-zinc-400 mb-3">상대방에게 이렇게 보입니다</p>

            {/* Preview version of card (non-editable) */}
            <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-2xl border border-zinc-700/50 p-6 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-15 bg-gradient-to-tr from-yellow-400 via-pink-500 to-cyan-500"></div>
              <div className="flex justify-between items-start mb-5 relative z-10">
                <div className="font-serif italic font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">PALMATE</div>
                <div className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Staff ID</div>
              </div>
              <div className="flex items-center gap-4 relative z-10 mb-3">
                <AvatarDisplay size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-yellow-400 text-xs font-bold">BoA의 {memberNumber} 번째 Palmate</p>
                  <h2 className="text-lg font-bold text-white truncate">{profile.name || 'Palmate Staff'}</h2>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-[10px] font-black text-yellow-400 bg-yellow-400/15 border border-yellow-400/30 rounded-full px-2 py-0.5 font-mono">Lv.{USER_DATA.level}</span>
                    <span className="text-[10px] font-bold text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-full px-2 py-0.5">{USER_DATA.title}</span>
                  </div>
                </div>
              </div>
              {/* Badges in preview */}
              <div className="flex gap-1 mb-3 relative z-10">
                {BADGES.filter(b => b.acquired).map((badge) => (
                  <div key={badge.id} className="w-7 h-8 relative">
                    <svg viewBox="0 0 36 40" className="w-full h-full">
                      <path d="M18 1L3 7V22C3 32 18 39 18 39C18 39 33 32 33 22V7L18 1Z" fill="#422006" stroke="#FACC15" strokeWidth="1" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center -mt-0.5">
                      <span className="text-[10px]">{badge.icon}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative z-10 space-y-2 border-t border-zinc-700/50 pt-3">
                {profile.email && <div className="flex items-center gap-2 text-xs text-zinc-400"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><span>{profile.email}</span></div>}
                {profile.phone && <div className="flex items-center gap-2 text-xs text-zinc-400"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span>{profile.phone}</span></div>}
                {profile.instagram && <div className="flex items-center gap-2 text-xs text-zinc-400"><span className="text-xs font-bold">@</span><span>{profile.instagram}</span></div>}
                {profile.bio && <p className="text-xs text-zinc-400 italic">{profile.bio}</p>}
                {!profile.email && !profile.phone && !profile.instagram && <p className="text-xs text-zinc-600 italic">연락처 미등록</p>}
              </div>
              <div className="relative z-10 mt-3 pt-3 border-t border-zinc-700/50 flex justify-between items-end">
                <div><p className="text-[9px] text-zinc-600">PLEDGE ID</p><p className="text-xs font-mono text-zinc-400 tracking-widest">{pledgeId}</p></div>
                <div className="flex gap-0.5"><div className="w-1 h-3 bg-yellow-600/40 rounded-full"></div><div className="w-1 h-3 bg-yellow-600/40 rounded-full"></div><div className="w-1 h-3 bg-yellow-600/40 rounded-full"></div><div className="w-1 h-3 bg-yellow-600/40 rounded-full"></div></div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={handleShare}
                className="flex-1 py-3 bg-yellow-400 hover:bg-yellow-300 text-black rounded-xl text-sm font-bold transition flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                공유하기
              </button>
              <button onClick={() => setShowPreview(false)} className="flex-1 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-sm font-bold transition">
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pledge History Modal */}
      {showPledgeHistory && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end md:items-center justify-center" onClick={() => setShowPledgeHistory(false)}>
          <div className="w-full max-w-md bg-zinc-900 rounded-t-2xl md:rounded-2xl border border-zinc-800 animate-fade-in-up max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between flex-shrink-0">
              <div>
                <h3 className="font-bold text-sm">Pledge 내역</h3>
                <p className="text-[10px] text-zinc-500">획득 및 사용 히스토리</p>
              </div>
              <button onClick={() => setShowPledgeHistory(false)} className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition">
                <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="overflow-y-auto flex-1 px-5 py-3">
              <div className="space-y-1">
                {PLEDGE_HISTORY.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-3 border-b border-zinc-800/50 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        item.type === 'earn' ? 'bg-yellow-400/10 text-yellow-400' : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        {item.type === 'earn' ? (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0-16l-4 4m4-4l4 4" /></svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20V4m0 16l-4-4m4 4l4-4" /></svg>
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-zinc-200">{item.label}</p>
                        <p className="text-[10px] text-zinc-600">{item.date}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-bold font-mono ${item.type === 'earn' ? 'text-yellow-400' : 'text-zinc-400'}`}>
                      {item.amount > 0 ? '+' : ''}{item.amount.toLocaleString()} P
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-5 py-3 border-t border-zinc-800 flex-shrink-0 flex items-center justify-between">
              <span className="text-xs text-zinc-500">현재 잔액</span>
              <span className="text-lg font-black text-yellow-400 font-mono">{USER_DATA.currentPledge.toLocaleString()} P</span>
            </div>
          </div>
        </div>
      )}

      <div className="pb-24 md:pb-0">
        <BottomNav />
      </div>
    </div>
  );
}
