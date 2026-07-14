
type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgAdd({ className = "", size = "2.5em" }: Props) {
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
        strokeLinejoin="round"
        strokeWidth={1.684}
        d="M24.5 20.19h-4.312m-4.312 0h4.312m0 0v-4.313m0 4.313v4.312"
      />
      <circle
        cx={20.206}
        cy={20.206}
        r={9.261}
        stroke="currentColor"
        strokeWidth={1.684}
      />
    </svg>
  );
}

