type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgUp({ className = "", size = "2.5em" }: Props) {
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
        strokeWidth={2.357}
        d="m25.257 21.89-5.052-5.052-5.051 5.051"
      />
    </svg>
  );
}
