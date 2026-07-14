type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgList({ className = "", size = "2.5em" }: Props) {
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
        d="M16.584 14.08h12M11 14.08h1M16.584 20.08h12M11 20.08h1M16.584 26.08h12M11 26.08h1"
      />
    </svg>
  );
}
