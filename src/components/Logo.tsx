interface LogoProps {
  size?: number;
}

export default function Logo({ size = 34 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MINDRA logo"
    >
      <path
        d="M30 28 Q22 28 22 36 L22 70 Q22 78 30 78 L34 78 L50 50 Z"
        fill="#4F7DF7"
      />
      <path
        d="M70 28 Q78 28 78 36 L78 70 Q78 78 70 78 L66 78 L50 50 Z"
        fill="#00E5A0"
      />
      <path
        d="M34 78 L50 50 L50 78 Z"
        fill="#4F7DF7"
        fillOpacity="0.7"
      />
      <path
        d="M66 78 L50 50 L50 78 Z"
        fill="#00E5A0"
        fillOpacity="0.7"
      />
    </svg>
  );
}
