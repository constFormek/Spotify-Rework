type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgSort({ className = "", size = "2.5em" }: Props) {
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
        d="M26.978 26.805V13.53m0 0-4.643 4.643m4.643-4.643 4.643 4.643M13.978 13.805v13.276m0 0 4.643-4.643m-4.643 4.643-4.643-4.643"
      />
    </svg>
  );
}
