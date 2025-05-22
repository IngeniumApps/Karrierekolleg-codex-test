interface HamburgerIconProps {
  className?: string;
  title?: string;
}

export default function HamburgerIcon({
  className = 'w-6 h-6',
  title = 'Menü öffnen',
}: HamburgerIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
