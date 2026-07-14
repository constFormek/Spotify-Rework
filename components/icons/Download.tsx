
type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgDownload({ className = "", size = "2.5em" }: Props) {
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
        d="M20.205 15.154v9.863m0 0 3.368-3.368m-3.368 3.367-3.367-3.367"
      />
      <circle
        cx={20.205}
        cy={20.206}
        r={9.261}
        stroke="currentColor"
        strokeWidth={1.684}
      />
    </svg>
  );
}


