
type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgArrowRight({ className = "", size = "2.5em" }: Props) {
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
        strokeWidth={2.021}
        d="M13.47 20.206h14.312m0 0-5.893-5.893m5.893 5.893-5.893 5.893"
      />
    </svg>
  );
}


