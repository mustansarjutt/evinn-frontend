import Image from "next/image";

export function BrandLogo({
  className = "w-28 sm:w-32",
  sizes = "(min-width: 640px) 128px, 112px",
  preload = false,
}: {
  className?: string;
  sizes?: string;
  preload?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt="EVINN"
      width={923}
      height={180}
      sizes={sizes}
      preload={preload}
      className={`h-auto shrink-0 object-contain ${className}`}
    />
  );
}
