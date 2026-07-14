type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgMove({ className = "", size = "2.5em" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 41 41"
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M11.076 14.08h18M11.076 20.08h18M11.076 26.08h18"
      />
    </svg>
  );
}
