type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgPrev({ className = "", size = "2.5em" }: Props) {
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
        strokeWidth={2.526}
        d="M15.154 15.152v10.103"
      />
      <path
        fill="currentColor"
        d="M17.162 21.493a1.53 1.53 0 0 1 0-2.577l7-4.49c1.02-.654 2.358.077 2.358 1.288v8.98c0 1.211-1.339 1.943-2.358 1.289z"
      />
    </svg>
  );
}
