type OrnamentProps = {
  className?: string;
  variant?: "diamond" | "fleuron" | "bar";
};

export function Ornament({ className = "", variant = "diamond" }: OrnamentProps) {
  if (variant === "fleuron") {
    return (
      <svg
        viewBox="0 0 60 24"
        aria-hidden="true"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M0 12 H22" strokeLinecap="round" />
        <path d="M38 12 H60" strokeLinecap="round" />
        <path d="M30 4 C 26 8 26 16 30 20 C 34 16 34 8 30 4 Z" />
        <circle cx="30" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (variant === "bar") {
    return (
      <svg
        viewBox="0 0 80 8"
        aria-hidden="true"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M0 4 H32" />
        <circle cx="40" cy="4" r="1.6" fill="currentColor" stroke="none" />
        <path d="M48 4 H80" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 60 14"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M0 7 H24" strokeLinecap="round" />
      <path d="M36 7 H60" strokeLinecap="round" />
      <path d="M30 1 L34 7 L30 13 L26 7 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
