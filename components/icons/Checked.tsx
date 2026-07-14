
type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgChecked({ className = "", size = "2.5em" }: Props) {
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
        strokeWidth={2.02}
        d="m13.081 19.316 5.38 5.38 9.863-9.863"
      />
    </svg>
  );
}


