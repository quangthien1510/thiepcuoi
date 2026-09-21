type Props = {
  className?: string;
};

// Icon nhẫn cưới / hộp nhẫn - thay cho emoji 💍, tông màu đồng bộ với thiệp.
export default function RingBoxIcon({ className = "h-10 w-10" }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ringGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d8b98a" />
          <stop offset="100%" stopColor="var(--color-gold)" />
        </linearGradient>
      </defs>

      {/* bóng đổ */}
      <ellipse cx="100" cy="168" rx="60" ry="8" fill="var(--color-maroon)" opacity="0.1" />

      {/* gối nhung đặt nhẫn */}
      <path
        d="M46 140 C46 122 62 110 100 110 C138 110 154 122 154 140 L150 156 C148 162 142 166 136 166 L64 166 C58 166 52 162 50 156 Z"
        fill="var(--color-rose)"
        opacity="0.35"
      />
      <ellipse cx="100" cy="112" rx="54" ry="14" fill="var(--color-rose)" opacity="0.5" />

      {/* nhẫn trái */}
      <g transform="translate(76 92)">
        <circle cx="0" cy="0" r="26" fill="none" stroke="url(#ringGold)" strokeWidth="8" />
        <path d="M-6 -22 L0 -34 L6 -22 Z" fill="#fdf3ee" stroke="var(--color-gold)" strokeWidth="1.5" />
      </g>

      {/* nhẫn phải */}
      <g transform="translate(124 92)">
        <circle cx="0" cy="0" r="26" fill="none" stroke="url(#ringGold)" strokeWidth="8" />
        <path d="M-6 -22 L0 -34 L6 -22 Z" fill="var(--color-pink)" stroke="var(--color-gold)" strokeWidth="1.5" />
      </g>

      {/* tia lấp lánh */}
      <g fill="var(--color-gold)" opacity="0.85">
        <path d="M46 56 L48 64 L56 66 L48 68 L46 76 L44 68 L36 66 L44 64 Z" />
        <path d="M158 70 L159.5 76 L166 78 L159.5 80 L158 86 L156.5 80 L150 78 L156.5 76 Z" />
      </g>
    </svg>
  );
}
