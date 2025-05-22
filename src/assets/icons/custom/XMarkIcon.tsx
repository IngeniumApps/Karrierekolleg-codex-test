interface Props {
  className?: string;
  title?: string;
  ariaHidden?: boolean;
}

export default function XMarkIcon({
  className = 'w-6 h-6',
  title = 'Schließen',
  ariaHidden = true,
}: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={ariaHidden}
      role="img"
    >
      <title>{title}</title>
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
