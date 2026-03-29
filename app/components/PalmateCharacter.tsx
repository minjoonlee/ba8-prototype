'use client';

export default function PalmateCharacter({ className = "w-32 h-32", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`relative flex items-center justify-center animate-float-slow ${className}`} style={style}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)]">
        
        {/* Left Arm (Behind Body now) */}
        <path d="M 26 60 L 16 75" stroke="#3A2411" strokeWidth="16" strokeLinecap="round" />
        <path d="M 26 60 L 16 75" stroke="#C99B6A" strokeWidth="10" strokeLinecap="round" />
        
        {/* Right Arm (Behind Body now) */}
        <path d="M 74 60 L 84 75" stroke="#3A2411" strokeWidth="16" strokeLinecap="round" />
        <path d="M 74 60 L 84 75" stroke="#C99B6A" strokeWidth="10" strokeLinecap="round" />

        {/* Left Leg (Thicker, Behind Body) */}
        <path d="M 36 80 L 36 88" stroke="#3A2411" strokeWidth="15" strokeLinecap="round" />
        <path d="M 36 80 L 36 88" stroke="#C99B6A" strokeWidth="9" strokeLinecap="round" />
        
        {/* Right Leg (Thicker, Behind Body) */}
        <path d="M 64 80 L 64 88" stroke="#3A2411" strokeWidth="15" strokeLinecap="round" />
        <path d="M 64 80 L 64 88" stroke="#C99B6A" strokeWidth="9" strokeLinecap="round" />

        {/* Body (Slightly Thinner, In front of Arms/Legs) */}
        <path d="M 28 55 L 72 55 L 76 80 L 24 80 Z" fill="#C99B6A" stroke="#3A2411" strokeWidth="3" strokeLinejoin="round"/>

        {/* Heart on chest */}
        <path d="M50 74 C 50 74 42 67 45 61 C 47 57 50 62 50 62 C 50 62 53 57 55 61 C 58 67 50 74 50 74 Z" fill="#FACC15" stroke="#3A2411" strokeWidth="1.5" strokeLinejoin="round"/>

        {/* Paper Bag Head with Jagged Bottom */}
        <path d="
          M24 16 
          L76 16 
          L86 64
          L76 56
          L66 64
          L58 56
          L50 64
          L42 56
          L34 64
          L24 56
          L14 64
          Z" 
          fill="#D2A679" stroke="#3A2411" strokeWidth="3" strokeLinejoin="round"/>

        {/* Top Rim */}
        <path d="M24 16 L76 16 L72 10 L28 10 Z" fill="#B38659" stroke="#3A2411" strokeWidth="2" strokeLinejoin="round"/>

        {/* Eyes (Original shiny style) */}
        <ellipse cx="38" cy="40" rx="5" ry="9" fill="#1A1A1A" className="animate-pulse"/>
        <ellipse cx="62" cy="40" rx="5" ry="9" fill="#1A1A1A" className="animate-pulse"/>
        
        {/* Eye Highlights (Cute feel) */}
        <ellipse cx="36" cy="37" rx="1.5" ry="2.5" fill="white" />
        <ellipse cx="60" cy="37" rx="1.5" ry="2.5" fill="white" />
        
      </svg>
    </div>
  );
}
