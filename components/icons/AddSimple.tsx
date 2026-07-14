
type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgAddSimple({ className = "", size = "2.5em" }: Props) {
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
        d="M20.205 13.061v7.144m0 7.144v-7.144m0 0h-7.143m7.143 0h7.144"
      />
    </svg>
  );
}


