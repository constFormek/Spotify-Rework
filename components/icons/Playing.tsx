type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgPause({ className = '', size = '2.5em' }: Props) {
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
        strokeWidth={2}
        d="M13.827 27.58v-5.5m6 5.5v-14.5m6 14.5v-9"
      />
    </svg>
  );
}
