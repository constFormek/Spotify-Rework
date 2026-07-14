type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgRadio({ className = "", size = "2.5em" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 41 41"
      className={className}
    >
      <circle cx={20.205} cy={20.207} r={1.964} fill="currentColor" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.964}
        d="M23.605 15.72a5.45 5.45 0 0 1 2.057 4.27 5.45 5.45 0 0 1-2.057 4.268m-6.8 0a5.45 5.45 0 0 1-2.056-4.269c0-1.642.725-3.114 1.872-4.114M26.325 12.35a9.73 9.73 0 0 1 3.703 7.639 9.73 9.73 0 0 1-3.703 7.64m-12.24 0a9.728 9.728 0 0 1-.332-15.003"
      />
    </svg>
  );
}
