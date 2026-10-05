import Image from "next/image";

const LEAF_COUNT = 4;

export default function FallingLeaves() {
  return (
    <div className="falling-leaves" aria-hidden="true">
      {Array.from({ length: LEAF_COUNT }, (_, index) => (
        <Image
          key={index}
          className={`falling-leaves__leaf falling-leaves__leaf--${index + 1}`}
          src="/images/anhla.webp"
          alt=""
          width={1280}
          height={1280}
          sizes="46px"
        />
      ))}
    </div>
  );
}
