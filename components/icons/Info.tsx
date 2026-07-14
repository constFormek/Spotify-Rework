
type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgInfo({ className = "", size = "2.5em" }: Props) {
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
        d="M20.188 18.576v5.925"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="M20.204 15.107v.038"
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
