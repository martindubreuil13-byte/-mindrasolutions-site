import Image from "next/image";
/* ──────────────────────────────────────────────────────────────────────
   THE ONE PLACE THE LOGO ASSET IS REFERENCED.
   To ship the final production logo, replace
   src/assets/brand/fold-dimensional.png (transparent PNG/WebP, symbol only,
   tightly cropped) or change this import. Layout never depends on the
   artwork except through its aspect ratio (read from the file itself).
   Current file: dimensional Fold reference render, background removed,
   wordmark cropped off. Temporary, pending the vector master.
   ────────────────────────────────────────────────────────────────────── */
import fold from "@/assets/brand/fold-dimensional.png";

interface FoldMarkProps {
  className?: string;
  sizes:      string;
  priority?:  boolean;
  alt?:       string;
  quality?:   number;
}

export default function FoldMark({ className, sizes, priority, alt = "", quality = 85 }: FoldMarkProps) {
  return (
    <Image
      src={fold}
      alt={alt}
      sizes={sizes}
      priority={priority}
      quality={quality}
      className={className}
      draggable={false}
    />
  );
}
