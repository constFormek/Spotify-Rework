type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgShare({ className = "", size = "2.5em" }: Props) {
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
        d="M20.69 22.016V10.74m0 0-4.643 4.643m4.643-4.643 4.643 4.643m3.648 4.975v4.643a2.653 2.653 0 0 1-2.653 2.653H15.052a2.653 2.653 0 0 1-2.653-2.653v-4.643"
      />
    </svg>
  );
}
