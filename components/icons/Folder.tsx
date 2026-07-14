
type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgFolder({ className = "", size = "2.5em" }: Props) {
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
        strokeLinejoin="round"
        strokeWidth={2}
        d="M30.832 26.33a3 3 0 0 1-3 3h-16a3 3 0 0 1-3-3v-12.5a3 3 0 0 1 3-3h4.36a3 3 0 0 1 2.526 1.381l.345.538a3 3 0 0 0 2.525 1.381h6.244a3 3 0 0 1 3 3z"
      />
    </svg>
  );
}


