type Props = {
  className?: string;
};

// Icon cổng hoa / bó hoa đón khách - thay cho emoji 💐, tông màu đồng bộ với thiệp.
export default function FlowerArchIcon({ className = "h-10 w-10" }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* bóng đổ */}
      <ellipse cx="100" cy="176" rx="46" ry="7" fill="var(--color-maroon)" opacity="0.1" />

      {/* cán bó hoa */}
      <path
        d="M100 120 L100 168"
        stroke="var(--color-gold)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M86 138 L100 130 L114 138"
        stroke="var(--color-gold)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      {/* lá xoè */}
      <g fill="var(--color-rose)" opacity="0.5">
        <path d="M100 108 C76 100 58 78 56 52 C82 58 100 78 100 108 Z" />
        <path d="M100 108 C124 100 142 78 144 52 C118 58 100 78 100 108 Z" />
      </g>

      {/* cụm hoa chính - các bông tròn xoay quanh tâm */}
      <g>
        <g transform="translate(100 66)">
          <circle cx="0" cy="0" r="15" fill="var(--color-pink)" />
          <circle cx="0" cy="0" r="6" fill="var(--color-gold)" />
        </g>
        <g transform="translate(72 78)">
          <circle cx="0" cy="0" r="12" fill="var(--color-rose)" />
          <circle cx="0" cy="0" r="5" fill="#fff8ef" />
        </g>
        <g transform="translate(128 78)">
          <circle cx="0" cy="0" r="12" fill="var(--color-rose)" />
          <circle cx="0" cy="0" r="5" fill="#fff8ef" />
        </g>
        <g transform="translate(84 100)">
          <circle cx="0" cy="0" r="10" fill="#f6ede1" stroke="var(--color-rose)" strokeOpacity="0.4" />
          <circle cx="0" cy="0" r="4" fill="var(--color-gold)" />
        </g>
        <g transform="translate(116 100)">
          <circle cx="0" cy="0" r="10" fill="#f6ede1" stroke="var(--color-rose)" strokeOpacity="0.4" />
          <circle cx="0" cy="0" r="4" fill="var(--color-gold)" />
        </g>
        <g transform="translate(100 92)">
          <circle cx="0" cy="0" r="13" fill="var(--color-pink)" opacity="0.9" />
          <circle cx="0" cy="0" r="5" fill="#fff8ef" />
        </g>
      </g>

      {/* dây ruy băng quấn cán hoa */}
      <path
        d="M92 128 L108 136 M92 140 L108 148 M92 152 L108 160"
        stroke="#fffaf3"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}
