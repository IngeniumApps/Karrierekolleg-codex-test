export default function HeroBackground() {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-[350px] z-0 pointer-events-none"
      viewBox="0 0 1440 350"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Fade-out über alles */}
      <defs>
        <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="90%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="fadeMask">
          <rect width="100%" height="100%" fill="url(#fadeGradient)" />
        </mask>
      </defs>

      <g mask="url(#fadeMask)">
        {/* Welle 1 – GELB – leicht tiefer, aber nicht so tief wie davor */}
        <path
          fill="#f4c94e"
          fillOpacity="0.5"
          d="M0,170L80,164.7C160,159,320,149,480,164.7C640,181,800,223,960,218C1120,213,1280,159,1360,132.7L1440,106V0H0Z"
        />
        {/* Welle 2 – BLAU – bleibt wie gehabt */}
        <path
          fill="#2C6FA0"
          fillOpacity="0.5"
          d="M0,160L100,134.7C200,109,400,89,600,104.7C800,121,1000,163,1200,158C1300,153,1400,129,1440,110L1440,0H0Z"
        />
      </g>
    </svg>
  );
}
