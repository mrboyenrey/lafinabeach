// Lightweight inline SVG icon set (no external icon dependency required).

const paths = {
  pool: (
    <>
      <path d="M2 18h20" />
      <path d="M4 18v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
      <path d="M6 8V6.5a2 2 0 0 1 2-2" />
      <path d="M12 8V4.5" />
      <path d="M18 8V6.5a2 2 0 0 0-2-2" />
    </>
  ),
  beach: (
    <>
      <path d="M12 3c3 2 5 5 5 8a5 5 0 0 1-10 0c0-3 2-6 5-8Z" />
      <path d="M3 21h18" />
      <path d="M6 21c0-3 2-4 2-6M18 21c0-3-2-4-2-6" />
    </>
  ),
  spa: (
    <>
      <path d="M4 18c0-5 3-8 8-9-1 6-4 9-8 9Z" />
      <path d="M20 18c0-5-3-8-8-9 1 6 4 9 8 9Z" />
      <path d="M12 9c0-3 2-5 4-6" />
    </>
  ),
  dining: (
    <>
      <path d="M4 3h16" />
      <path d="M6 3v8a4 4 0 0 0 8 0V3" />
      <path d="M18 3c0 5-2 6-4 6" />
      <path d="M4 21h16" />
    </>
  ),
  wifi: (
    <>
      <path d="M2.5 9.5A15 15 0 0 1 21.5 9.5" />
      <path d="M5.5 13A10 10 0 0 1 18.5 13" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <path d="M12 20h.01" />
    </>
  ),
  gym: (
    <>
      <path d="M6.5 6.5 17.5 17.5" />
      <path d="M21 21l-1-1M3 3l1 1" />
      <path d="M18 22l4-4" />
      <path d="M2 6l4-4" />
      <path d="M3 10l7-7" />
      <path d="M14 21l7-7" />
    </>
  ),
  star: (
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
  ),
  facebook: (
    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.5-1.5h1.4V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.3v3h2.4v7h2.8Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" />
    </>
  ),
  twitter: (
    <path d="M4 4l7.1 9.3L4.4 20h2.3l5.4-5.5L16.5 20H20l-7.4-9.7L18.9 4h-2.3l-4.9 5L8.5 4H4Z" />
  ),
};

export default function Icon({ name, size = 24, strokeWidth = 1.7, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={name === 'star' ? 'currentColor' : 'none'}
      stroke={name === 'star' ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  );
}
