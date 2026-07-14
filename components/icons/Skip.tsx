type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgSkip({ className = "", size = "2.5em" }: Props) {
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
        fill="currentColor"
        d="M20.724 18.715a1.53 1.53 0 0 1 0 2.576l-7 4.49c-1.019.654-2.357-.077-2.357-1.288v-8.98c0-1.21 1.338-1.943 2.357-1.289z"
      />
      <path
        fill="currentColor"
        d="M30.724 18.715a1.53 1.53 0 0 1 0 2.576l-7 4.49c-1.019.654-2.357-.077-2.357-1.288v-8.98c0-1.21 1.338-1.943 2.357-1.289z"
      />
    </svg>
  );
}
