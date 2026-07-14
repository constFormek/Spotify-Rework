
type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgHide({ className = "", size = "2.5em" }: Props) {
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
        strokeWidth={1.684}
        d="M20.205 10.945a9.26 9.26 0 0 1 9.26 9.261c0 2.35-.872 4.493-2.314 6.126a9.24 9.24 0 0 1-6.946 3.135 9.26 9.26 0 0 1 0-18.522Z"
      />
    </svg>
  );
}
