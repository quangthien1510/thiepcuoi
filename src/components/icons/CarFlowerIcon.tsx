type Props = {
  className?: string;
};

// Icon xe hoa rước dâu - thay cho emoji 🚗, tông màu đồng bộ với thiệp.
export default function CarFlowerIcon({ className = "h-10 w-10" }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-rose)" />
          <stop offset="100%" stopColor="var(--color-pink-deep)" />
        </linearGradient>
      </defs>

      {/* bóng đổ */}
      <ellipse cx="100" cy="158" rx="70" ry="8" fill="var(--color-maroon)" opacity="0.1" />

      {/* thân xe */}
      <path
        d="M34 118 C34 100 44 92 62 90 L74 72 C78 66 84 62 92 62 L128 62 C136 62 142 66 146 72 L158 90 C176 92 186 100 186 118 L186 128 C186 134 182 138 176 138 L44 138 C38 138 34 134 34 128 Z"
        fill="url(#carBody)"
        stroke="var(--color-maroon)"
        strokeOpacity="0.15"
      />

      {/* kính xe */}
      <path
        d="M80 74 C82 70 86 68 90 68 L124 68 C129 68 133 71 136 76 L146 90 L74 90 Z"
        fill="#f5faf5"
        opacity="0.85"
      />

      {/* dải ruy băng ngang thân xe */}
      <rect x="34" y="112" width="152" height="10" fill="#fffaf3" opacity="0.9" />

      {/* bánh xe */}
      <circle cx="70" cy="140" r="16" fill="var(--color-maroon-deep)" />
      <circle cx="70" cy="140" r="7" fill="#f5faf5" />
      <circle cx="150" cy="140" r="16" fill="var(--color-maroon-deep)" />
      <circle cx="150" cy="140" r="7" fill="#f5faf5" />

      {/* hoa trang trí nắp capo trước */}
      <g transform="translate(150 78)">
        <circle cx="0" cy="-6" r="7" fill="var(--color-gold)" />
        <circle cx="-7" cy="2" r="7" fill="var(--color-rose)" />
        <circle cx="7" cy="2" r="7" fill="var(--color-rose)" />
        <circle cx="0" cy="6" r="7" fill="var(--color-pink)" />
        <circle cx="0" cy="1" r="5" fill="#fff8ef" />
      </g>

      {/* hoa nhỏ rải rác */}
      <g fill="var(--color-gold)" opacity="0.85">
        <circle cx="56" cy="98" r="3" />
        <circle cx="118" cy="100" r="2.4" />
        <circle cx="168" cy="104" r="3" />
      </g>
    </svg>
  );
}
