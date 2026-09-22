type Props = {
  className?: string;
};

// Icon đôi tay ghép hình trái tim - thay cho emoji 🤝/🫶, tông màu đồng bộ với thiệp.
export default function HeartHandsIcon({ className = "h-10 w-10" }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skinLeft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6ede1" />
          <stop offset="100%" stopColor="#e3c9bd" />
        </linearGradient>
        <linearGradient id="skinRight" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6ede1" />
          <stop offset="100%" stopColor="#e3c9bd" />
        </linearGradient>
      </defs>

      {/* bóng đổ */}
      <ellipse cx="100" cy="168" rx="50" ry="8" fill="var(--color-maroon)" opacity="0.1" />

      {/* bàn tay trái - nửa trái tim */}
      <path
        d="M100 150
           C70 150 44 128 40 100
           C38 84 46 70 60 66
           C70 63 80 67 86 78
           C90 66 100 60 100 60
           Z"
        fill="url(#skinLeft)"
        stroke="var(--color-rose)"
        strokeOpacity="0.3"
      />
      {/* ngón tay trái */}
      <g fill="url(#skinLeft)" stroke="var(--color-rose)" strokeOpacity="0.25">
        <rect x="34" y="86" width="14" height="34" rx="7" transform="rotate(-18 34 86)" />
        <rect x="42" y="70" width="13" height="36" rx="6.5" transform="rotate(-8 42 70)" />
        <rect x="55" y="60" width="13" height="38" rx="6.5" />
        <rect x="68" y="62" width="13" height="34" rx="6.5" transform="rotate(10 68 62)" />
      </g>

      {/* bàn tay phải - nửa trái tim */}
      <path
        d="M100 150
           C130 150 156 128 160 100
           C162 84 154 70 140 66
           C130 63 120 67 114 78
           C110 66 100 60 100 60
           Z"
        fill="url(#skinRight)"
        stroke="var(--color-rose)"
        strokeOpacity="0.3"
      />
      {/* ngón tay phải */}
      <g fill="url(#skinRight)" stroke="var(--color-rose)" strokeOpacity="0.25">
        <rect x="152" y="86" width="14" height="34" rx="7" transform="rotate(18 152 86)" />
        <rect x="145" y="70" width="13" height="36" rx="6.5" transform="rotate(8 145 70)" />
        <rect x="132" y="60" width="13" height="38" rx="6.5" />
        <rect x="119" y="62" width="13" height="34" rx="6.5" transform="rotate(-10 119 62)" />
      </g>

      {/* trái tim nhỏ ở giữa nơi hai tay chạm nhau */}
      <path
        d="M100 96
           C96 90 88 90 85 96
           C82 102 88 108 100 116
           C112 108 118 102 115 96
           C112 90 104 90 100 96 Z"
        fill="var(--color-pink)"
      />
    </svg>
  );
}
