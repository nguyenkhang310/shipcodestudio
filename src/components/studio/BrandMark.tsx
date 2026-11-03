import { brandLogo } from "@/lib/brand";

export function BrandMark({
  size = 40,
  priority = false,
  decorative = false,
}: {
  size?: number;
  priority?: boolean;
  decorative?: boolean;
}) {
  return (
    <img
      src={brandLogo.src}
      srcSet={brandLogo.srcSet}
      sizes={`${size}px`}
      width={size}
      height={size}
      alt={decorative ? "" : "Logo ShipCode"}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
