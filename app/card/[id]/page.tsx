'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Mock database - 실제로는 API에서 가져올 데이터
const MOCK_PROFILES: Record<string, any> = {
  'PAL-000-00001': {
    id: 'PAL-000-00001',
    type: 'artist',
    name: 'BoA',
    role: 'Artist',
    department: 'Artist',
    company: 'BApal Entertainment',
    email: 'contact@bapal.com',
    instagram: '@boakwon',
    twitter: '@BoA_1105',
    youtube: '@BoA',
    bio: '아시아의 별 ⭐\nK-pop Artist since 2000\nAlways with my PALs 💛',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    public: ['name', 'role', 'company', 'instagram', 'twitter', 'youtube', 'bio']
  },
  'PAL-000-00002': {
    id: 'PAL-000-00002',
    type: 'staff',
    name: '이대표',
    role: 'CEO',
    department: 'Management',
    company: 'BApal Entertainment',
    email: 'ceo@bapal.com',
    instagram: '@bapal_official',
    bio: 'Building KAVE for BoA & PALs',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    public: ['name', 'role', 'company', 'instagram', 'bio']
  },
  'PAL-000-00003': {
    id: 'PAL-000-00003',
    type: 'staff',
    name: '김프로',
    role: 'Frontend Developer',
    department: 'Development',
    company: 'BApal Entertainment',
    email: 'kimpro@bapal.com',
    instagram: '@kimpro_dev',
    github: 'github.com/kimpro',
    bio: 'Building KAVE for PALs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    public: ['name', 'role', 'company', 'instagram', 'github', 'bio']
  },
  'PAL-001-00215': {
    id: 'PAL-001-00215',
    type: 'founding',
    nickname: 'PAL Mate #215',
    name: '홍길동',
    memberSince: '2024.01',
    instagram: '@pal_215',
    bio: 'BoA 팬 since 2000 💛\nFounding Member',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    public: ['nickname', 'memberSince', 'instagram', 'bio']
  },
  'PAL-001-00042': {
    id: 'PAL-001-00042',
    type: 'founding',
    nickname: 'PAL Mate #42',
    name: '김팔메',
    memberSince: '2024.01',
    instagram: '@palmate_42',
    twitter: '@pal42',
    bio: 'Always with BoA ⭐\n1기 창립 멤버',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    public: ['nickname', 'memberSince', 'instagram', 'bio']
  }
};

export default function CardPage() {
  const params = useParams();
  const id = params.id as string;
  const [profile, setProfile] = useState<any>(null);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    // Mock: 실제로는 서버에서 프로필 가져오기
    const data = MOCK_PROFILES[id];
    if (data) {
      setProfile(data);
      
      // Mock: 기기 인증 (실제로는 세션/쿠키 확인)
      const storedId = localStorage.getItem('myPalId');
      setIsOwner(storedId === id);
    }
  }, [id]);

  const generateVCard = () => {
    if (!profile) return;

    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${profile.name || profile.nickname}
${profile.company ? `ORG:${profile.company}` : ''}
${profile.role ? `TITLE:${profile.role}` : ''}
${profile.email && profile.public.includes('email') ? `EMAIL:${profile.email}` : ''}
${profile.instagram && profile.public.includes('instagram') ? `URL:https://instagram.com/${profile.instagram.replace('@', '')}` : ''}
${profile.twitter && profile.public.includes('twitter') ? `URL:https://twitter.com/${profile.twitter.replace('@', '')}` : ''}
${profile.youtube && profile.public.includes('youtube') ? `URL:https://youtube.com/${profile.youtube}` : ''}
NOTE:${profile.bio || ''}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profile.name || profile.nickname}.vcf`;
    link.click();
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold mb-2">카드를 찾을 수 없습니다</h1>
          <p className="text-zinc-500 mb-6">유효하지 않은 ID입니다</p>
          <Link href="/" className="text-yellow-400 hover:underline">
            홈으로 돌아가기 →
          </Link>
        </div>
      </div>
    );
  }

  const isArtist = profile.type === 'artist';
  const isStaff = profile.type === 'staff';
  const badgeColor = isArtist 
    ? 'from-pink-400 via-purple-400 to-yellow-400' 
    : isStaff 
    ? 'from-yellow-400 to-amber-500' 
    : 'from-yellow-400 to-yellow-500';
  const badgeText = isArtist ? '⭐ ARTIST' : isStaff ? 'BAPAL STAFF' : 'FOUNDING MEMBER';

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-md mx-auto">
          {/* Owner Notice */}
          {isOwner && (
            <div className="mb-4 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-xl text-sm">
              <div className="flex items-center gap-2 text-yellow-400">
                <span>🔐</span>
                <span className="font-semibold">본인 카드</span>
              </div>
              <p className="text-zinc-400 mt-1 text-xs">
                다른 사람에게는 공개 설정한 정보만 보입니다
              </p>
            </div>
          )}

          {/* Card */}
          <div className={`bg-gradient-to-br from-zinc-900 to-zinc-950 border rounded-3xl overflow-hidden shadow-2xl ${
            isArtist 
              ? 'border-yellow-400/50 shadow-yellow-400/20' 
              : 'border-zinc-800/50'
          }`}>
            {/* Header */}
            <div className={`p-8 text-center border-b border-zinc-800/50 relative ${
              isArtist ? 'bg-gradient-to-b from-yellow-400/5 to-transparent' : ''
            }`}>
              {isArtist && (
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-yellow-500/5"></div>
              )}
              <div className={`relative z-10 inline-flex items-center gap-2 bg-gradient-to-r ${badgeColor} text-black text-xs font-bold px-4 py-1.5 rounded-full mb-6 ${
                isArtist ? 'shadow-lg shadow-yellow-400/30' : ''
              }`}>
                {badgeText}
              </div>

              {/* Avatar */}
              <div className={`relative z-10 w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 shadow-xl ${
                isArtist ? 'border-yellow-400/30 shadow-yellow-400/20' : 'border-zinc-800/50'
              }`}>
                <img
                  src={profile.avatar}
                  alt={profile.name || profile.nickname}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h1 className="relative z-10 text-3xl font-bold mb-2">
                {profile.public.includes('name') ? profile.name : profile.nickname}
              </h1>

              {/* Role/Member Info */}
              {(isArtist || isStaff) && profile.public.includes('role') && (
                <p className="relative z-10 text-lg text-zinc-400 mb-1">{profile.role}</p>
              )}
              {(isArtist || isStaff) && profile.public.includes('company') && (
                <p className="relative z-10 text-sm text-zinc-500">{profile.company}</p>
              )}
              {!isStaff && !isArtist && profile.public.includes('memberSince') && (
                <p className="relative z-10 text-sm text-zinc-500">Member since {profile.memberSince}</p>
              )}
            </div>

            {/* Bio */}
            {profile.public.includes('bio') && profile.bio && (
              <div className="p-6 border-b border-zinc-800/50">
                <p className="text-sm text-zinc-400 text-center whitespace-pre-line leading-relaxed">
                  {profile.bio}
                </p>
              </div>
            )}

            {/* Social Links */}
            <div className="p-6 space-y-3">
              {profile.public.includes('email') && profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 p-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 rounded-xl transition"
                >
                  <span className="text-xl">📧</span>
                  <span className="text-sm">{profile.email}</span>
                </a>
              )}

              {profile.public.includes('instagram') && profile.instagram && (
                <a
                  href={`https://instagram.com/${profile.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 rounded-xl transition"
                >
                  <span className="text-xl">📷</span>
                  <span className="text-sm">{profile.instagram}</span>
                </a>
              )}

              {profile.public.includes('twitter') && profile.twitter && (
                <a
                  href={`https://twitter.com/${profile.twitter.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 rounded-xl transition"
                >
                  <span className="text-xl">𝕏</span>
                  <span className="text-sm">{profile.twitter}</span>
                </a>
              )}

              {profile.public.includes('github') && profile.github && (
                <a
                  href={`https://${profile.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 rounded-xl transition"
                >
                  <span className="text-xl">💻</span>
                  <span className="text-sm">{profile.github}</span>
                </a>
              )}

              {profile.public.includes('youtube') && profile.youtube && (
                <a
                  href={`https://youtube.com/${profile.youtube}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 rounded-xl transition"
                >
                  <span className="text-xl">📺</span>
                  <span className="text-sm">{profile.youtube}</span>
                </a>
              )}
            </div>

            {/* Actions */}
            <div className="p-6 space-y-3">
              <button
                onClick={generateVCard}
                className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl transition shadow-lg shadow-yellow-400/20"
              >
                <span className="flex items-center justify-center gap-2">
                  📇 연락처 저장하기
                </span>
              </button>

              {isOwner && (
                <Link
                  href="/kave/profile"
                  className="block w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white text-center rounded-xl transition text-sm"
                >
                  공개 정보 수정
                </Link>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 pb-6 text-center">
              <div className="text-xs text-zinc-600 mb-2">Card ID</div>
              <div className="text-sm text-zinc-500 font-mono">{profile.id}</div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link href="/" className="text-sm text-zinc-500 hover:text-white transition">
              ← BApal 홈으로
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
