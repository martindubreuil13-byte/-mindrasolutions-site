import Image from "next/image";
/* The dimensional Fold: MINDRA Logo Asset Package V1.0, approved production
   master (01_Dimensional/PNG/MINDRA_Fold_Dimensional_Symbol_2000w.png, true
   alpha, Sage Metal and Oxidized Copper). Unmodified. Use it large (from
   400 px wide); under 48 px tall use <FoldSimplified />. */
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
