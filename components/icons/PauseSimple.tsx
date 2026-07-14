
type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgPauseSimple({ className = "", size = "2.5em" }: Props) {
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
        strokeWidth={4.191}
        d="M16.205 14.295v12.573M24.587 14.295v12.573"
      />
    </svg>
  );
}
