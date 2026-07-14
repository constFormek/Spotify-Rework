type Props = {
  className?: string;
  size?: number | string;
};

export default function SvgOff({ className = "", size = "2.5em" }: Props) {
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
        d="M25.393 12.928a10.11 10.11 0 0 1 4.677 8.535c0 5.59-4.531 10.121-10.121 10.121S9.827 27.053 9.827 21.463c0-3.586 1.865-6.737 4.678-8.535"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.173 18.705V9.964"
      />
    </svg>
  );
}
