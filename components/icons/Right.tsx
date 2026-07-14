type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgRight({ className = "", size = "2.5em" }: Props) {
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
        d="m18.522 25.258 5.05-5.052-5.05-5.05"
      />
    </svg>
  );
}
