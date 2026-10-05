const LEAF_COUNT = 3;

export default function FallingLeaves() {
  return (
    <div className="falling-leaves" aria-hidden="true">
      {Array.from({ length: LEAF_COUNT }, (_, index) => (
        <svg
          key={index}
          className={`falling-leaves__leaf falling-leaves__leaf--${index + 1}`}
          viewBox="0 0 24 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 1C10 4 2 14 2 29C15 25 23 14 22 1Z"
            fill="currentColor"
          />
          <path
            d="M21 3C16 12 10 20 4 27"
            stroke="var(--leaf-vein)"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );
}
