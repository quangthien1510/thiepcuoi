type PhotoPlaceholderProps = {
  label?: string;
  className?: string;
  icon?: string;
  src?: string;
};

export default function PhotoPlaceholder({
  label = "Ảnh cưới",
  className = "",
  icon = "📷",
  src,
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden border border-dashed border-[var(--color-gold)]/50 bg-gradient-to-br from-[#efe2d3] via-[#f6ede1] to-[#e7d3c9] text-[var(--color-maroon)]/70 ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={label || "Ảnh cưới"}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <>
          <span className="text-3xl opacity-70">{icon}</span>
          {label && (
            <span className="font-body text-xs tracking-wide opacity-70">{label}</span>
          )}
        </>
      )}
    </div>
  );
}
