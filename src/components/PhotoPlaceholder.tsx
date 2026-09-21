import Image from "next/image";

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
        <Image
          src={src}
          alt={label || "Ảnh cưới"}
          fill
          sizes="(max-width: 500px) 100vw, 500px"
          quality={100}
          className="object-cover"
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
