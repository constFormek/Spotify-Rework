type Props = {
  className?: string;
  size?: number | string;
  active?: boolean;
};

export default function SvgSyncedLyrics({
  className = '',
  size = '2.5em',
  active = false,
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
      {active ? (
        <>
          <path
            stroke="#1ED760"
            strokeLinecap="round"
            strokeWidth={2}
            d="M11.076 12.826h4.656M11.076 19.049h4.656"
          />
          <path
            stroke="#1ED760"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.965 10.826a9.11 9.11 0 1 1 0 18.221s-5.333 0-8-4.442"
          />
          <path
            stroke="#1ED760"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21.171 14.383v5.555l4.683 2.89"
          />
          <circle cx={20.076} cy={35.826} r={2} fill="#1ED760" />
        </>
      ) : (
        <>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={2}
            d="M11.08 12.826h4.656M11.08 19.049h4.656"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.97 10.826a9.11 9.11 0 1 1 0 18.221s-5.334 0-8.001-4.442"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21.175 14.383v5.555l4.684 2.89"
          />
        </>
      )}
    </svg>
  );
}
