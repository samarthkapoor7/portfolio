/**
 * Line-art icons, monotone via currentColor so they pick up card hover accents.
 */

interface IconProps {
  className?: string;
}

export function DumbbellIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 9v6M9.5 7.5v9M14.5 7.5v9M17.5 9v6M9.5 12h5M4 10.5v3M20 10.5v3" />
    </svg>
  );
}
