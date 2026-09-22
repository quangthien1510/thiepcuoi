type Props = {
  className?: string;
};

// Icon hộp quà minh hoạ (thay cho emoji 🎁) - tông màu kem/hồng/vàng đồng bộ với thiệp.
export default function GiftBoxIcon({ className = "h-16 w-16" }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="giftBoxBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef6ef" />
          <stop offset="100%" stopColor="#cfe1d2" />
        </linearGradient>
        <linearGradient id="giftBoxLid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e1eee3" />
        </linearGradient>
      </defs>

      {/* bóng đổ */}
      <ellipse cx="100" cy="184" rx="58" ry="8" fill="var(--color-maroon)" opacity="0.08" />

      {/* thân hộp */}
      <rect
        x="34"
        y="98"
        width="132"
        height="80"
        rx="22"
        fill="url(#giftBoxBody)"
        stroke="var(--color-rose)"
        strokeOpacity="0.3"
      />

      {/* chấm bi trang trí trên thân hộp */}
      <g fill="var(--color-rose)" opacity="0.4">
        <circle cx="55" cy="132" r="3" />
        <circle cx="78" cy="154" r="2.4" />
        <circle cx="122" cy="130" r="2.4" />
        <circle cx="146" cy="154" r="3" />
        <circle cx="100" cy="162" r="2" />
      </g>

      {/* nắp hộp (hình oval nhìn từ trên) */}
      <ellipse
        cx="100"
        cy="98"
        rx="66"
        ry="16"
        fill="url(#giftBoxLid)"
        stroke="var(--color-rose)"
        strokeOpacity="0.3"
      />

      {/* dải ruy băng ngang + dọc */}
      <rect x="34" y="90" width="132" height="15" fill="#fffaf3" opacity="0.92" />
      <rect x="91" y="34" width="18" height="150" fill="#fffaf3" opacity="0.92" />

      {/* nơ */}
      <g>
        <path d="M92 56 L83 92 L95 84 Z" fill="var(--color-rose)" />
        <path d="M108 56 L117 92 L105 84 Z" fill="var(--color-rose)" />
        <ellipse
          cx="74"
          cy="44"
          rx="27"
          ry="19"
          fill="var(--color-rose)"
          transform="rotate(-20 74 44)"
        />
        <ellipse
          cx="126"
          cy="44"
          rx="27"
          ry="19"
          fill="var(--color-rose)"
          transform="rotate(20 126 44)"
        />
        <ellipse
          cx="80"
          cy="50"
          rx="16"
          ry="11"
          fill="var(--color-pink)"
          transform="rotate(-16 80 50)"
        />
        <ellipse
          cx="120"
          cy="50"
          rx="16"
          ry="11"
          fill="var(--color-pink)"
          transform="rotate(16 120 50)"
        />
        <circle cx="100" cy="50" r="11" fill="var(--color-gold)" />
        <circle cx="100" cy="50" r="5.5" fill="#f7fbf7" />
      </g>
    </svg>
  );
}
