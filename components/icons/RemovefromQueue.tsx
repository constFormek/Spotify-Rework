type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgRemovefromQueue({
  className = "",
  size = "2.5em",
}: Props) {
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
        d="M11.787 23.012h16.837M11.787 28.623h16.837"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="m17.693 12.64 2.539 2.54m2.539 2.538-2.539-2.538m0 0 2.539-2.54m-2.539 2.54-2.539 2.538"
      />
    </svg>
  );
}
