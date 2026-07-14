type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgVideo({ className = "", size = "2.5em" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 41 41"
      className={className}
    >
      <rect
        width={21}
        height={17}
        stroke="#1ED760"
        strokeLinejoin="round"
        strokeWidth={2}
        rx={4}
        transform="matrix(1 0 0 -1 9.832 29.08)"
      />
      <path
        fill="#1ED760"
        d="M17.832 17.89v5.382a.5.5 0 0 0 .724.447l5.382-2.691a.5.5 0 0 0 0-.894l-5.382-2.692a.5.5 0 0 0-.724.448"
      />
    </svg>
  );
}
