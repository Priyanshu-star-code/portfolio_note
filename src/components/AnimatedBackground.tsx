import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {/* Shooting Stars with trails */}




      {/* Rising Bubbles */}
      {/* <div className="absolute bottom-0 left-[20%] animate-bubble opacity-60">
        <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-doodle/50 bg-gradient-to-br from-paper/30 to-transparent backdrop-blur-sm" />
      </div>
      <div className="absolute bottom-0 left-[45%] animate-bubble-delayed opacity-50">
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-accent/40 bg-gradient-to-br from-paper/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-[25%] animate-bubble-slow opacity-55">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-highlight/40 bg-gradient-to-br from-paper/25 to-transparent" />
      </div> */}

      {/* <div className="absolute top-[18%] left-[25%] animate-float-delayed opacity-65">
        <span className="text-xl sm:text-2xl">💡</span>
      </div> */}



      {/* Glitch Code Text */}
      {/* <div className="absolute top-[22%] right-[5%] animate-glitch opacity-55 hidden sm:block">
        <code className="font-mono text-sm text-doodle bg-paper/40 px-2 py-1 rounded backdrop-blur-sm">&lt;code/&gt;</code>
      </div>
      <div className="absolute bottom-[45%] left-[55%] animate-typewriter opacity-50 hidden sm:block">
        <code className="font-mono text-xs text-accent bg-paper/30 px-2 py-1 rounded">creativity++</code>
      </div> */}



      {/* Zigzag Lightning */}


      {/* Wavy Lines */}
      {/* <div className="absolute bottom-[40%] left-0 animate-wave opacity-35 hidden sm:block">
        <svg width="180" height="40" viewBox="0 0 180 40">
          <path d="M0 20 Q20 5 40 20 T80 20 T120 20 T160 20 T200 20"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute top-[60%] right-0 animate-wave-reverse opacity-30 hidden sm:block">
        <svg width="150" height="35" viewBox="0 0 150 35">
          <path d="M0 17 Q18 2 36 17 T72 17 T108 17 T144 17"
            stroke="hsl(var(--doodle))"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round" />
        </svg>
      </div> */}



      {/* Floating Cursor */}
      {/* <div className="absolute top-[58%] left-[75%] animate-cursor opacity-55">
        <svg width="20" height="24" viewBox="0 0 20 24" fill="hsl(var(--ink))">
          <path d="M2 2 L2 18 L7 14 L11 22 L13 21 L9 13 L16 13 Z" />
        </svg>
      </div> */}


      {/* Pixel Art Star */}
      {/* <div className="absolute top-[12%] left-[55%] animate-twinkle opacity-75">
        <svg width="18" height="18" viewBox="0 0 18 18">
          <rect x="8" y="0" width="2" height="2" fill="hsl(var(--highlight))" />
          <rect x="6" y="2" width="2" height="2" fill="hsl(var(--highlight))" />
          <rect x="10" y="2" width="2" height="2" fill="hsl(var(--highlight))" />
          <rect x="0" y="8" width="2" height="2" fill="hsl(var(--highlight))" />
          <rect x="2" y="6" width="2" height="2" fill="hsl(var(--highlight))" />
          <rect x="2" y="10" width="2" height="2" fill="hsl(var(--highlight))" />
          <rect x="16" y="8" width="2" height="2" fill="hsl(var(--highlight))" />
          <rect x="14" y="6" width="2" height="2" fill="hsl(var(--highlight))" />
          <rect x="14" y="10" width="2" height="2" fill="hsl(var(--highlight))" />
          <rect x="8" y="16" width="2" height="2" fill="hsl(var(--highlight))" />
          <rect x="6" y="14" width="2" height="2" fill="hsl(var(--highlight))" />
          <rect x="10" y="14" width="2" height="2" fill="hsl(var(--highlight))" />
          <rect x="8" y="8" width="2" height="2" fill="hsl(var(--accent))" />
        </svg>
      </div> */}

      {/* Paper Airplane Flying */}
      {/* <div className="absolute animate-fly-path opacity-65">
        <svg width="28" height="28" viewBox="0 0 28 28">
          <path d="M2 14 L26 3 L18 14 L26 25 Z"
            fill="hsl(var(--paper))"
            stroke="hsl(var(--ink))"
            strokeWidth="1.5"
            strokeLinejoin="round" />
          <path d="M18 14 L22 20" stroke="hsl(var(--ink))" strokeWidth="1" />
        </svg>
      </div> */}

      {/* Original Stars */}
      {/* <svg
        className="absolute top-[5%] left-[5%] w-6 h-6 sm:w-10 sm:h-10 animate-float opacity-65"
        viewBox="0 0 50 50"
        style={{ animationDelay: '0s' }}
      >
        <path
          d="M25 5 L30 20 L45 25 L30 30 L25 45 L20 30 L5 25 L20 20 Z"
          stroke="hsl(var(--doodle))"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <svg
        className="absolute bottom-[25%] left-[10%] w-5 h-5 sm:w-7 sm:h-7 animate-float opacity-55"
        viewBox="0 0 50 50"
        style={{ animationDelay: '2s' }}
      >
        <path
          d="M25 5 L30 20 L45 25 L30 30 L25 45 L20 30 L5 25 L20 20 Z"
          stroke="hsl(var(--highlight))"
          strokeWidth="2"
          fill="none"
        />
      </svg> */}

      {/* Coffee cup */}
      {/* <svg
        className="absolute bottom-[50%] right-[42%] w-7 h-7 sm:w-9 sm:h-9 opacity-45 animate-float"
        viewBox="0 0 50 50"
        style={{ animationDelay: '2.2s' }}
      >
        <path d="M10 20 L10 40 Q10 45 20 45 L30 45 Q40 45 40 40 L40 20" stroke="hsl(var(--doodle))" strokeWidth="2" fill="none" />
        <path d="M40 25 Q50 25 50 32 Q50 38 40 38" stroke="hsl(var(--doodle))" strokeWidth="2" fill="none" />
        <path d="M18 10 Q20 5 22 10 M25 12 Q27 7 29 12 M32 10 Q34 5 36 10" stroke="hsl(var(--doodle))" strokeWidth="1.5" fill="none" className="animate-steam" />
      </svg> */}

      {/* Code brackets */}
      {/* <svg
        className="absolute top-[62%] left-[48%] w-9 h-7 sm:w-12 sm:h-9 opacity-45 animate-pulse-float"
        viewBox="0 0 60 40"
        style={{ animationDelay: '0.6s' }}
      >
        <path d="M15 5 L5 20 L15 35" stroke="hsl(var(--accent))" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M45 5 L55 20 L45 35" stroke="hsl(var(--accent))" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg> */}

      {/* Heart */}
      {/* <svg
        className="absolute bottom-[38%] left-[22%] w-5 h-5 sm:w-8 sm:h-8 opacity-50 animate-heartbeat"
        viewBox="0 0 50 50"
      >
        <path
          d="M25 40 C10 30 5 20 10 12 C15 5 25 10 25 18 C25 10 35 5 40 12 C45 20 40 30 25 40Z"
          stroke="hsl(var(--highlight))"
          strokeWidth="2"
          fill="none"
        />
      </svg> */}

      {/* Exclamation */}
      {/* <svg
        className="absolute top-[82%] left-[5%] w-4 h-7 sm:w-5 sm:h-9 opacity-45 animate-bounce-slow"
        viewBox="0 0 20 50"
      >
        <path d="M10 5 L10 30" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" />
        <circle cx="10" cy="42" r="3" fill="hsl(var(--accent))" />
      </svg> */}

      {/* Spiral */}
      {/* <svg
        className="absolute top-[50%] right-[22%] w-10 h-10 sm:w-14 sm:h-14 opacity-40 animate-spin-slow"
        viewBox="0 0 50 50"
      >
        <path
          d="M25 25 m0 -15 a15 15 0 1 1 -0.01 0 M25 25 m0 -10 a10 10 0 1 1 -0.01 0 M25 25 m0 -5 a5 5 0 1 1 -0.01 0"
          stroke="hsl(var(--doodle))"
          strokeWidth="1.5"
          fill="none"
        />
      </svg> */}
    </div>
  );
};


export default AnimatedBackground;