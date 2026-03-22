'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfileSettingsPage() {
  const [profile, setProfile] = useState({
    id: 'PAL-001-00215',
    type: 'founding',
    nickname: 'PAL Mate #215',
    name: '홍길동',
    memberSince: '2024.01',
    email: 'pal215@example.com',
    instagram: '@pal_215',
    twitter: '',
    bio: 'BoA 팬 since 2000 💛\nFounding Member',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  });

  const [publicFields, setPublicFields] = useState<string[]>([
    'nickname',
    'memberSince',
    'instagram',
    'bio'
  ]);

  const togglePublic = (field: string) => {
    if (publicFields.includes(field)) {
      setPublicFields(publicFields.filter(f => f !== field));
    } else {
      setPublicFields([...publicFields, field]);
    }
  };

  const fields = [
    { id: 'nickname', label: '닉네임', value: profile.nickname, locked: true },
    { id: 'name', label: '실명', value: profile.name, locked: false },
    { id: 'memberSince', label: '가입일', value: profile.memberSince, locked: true },
    { id: 'email', label: '이메일', value: profile.email, locked: false },
    { id: 'instagram', label: '인스타그램', value: profile.instagram, locked: false },
    { id: 'twitter', label: '트위터', value: profile.twitter, locked: false },
    { id: 'bio', label: '자기소개', value: profile.bio, locked: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800/40 backdrop-blur-md bg-black/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/kave" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-700/40 flex items-center justify-center shadow-lg">
                <img src="/bapal-logo.jpg" alt="BApal" className="w-7 h-7 rounded-full object-cover" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  프로필 설정
                </h1>
                <p className="text-[10px] text-zinc-500">공개 정보 관리</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Preview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">명함 미리보기</h2>
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-zinc-700/50 flex-shrink-0">
                  <img src={profile.avatar} alt={profile.nickname} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="text-xs bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 px-2 py-1 rounded inline-block mb-2">
                    FOUNDING MEMBER
                  </div>
                  <h3 className="text-xl font-bold">
                    {publicFields.includes('name') ? profile.name : profile.nickname}
                  </h3>
                  {publicFields.includes('memberSince') && (
                    <p className="text-sm text-zinc-500">Member since {profile.memberSince}</p>
                  )}
                </div>
                <Link
                  href={`/card/${profile.id}`}
                  target="_blank"
                  className="text-sm text-yellow-400 hover:text-yellow-300 transition border-b border-yellow-400/50 pb-0.5"
                >
                  전체 보기 →
                </Link>
              </div>
            </div>
          </div>

          {/* Public Settings */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">공개 정보 설정</h2>
            <div className="space-y-3">
              {fields.map((field) => {
                if (!field.value && field.id !== 'name') return null;
                
                const isPublic = publicFields.includes(field.id);
                const isLocked = field.locked;

                return (
                  <div
                    key={field.id}
                    className={`p-4 rounded-xl border transition ${
                      isPublic
                        ? 'bg-yellow-400/5 border-yellow-400/30'
                        : 'bg-zinc-900/30 border-zinc-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold">{field.label}</span>
                          {isLocked && (
                            <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">필수</span>
                          )}
                        </div>
                        <p className="text-sm text-zinc-500 truncate">{field.value || '미설정'}</p>
                      </div>

                      <button
                        onClick={() => !isLocked && togglePublic(field.id)}
                        disabled={isLocked}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                          isLocked
                            ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                            : isPublic
                            ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                            : 'bg-zinc-800 text-white hover:bg-zinc-700'
                        }`}
                      >
                        {isPublic ? '🔓 공개' : '🔒 비공개'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="p-6 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/40 rounded-2xl mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🔐</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">프라이버시 안내</h3>
                <ul className="text-sm text-zinc-400 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">•</span>
                    <span>비공개 정보는 본인만 볼 수 있으며, NFC 태그 시에도 노출되지 않습니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">•</span>
                    <span>닉네임과 가입일은 KAVE 활동을 위해 항상 공개됩니다.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">•</span>
                    <span>실명, 이메일은 기본적으로 비공개이며 원하는 경우에만 공개할 수 있습니다.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Link
              href="/kave"
              className="flex-1 py-3 bg-zinc-800 hover:bg-zinc-700 text-center rounded-xl transition"
            >
              취소
            </Link>
            <button
              onClick={() => alert('설정이 저장되었습니다!')}
              className="flex-1 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl transition"
            >
              저장하기
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
