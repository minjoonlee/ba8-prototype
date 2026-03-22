# BA8 / BApal 프로토타입

BoA 공식 팬클럽 사이트 프로토타입 - NFC 인증 기반 멤버십 플랫폼

## 프로젝트 개요

- **BA8 / BApal**: BoA Entertainment 공식 팬클럽 사이트
- **로고**: 하트 + B 결합 로고 (BApal 아이덴티티)
- **핵심 기능**: NFC 굿즈 인증 → 멤버 전용 콘텐츠 접근

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (추천)

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 열기

## 페이지 구조

### 1. 랜딩 페이지 (`/`)
- BApal 브랜드 소개
- NFC 태그 시뮬레이션 버튼
- 멤버십 혜택 안내

### 2. 인증 페이지 (`/verify?nfc=BA8-001-00215`)
- NFC ID 검증 프로세스
- 멤버십 정보 표시
- 자동 리다이렉트

### 3. 멤버 페이지 (`/member`)
- PALMATE 전용 대시보드
- 익스클루시브 콘텐츠
- 커뮤니티 기능

## NFC ID 형식

```
BA8-[Generation]-[MemberNumber]

예시:
- BA8-001-00215 (1기 215번 회원)
- BA8-002-01234 (2기 1234번 회원)
```

### 멤버십 등급

- **FOUNDING MEMBER**: 회원번호 1-500 (1기 초기 가입자)
- **BA8 MEMBER**: 일반 멤버

## 디자인 컨셉

- **컬러**: 블랙 / 화이트 / 실버 (미니멀 프리미엄)
- **로고**: 하트 + B 결합 (원형 테두리)
- **타이포**: Georgia 세리프 폰트 (BApal)
- **슬로건**: "Always with BoA"

## 향후 개발 사항

### Phase 1: 프로토타입 (현재)
- ✅ 랜딩 페이지
- ✅ NFC 인증 플로우 시뮬레이션
- ✅ 멤버 대시보드

### Phase 2: 실제 NFC 연동
- [ ] Web NFC API 구현
- [ ] NFC UID → 회원 DB 매칭
- [ ] 실제 멤버십 인증 백엔드

### Phase 3: 콘텐츠 관리
- [ ] CMS 연동 (Sanity/Strapi)
- [ ] 비디오 스트리밍
- [ ] 실시간 라이브 기능

### Phase 4: 커뮤니티
- [ ] 댓글/좋아요 시스템
- [ ] 멤버 간 메시징
- [ ] 이벤트/투표 기능

## 배포

### Vercel (추천)

```bash
vercel deploy
```

### 환경 변수 (추후 필요)

```env
NEXT_PUBLIC_API_URL=https://api.bapal.com
DATABASE_URL=postgresql://...
NFC_ENCRYPTION_KEY=...
```

## 클라이언트 프레젠테이션 팁

1. **랜딩 페이지** → 브랜드 아이덴티티 설명
2. **NFC 버튼 클릭** → 인증 프로세스 시연
3. **멤버 페이지** → 익스클루시브 콘텐츠 하이라이트
4. **탭 전환** → 콘텐츠/커뮤니티 기능 시연

## 라이선스

Proprietary - BApal Entertainment

---

Built with 💛 by witchbox team
